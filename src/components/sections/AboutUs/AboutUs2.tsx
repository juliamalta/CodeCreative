'use client'

import { About2Props } from '@/components/sections/AboutUs/AboutUs.types'
function AboutUs2({ title, text1, text2 }: About2Props) {
    return (
        <section className="bg-color-woodsmoke3 pt-16 sm:pt-24" id="sobre">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row 2xl:gap-16">
                <div className="lg:w- flex flex-col gap-10">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-full 2xl:w-full">
                            <p className="items-center justify-center text-center text-4xl font-semibold text-white 2xl:text-5xl">
                                {title}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <p className="w-2/3 text-center text-base font-normal text-color-maverick">{text1}</p>
                        <p className="text-center text-base font-normal text-color-storm">{text2}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs2
