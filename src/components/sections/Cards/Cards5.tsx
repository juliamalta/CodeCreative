'use client'
import * as React from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import CardWorkSales from '@/components/core/CardPrimary/CardWorkSales'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Cards5({ cards, title, desc, titlePrimary, buttonText, icon }: CardSectionProps) {
    return (
        <section id="portifolio" className="bg-color-woodsmoke3 py-16 sm:py-24">
            <div className="container mx-auto flex flex-col gap-8">
                <div className="flex flex-col items-center justify-between gap-6">
                    <div className="opacity-8 flex items-center gap-2 rounded-full bg-color-woodsmoke2 px-6 py-2">
                        <div>{icon}</div>
                        <div>
                            <p className="font-regular text-base text-color-boulder">{titlePrimary}</p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center gap-4">
                        <p className="items-center justify-center text-center text-4xl font-semibold text-white 2xl:text-5xl">
                            {title}
                        </p>
                    </div>
                    <div>
                        <BlurFade delay={0.15 * 1.5} direction="down" inView>
                            <p className="mx-auto w-2/3 text-center text-base font-normal text-color-maverick">
                                {desc}
                            </p>
                        </BlurFade>
                    </div>
                </div>
                <div className="mt-10">
                    <Carousel>
                        <CarouselContent className="flex">
                            {cards?.map((card, index) => (
                                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/2 2xl:basis-1/3">
                                    <CardWorkSales
                                        tag={card.tag ?? []}
                                        title={card.title}
                                        description={card.desc}
                                        img={card.img}
                                        link={card.link}
                                        buttonText={card.buttonText!}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="2xl:hidden" />
                        <CarouselNext className="2xl:hidden" />
                    </Carousel>
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

export default Cards5
