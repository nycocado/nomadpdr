import { ShieldCheck, Hammer, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function ServicesSection({ dict }: { dict: any }) {
  return (
    <section id="services" className="py-24 bg-muted/30 relative">
       <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{dict.section_title}</h2>
            <p className="text-muted-foreground text-lg">{dict.section_desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="border-t-4 border-t-destructive shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 text-destructive">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-heading">{dict.card_hail_title}</CardTitle>
                  <CardDescription>{dict.card_hail_desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {dict.card_hail_desc}
                  </p>
                </CardContent>
                <CardFooter>
                   <Button variant="link" className="px-0 text-destructive font-bold">{dict.learn_more} &rarr;</Button>
                </CardFooter>
              </Card>

              {/* Service 2 */}
              <Card className="border-t-4 border-t-secondary shadow-lg hover:shadow-xl transition-shadow bg-card relative top-0 md:-top-8">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Especialidade
                </div>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary-foreground dark:text-secondary">
                     <Hammer className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-heading text-xl">{dict.card_pdr_title}</CardTitle>
                  <CardDescription>{dict.card_pdr_desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {dict.card_pdr_desc}
                  </p>
                </CardContent>
                <CardFooter>
                   <Button variant="link" className="px-0 text-secondary-foreground dark:text-secondary font-bold">{dict.learn_more} &rarr;</Button>
                </CardFooter>
              </Card>

               {/* Service 3 */}
               <Card className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                     <Clock className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-heading">{dict.card_express_title}</CardTitle>
                  <CardDescription>{dict.card_express_desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {dict.card_express_desc}
                  </p>
                </CardContent>
                <CardFooter>
                   <Button variant="link" className="px-0 text-primary font-bold">{dict.learn_more} &rarr;</Button>
                </CardFooter>
              </Card>
          </div>
       </div>
    </section>
  )
}