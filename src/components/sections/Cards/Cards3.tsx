'use client'
import * as React from 'react'

import { AnimatedTechBackground } from '@/components/animations/background/AnimatedTechBackground'
import { CardThree } from '@/components/core/CardPrimary'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Cards3({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="trabalho" className="py-24">
            <AnimatedTechBackground />
            <div className="container mx-auto items-center justify-center">
                <div className="text-center">
                    <BlurFade delay={0.15} direction="down" inView>
                        <p className="tracking-tightl mb-6 font-display text-3xl font-semibold leading-tight">
                            {title}
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.15 * 1.5} direction="down" inView>
                        <p className="text-color-cblue text-base font-normal">{desc}</p>
                    </BlurFade>
                </div>
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                    {cards.map((card, index) => (
                        <CardThree
                            key={index}
                            img={card.img}
                            title={card.title}
                            text={card.text}
                            desc={card.desc}
                            iconsocial1={card.iconsocial1}
                            iconsocial2={card.iconsocial2}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards3
