import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowIcon, ChatIcon } from '@/components/icons'
import { getDict } from '@/lib/dict'
import { locales } from '@/lib/i18n'
import { articles } from '@/lib/products'
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
  return pageMetadata(lang, `/blog/${slug}`, getDict(lang).blog[article.key])
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const lang = await resolveLang(params)
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()
  const d = getDict(lang)
  const title = d.blog[article.key]

  return (
    <article className="wrap" style={{ maxWidth: 860, paddingBlock: 'clamp(2rem, 5vw, 4rem) clamp(3.5rem, 8vw, 6rem)' }}>
      <Link href={`/${lang}/blog`} className="muted inline-flex items-center gap-2 text-sm hover:underline">
        <ArrowIcon style={{ transform: lang === 'ar' ? 'none' : 'scaleX(-1)' }} />
        {d.blog.title}
      </Link>
      <p className="accent mt-8 font-medium">{d.blog.minRead}</p>
      <h1 className="h-display mt-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>{title}</h1>

      <div className="tile mt-8" style={{ aspectRatio: '16 / 8', borderRadius: 24 }}>
        <Image src={article.cover} alt="" fill sizes="860px" preload />
      </div>

      <div className="panel mt-8">
        <h2 className="h-card">{d.blog.soonTitle}</h2>
        <p className="muted mt-3">{d.blog.soonText}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/${lang}/products`} className="btn btn-primary">{d.common.explore}</Link>
          <a href={waLink(title)} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <ChatIcon width={20} height={20} />
            {d.common.chatWhatsapp}
          </a>
        </div>
      </div>
    </article>
  )
}
