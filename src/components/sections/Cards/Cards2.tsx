'use client'
import * as React from 'react'

import CardSecondary from '@/components/core/CardPrimary/CardSecondary'
import { AnimatedList } from '@/components/magicui/animated-list'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card2({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="Valores" className="bg-color-haiti py-24">
            <div className="container mx-auto items-center justify-center">
                <div className="flex flex-col justify-center gap-2 text-center">
                    <BlurFade delay={0.15} direction="down" inView>
                        <p className="text-3xl font-semibold text-white">{title}</p>
                    </BlurFade>
                    <BlurFade delay={0.15 * 1.5} direction="down" inView>
                        <p className="mx-auto text-base font-normal text-color-cblue 2xl:w-1/2">{desc}</p>
                    </BlurFade>
                </div>
                <div className="mx-auto mt-10">
                    <AnimatedList>
                        {cards.map((card, index) => (
                            <CardSecondary
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                text={card.text}
                                iconBgColor={card.iconBgColor}
                            />
                        ))}
                    </AnimatedList>
                </div>
            </div>
        </section>
    )
}

export default Card2
