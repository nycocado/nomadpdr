import Image from "next/image"
import { Phone, MapPin, Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
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
              <li><a href="#" className="hover:text-white transition-colors">{dict.navbar?.home || "Início"}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{dict.navbar?.about || "Sobre"}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{dict.navbar?.services || "Serviços"}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{dict.navbar?.contact || "Contato"}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-secondary">{dict.contact_title}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +351 999 999 999</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Portugal</li>
              <li className="flex items-center gap-2"><Instagram className="w-4 h-4" /> @nomadpdrsystem</li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-4 text-secondary">{dict.hours_title}</h4>
             <ul className="space-y-2 text-sm text-gray-400">
               <li>{dict.hours_week}</li>
               <li>{dict.hours_sat}</li>
               <li>{dict.hours_sun}</li>
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
