import type { Metadata } from "next";
import { Exo_2, Roboto } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import React from 'react';
import { getDictionary } from "@/lib/dictionary";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ['normal', 'italic'],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const baseUrl = 'https://nomadpdr.com'

  return {
    title: "Nomad PDR System",
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    openGraph: {
      title: "Nomad PDR System",
      description: dict.metadata.description,
      url: `${baseUrl}/${lang}`,
      siteName: 'Nomad PDR System',
      images: [
        {
          url: '/logo-full.png', // Ideally create a specific OG image (1200x630)
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
        'pt': `${baseUrl}/pt`,
        'pt-BR': `${baseUrl}/br`,
        'en': `${baseUrl}/en`,
        'es': `${baseUrl}/es`,
      },
    },
  }
}

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'br' }, { lang: 'en' }, { lang: 'es' }]
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${exo2.variable} ${roboto.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
