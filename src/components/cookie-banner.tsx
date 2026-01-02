'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dictionary } from '@/lib/dictionary';

export function CookieBanner({
  dict,
  lang,
}: {
  dict: Dictionary['cookies'];
  lang: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('nomad_cookie_consent');
      if (!consent) {
        setIsVisible(true);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nomad_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border p-4 shadow-2xl animate-in slide-in-from-bottom-10 duration-500">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-sm text-muted-foreground leading-snug">
          {dict.text}{' '}
          <Link
            href={`/${lang}/privacy`}
            className="underline font-medium text-foreground hover:text-primary underline-offset-4 transition-colors"
          >
            {dict.policy_link}
          </Link>
          .
        </p>
        <Button
          size="sm"
          onClick={handleAccept}
          className="whitespace-nowrap px-8 font-bold"
        >
          {dict.accept}
        </Button>
      </div>
    </div>
  );
}
