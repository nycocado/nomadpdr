import type { Metadata } from 'next';
import { Exo_2, Roboto } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';
import { getDictionary } from '@/lib/dictionary';
import { CookieBanner } from '@/components/cookie-banner';
import { COMPANY_INFO, CONTACT_INFO, SITE_URL } from '@/lib/config';
import { Analytics } from '@vercel/analytics/next';

const exo2 = Exo_2({
  variable: '--font-exo2',
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const baseUrl = SITE_URL;

  return {
    title: 'Nomad PDR System',
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    openGraph: {
      title: 'Nomad PDR System',
      description: dict.metadata.description,
      url: `${baseUrl}/${lang}`,
      siteName: 'Nomad PDR System',
      images: [
        {
          url: '/logo-full.png',
          width: 1200,
          height: 630,
          alt: 'Nomad PDR System',
        },
      ],
      locale: lang,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        pt: `${baseUrl}/pt`,
        br: `${baseUrl}/br`,
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'br' }, { lang: 'en' }, { lang: 'es' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Nomad PDR System',
    legalName: COMPANY_INFO.name,
    image: `${SITE_URL}/logo-full.png`,
    url: `${SITE_URL}/${lang}`,
    telephone: CONTACT_INFO.phone.fullNumber.replace(/\s+/g, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.street,
      addressLocality: COMPANY_INFO.city,
      postalCode: COMPANY_INFO.zip,
      addressCountry: COMPANY_INFO.country,
    },
    description: dict.metadata.description,
    priceRange: '$$',
    areaServed: COMPANY_INFO.areaServed,
  };

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${exo2.variable} ${roboto.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieBanner dict={dict.cookies} lang={lang} />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
