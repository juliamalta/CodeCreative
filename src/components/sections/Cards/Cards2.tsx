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
                <div className="text-center">
                    <BlurFade delay={0.15} direction="down" inView>
                        <p className="tracking-tightl mb-6 font-display text-2xl font-semibold leading-tight text-white">
                            {title}
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.15 * 1.5} direction="down" inView>
                        <p className="text-base text-color-cblue">{desc}</p>
                    </BlurFade>
                </div>
                <div className="">
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
