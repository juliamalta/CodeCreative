'use client'

import { ArrowRight } from 'lucide-react'

import { AnimatedBackground } from '@/components/ui/animated-background'
import { Button } from '@/components/ui/button'

export function HeroSection() {
    return (
        <>
            <section className="container mx-auto bg-white py-24">
                <div className="items-center justify-center text-center">
                    <h1 className="mb-6 font-display text-display-lg font-normal leading-tight tracking-tight">
                        Transformamos <br></br>
                        <span className="text-color-studio font-bold">ideias em realidades</span>
                    </h1>
                    <p className="text-color-storm mb-8 text-lg leading-relaxed">
                        Somos uma agência especializada em desenvolvimento web,<br></br> mobile e design digital.
                        Criamos soluções inovadoras que<br></br> impulsionam o crescimento do seu negócio.
                    </p>
                    <div className="flex justify-center gap-3">
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
