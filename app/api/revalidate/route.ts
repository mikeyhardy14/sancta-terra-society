import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    // Get the webhook secret from environment variables
    const secret = process.env.SANITY_WEBHOOK_SECRET
    
    if (!secret) {
      console.error('SANITY_WEBHOOK_SECRET is not configured')
      return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
    }

    // Get the signature from the header
    const signature = request.headers.get('sanity-webhook-signature')
    
    if (!signature) {
      console.error('No signature found in webhook request')
      return NextResponse.json({ error: 'No signature' }, { status: 401 })
    }

    // Get the raw body
    const body = await request.text()
    
    // Verify the signature
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('hex')
    
    if (signature !== expectedSignature) {
      console.error('Invalid webhook signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    // Parse the webhook payload
    const payload = JSON.parse(body)
    
    console.log('Webhook received:', {
      type: payload._type,
      id: payload._id,
      rev: payload._rev
    })

    // Revalidate based on document type
    switch (payload._type) {
      case 'homePage':
        revalidatePath('/')
        console.log('Revalidated homepage')
        break
      case 'aboutPage':
        revalidatePath('/about')
        console.log('Revalidated about page')
        break
      case 'leadership':
        revalidatePath('/leadership')
        console.log('Revalidated leadership page')
        break
      case 'project':
        revalidatePath('/projects')
        revalidatePath(`/projects/${payload.slug?.current}`)
        console.log('Revalidated projects')
        break
      case 'footer':
        // Footer appears on all pages, so revalidate everything
        revalidatePath('/', 'layout')
        console.log('Revalidated all pages (footer change)')
        break
      case 'siteSettings':
        // Site settings might affect all pages
        revalidatePath('/', 'layout')
        console.log('Revalidated all pages (site settings change)')
        break
      default:
        // For any other document type, revalidate the homepage
        revalidatePath('/')
        console.log('Revalidated homepage (unknown document type)')
    }

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      type: payload._type 
    })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
