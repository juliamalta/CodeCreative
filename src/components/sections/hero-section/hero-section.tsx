'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { AuroraText } from '@/components/magicui/aurora-text'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Button } from '@/components/ui/button'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'

export function HeroSection({ title, desc, button1text, button2text, titlePrimary }: HeroProps) {
    return (
        <>
            <section id="inicio" className="mx-auto bg-color-haiti px-2 pt-24">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-base font-semibold text-color-scampi">{titlePrimary}</p>
                        <h1 className="font-regular mb-6 w-full text-4xl text-white sm:w-2/3 md:text-6xl">{title}</h1>
                        <p className="sm:w-2/8 text-base text-color-cblue sm:text-base md:w-2/3 lg:w-2/5">{desc}</p>
                    </div>
                    <div className="flex justify-center gap-3">
                        <InteractiveHoverButton className="border-color-studio bg-color-studio text-sm text-white hover:bg-white hover:text-color-studio">
                            <Link href="https://www.instagram.com/codecreativebr/"> {button1text}</Link>
                        </InteractiveHoverButton>
                        <Button variant="herobuttonsecondary" size="hero" asChild className="rounded-full">
                            <Link href="#trabalho"> {button2text}</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
