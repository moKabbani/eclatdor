import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import StockistCard from '@/components/StockistCard'
import { ChatIcon } from '@/components/icons'
import { fmt, getDict } from '@/lib/dict'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'
import { waLink } from '@/lib/site'
import { places } from '@/lib/stockists'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '/stockists', getDict(lang).stockists.title)
}

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
