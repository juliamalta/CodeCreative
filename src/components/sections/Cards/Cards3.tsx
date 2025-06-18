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
                <div className="flex flex-col justify-center gap-2 text-center">
                    <BlurFade delay={0.15} direction="down" inView>
                        <p className="text-3xl font-semibold">{title}</p>
                    </BlurFade>
                    <BlurFade delay={0.15 * 1.5} direction="down" inView>
                        <p className="mx-auto text-base font-normal text-color-cblue 2xl:w-1/2">{desc}</p>
                    </BlurFade>
                </div>
                <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                    {cards.map((card, index) => (
                        <CardThree
                            key={index}
                            img={card.img}
                            title={card.title}
                            titleApp={card.titleApp}
                            progress={card.progress}
                            progressvalue={card.progressValue}
                            progressvalueX={card.progressValueX}
                            text={card.text}
                            desc={card.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards3
