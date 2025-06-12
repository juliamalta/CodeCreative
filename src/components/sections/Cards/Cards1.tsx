'use client'
import * as React from 'react'

import { CardPrimary } from '@/components/core/CardPrimary'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card1({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="Serviços" className="bg-color-haiti py-24">
            <div className="container mx-auto items-center justify-center">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card, index) => (
                        <CardPrimary
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

export default Card1
