import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection({ dict }: { dict: any }) {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
         <div className="w-full md:w-1/2 relative">
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative flex items-center justify-center">
                {/* Placeholder for About Image - Keeping it generic */}
               <div className="text-6xl">👨‍🔧</div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[image:var(--gradient-nomad-red)] rounded-2xl -z-10"></div>
         </div>
         
         <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              {dict.title}
            </h2>
            <h3 className="text-xl text-secondary font-medium">{dict.subtitle}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {dict.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary mt-1" />
                <p className="text-sm font-medium">{dict.check_1}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary mt-1" />
                <p className="text-sm font-medium">{dict.check_2}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary mt-1" />
                <p className="text-sm font-medium">{dict.check_3}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary mt-1" />
                <p className="text-sm font-medium">{dict.check_4}</p>
              </div>
            </div>
            <Button variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-white">
              {dict.button}
            </Button>
         </div>
      </div>
    </section>
  )
}