'use client'

import { useLayoutEffect } from 'react'

/**
 * Changing language swaps the whole <html> element, which drops the data-theme attribute.
 * This puts the visitor's saved choice back before the page paints, so the theme never changes by itself.
 */
export default function ThemeSync() {
  useLayoutEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') {
        document.documentElement.setAttribute('data-theme', saved)
      }
    } catch {
      /* storage blocked: fall back to the device setting */
    }
  }, [])

  return null
}