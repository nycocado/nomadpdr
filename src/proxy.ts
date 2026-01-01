import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['pt', 'br', 'en', 'es'];
const defaultLocale = 'pt';

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  try {
    return match(languages, locales, defaultLocale);
  } catch {
    if (languages.includes('pt-BR')) return 'br';
    if (languages.includes('pt')) return 'pt';
    if (languages.includes('es')) return 'es';
    return defaultLocale;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|.*\.(?:svg|png|jpg|jpeg|webp|gif|css|js)$).*)',
  ],
};
