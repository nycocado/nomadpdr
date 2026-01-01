import Image from "next/image"
import { FaInstagram } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { CONTACT_INFO } from "@/lib/config"

export function HeroSection({ dict }: { dict: any }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden">
       {/* Background Image & Overlays */}
       <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-background.webp" 
            alt="Trabalho de PDR Nomad" 
            fill 
            className="object-cover opacity-40 dark:opacity-50 blur-[3px]" 
            priority
          />
          {/* Enhanced Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background lg:bg-gradient-to-r lg:from-background lg:via-background/40 lg:to-transparent"></div>
       </div>

       <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          
          {/* Visual/Image Area (Centered on Mobile/Tablet, Right on Desktop) */}
          <div className="flex-1 relative w-full max-w-md md:max-w-full flex justify-center order-1 lg:order-2">
             <div className="relative w-full max-w-[500px]">
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl transform scale-75 opacity-50"></div>
                
                {/* Light Mode Logo */}
                <Image 
                    src="/logo-full.svg" 
                    alt="Nomad PDR System" 
                    width={500} 
                    height={200}
                    className="relative z-10 w-full h-auto object-contain drop-shadow-2xl dark:hidden"
                    priority
                />
                
                {/* Dark Mode Logo */}
                <Image 
                    src="/logo-full-white.svg" 
                    alt="Nomad PDR System" 
                    width={500} 
                    height={200}
                    className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hidden dark:block"
                    priority
                />
             </div>
          </div>

          {/* Text Content (Hidden Title/Badge on Mobile, shown on Desktop) */}
          <div className="flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1">
            
            <h1 className="hidden lg:block text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold italic text-foreground leading-tight tracking-tight">
              {dict.title_start} <br/>
              <span className="text-transparent bg-clip-text bg-[image:var(--gradient-nomad-red)]">{dict.title_highlight}</span> {dict.title_end}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
              {dict.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="nomad" size="lg" className="w-full text-base px-8 h-14">
                  {dict.quote_button}
                </Button>
              </a>
              <a href={CONTACT_INFO.instagram.url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full h-14 border-primary/20 text-foreground hover:bg-primary/5 bg-transparent">
                  <FaInstagram className="mr-2 h-5 w-5" />
                  {dict.portfolio_button}
                </Button>
              </a>
            </div>
          </div>
       </div>
    </section>
  )
}