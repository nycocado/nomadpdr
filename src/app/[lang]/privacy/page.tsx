import { getDictionary } from '@/lib/dictionary';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CONTACT_INFO, COMPANY_INFO } from '@/lib/config';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const privacy = dict.privacy_page;

  const replacePlaceholder = (text: string) => {
    return text
      .replace('[CONTACT_EMAIL]', CONTACT_INFO.email)
      .replace('[COMPANY_NAME]', COMPANY_INFO.name)
      .replace('[COMPANY_TAX_ID]', COMPANY_INFO.nif)
      .replace('[COMPANY_ADDRESS]', COMPANY_INFO.address);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans selection:bg-destructive/20">
      <Navbar dict={dict.navbar} lang={lang} />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          {/* Header */}
          <div className="mb-12 space-y-4 border-b border-border pb-8">
            <Link href={`/${lang}`}>
              <Button
                variant="ghost"
                className="pl-0 hover:bg-transparent hover:text-primary mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {privacy.back_home}
              </Button>
            </Link>
            <h1 className="text-4xl font-heading font-extrabold text-foreground">
              {privacy.title}
            </h1>
            <p className="text-muted-foreground">{privacy.last_updated}</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-foreground leading-relaxed">
            <p className="text-lg">{privacy.intro}</p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                {privacy.section_1_title}
              </h2>
              <p className="text-muted-foreground">
                {replacePlaceholder(privacy.section_1_text)}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                {privacy.section_2_title}
              </h2>
              <p className="text-muted-foreground">{privacy.section_2_text}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                {privacy.section_3_title}
              </h2>
              <p className="text-muted-foreground">{privacy.section_3_text}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                {privacy.section_4_title}
              </h2>
              <p className="text-muted-foreground">{privacy.section_4_text}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                {privacy.section_5_title}
              </h2>
              <p className="text-muted-foreground">{privacy.section_5_text}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                {privacy.section_6_title}
              </h2>
              <p className="text-muted-foreground">{privacy.section_6_text}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer
        dict={dict.footer}
        navDict={dict.navbar}
        legalDict={dict.legal}
        lang={lang}
      />
    </div>
  );
}
