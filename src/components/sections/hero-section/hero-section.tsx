'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { AuroraText } from '@/components/magicui/aurora-text'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Button } from '@/components/ui/button'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { SpotlightBackground } from '@/components/ui/spotlight'
import { HyperText } from '@/components/magicui/hyper'

export function HeroSection({ title, desc, button1text, button2text, titlePrimary }: HeroProps) {
    return (
        <>
            <section
                id="inicio"
                className="mx-auto bg-cover bg-center px-2 py-16 sm:py-44"
                style={{ backgroundImage: "url('/images/codebg.png')" }}>
                <div className="container flex flex-col gap-8">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <HyperText className="text-base font-semibold text-color-purble">{titlePrimary}</HyperText>
                            <h1 className="font-regular w-full text-3xl text-white md:text-6xl lg:w-2/4">{title}</h1>
                            <p className="sm:w-2/8 text-base text-white sm:text-base md:w-2/3 lg:w-2/5">{desc}</p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <InteractiveHoverButton className="border-color-studio bg-color-purble text-center text-sm text-white hover:bg-white hover:text-color-studio">
                                <Link href="https://www.instagram.com/codecreativebr/"> {button1text}</Link>
                            </InteractiveHoverButton>
                            <Button variant="herobuttonsecondary" size="hero" asChild className="rounded-full text-sm">
                                <Link href="#trabalho"> {button2text}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
