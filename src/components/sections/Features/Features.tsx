'use client'

import { FeaturesProps } from '@/components/sections/Features/Features.types'

import FeaturesImg1 from '../../../../public/images/about.png'

export function Features1({ title, desc, features }: FeaturesProps) {
    return (
        <section className="relative bg-white py-32">
            <div className="container mx-auto flex flex-col justify-between gap-8 lg:flex-row">
                {/* Text & Features Section */}
                <div className="flex flex-col gap-10 lg:w-1/2">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-2xl font-semibold text-black">{title}</h1>
                    </div>
                    <div className="flex flex-col gap-8 2xl:w-2/3">
                        <p className="text-base font-normal text-color-storm">
                            Somos uma agência digital especializada em transformar ideias em soluções tecnológicas
                            inovadoras. Com mais de 3 anos no mercado, já entregamos mais de 50 projetos para clientes
                            de diversos segmentos.
                        </p>
                        <p className="text-base font-normal text-color-storm">
                            Nossa missão é ajudar empresas a crescer através da tecnologia, oferecendo soluções
                            personalizadas que combinam design excepcional com desenvolvimento técnico de alta
                            qualidade.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative mt-10 md:mt-0">
                    <div className="w-2/7 md:w-2/7">
                        <img src={FeaturesImg1.src} alt="img" className="h-auto rounded-xl" />
                    </div>

                    {/* Information about Experience */}
                    <div className="absolute -bottom-12 -left-12 lg:-bottom-16 lg:-left-16">
                        <div className="relative">
                            <div className="rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-gray-100">
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="text-5xl font-bold text-color-studio">+5</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-base font-medium text-color-storm">Anos de</span>
                                        <span className="text-base font-medium text-color-storm">Experiência</span>
                                        <span className="text-base text-gray-500">no mercado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
