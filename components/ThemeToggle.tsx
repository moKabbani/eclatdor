'use client'

import { MoonIcon, SunIcon } from './icons'

/** Switches between light and dark. The choice is remembered in the browser. */
export default function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement
    const current =
      root.dataset.theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const next = current === 'dark' ? 'light' : 'dark'
    root.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* private mode: the choice just lasts for this visit */
    }
  }

  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={label} title={label}>
      <MoonIcon className="theme-moon" />
      <SunIcon className="theme-sun" />
    </button>
  )
}
