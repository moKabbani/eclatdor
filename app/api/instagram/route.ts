import { NextResponse } from 'next/server'

// Instagram access tokens last 60 days. Refresh yours before it expires:
// GET https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=<token>
export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN

  // Not configured: answer with an empty list so the feed section quietly hides itself.
  if (!token) return NextResponse.json({ posts: [], configured: false })

  const fields = 'id,caption,media_url,thumbnail_url,media_type,permalink,timestamp'
  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=12&access_token=${token}`,
      { next: { revalidate: 3600 } },
    )
    const data = await res.json()
    if (!res.ok) {
      console.error('Instagram API error:', data?.error?.message ?? res.status)
      return NextResponse.json({ posts: [] }, { status: 502 })
    }
    return NextResponse.json({ posts: data.data ?? [] })
  } catch (error) {
    console.error('Instagram fetch failed:', error)
    return NextResponse.json({ posts: [] }, { status: 502 })
  }
}
