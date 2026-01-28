'use client'

import { withAnimation } from '@/common/hocs'
import { AnimatedTechBackground } from '@/components/animations/background/AnimatedTechBackground'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { AboutProps } from '@/components/sections/AboutUs/AboutUs.types'

import FeaturesImg1 from '../../../../public/images/about.png'

function AboutUs1({ title, text1, text2, about, titlePrimary }: AboutProps) {
    return (
        <section className="relative overflow-hidden py-24" id="sobre">
            <AnimatedTechBackground />

            <div className="container mx-auto flex flex-col items-center justify-between gap-8 lg:flex-row 2xl:gap-16">
                <div className="flex w-full flex-col gap-10 lg:w-2/3 2xl:w-2/5">
                    <div className="flex flex-col gap-6">
                        <p className="text-base font-semibold text-color-studio">{titlePrimary}</p>
                        <TypingAnimation duration={30} className="text-3xl font-semibold text-black">
                            {title}
                        </TypingAnimation>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="text-base font-normal text-color-storm">{text1}</p>
                        <p className="text-base font-normal text-color-storm">{text2}</p>
                    </div>
                </div>

                <div className="relative mt-10 md:mt-0">
                    <div className="flex w-full justify-center">
                        <img
                            src={FeaturesImg1.src}
                            alt="img"
                            className="h-auto rounded-xl sm:w-full md:w-3/4 lg:w-full 2xl:w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(AboutUs1, 'fade-up')
