'use client'
import * as React from 'react'

import { AnimatedTechBackground } from '@/components/animations/background/AnimatedTechBackground'
import { CardThree } from '@/components/core/CardPrimary'
import CardWork from '@/components/core/CardPrimary/Card-work'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

function Cards3({ cards, title, desc, titlePrimary }: CardSectionProps) {
    return (
        <section id="trabalho" className="py-16 sm:py-24">
            <AnimatedTechBackground />
            <div className="container mx-auto">
                <div className="flex flex-col justify-between gap-2 2xl:flex-row">
                    <div className="flex w-full flex-col gap-4">
                        <p className="text-base font-semibold text-color-studio">{titlePrimary}</p>
                        <BlurFade delay={0.15} direction="down" inView>
                            <p className="text-3xl font-semibold">{title}</p>
                        </BlurFade>
                    </div>
                    <div className="2xl:w-2/6 2xl:text-right">
                        <BlurFade delay={0.15 * 1.5} direction="down" inView>
                            <p className="mx-auto text-base font-normal text-color-boulder">{desc}</p>
                        </BlurFade>
                    </div>
                </div>
                <div className="mx-auto mt-10">
                    <Carousel>
                        <CarouselContent className="flex gap-8">
                            {cards.map((card, index) => (
                                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/2 2xl:basis-1/2">
                                    <CardWork
                                        tag={card.tag ?? []}
                                        title={card.title}
                                        description={card.desc}
                                        img={card.img}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Cards3
