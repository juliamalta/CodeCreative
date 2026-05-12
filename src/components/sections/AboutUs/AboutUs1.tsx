'use client'

import { withAnimation } from '@/common/hocs'
import { AnimatedTechBackground } from '@/components/animations/background/AnimatedTechBackground'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { AboutProps } from '@/components/sections/AboutUs/AboutUs.types'

function AboutUs1({ title, text1, text2, titlePrimary }: AboutProps) {
    return (
        <section className="relative overflow-hidden pt-16 sm:pt-24" id="sobre">
            <AnimatedTechBackground />

            <div className="container mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row 2xl:gap-16">
                <div className="flex flex-col gap-10 lg:w-2/3">
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-base font-semibold text-color-studio">{titlePrimary}</p>
                        <div className="w-full 2xl:w-2/5">
                            <TypingAnimation duration={30} className="text-center text-4xl font-semibold text-black">
                                {title}
                            </TypingAnimation>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <p className="text-center text-base font-normal text-color-storm">{text1}</p>
                        <p className="text-base font-normal text-color-storm">{text2}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(AboutUs1, 'fade-up')
