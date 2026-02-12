'use client'
import Link from 'next/link'
import * as React from 'react'

import CardSecondary from '@/components/core/CardPrimary/CardSecondary'
import { AnimatedList } from '@/components/magicui/animated-list'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'
import { Button } from '@/components/ui/button'

function Card2({ titlePrimary, cards, title, desc, buttonText }: CardSectionProps) {
    return (
        <section id="serviços" className="bg-color-wild py-24">
            <div className="container mx-auto items-center justify-center">
                <div className="flex flex-col justify-center gap-2 text-center">
                    <p className="text-base font-semibold text-color-studio">{titlePrimary}</p>
                    <BlurFade delay={0.15} direction="down" inView>
                        <p className="text-3xl font-semibold text-color-wood">{title}</p>
                    </BlurFade>
                    <BlurFade delay={0.15 * 1.5} direction="down" inView>
                        <p className="mx-auto text-base font-normal text-color-boulder 2xl:w-1/2">{desc}</p>
                    </BlurFade>
                </div>
                <div className="mx-auto mt-10 flex flex-col">
                    <AnimatedList>
                        {cards.map((card, index) => (
                            <CardSecondary
                                tag={card.tag}
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                text={card.text}
                                iconBgColor={card.iconBgColor}
                            />
                        ))}
                    </AnimatedList>
                </div>
                <div className="mt-8 flex flex-row items-center justify-center">
                    <div>
                        <Button variant="herobutton" size="hero" asChild className="rounded-full">
                            <Link href="https://wa.me/5531996398460">{buttonText}</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card2
