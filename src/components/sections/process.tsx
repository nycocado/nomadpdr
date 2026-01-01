import { Search, Wrench, CircleCheckBig, Car } from "lucide-react"

export function ProcessSection({ dict }: { dict: any }) {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
       <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold italic uppercase tracking-tighter text-transparent bg-clip-text bg-[image:var(--gradient-nomad-red)]">
              {dict.title}
            </h2>
            <p className="text-muted-foreground text-lg">{dict.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
             {/* Step 1 */}
             <div className="relative group">
                <div className="flex flex-col items-center text-center">
                   <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30 relative group-hover:scale-110 transition-transform duration-300">
                      <Search className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm shadow-md border-2 border-background">1</div>
                   </div>
                   <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{dict.step_1_title}</h3>
                   <p className="text-muted-foreground leading-relaxed">{dict.step_1_desc}</p>
                </div>
                {/* Connector Line */}
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-secondary/50 to-transparent"></div>
             </div>

             {/* Step 2 */}
             <div className="relative group">
                <div className="flex flex-col items-center text-center">
                   <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30 relative group-hover:scale-110 transition-transform duration-300">
                      <Wrench className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm shadow-md border-2 border-background">2</div>
                   </div>
                   <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{dict.step_2_title}</h3>
                   <p className="text-muted-foreground leading-relaxed">{dict.step_2_desc}</p>
                </div>
                {/* Connector Line */}
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-secondary/50 to-transparent"></div>
             </div>

             {/* Step 3 */}
             <div className="relative group">
                <div className="flex flex-col items-center text-center">
                   <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30 relative group-hover:scale-110 transition-transform duration-300">
                      <CircleCheckBig className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm shadow-md border-2 border-background">3</div>
                   </div>
                   <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{dict.step_3_title}</h3>
                   <p className="text-muted-foreground leading-relaxed">{dict.step_3_desc}</p>
                </div>
                {/* Connector Line */}
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-secondary/50 to-transparent"></div>
             </div>

             {/* Step 4 */}
             <div className="relative group">
                <div className="flex flex-col items-center text-center">
                   <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30 relative group-hover:scale-110 transition-transform duration-300">
                      <Car className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm shadow-md border-2 border-background">4</div>
                   </div>
                   <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{dict.step_4_title}</h3>
                   <p className="text-muted-foreground leading-relaxed">{dict.step_4_desc}</p>
                </div>
             </div>
          </div>
       </div>
    </section>
  )
}
