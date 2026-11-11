'use client'

import { useEffect, useRef, useState } from 'react'
import { site } from '@/lib/site'
import { ArrowIcon, InstagramIcon } from './icons'

type Post = {
  id: string
  permalink: string
  media_type: string
  media_url?: string
  thumbnail_url?: string
}

export default function InstagramFeed({
  followText,
  cta,
  prevLabel,
  nextLabel,
}: {
  followText: string
  cta: string
  prevLabel: string
  nextLabel: string
}) {
  const [posts, setPosts] = useState<Post[]>([])
  const strip = useRef<HTMLDivElement>(null)

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

  // The strip always runs left to right, so "next" scrolls right in every language.
  const scroll = (dir: 1 | -1) => strip.current?.scrollBy({ left: dir * strip.current.clientWidth * 0.8, behavior: 'smooth' })

  return (
    <section className="section-tight" style={{ borderBlock: '1px solid var(--line)', background: 'var(--surface)' }}>
      <div className="wrap flex flex-wrap items-center justify-between gap-4" style={{ marginBottom: '1.5rem' }}>
        <div className="flex items-center gap-3">
          <span className="icon-btn" style={{ pointerEvents: 'none' }}>
            <InstagramIcon />
          </span>
          <div>
            <div className="font-semibold">
              <bdi>@{site.instagram}</bdi>
            </div>
            <div className="muted text-sm">{followText}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* same left-to-right order as the strip in every language */}
          <div className="flex gap-2" dir="ltr">
            <button type="button" className="icon-btn" aria-label={prevLabel} onClick={() => scroll(-1)}>
              <ArrowIcon style={{ transform: 'scaleX(-1)' }} />
            </button>
            <button type="button" className="icon-btn" aria-label={nextLabel} onClick={() => scroll(1)}>
              <ArrowIcon />
            </button>
          </div>
          <a
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm ms-2"
          >
            {cta}
          </a>
        </div>
      </div>
      <div ref={strip} className="ig-strip">
        {posts.map((p) => (
          <a key={p.id} href={p.permalink} target="_blank" rel="noopener noreferrer" className="ig-post">
            {/* eslint-disable-next-line @next/next/no-img-element -- Instagram CDN hosts change often */}
            <img src={(p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url) as string} alt="" loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  )
}
