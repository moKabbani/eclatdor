'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
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

  // Desktop, more posts than fit: render them three times so the row scrolls endlessly both ways.
  const [loop, setLoop] = useState(false)
  const settle = useRef<number | undefined>(undefined)

  // Desktop: open with the middle post (of the middle copy when looping) centered.
  useLayoutEffect(() => {
    const el = strip.current
    if (!el || posts.length === 0 || !window.matchMedia('(min-width: 768px)').matches) return
    if (!loop && el.scrollWidth > el.clientWidth) return setLoop(true)
    const mid = el.children[(loop ? posts.length : 0) + Math.floor((posts.length - 1) / 2)].getBoundingClientRect()
    const box = el.getBoundingClientRect()
    el.scrollLeft += mid.left + mid.width / 2 - (box.left + box.width / 2)
  }, [posts, loop])

  // When scrolling stops, jump back into the middle copy (identical content, so the jump is invisible).
  const onScroll = () => {
    if (!loop) return
    clearTimeout(settle.current)
    settle.current = window.setTimeout(() => {
      const el = strip.current
      if (!el) return
      const set = (el.children[posts.length] as HTMLElement).offsetLeft - (el.children[0] as HTMLElement).offsetLeft
      if (el.scrollLeft < set * 0.5) el.scrollLeft += set
      else if (el.scrollLeft > set * 1.5) el.scrollLeft -= set
    }, 150)
  }

  const shown = loop ? [...posts, ...posts, ...posts] : posts

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
      <div ref={strip} className="ig-strip" onScroll={onScroll}>
        {shown.map((p, i) => (
          <a
            key={`${i}-${p.id}`}
            href={p.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-post"
            {...(loop && (i < posts.length || i >= posts.length * 2) && { 'aria-hidden': true, tabIndex: -1 })}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- Instagram CDN hosts change often */}
            <img src={(p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url) as string} alt="" loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  )
}
