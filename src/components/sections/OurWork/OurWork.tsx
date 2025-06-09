'use client'
import * as React from 'react'

import { CardPrimary, CardSecondary, CardThree } from '@/components/core/CardPrimary'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'
import { OurWorkProps } from '@/components/sections/OurWork/OurWork.types'

function OurWork({ cards, title, desc }: OurWorkProps) {
    return (
        <section id="CardsPrimary" className="bg-white py-24">
            <div className="container mx-auto items-center justify-center">
                <div className="text-center">
                    <p className="tracking-tightl mb-6 font-display text-2xl font-semibold leading-tight">{title}</p>
                    <p className="text-base font-normal text-color-storm">{desc}</p>
                </div>
                <div className="mt-10 flex flex-col justify-between gap-8 2xl:flex-row">
                    {cards.map((card, index) => (
                        <CardThree key={index} img={card.img} title={card.title} text={card.text} desc={card.desc} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurWork
