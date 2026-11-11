import type { Metadata } from 'next'
import { getDict } from './dict'
import { locales, type Locale } from './i18n'
import { site } from './site'

const ogLocale: Record<Locale, string> = { ar: 'ar_AR', tr: 'tr_TR', en: 'en_US', es: 'es_ES', ru: 'ru_RU' }

// Link previews (WhatsApp, iMessage, ...): brand card by default, product pages pass their own photo.
const shareImage = { url: '/og.jpg', width: 1200, height: 630, alt: site.name }

export function pageMetadata(
  lang: Locale,
  path: string,
  title?: string,
  description?: string,
  image?: string,
): Metadata {
  const d = getDict(lang)
  const desc = description ?? d.meta.description
  const url = `${site.url}/${lang}${path}`

  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])),
    },
    openGraph: {
      title: title ? `${title} | ${site.name}` : `${site.name} — ${d.home.heroLabel}`,
      description: desc,
      url,
      siteName: site.name,
      locale: ogLocale[lang],
      type: 'website',
      images: [image ? { url: image, alt: title ?? site.name } : shareImage],
    },
    twitter: { card: 'summary_large_image' },
  }
}
