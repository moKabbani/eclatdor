import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // لا تلمس هالمسارات أبداً
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/products') ||
    pathname.startsWith('/comingsoon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // باقي الكود القديم تبعك للغات خليه متل ما هو...
  // اذا ما عندك كود لغات، حط بس return
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|_static|_images|favicon.ico|.*\\..*).*)'],
}