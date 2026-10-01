import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { AwardIcon, ChatIcon, FlaskIcon, LeafIcon, MailIcon, ShieldIcon } from '@/components/icons'
import { getDict } from '@/lib/dict'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'
import { site, waLink } from '@/lib/site'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '/certificates', getDict(lang).certs.title, getDict(lang).certs.text)
}

export default async function CertificatesPage({ params }: LangParams) {
  const lang = await resolveLang(params)
  const d = getDict(lang)
  const c = d.certs
  const items = [
    { icon: <AwardIcon width={28} height={28} />, t: c.gmpT, text: c.gmpD },
    { icon: <ShieldIcon width={28} height={28} />, t: c.isoT, text: c.isoD },
    { icon: <FlaskIcon width={28} height={28} />, t: c.dermT, text: c.dermD },
    { icon: <LeafIcon width={28} height={28} />, t: c.halalT, text: c.halalD },
    { icon: <ShieldIcon width={28} height={28} />, t: c.crueltyT, text: c.crueltyD },
    { icon: <AwardIcon width={28} height={28} />, t: c.moh, text: c.mohD },
  ]

  return (
    <>
      <PageHeader title={c.title} text={c.text} />
      <section className="wrap">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className="panel">
              <span className="accent">{it.icon}</span>
              <h2 className="h-card mt-5">{it.t}</h2>
              <p className="muted mt-2">{it.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem) clamp(3.5rem, 8vw, 6rem)' }}>
        <div className="panel-ink text-center">
          <h2 className="h-section">{c.ctaTitle}</h2>
          <p className="muted mx-auto mt-3 max-w-lg">{c.ctaText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ChatIcon width={20} height={20} />
              {d.common.chatWhatsapp}
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              <MailIcon width={20} height={20} />
              {d.common.sendEmail}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
