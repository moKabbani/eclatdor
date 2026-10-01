export const locales = ['ar', 'tr', 'en', 'es', 'ru'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'tr'

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}

export const localeMeta: Record<Locale, { native: string; short: string; dir: 'ltr' | 'rtl' }> = {
  ar: { native: 'العربية', short: 'AR', dir: 'rtl' },
  tr: { native: 'Türkçe', short: 'TR', dir: 'ltr' },
  en: { native: 'English', short: 'EN', dir: 'ltr' },
  es: { native: 'Español', short: 'ES', dir: 'ltr' },
  ru: { native: 'Русский', short: 'RU', dir: 'ltr' },
}
