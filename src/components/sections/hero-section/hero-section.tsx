'use client'

import { ArrowRight } from 'lucide-react'

import { AnimatedBackground } from '@/components/ui/animated-background'
import { Button } from '@/components/ui/button'

export function HeroSection() {
    return (
        <>
            <section className="container mx-auto bg-white py-24">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="mb-6 text-5xl font-normal">
                            Transformamos <br></br>
                            <span className="font-bold text-color-studio">ideias em realidades</span>
                        </h1>
                        <p className="w-full text-base font-normal text-color-storm lg:w-2/5">
                            Somos uma agência especializada em desenvolvimento web, mobile e design digital. Criamos
                            soluções inovadoras que impulsionam o crescimento do seu negócio.
                        </p>
                    </div>
                    <div className="flex w-1/2 justify-center gap-3">
                        <Button variant="herobutton" size="hero">
                            Solicitar Orçamento <ArrowRight className="ml-2 size-4" />
                        </Button>
                        <Button variant="herobuttonsecondary" size="hero">
                            Ver nosso trabalho
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
