"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { sendEmail } from "@/app/actions"
import { Loader2 } from "lucide-react"

const initialState = {
  success: false,
  code: '',
}

export function ContactSection({ dict }: { dict: any }) {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold italic uppercase tracking-tighter text-transparent bg-clip-text bg-[image:var(--gradient-nomad-red)]">
              {dict.section_title}
            </h2>
            <p className="text-muted-foreground text-lg">{dict.section_desc}</p>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-xl p-8 md:p-12">
            {state.success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{dict.success_title}</h3>
                    <p className="text-muted-foreground">{dict.success_desc}</p>
                    <Button 
                        variant="outline" 
                        onClick={() => window.location.reload()}
                        className="mt-6"
                    >
                        {dict.button_reset}
                    </Button>
                </div>
            ) : (
                <form action={formAction} className="space-y-6">
                    {state.code && !state.success && (
                        <div className="p-4 rounded-md bg-destructive/10 text-destructive text-sm font-medium text-center">
                            {dict.errors?.[state.code] || dict.errors?.server_error || "Error"}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {dict.label_name}
                            </label>
                            <input
                                required
                                type="text"
                                name="name"
                                id="name"
                                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                placeholder={dict.label_name}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {dict.label_email}
                            </label>
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                placeholder="seu@email.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {dict.label_phone}
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                            placeholder="+351 999 999 999"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {dict.label_message}
                        </label>
                        <textarea
                            required
                            name="message"
                            id="message"
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all"
                            placeholder={dict.placeholder_message}
                        ></textarea>
                    </div>

                    <Button type="submit" variant="nomad" size="lg" className="w-full text-lg" disabled={isPending}>
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Enviando...
                            </>
                        ) : (
                            dict.submit_button
                        )}
                    </Button>
                </form>
            )}
        </div>
      </div>
    </section>
  )
}
