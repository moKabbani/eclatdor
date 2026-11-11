import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import ProductTile from '@/components/ProductTile'
import { ArrowIcon, ChatIcon } from '@/components/icons'
import { getArticleCopy, type ArticleCopy } from '@/lib/articles'
import { fmt, getDict } from '@/lib/dict'
import { locales, type Locale } from '@/lib/i18n'
import { articles, getProduct } from '@/lib/products'
import { resolveLang } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'
import { waLink } from '@/lib/site'

type Props = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return locales.flatMap((lang) => articles.map((a) => ({ lang, slug: a.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const lang = await resolveLang(params)
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return pageMetadata(lang, `/blog/${slug}`, getDict(lang).blog[article.key], getArticleCopy(article.slug, lang).intro)
}

/** Turns `[[product-slug]]` into a product link and `**text**` into bold. */
function rich(text: string, lang: Locale): ReactNode[] {
  return text.split(/(\[\[[a-z-]+\]\]|\*\*[^*]+\*\*)/).map((part, i) => {
    const slug = part.match(/^\[\[([a-z-]+)\]\]$/)?.[1]
    if (slug) {
      const product = getProduct(slug)
      if (!product) throw new Error(`Unknown product "${slug}" in article text`)
      return (
        <Link key={i} href={`/${lang}/products/${slug}`}>
          {product.name[lang]}
        </Link>
      )
    }
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    return part
  })
}

function readMinutes(copy: ArticleCopy) {
  const all = [copy.intro, copy.summary, ...copy.sections.flatMap((s) => [s.heading, ...(s.text ?? []), ...(s.list ?? []), ...(s.after ?? [])])]
  const words = all.join(' ').split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const lang = await resolveLang(params)
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()
  const d = getDict(lang)
  const title = d.blog[article.key]
  const copy = getArticleCopy(article.slug, lang)
  const featured = article.products.map((s) => getProduct(s)!)

  return (
    <article className="wrap" style={{ maxWidth: 860, paddingBlock: 'clamp(2rem, 5vw, 4rem) clamp(3.5rem, 8vw, 6rem)' }}>
      <Link href={`/${lang}/blog`} className="muted -my-3 inline-flex items-center gap-2 py-3 text-sm hover:underline">
        <ArrowIcon style={{ transform: lang === 'ar' ? 'none' : 'scaleX(-1)' }} />
        {d.blog.title}
      </Link>
      <p className="accent mt-8 font-medium">
        {d.blog.minRead} · {fmt(d.blog.readTime, { n: readMinutes(copy) })}
      </p>
      <h1 className="h-display mt-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>{title}</h1>

      <div className="tile mt-8" style={{ aspectRatio: '16 / 8', borderRadius: 24 }}>
        <Image src={article.cover} alt="" fill sizes="860px" preload />
      </div>

      <div className="article-body mt-10">
        <p className="lead">{rich(copy.intro, lang)}</p>
        {copy.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.text?.map((t, i) => <p key={i}>{rich(t, lang)}</p>)}
            {s.list && (
              <ul>
                {s.list.map((t, i) => (
                  <li key={i}>{rich(t, lang)}</li>
                ))}
              </ul>
            )}
            {s.after?.map((t, i) => <p key={i}>{rich(t, lang)}</p>)}
          </section>
        ))}
      </div>

      <aside className="article-summary mt-10">
        <h2 className="h-card">{d.blog.summary}</h2>
        <p className="mt-2">{rich(copy.summary, lang)}</p>
      </aside>

      <section className="mt-14">
        <h2 className="h-section" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>{d.blog.inGuide}</h2>
        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {featured.map((p) => (
            <ProductTile key={p.slug} product={p} lang={lang} d={d} />
          ))}
        </div>
      </section>

      <p className="muted mt-12 text-sm">{d.blog.note}</p>

      <div className="panel mt-8">
        <h2 className="h-card">{d.blog.askTitle}</h2>
        <p className="muted mt-3">{d.blog.askText}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={waLink(title)} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <ChatIcon width={20} height={20} />
            {d.common.chatWhatsapp}
          </a>
          <Link href={`/${lang}/products`} className="btn btn-ghost">{d.common.explore}</Link>
        </div>
      </div>
    </article>
  )
}
