import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Webhook endpoint is reachable!',
    timestamp: new Date().toISOString(),
    env: {
      hasWebhookSecret: !!process.env.SANITY_WEBHOOK_SECRET,
      nodeEnv: process.env.NODE_ENV
    }
  })
}

export async function POST(request: NextRequest) {
  console.log('🧪 TEST WEBHOOK RECEIVED')
  console.log('Headers:', Object.fromEntries(request.headers.entries()))
  
  const body = await request.text()
  console.log('Body:', body)
  
  return NextResponse.json({
    message: 'Test webhook received successfully!',
    timestamp: new Date().toISOString(),
    bodyLength: body.length,
    headers: Object.fromEntries(request.headers.entries())
  })
}
