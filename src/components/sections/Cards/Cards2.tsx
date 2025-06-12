'use client'
import * as React from 'react'

import CardSecondary from '@/components/core/CardPrimary/CardSecondary'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card2({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="Valores" className="bg-color-haiti py-24 2xl:mx-8 2xl:rounded-2xl">
            <div className="container mx-auto items-center justify-center">
                <div className="text-center">
                    <BlurFade delay={0.15} direction="down" inView>
                        <p className="tracking-tightl mb-6 font-display text-2xl font-semibold leading-tight text-white">
                            {title}
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.15 * 1.5} direction="down" inView>
                        <p className="text-base text-color-scampi">{desc}</p>
                    </BlurFade>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 2xl:grid-cols-4">
                    {cards.map((card, index) => (
                        <CardSecondary
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            text={card.text}
                            iconBgColor={card.iconBgColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Card2
