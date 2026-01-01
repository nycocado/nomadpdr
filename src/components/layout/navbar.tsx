"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar({ dict, lang }: { dict: any, lang?: string }) {
  const homeLink = lang ? `/${lang}` : '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-background/20 backdrop-blur-md supports-[backdrop-filter]:bg-background/20 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={homeLink} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
           <Image 
             src="/logo-icon.svg" 
             alt="Nomad PDR" 
             width={40} 
             height={40} 
             className="w-10 h-10 object-contain dark:hidden"
           />
           <Image 
             src="/logo-icon-white.svg" 
             alt="Nomad PDR" 
             width={40} 
             height={40} 
             className="w-10 h-10 object-contain hidden dark:block"
           />
           <span className="text-xl font-heading font-extrabold italic tracking-tighter text-foreground">
            NOMAD <span className="text-destructive">PDR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href={`${homeLink}#hero`} className="hover:text-primary transition-colors">{dict.home}</Link>
          <Link href={`${homeLink}#services`} className="hover:text-primary transition-colors">{dict.services}</Link>
          <Link href={`${homeLink}#about`} className="hover:text-primary transition-colors">{dict.about}</Link>
          <Link href={`${homeLink}#contact`} className="hover:text-primary transition-colors">{dict.contact}</Link>
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <ModeToggle />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">{dict.home}</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href={`${homeLink}#hero`} className="text-lg font-medium hover:text-primary">{dict.home}</Link>
                <Link href={`${homeLink}#services`} className="text-lg font-medium hover:text-primary">{dict.services}</Link>
                <Link href={`${homeLink}#about`} className="text-lg font-medium hover:text-primary">{dict.about}</Link>
                <Link href={`${homeLink}#contact`} className="text-lg font-medium hover:text-primary">{dict.contact}</Link>
              </nav>
              <div className="mt-8 border-t pt-4 flex justify-start">
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}