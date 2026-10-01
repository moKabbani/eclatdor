import type { Metadata } from 'next'
import Link from 'next/link'
import { BriefcaseIcon, ChatIcon, FlaskIcon, LeafIcon, ShieldIcon } from '@/components/icons'
import { getDict } from '@/lib/dict'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'
import { waLink } from '@/lib/site'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '/about', getDict(lang).nav.about, getDict(lang).about.intro)
}

export default async function AboutPage({ params }: LangParams) {
  const lang = await resolveLang(params)
  const d = getDict(lang)
  const a = d.about

  const values = [
    { icon: <FlaskIcon width={26} height={26} />, t: a.v1t, text: a.v1d },
    { icon: <LeafIcon width={26} height={26} />, t: a.v2t, text: a.v2d },
    { icon: <ShieldIcon width={26} height={26} />, t: a.v3t, text: a.v3d },
    { icon: <BriefcaseIcon width={26} height={26} />, t: a.v4t, text: a.v4d },
  ]

  return (
    <>
      <section className="wrap" style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4.5rem) clamp(2rem, 4vw, 3rem)' }}>
        <p className="accent font-medium">{a.label}</p>
        <h1 className="h-display mt-4" style={{ maxWidth: '18ch' }}>{a.title}</h1>
        <p className="lead mt-6" style={{ maxWidth: '44rem' }}>{a.intro}</p>
      </section>

      <section className="wrap">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="stat"><b dir="ltr">107+</b><span>{a.points}</span></div>
          <div className="stat"><b>8</b><span>{a.countries}</span></div>
          <div className="stat"><b>GMP</b><span>{a.certified}</span></div>
        </div>
      </section>

      <section className="section wrap">
        <h2 className="h-section">{a.values}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.t} className="panel flex gap-5">
              <span className="accent shrink-0">{v.icon}</span>
              <div>
                <h3 className="h-card">{v.t}</h3>
                <p className="muted mt-2">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 'clamp(3.5rem, 8vw, 6rem)' }}>
        <div className="panel-ink text-center">
          <h2 className="h-section">{a.ctaTitle}</h2>
          <p className="muted mx-auto mt-3 max-w-lg">{a.ctaText}</p>
          <Link href={`/${lang}/products`} className="btn btn-primary mt-8">
            {a.discover}
          </Link>
        </div>

        <div className="panel mt-6 flex flex-wrap items-center justify-between gap-5">
          <div>
            <h3 className="h-card">{a.contactTitle}</h3>
            <p className="muted mt-1">{a.contactText}</p>
          </div>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <ChatIcon width={20} height={20} />
            {d.common.chatWhatsapp}
          </a>
        </div>
      </section>
    </>
  )
}
