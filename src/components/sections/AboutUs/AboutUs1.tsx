'use client'

import { withAnimation } from '@/common/hocs'
import { AnimatedTechBackground } from '@/components/animations/background/AnimatedTechBackground'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { AboutProps } from '@/components/sections/AboutUs/AboutUs.types'

import FeaturesImg1 from '../../../../public/images/about.png'

function AboutUs1({ title, text1, text2, about }: AboutProps) {
    return (
        <section className="relative overflow-hidden py-32" id="sobre">
            <AnimatedTechBackground />

            <div className="container mx-auto flex flex-col items-center justify-between gap-8 lg:flex-row">
                {/* Text & Features Section */}
                <div className="flex flex-col gap-10 lg:w-1/3">
                    <div className="flex flex-col gap-6">
                        <TypingAnimation className="text-3xl font-semibold text-black">{title}</TypingAnimation>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="text-base font-normal text-color-storm">{text1}</p>
                        <p className="text-base font-normal text-color-storm">{text2}</p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative mt-10 md:mt-0">
                    <div className="w-2/7 md:w-2/7">
                        <img src={FeaturesImg1.src} alt="img" className="h-auto rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(AboutUs1, 'fade-up')
