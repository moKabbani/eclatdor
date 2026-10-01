import type { Metadata } from 'next'
import { getDict } from './dict'
import { locales, type Locale } from './i18n'
import { site } from './site'

export function pageMetadata(lang: Locale, path: string, title?: string, description?: string): Metadata {
  const desc = description ?? getDict(lang).meta.description
  const url = `${site.url}/${lang}${path}`

  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])),
    },
    openGraph: {
      title: title ? `${title} | ${site.name}` : site.name,
      description: desc,
      url,
      siteName: site.name,
      locale: lang,
    },
  }
}
