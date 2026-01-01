import Image from "next/image"
import { Phone } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { Separator } from "@/components/ui/separator"
import { CONTACT_INFO } from "@/lib/config"

export function Footer({ dict, navDict }: { dict: any, navDict: any }) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
             {/* Footer Logo */}
             <Image 
               src="/logo-full-white.svg" 
               alt="Nomad PDR System" 
               width={180} 
               height={50}
               className="h-12 w-auto object-contain opacity-90"
             />
             <p className="text-gray-400 text-sm leading-relaxed">
               {dict.desc}
             </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-secondary">{dict.links_title}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{navDict.home}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{navDict.about}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{navDict.services}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{navDict.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-secondary">{dict.contact_title}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <a href={CONTACT_INFO.phone.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> {CONTACT_INFO.phone.fullNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href={CONTACT_INFO.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FaInstagram className="w-4 h-4" /> {CONTACT_INFO.instagram.display}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{dict.copyright}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">{dict.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
