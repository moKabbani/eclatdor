import fs from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import Logo from '@/components/Logo'
import { ChatIcon, DownloadIcon } from '@/components/icons'
import { getDict } from '@/lib/dict'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'
import { waLink } from '@/lib/site'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '/catalog', getDict(lang).nav.catalog, getDict(lang).catalog.text)
}

export default async function CatalogPage({ params }: LangParams) {
  const lang = await resolveLang(params)
  const d = getDict(lang)
  const c = d.catalog
  // The download button appears automatically once a file named catalog.pdf is placed in /public.
  const hasPdf = fs.existsSync(path.join(process.cwd(), 'public', 'catalog.pdf'))

  return (
    <section className="wrap section grid items-center gap-12 md:grid-cols-2 md:gap-20">
      <div className="mx-auto w-full max-w-[22rem]">
        <div
          className="tile flex flex-col items-center justify-center gap-6"
          style={{ aspectRatio: '3 / 4', borderRadius: 14, boxShadow: 'var(--shadow)', background: 'var(--surface)', border: '1px solid var(--line)' }}
        >
          <Logo height={64} />
          <hr className="rule" style={{ width: '3rem', background: 'var(--taupe)', height: 2 }} />
          <p className="h-card muted">{c.cover}</p>
        </div>
      </div>

      <div>
        <h1 className="h-display" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>{c.title}</h1>
        <p className="lead mt-5">{c.text}</p>
        {hasPdf ? (
          <a href="/catalog.pdf" download className="btn btn-primary mt-8">
            <DownloadIcon width={18} height={18} />
            {c.download}
          </a>
        ) : (
          <>
            <p className="muted mt-5">{c.pending}</p>
            <a href={waLink(c.request)} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-8">
              <ChatIcon width={20} height={20} />
              {c.request}
            </a>
          </>
        )}
      </div>
    </section>
  )
}
