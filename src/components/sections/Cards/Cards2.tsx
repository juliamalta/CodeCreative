'use client'
import * as React from 'react'

import CardSecondary from '@/components/core/CardPrimary/CardSecondary'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card2({ cards }: CardSectionProps) {
    return (
        <section id="CardsPrimary" className="bg-color-magnolia py-24">
            <div className="container mx-auto items-center justify-center">
                <div className="text-center">
                    <p className="tracking-tightl mb-6 font-display text-2xl font-semibold leading-tight">
                        Nossos valores
                    </p>
                    <p className="text-base font-normal text-color-storm">
                        Oferecemos soluções completas em tecnologia e design para impulsionar seu negócio
                    </p>
                </div>
                <div className="mt-10 flex flex-col gap-8 2xl:flex-row">
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
