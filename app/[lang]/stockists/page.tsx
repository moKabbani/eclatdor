import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import { ChatIcon } from '@/components/icons'
import { fmt, getDict } from '@/lib/dict'
import type { Locale } from '@/lib/i18n'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'
import { waLink } from '@/lib/site'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '/stockists', getDict(lang).stockists.title)
}

type Place = { code: string; count: number; city: Record<Locale, string> }

const places: Place[] = [
  { code: 'FR', count: 12, city: { en: 'Paris', ar: 'باريس', tr: 'Paris', es: 'París', ru: 'Париж' } },
  { code: 'TR', count: 28, city: { en: 'Istanbul', ar: 'إسطنبول', tr: 'İstanbul', es: 'Estambul', ru: 'Стамбул' } },
  { code: 'DE', count: 15, city: { en: 'Berlin', ar: 'برلين', tr: 'Berlin', es: 'Berlín', ru: 'Берлин' } },
  { code: 'GB', count: 9, city: { en: 'London', ar: 'لندن', tr: 'Londra', es: 'Londres', ru: 'Лондон' } },
  { code: 'AE', count: 11, city: { en: 'Dubai', ar: 'دبي', tr: 'Dubai', es: 'Dubái', ru: 'Дубай' } },
  { code: 'SA', count: 8, city: { en: 'Riyadh', ar: 'الرياض', tr: 'Riyad', es: 'Riad', ru: 'Эр-Рияд' } },
  { code: 'EG', count: 14, city: { en: 'Cairo', ar: 'القاهرة', tr: 'Kahire', es: 'El Cairo', ru: 'Каир' } },
  { code: 'SY', count: 10, city: { en: 'Damascus', ar: 'دمشق', tr: 'Şam', es: 'Damasco', ru: 'Дамаск' } },
]

export default async function StockistsPage({ params }: LangParams) {
  const lang = await resolveLang(params)
  const d = getDict(lang)
  const s = d.stockists
  const total = places.reduce((n, p) => n + p.count, 0)
  const countryName = new Intl.DisplayNames([lang], { type: 'region' })

  return (
    <>
      <PageHeader title={s.title} text={fmt(s.sub, { c: places.length, p: total })} />

      <section className="wrap">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {places.map((p) => (
            <article key={p.code} className="panel stockist-card flex flex-col">
              <Image
                src={`/stockists/${p.code.toLowerCase()}.jpg`}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="stockist-img"
              />
              <span className="muted text-sm" dir="ltr">{p.code}</span>
              <h2 className="h-card mt-2">{countryName.of(p.code)}</h2>
              <p className="muted">{p.city[lang]}</p>
              <p className="mt-auto flex items-baseline gap-2 pt-6">
                <b className="h-section" style={{ fontFamily: 'var(--font-display)' }} dir="ltr">{p.count}</b>
                <span className="muted text-sm">{s.pts}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem) clamp(3.5rem, 8vw, 6rem)' }}>
        <div className="panel-ink text-center">
          <h2 className="h-section">{s.ctaTitle}</h2>
          <p className="muted mx-auto mt-3 max-w-lg">{s.ctaText}</p>
          <a href={waLink(s.inquiry)} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
            <ChatIcon width={20} height={20} />
            {s.contact}
          </a>
        </div>
      </section>
    </>
  )
}
