'use client'

import { ArrowRight } from 'lucide-react'

import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Button } from '@/components/ui/button'

export function HeroSection({ title, text, desc, button1text, button2text }: HeroProps) {
    return (
        <>
            <section className="container mx-auto bg-white py-24">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="mb-6 text-5xl font-normal leading-tight tracking-tight">
                            {title} <br></br>
                            <span className="font-bold text-color-studio">{text}</span>
                        </h1>
                        <p className="w-full text-base font-normal text-color-storm lg:w-2/5">{desc}</p>
                    </div>
                    <div className="flex w-1/2 justify-center gap-3">
                        <Button variant="herobutton" size="hero">
                            {button1text} <ArrowRight className="ml-2 size-4" />
                        </Button>
                        <Button variant="herobuttonsecondary" size="hero">
                            {button2text}
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
