'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { AuroraText } from '@/components/magicui/aurora-text'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Button } from '@/components/ui/button'

export function HeroSection({ title, text, desc, button1text, button2text }: HeroProps) {
    return (
        <>
            <section className="mx-auto bg-color-haiti pt-24">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="mb-6 text-4xl font-normal leading-tight tracking-tight text-white md:text-6xl">
                            {title} <br></br>
                            <AuroraText colors={['#833ECC', '#3037BE']}>
                                <span className="font-bold text-color-studio">{text}</span>
                            </AuroraText>
                        </h1>
                        <p className="w-full text-sm text-color-scampi sm:text-base lg:w-2/5">{desc}</p>
                    </div>
                    <div className="flex w-1/2 justify-center gap-3">
                        <Button variant="herobutton" size="hero">
                            {button1text} <ArrowRight className="ml-2 size-4" />
                        </Button>
                        <Button variant="herobuttonsecondary" size="hero" asChild>
                            <Link href="#trabalho"> {button2text}</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
