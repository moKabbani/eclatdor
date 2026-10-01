import { notFound } from 'next/navigation'
import { isLocale, type Locale } from './i18n'

export type LangParams = { params: Promise<{ lang: string }> }

/** Reads the language from the URL. Unknown languages show the 404 page. */
export async function resolveLang(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  return lang
}
