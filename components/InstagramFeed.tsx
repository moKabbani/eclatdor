'use client'

import { useEffect, useState } from 'react'
import { site } from '@/lib/site'
import { InstagramIcon } from './icons'

type Post = {
  id: string
  permalink: string
  media_type: string
  media_url?: string
  thumbnail_url?: string
}

export default function InstagramFeed({ followText, cta }: { followText: string; cta: string }) {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    let cancelled = false
    fetch('/api/instagram')
      .then((r) => (r.ok ? r.json() : { posts: [] }))
      .then((data: { posts?: Post[] }) => {
        if (cancelled || !Array.isArray(data.posts)) return
        setPosts(data.posts.filter((p) => (p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url)))
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  // Nothing to show (not configured, or Instagram is unreachable): hide the whole section.
  if (posts.length === 0) return null

  const loop = [...posts, ...posts]

  return (
    <section className="section-tight" style={{ borderBlock: '1px solid var(--line)', background: 'var(--surface)' }}>
      <div className="wrap flex items-center justify-between gap-4" style={{ marginBottom: '1.5rem' }}>
        <div className="flex items-center gap-3">
          <span className="icon-btn" style={{ pointerEvents: 'none' }}>
            <InstagramIcon />
          </span>
          <div>
            <div className="font-semibold">@{site.instagram}</div>
            <div className="muted text-sm">{followText}</div>
          </div>
        </div>
        <a
          href={`https://instagram.com/${site.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-sm"
        >
          {cta}
        </a>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((p, i) => (
            <a
              key={`${p.id}-${i}`}
              href={p.permalink}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={i >= posts.length ? true : undefined}
              tabIndex={i >= posts.length ? -1 : undefined}
              style={{ width: 240, height: 300, borderRadius: 18, overflow: 'hidden', flexShrink: 0, display: 'block', background: 'var(--surface-2)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- Instagram CDN hosts change often */}
              <img
                src={(p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url) as string}
                alt=""
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
