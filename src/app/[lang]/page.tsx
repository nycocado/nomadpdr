import { getDictionary } from "@/lib/dictionary"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { ProcessSection } from "@/components/sections/process"
import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"
import { WhatsAppFAB } from "@/components/ui/whatsapp-fab"

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans selection:bg-destructive/20">
      <Navbar dict={dict.navbar} />
      <main className="flex-1">
        <HeroSection dict={dict.hero} />
        <ServicesSection dict={dict.services} />
        <ProcessSection dict={dict.process} />
        <AboutSection dict={dict.about} />
        <ContactSection dict={dict.contact_form} />
      </main>
      <Footer dict={dict.footer} navDict={dict.navbar} />
      <WhatsAppFAB />
    </div>
  )
}