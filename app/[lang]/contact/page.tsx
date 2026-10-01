import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { ChatIcon, MailIcon, PinIcon } from '@/components/icons'
import { getDict } from '@/lib/dict'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'
import { mapLink, site, waLink } from '@/lib/site'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '/contact', getDict(lang).contact.title, getDict(lang).contact.text)
}

export default async function ContactPage({ params }: LangParams) {
  const lang = await resolveLang(params)
  const d = getDict(lang)
  const c = d.contact

  return (
    <>
      <PageHeader title={c.title} text={c.text} />
      <section className="wrap" style={{ paddingBottom: 'clamp(3.5rem, 8vw, 6rem)' }}>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="panel flex flex-col items-start">
            <span className="accent"><ChatIcon width={28} height={28} /></span>
            <h2 className="h-card mt-5">{c.whatsapp}</h2>
            <p className="muted mt-2">{c.whatsappText}</p>
            <p className="mt-4 font-medium" dir="ltr">{site.phoneDisplay}</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-auto" style={{ marginTop: '1.5rem' }}>
              {d.common.chatWhatsapp}
            </a>
          </div>

          <div className="panel flex flex-col items-start">
            <span className="accent"><MailIcon width={28} height={28} /></span>
            <h2 className="h-card mt-5">{c.email}</h2>
            <p className="mt-4 font-medium" dir="ltr">{site.email}</p>
            <a href={`mailto:${site.email}`} className="btn btn-ghost mt-auto" style={{ marginTop: '1.5rem' }}>
              {d.common.sendEmail}
            </a>
          </div>

          <div className="panel flex flex-col items-start">
            <span className="accent"><PinIcon width={28} height={28} /></span>
            <h2 className="h-card mt-5">{c.address}</h2>
            <p className="muted mt-4" dir="ltr" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
              {site.addressLines[0]}
              <br />
              {site.addressLines[1]}
            </p>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-auto" style={{ marginTop: '1.5rem' }}>
              {d.footer.map}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
