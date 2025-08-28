import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  console.log('🔥 WEBHOOK RECEIVED at:', new Date().toISOString())
  console.log('🔍 Headers:', Object.fromEntries(request.headers.entries()))
  
  try {
    // Get the webhook secret from environment variables
    const secret = process.env.SANITY_WEBHOOK_SECRET
    
    console.log('🔑 Webhook secret configured:', !!secret)
    
    if (!secret) {
      console.error('❌ SANITY_WEBHOOK_SECRET is not configured')
      return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
    }

    // Get the signature from the header
    const signatureHeader = request.headers.get('sanity-webhook-signature')
    
    console.log('📝 Signature header received:', signatureHeader)
    
    if (!signatureHeader) {
      console.error('❌ No signature found in webhook request')
      return NextResponse.json({ error: 'No signature' }, { status: 401 })
    }

    // Parse Sanity's signature format: "t=timestamp,v1=signature"
    const signatureParts = signatureHeader.split(',')
    const timestampPart = signatureParts.find(part => part.startsWith('t='))
    const signaturePart = signatureParts.find(part => part.startsWith('v1='))
    
    if (!timestampPart || !signaturePart) {
      console.error('❌ Invalid signature format')
      return NextResponse.json({ error: 'Invalid signature format' }, { status: 401 })
    }
    
    const timestamp = timestampPart.split('=')[1]
    const signature = signaturePart.split('=')[1]
    
    console.log('🕐 Timestamp:', timestamp)
    console.log('📝 Extracted signature:', signature)

    // Get the raw body
    const body = await request.text()
    console.log('📄 Body length:', body.length)
    console.log('📄 Body preview:', body.substring(0, 200) + '...')
    
    // Create the signing payload: timestamp + body (Sanity's format)
    const signingPayload = timestamp + body
    
    // Verify the signature
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(signingPayload)
      .digest('hex')
    
    console.log('🔐 Expected signature:', expectedSignature)
    console.log('🔐 Received signature:', signature)
    
    if (signature !== expectedSignature) {
      console.error('❌ Invalid webhook signature')
      console.error('Expected:', expectedSignature)
      console.error('Received:', signature)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    // Parse the webhook payload
    const payload = JSON.parse(body)
    
    console.log('✅ Webhook payload:', {
      type: payload._type,
      id: payload._id,
      rev: payload._rev
    })

    // Revalidate based on document type
    switch (payload._type) {
      case 'homePage':
        revalidatePath('/')
        console.log('🏠 Revalidated homepage')
        break
      case 'aboutPage':
        revalidatePath('/about')
        console.log('📖 Revalidated about page')
        break
      case 'leadership':
        revalidatePath('/leadership')
        console.log('👥 Revalidated leadership page')
        break
      case 'project':
        revalidatePath('/projects')
        revalidatePath(`/projects/${payload.slug?.current}`)
        console.log('🏗️ Revalidated projects')
        break
      case 'footer':
        // Footer appears on all pages, so revalidate everything
        revalidatePath('/', 'layout')
        console.log('🦶 Revalidated all pages (footer change)')
        break
      case 'siteSettings':
        // Site settings might affect all pages
        revalidatePath('/', 'layout')
        console.log('⚙️ Revalidated all pages (site settings change)')
        break
      default:
        // For any other document type, revalidate the homepage
        revalidatePath('/')
        console.log('🔄 Revalidated homepage (unknown document type:', payload._type, ')')
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
