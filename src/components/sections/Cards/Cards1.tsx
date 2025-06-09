'use client'
import * as React from 'react'

import { CardPrimary } from '@/components/core/CardPrimary'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card1({ cards }: CardSectionProps) {
    return (
        <section id="CardsPrimary" className="bg-color-magnolia py-24">
            <div className="container mx-auto items-center justify-center">
                <div className="text-center">
                    <p className="tracking-tightl mb-6 font-display text-2xl font-semibold leading-tight">
                        Nossos Serviços
                    </p>
                    <p className="text-color-storm text-base font-normal">
                        Oferecemos soluções completas em tecnologia e design para impulsionar seu negócio
                    </p>
                </div>
                <div className="mt-10 flex flex-col gap-8 2xl:flex-row">
                    {cards.map((card, index) => (
                        <CardPrimary key={index} icon={card.icon} title={card.title} text={card.text} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Card1
