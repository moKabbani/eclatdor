import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import StockistCard from '@/components/StockistCard'
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

type Place = { code: string; phone?: string; city: Record<Locale, string> }

const places: Place[] = [
  { code: 'FR', phone: '+33 7 59 71 80 76', city: { en: 'Paris', ar: 'باريس', tr: 'Paris', es: 'París', ru: 'Париж' } },
  { code: 'TR', phone: '+90 507 000 0440', city: { en: 'Istanbul', ar: 'إسطنبول', tr: 'İstanbul', es: 'Estambul', ru: 'Стамбул' } },
  { code: 'MA', city: { en: 'Rabat', ar: 'الرباط', tr: 'Rabat', es: 'Rabat', ru: 'Рабат' } },
  { code: 'AE', city: { en: 'Dubai', ar: 'دبي', tr: 'Dubai', es: 'Dubái', ru: 'Дубай' } },
  { code: 'SA', city: { en: 'Riyadh', ar: 'الرياض', tr: 'Riyad', es: 'Riad', ru: 'Эр-Рияд' } },
  { code: 'SY', city: { en: 'Damascus', ar: 'دمشق', tr: 'Şam', es: 'Damasco', ru: 'Дамаск' } },
]

export default async function StockistsPage({ params }: LangParams) {
  const lang = await resolveLang(params)
  const d = getDict(lang)
  const s = d.stockists
  const countryName = new Intl.DisplayNames([lang], { type: 'region' })

  return (
    <>
      <PageHeader title={s.title} text={fmt(s.sub, { c: places.length })} />

      <section className="wrap">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((p) => (
            <StockistCard
              key={p.code}
              code={p.code}
              country={countryName.of(p.code) ?? p.code}
              city={p.city[lang]}
              phone={p.phone}
              soon={s.soon}
              close={s.close}
            />
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
