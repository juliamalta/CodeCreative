'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { AuroraText } from '@/components/magicui/aurora-text'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Button } from '@/components/ui/button'

export function HeroSection({ title, desc, button1text, button2text }: HeroProps) {
    return (
        <>
            <section id="inicio" className="mx-auto bg-color-haiti pt-24">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="font-regular mb-6 w-2/3 text-4xl text-white md:text-6xl">{title}</h1>
                        <p className="sm:w-2/8 text-base text-color-cblue sm:text-base md:w-2/3 lg:w-2/5">{desc}</p>
                    </div>
                    <div className="flex w-1/2 justify-center gap-3">
                        <Button variant="herobutton" size="hero" className="rounded-full">
                            {button1text} <ArrowRight className="ml-2 size-4" />
                        </Button>
                        <Button variant="herobuttonsecondary" size="hero" asChild className="rounded-full">
                            <Link href="#trabalho"> {button2text}</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
