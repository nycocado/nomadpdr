import { Cloud, Wrench, Building2, Globe } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function ServicesSection({ dict }: { dict: any }) {
  return (
    <section id="services" className="py-24 bg-muted/30 relative">
       <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold italic uppercase tracking-tighter text-transparent bg-clip-text bg-[image:var(--gradient-nomad-red)]">
              {dict.section_title}
            </h2>
            <p className="text-muted-foreground text-lg">{dict.section_desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service 1: Hail */}
              <Card className="group border-t-4 border-t-transparent hover:border-t-destructive transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                     <Cloud className="w-7 h-7" />
                  </div>
                  <CardTitle className="font-heading text-xl font-bold">{dict.card_hail_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dict.card_hail_desc}
                  </p>
                </CardContent>
              </Card>

              {/* Service 2: PDR */}
              <Card className="group border-t-4 border-t-transparent hover:border-t-destructive transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                     <Wrench className="w-7 h-7" />
                  </div>
                  <CardTitle className="font-heading text-xl font-bold">{dict.card_pdr_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dict.card_pdr_desc}
                  </p>
                </CardContent>
              </Card>

               {/* Service 3: Support */}
               <Card className="group border-t-4 border-t-transparent hover:border-t-destructive transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                     <Building2 className="w-7 h-7" />
                  </div>
                  <CardTitle className="font-heading text-xl font-bold">{dict.card_support_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dict.card_support_desc}
                  </p>
                </CardContent>
              </Card>

              {/* Service 4: Mobile */}
              <Card className="group border-t-4 border-t-transparent hover:border-t-destructive transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                     <Globe className="w-7 h-7" />
                  </div>
                  <CardTitle className="font-heading text-xl font-bold">{dict.card_mobile_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dict.card_mobile_desc}
                  </p>
                </CardContent>
              </Card>
          </div>
       </div>
    </section>
  )
}