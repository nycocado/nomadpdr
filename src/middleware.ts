import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["pt", "br", "en", "es"];
const defaultLocale = "pt";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // Mapping browser preferences to our supported locales
  // 'pt-BR' -> 'br'
  // 'pt-PT' -> 'pt'
  const finalLocales = locales; 
  
  try {
    return match(languages, finalLocales, defaultLocale);
  } catch (error) {
    // If match fails, fallback to simple mapping or default
    if (languages.includes('pt-BR')) return 'br';
    if (languages.includes('pt')) return 'pt';
    if (languages.includes('es')) return 'es';
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // Skip all public files (images, favicon, etc.) - IMPORTANT
    '/((?!_next|favicon.ico|.*\.(?:svg|png|jpg|jpeg|webp|gif|css|js)$).*)',
  ],
};
