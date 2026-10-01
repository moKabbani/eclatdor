import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import InstagramFeed from '@/components/InstagramFeed'
import SoonPhoto from '@/components/SoonPhoto'
import { ArrowIcon } from '@/components/icons'
import { getDict } from '@/lib/dict'
import { articles } from '@/lib/products'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'
import { waLink } from '@/lib/site'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '')
}

export default async function Home({ params }: LangParams) {
  const lang = await resolveLang(params)
  const d = getDict(lang)
  const soon = [
    { name: d.home.cs1, file: 'collagen.png', remote: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80' },
    { name: d.home.cs2, file: 'brightening.png', remote: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80' },
    { name: d.home.cs3, file: 'scrub.png', remote: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80' },
  ].map((c) => ({
    ...c,
    hasLocal: fs.existsSync(path.join(process.cwd(), 'public', 'comingsoon', c.file)),
  }))
  return (
    <>
      {/* ---- hero ---- */}
      <section className="hero">
        <Image
          src="/products/background/3.jpg"
          alt=""
          fill
          sizes="100vw"
          preload
          className="hero-img"
        />
        <div className="wrap hero-grid" style={{ width: '100%' }}>
          <div>
            <p className="accent font-medium">{d.home.heroLabel}</p>
            <h1 className="h-display mt-4" style={{ maxWidth: '14ch' }}>
              {d.home.heroTitle}
            </h1>
            <p className="lead mt-6">{d.home.heroText}</p>
            <Link href={`/${lang}/products`} className="btn btn-primary mt-9">
              {d.common.explore}
              <ArrowIcon className="flip" />
            </Link>
          </div>

          <div className="hero-posters" aria-hidden="true">
            <div className="hero-poster hero-poster-main">
              <Image src="/products/hyaluronic/1.png" alt="" fill sizes="(min-width: 800px) 22vw, 0px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="hero-poster hero-poster-second">
              <Image src="/products/vitamin-c/1.png" alt="" fill sizes="(min-width: 800px) 14vw, 0px" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ---- intro ---- */}
      <section className="section wrap">
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="accent mb-4 font-medium">{d.home.introLabel}</p>
            <h2 className="h-section">{d.home.introTitle}</h2>
          </div>
          <div>
            <p className="lead">{d.home.introText}</p>
            <Link href={`/${lang}/products`} className="btn btn-ghost mt-7">
              {d.home.viewAll}
              <ArrowIcon className="flip" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---- coming soon ---- */}
      <section className="section" style={{ background: 'var(--surface)', borderBlock: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="max-w-xl">
            <p className="accent mb-4 font-medium">{d.home.soonLabel}</p>
            <h2 className="h-section">{d.home.soonTitle}</h2>
            <p className="muted mt-3">{d.home.soonText}</p>
          </div>
          <div className="product-grid mt-10">
            {soon.map((c) => (
              <article key={c.file}>
                <div className="tile">
                  <span className="badge">{d.home.soonBadge}</span>
                  <SoonPhoto alt={c.name} hasLocal={c.hasLocal} local={`/comingsoon/${c.file}`} remote={c.remote} />
                </div>
                <h3 className="h-card mt-4">{c.name}</h3>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="muted text-sm">{d.home.launching}</span>
                  <a
                    href={waLink(c.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    {d.home.notify}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InstagramFeed followText={d.home.follow} cta={d.home.follow} />

      {/* ---- care guide ---- */}
      <section className="section wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="h-section">{d.home.guide}</h2>
          <Link href={`/${lang}/blog`} className="btn btn-ghost btn-sm">
            {d.home.guideAll}
          </Link>
        </div>
        <div className="product-grid mt-10" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(17rem, 100%), 1fr))' }}>
          {articles.map((a) => (
            <Link key={a.slug} href={`/${lang}/blog/${a.slug}`} className="card-link">
              <div className="tile" style={{ aspectRatio: '3 / 2' }}>
                <Image src={a.cover} alt="" fill sizes="(min-width: 1200px) 380px, (min-width: 640px) 33vw, 90vw" />
              </div>
              <h3 className="card-name h-card mt-4">{d.blog[a.key]}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
