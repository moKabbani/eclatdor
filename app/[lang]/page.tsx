import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import InstagramFeed from '@/components/InstagramFeed'
import { ArrowIcon } from '@/components/icons'
import { getDict } from '@/lib/dict'
import { articles, getProduct } from '@/lib/products'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '')
}

export default async function Home({ params }: LangParams) {
  const lang = await resolveLang(params)
  const d = getDict(lang)
  const heroPosters = ['brightening', 'hyaluronic'].map((slug) => getProduct(slug)!)
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

          <div className="hero-posters">
            {heroPosters.map((p, i) => (
              <Link
                key={p.slug}
                href={`/${lang}/products/${p.slug}`}
                className={`hero-poster ${i === 0 ? 'hero-poster-main' : 'hero-poster-second'}`}
              >
                <Image
                  src={`/hero/${p.slug}.jpg`}
                  alt={p.name[lang]}
                  fill
                  sizes={i === 0 ? '(min-width: 800px) 22rem, 0px' : '(min-width: 800px) 13rem, 0px'}
                  preload={i === 0}
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            ))}
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

      <InstagramFeed followText={d.home.follow} cta={d.home.follow} prevLabel={d.home.igPrev} nextLabel={d.home.igNext} />

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
