import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import type { Dict } from '@/lib/dict'
import { products } from '@/lib/products'
import { mapLink, site } from '@/lib/site'
import Logo from './Logo'
import { MailIcon, PinIcon, ChatIcon } from './icons'

export default function Footer({ lang, d }: { lang: Locale; d: Dict }) {
  const pages = [
    { href: `/${lang}/products`, label: d.nav.products },
    { href: `/${lang}/about`, label: d.nav.about },
    { href: `/${lang}/catalog`, label: d.nav.catalog },
    { href: `/${lang}/private-label`, label: d.nav.privateLabel },
    { href: `/${lang}/stockists`, label: d.nav.stockists },
    { href: `/${lang}/certificates`, label: d.nav.certificates },
    { href: `/${lang}/contact`, label: d.nav.contact },
  ]

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo height={44} />
            <p className="muted mt-4 max-w-[18rem] text-sm">{d.footer.tagline}</p>
          </div>

          <div>
            <h2 className="footer-title" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
              {d.footer.pages}
            </h2>
            <ul className="footer-links">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-title" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
              {d.footer.products}
            </h2>
            <ul className="footer-links">
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link href={`/${lang}/products/${p.slug}`}>{p.name[lang]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div dir="ltr" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <h2 className="footer-title" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
              {d.footer.contact}
            </h2>
            <ul className="footer-links">
              <li className="flex items-center gap-2" style={{ justifyContent: lang === 'ar' ? 'flex-end' : 'flex-start' }}>
                <MailIcon width={16} height={16} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="flex items-center gap-2" style={{ justifyContent: lang === 'ar' ? 'flex-end' : 'flex-start' }}>
                <ChatIcon width={16} height={16} />
                <a href={`tel:+${site.phoneDigits}`}>{site.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-2" style={{ justifyContent: lang === 'ar' ? 'flex-end' : 'flex-start' }}>
                <PinIcon width={16} height={16} className="mt-1 shrink-0" />
                <span className="muted text-sm">
                  {site.addressLines[0]}
                  <br />
                  {site.addressLines[1]}
                </span>
              </li>
            </ul>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm mt-4"
            >
              {d.footer.map}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. {d.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  )
}
