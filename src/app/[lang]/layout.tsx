import type { Metadata } from "next";
import { Exo_2, Roboto } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import React from 'react';

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

export const metadata: Metadata = {
  title: "Nomad PDR System",
  description: "Especialista em PDR e Martelinho de Ouro",
};

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