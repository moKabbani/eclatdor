import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, isLocale, type Locale } from './lib/i18n'

/** Picks the visitor's language: saved choice first, then browser language, then Turkish. */
function pickLocale(request: NextRequest): Locale {
  const saved = request.cookies.get('NEXT_LOCALE')?.value
  if (isLocale(saved)) return saved

  const header = request.headers.get('accept-language') ?? ''
  for (const part of header.split(',')) {
    const code = part.trim().split(';')[0].toLowerCase().split('-')[0]
    if (isLocale(code)) return code
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1]
  if (isLocale(first)) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/${pickLocale(request)}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip the API, Next.js internals and any file with an extension (images, sitemap, robots, ...)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
