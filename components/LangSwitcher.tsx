'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { locales, localeMeta, type Locale } from '@/lib/i18n'
import { ChevronIcon, GlobeIcon } from './icons'

/** Same page, other language. */
function hrefFor(code: Locale, pathname: string) {
  const parts = pathname.split('/')
  parts[1] = code
  return parts.join('/') || `/${code}`
}

function remember(code: Locale) {
  document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000; samesite=lax`
}

export function LangChips({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname()
  return (
    <div className="lang-chips" role="group" aria-label={label}>
      {locales.map((code) => (
        <Link
          key={code}
          href={hrefFor(code, pathname)}
          lang={code}
          hrefLang={code}
          className="chip"
          aria-current={code === lang ? 'true' : undefined}
          onClick={() => remember(code)}
        >
          {localeMeta[code].native}
        </Link>
      ))}
    </div>
  )
}

export default function LangSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="lang-menu" ref={box}>
      <button
        type="button"
        className="lang-btn"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
      >
        <GlobeIcon width={16} height={16} />
        {localeMeta[lang].short}
        <ChevronIcon />
      </button>
      {open && (
        <ul className="lang-list">
          {locales.map((code) => (
            <li key={code}>
              <Link
                href={hrefFor(code, pathname)}
                lang={code}
                hrefLang={code}
                className="lang-item"
                aria-current={code === lang ? 'true' : undefined}
                onClick={() => {
                  remember(code)
                  setOpen(false)
                }}
              >
                {localeMeta[code].native}
                <span className="muted" style={{ fontSize: '0.75rem' }}>
                  {localeMeta[code].short}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
