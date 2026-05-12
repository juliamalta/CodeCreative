'use client'
import * as React from 'react'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'
import CardHighlight from '@/components/core/CardPrimary/Cardhighlight'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function Card4({ cardsHight, buttonText }: CardSectionProps) {
    return (
        <section id="solution" className="bg-color-woodsmoke3 py-16 sm:pb-24">
            <div className="container mx-auto flex w-full flex-col items-center justify-center gap-8 md:w-full lg:w-full xl:w-2/3 2xl:w-2/4">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-2">
                    {cardsHight?.map((card, index) => (
                        <CardHighlight
                            higthligth={card.higthligth}
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            text={card.text}
                            payment={card.payment}
                            paymentTitle={card.paymentTitle}
                            iconBgColor={card.iconBgColor}
                        />
                    ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Button variant="herobutton" size="hero" asChild className="rounded-full">
                        <Link href="https://wa.me/5531996398460">{buttonText}</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Card4
