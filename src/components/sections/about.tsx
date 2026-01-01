import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection({ dict }: { dict: any }) {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
             
             {/* Text Content */}
             <div className="w-full lg:w-1/3 space-y-6">
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold italic uppercase tracking-tighter text-transparent bg-clip-text bg-[image:var(--gradient-nomad-red)]">
                  {dict.title}
                </h2>
                <h3 className="text-2xl text-foreground font-bold">{dict.subtitle}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {dict.description}
                </p>
                <a href="#contact" className="mt-4 inline-block">
                  <Button variant="nomad">
                    {dict.button}
                  </Button>
                </a>
             </div>

             {/* Images Comparison */}
             <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {/* Before Image */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl border-4 border-white dark:border-slate-800">
                        <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-md border border-white/20">
                            {dict.before_label}
                        </div>
                        <div className="aspect-[4/5] relative">
                            <Image 
                                src="/example-before.webp" 
                                alt="Before Repair" 
                                fill 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* After Image */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl border-4 border-white dark:border-slate-800">
                        <div className="absolute top-4 left-4 z-10 bg-primary/90 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-md border border-white/20">
                            {dict.after_label}
                        </div>
                        <div className="aspect-[4/5] relative">
                            <Image 
                                src="/example-after.webp" 
                                alt="After Repair" 
                                fill 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
             </div>
         </div>
      </div>
    </section>
  )
}