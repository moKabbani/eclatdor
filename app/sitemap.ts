import type { MetadataRoute } from 'next'
import { articles, products } from '@/lib/products'
import { locales } from '@/lib/i18n'
import { site } from '@/lib/site'

const pages = ['', '/products', '/about', '/catalog', '/private-label', '/stockists', '/contact', '/certificates', '/blog']

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...pages,
    ...products.map((p) => `/products/${p.slug}`),
    ...articles.map((a) => `/blog/${a.slug}`),
  ]
  return locales.flatMap((lang) =>
    paths.map((path) => ({
      url: `${site.url}/${lang}${path}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])),
      },
    })),
  )
}
