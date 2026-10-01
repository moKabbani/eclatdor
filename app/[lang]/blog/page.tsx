import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { getDict } from '@/lib/dict'
import { articles } from '@/lib/products'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '/blog', getDict(lang).blog.title, getDict(lang).blog.sub)
}

export default async function BlogPage({ params }: LangParams) {
  const lang = await resolveLang(params)
  const d = getDict(lang)
  return (
    <>
      <PageHeader title={d.blog.title} text={d.blog.sub} />
      <section className="wrap" style={{ paddingBottom: 'clamp(3.5rem, 8vw, 6rem)' }}>
        <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(17rem, 100%), 1fr))' }}>
          {articles.map((a) => (
            <Link key={a.slug} href={`/${lang}/blog/${a.slug}`} className="card-link">
              <div className="tile" style={{ aspectRatio: '3 / 2' }}>
                <Image src={a.cover} alt="" fill sizes="(min-width: 1200px) 380px, (min-width: 640px) 33vw, 90vw" />
              </div>
              <h2 className="card-name h-card mt-4">{d.blog[a.key]}</h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
