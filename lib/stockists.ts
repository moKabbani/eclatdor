import type { Locale } from './i18n'

export type Place = { code: string; phone?: string; city: Record<Locale, string> }

/** Countries on the Stockists page. The About page counts this list too. */
export const places: Place[] = [
  { code: 'FR', phone: '+33 7 59 71 80 76', city: { en: 'Paris', ar: 'باريس', tr: 'Paris', es: 'París', ru: 'Париж' } },
  { code: 'TR', phone: '+90 507 000 0440', city: { en: 'Istanbul', ar: 'إسطنبول', tr: 'İstanbul', es: 'Estambul', ru: 'Стамбул' } },
  { code: 'MA', city: { en: 'Rabat', ar: 'الرباط', tr: 'Rabat', es: 'Rabat', ru: 'Рабат' } },
  { code: 'AE', city: { en: 'Dubai', ar: 'دبي', tr: 'Dubai', es: 'Dubái', ru: 'Дубай' } },
  { code: 'SA', city: { en: 'Riyadh', ar: 'الرياض', tr: 'Riyad', es: 'Riad', ru: 'Эр-Рияд' } },
  { code: 'SY', city: { en: 'Damascus', ar: 'دمشق', tr: 'Şam', es: 'Damasco', ru: 'Дамаск' } },
]
