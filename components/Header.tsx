'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { Locale } from '@/lib/i18n'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import LangSwitcher, { LangChips } from './LangSwitcher'
import { CloseIcon, MenuIcon } from './icons'

export type NavItem = { href: string; label: string; pill?: boolean }

type Props = {
  lang: Locale
  nav: NavItem[]
  labels: { openMenu: string; closeMenu: string; language: string; theme: string; mainNav: string }
}

export default function Header({ lang, nav, labels }: Props) {
  const pathname = usePathname()
  // The menu counts as open only on the page where it was opened, so it closes itself on navigation.
  const [openPath, setOpenPath] = useState<string | null>(null)
  const open = openPath === pathname

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenPath(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) =>
    href === `/${lang}` ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href={`/${lang}`} className="header-logo" aria-label="Éclat d'or">
          <Logo height={40} eager />
        </Link>

        <nav className="nav-desktop" aria-label={labels.mainNav}>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`nav-link${n.pill ? ' nav-pill' : ''}`}
              aria-current={isActive(n.href) ? 'page' : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="header-tools">
          <div className="hidden min-[1100px]:block">
            <LangSwitcher lang={lang} label={labels.language} />
          </div>
          <ThemeToggle label={labels.theme} />
          <button
            type="button"
            className="icon-btn burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? labels.closeMenu : labels.openMenu}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="mobile-panel">
          <nav aria-label={labels.mainNav}>
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="mobile-link"
                aria-current={isActive(n.href) ? 'page' : undefined}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <LangChips lang={lang} label={labels.language} />
        </div>
      )}
    </header>
  )
}
