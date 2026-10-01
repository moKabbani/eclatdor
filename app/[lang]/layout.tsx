import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import '@fontsource-variable/cormorant-garamond/index.css'
import '@fontsource-variable/ibm-plex-sans/index.css'
import '@fontsource/ibm-plex-sans-arabic/400.css'
import '@fontsource/ibm-plex-sans-arabic/500.css'
import '@fontsource/ibm-plex-sans-arabic/600.css'
import '../globals.css'
import Header, { type NavItem } from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getDict } from '@/lib/dict'
import { isLocale, locales, localeMeta } from '@/lib/i18n'
import { site } from '@/lib/site'
import ThemeSync from '@/components/ThemeSync'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f6f4' },
    { media: '(prefers-color-scheme: dark)', color: '#141312' },
  ],
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const d = getDict(lang)
  return {
    metadataBase: new URL(site.url),
    title: { default: `${site.name} — ${d.home.introLabel}`, template: `%s | ${site.name}` },
    description: d.meta.description,
    applicationName: site.name,
  }
}

// Runs before the page paints so a saved dark/light choice never flashes the wrong theme.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}`

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const d = getDict(lang)

  const nav: NavItem[] = [
    { label: d.nav.home, href: `/${lang}` },
    { label: d.nav.products, href: `/${lang}/products` },
    { label: d.nav.about, href: `/${lang}/about` },
    { label: d.nav.catalog, href: `/${lang}/catalog` },
    { label: d.nav.privateLabel, href: `/${lang}/private-label`, pill: true },
    { label: d.nav.stockists, href: `/${lang}/stockists` },
    { label: d.nav.contact, href: `/${lang}/contact` },
    { label: d.nav.certificates, href: `/${lang}/certificates` },
  ]

  return (
    <html lang={lang} dir={localeMeta[lang].dir} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeSync />
        <a href="#main" className="skip-link">
          {d.a11y.skip}
        </a>
        <Header
          lang={lang}
          nav={nav}
          labels={{
            openMenu: d.a11y.openMenu,
            closeMenu: d.a11y.closeMenu,
            language: d.a11y.language,
            theme: d.a11y.theme,
            mainNav: d.a11y.mainNav,
          }}
        />
        <main id="main">{children}</main>
        <Footer lang={lang} d={d} />
        <WhatsAppButton label={d.a11y.whatsapp} />
      </body>
    </html>
  )
}
