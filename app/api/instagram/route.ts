import { NextResponse } from 'next/server'

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  console.log("TOKEN EXISTS:", !!token) // لنشوف بالترمنال اذا عم يقرا التوكن
  
  if (!token) {
    return NextResponse.json({ error: 'No token in .env.local' }, { status: 500 })
  }

  const fields = 'id,caption,media_url,media_type,permalink,thumbnail_url,timestamp'
  const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}&limit=12`

  try {
    const res = await fetch(url)
    const data = await res.json()
    
    console.log("INSTA RESPONSE:", data) // رح يطلع بالترمنال
    
    if (data.error) {
      return NextResponse.json({ error: data.error.message, full: data }, { status: 400 })
    }
    
    return NextResponse.json(data.data)
  } catch (e:any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}