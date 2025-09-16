import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  
  for (const locale of routing.locales) {
    if (pathname === `/${locale}/about`) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/about/our-history`;
      return NextResponse.redirect(url);
    }

    if (pathname === `/${locale}/events`) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/events/highlights`;
      return NextResponse.redirect(url);
    }
  }

  
  return intlMiddleware(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
