'use client'

import { withAnimation } from '@/common/hocs'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { AboutProps } from '@/components/sections/AboutUs/AboutUs.types'

import FeaturesImg1 from '../../../../public/images/about.png'

function AboutUs1({ title, text1, text2, about }: AboutProps) {
    return (
        <section className="relative bg-white py-32">
            <div className="container mx-auto flex flex-col justify-center gap-8 lg:flex-row">
                {/* Text & Features Section */}
                <div className="flex flex-col gap-10 lg:w-1/2">
                    <div className="flex flex-col gap-6">
                        <TypingAnimation className='text-black" text-2xl font-semibold'>{title}</TypingAnimation>
                    </div>
                    <div className="flex flex-col gap-8 2xl:w-2/3">
                        <p className="text-base font-normal text-color-storm">{text1}</p>
                        <p className="text-base font-normal text-color-storm">{text2}</p>
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
                                        <div className="text-5xl font-bold text-color-studio">
                                            +
                                            <NumberTicker value={5} className="text-5xl font-bold text-color-studio" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-base font-medium text-color-storm">Anos de</span>
                                        <span className="text-base font-medium text-color-storm">Experiência</span>
                                        <span className="text-base font-medium text-color-storm">no mercado</span>
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

export default withAnimation(AboutUs1, 'fade-up')
