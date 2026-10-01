import type { Metadata } from 'next'
import PrivateLabelForm from '@/components/PrivateLabelForm'
import { CheckIcon } from '@/components/icons'
import { getDict } from '@/lib/dict'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'
import { products } from '@/lib/products'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '/private-label', getDict(lang).privateLabel.title, getDict(lang).privateLabel.text)
}

export default async function PrivateLabelPage({ params }: LangParams) {
  const lang = await resolveLang(params)
  const p = getDict(lang).privateLabel
  const offers = [p.o1, p.o2, p.o3, p.o4]

  return (
    <>
      <section className="wrap" style={{ paddingBlock: 'clamp(2rem, 4vw, 3rem) 0' }}>
        <div className="panel-ink">
          <h1 className="h-display" style={{ fontSize: 'clamp(2.2rem, 4.8vw, 4rem)', maxWidth: '16ch' }}>{p.title}</h1>
          <p className="muted mt-5 max-w-xl text-lg">{p.text}</p>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            <div className="stat" style={{ background: 'color-mix(in oklab, var(--btn-fg) 10%, transparent)' }}>
              <b dir="ltr">500+</b><span style={{ color: 'inherit', opacity: 0.7 }}>{p.clients}</span>
            </div>
            <div className="stat" style={{ background: 'color-mix(in oklab, var(--btn-fg) 10%, transparent)' }}>
              <b>{products.length}</b><span style={{ color: 'inherit', opacity: 0.7 }}>{p.formulas}</span>
            </div>
            <div className="stat" style={{ background: 'color-mix(in oklab, var(--btn-fg) 10%, transparent)' }}>
              <b>GMP</b><span style={{ color: 'inherit', opacity: 0.7 }}>{p.gmp}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-10 md:grid-cols-2 md:gap-16" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div>
          <h2 className="h-section">{p.offerTitle}</h2>
          <ul className="check-list mt-6">
            {offers.map((o) => (
              <li key={o}>
                <CheckIcon />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <h2 className="h-card mb-5">{p.formTitle}</h2>
          <PrivateLabelForm d={p} />
        </div>
      </section>
    </>
  )
}
