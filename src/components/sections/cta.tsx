import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection({ dict }: { dict: any }) {
  return (
    <section className="py-20 bg-[image:var(--gradient-nomad-red)] text-white text-center relative overflow-hidden">
        {/* Adjusted Background: Using the bold Nomad Red gradient directly for high impact */}
        <div className="absolute inset-0 bg-black/10"></div> {/* Subtle dark overlay for text contrast */}
        <div className="container mx-auto px-4 relative z-10 space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold italic">{dict.title}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {dict.description}
          </p>
          <Button variant="secondary" size="lg" className="h-16 px-10 text-lg font-bold shadow-2xl">
            <Phone className="mr-2 h-5 w-5" />
            {dict.button}
          </Button>
        </div>
    </section>
  )
}