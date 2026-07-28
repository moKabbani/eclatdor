import { NextResponse } from 'next/server'

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  
  if (!token) {
    return NextResponse.json({ error: 'No token' }, { status: 500 })
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink,timestamp&access_token=${token}&limit=12`,
      { next: { revalidate: 3600 } }
    )
    
    const data = await res.json()
    
    if (!res.ok) {
      console.log('IG Error:', data)
      return NextResponse.json({ error: data, posts: [] }, { status: 500 })
    }

    return NextResponse.json({ posts: data.data })
  } catch (e) {
    return NextResponse.json({ error: 'fetch failed', posts: [] }, { status: 500 })
  }
}