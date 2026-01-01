import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { Separator } from "@/components/ui/separator"
import { CONTACT_INFO } from "@/lib/config"

export function Footer({ dict, navDict, legalDict, lang }: { dict: any, navDict: any, legalDict: any, lang: string }) {
  return (
    <footer className="bg-muted text-foreground pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
             {/* Footer Logo - Theme Aware */}
             <div className="relative h-12 w-48">
                <Image 
                  src="/logo-full.svg" 
                  alt="Nomad PDR System" 
                  fill
                  className="object-contain object-left dark:hidden"
                />
                <Image 
                  src="/logo-full-white.svg" 
                  alt="Nomad PDR System" 
                  fill
                  className="object-contain object-left hidden dark:block"
                />
             </div>
             <p className="text-muted-foreground text-sm leading-relaxed">
               {dict.desc}
             </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-secondary">{dict.links_title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href={`/${lang}#hero`} className="hover:text-primary transition-colors">{navDict.home}</Link></li>
              <li><Link href={`/${lang}#about`} className="hover:text-primary transition-colors">{navDict.about}</Link></li>
              <li><Link href={`/${lang}#services`} className="hover:text-primary transition-colors">{navDict.services}</Link></li>
              <li><Link href={`/${lang}#contact`} className="hover:text-primary transition-colors">{navDict.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-secondary">{dict.contact_title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <a href={CONTACT_INFO.phone.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" /> {CONTACT_INFO.phone.fullNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href={CONTACT_INFO.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <FaInstagram className="w-4 h-4" /> {CONTACT_INFO.instagram.display}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-foreground/10 mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground mb-8">
          <p>{dict.copyright}</p>
          <div className="flex items-center gap-4">
            <Link href={`/${lang}/privacy`} className="hover:text-primary transition-colors">{dict.privacy}</Link>
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-bold border border-foreground/20 px-2 py-1 rounded transition-colors hover:border-primary">
              {legalDict?.complaints_book || "Livro de Reclamações"}
            </a>
          </div>
        </div>

        {/* Legal RAL Text */}
        <div className="border-t border-foreground/10 pt-6 text-center">
           <p className="text-[10px] text-muted-foreground max-w-4xl mx-auto leading-relaxed opacity-70">
             {legalDict?.ral_text}
           </p>
        </div>
      </div>
    </footer>
  )
}
