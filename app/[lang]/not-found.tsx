'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getDict } from '@/lib/dict'
import { defaultLocale, isLocale } from '@/lib/i18n'

export default function NotFound() {
  const { lang } = useParams<{ lang: string }>()
  const locale = isLocale(lang) ? lang : defaultLocale
  const d = getDict(locale)
  return (
    <section className="section wrap" style={{ textAlign: 'center' }}>
      <p className="h-display accent" aria-hidden="true">404</p>
      <h1 className="h-section mt-4">{d.notFound.title}</h1>
      <p className="lead mx-auto mt-4">{d.notFound.text}</p>
      <Link href={`/${locale}`} className="btn btn-primary mt-8">
        {d.common.backHome}
      </Link>
    </section>
  )
}
