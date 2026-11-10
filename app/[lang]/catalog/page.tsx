import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import type { Metadata } from 'next'
import { DownloadIcon, EyeIcon } from '@/components/icons'
import { getDict } from '@/lib/dict'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'

const PDF = '/catalog.pdf'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '/catalog', getDict(lang).nav.catalog, getDict(lang).catalog.text)
}

export default async function CatalogPage({ params }: LangParams) {
  const lang = await resolveLang(params)
  const d = getDict(lang)
  const c = d.catalog
  const sizeMb = Math.round(fs.statSync(path.join(process.cwd(), 'public', PDF)).size / 1_000_000)

  return (
    <section className="wrap section grid items-center gap-12 md:grid-cols-2 md:gap-20">
      <div className="mx-auto w-full max-w-[22rem]">
        <a href={PDF} target="_blank" rel="noopener noreferrer" className="catalog-cover" aria-label={c.view}>
          <Image src="/catalog-cover.jpg" alt={c.cover} fill sizes="(min-width: 768px) 22rem, 90vw" preload />
        </a>
      </div>

      <div>
        <h1 className="h-display" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>{c.title}</h1>
        <p className="lead mt-5">{c.text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={PDF} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <EyeIcon width={18} height={18} />
            {c.view}
          </a>
          <a href={PDF} download="Eclat_dOr_catalog.pdf" className="btn btn-ghost">
            <DownloadIcon width={18} height={18} />
            {c.download}
          </a>
        </div>
        <p className="muted mt-4 text-sm">
          <span dir="ltr">PDF · {sizeMb} MB</span>
        </p>
      </div>
    </section>
  )
}
