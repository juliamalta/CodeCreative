'use client'

import { FeaturesProps } from '@/components/sections/Features/Features.types'

import FeaturesImg1 from '../../../../public/images/features1.png'
import FeaturesImg from '../../../../public/images/features2.png'

export function Features1({ title, desc, features }: FeaturesProps) {
    return (
        <section className="relative py-32" style={{ backgroundColor: '#131C11' }}>
            <div className="container mx-auto flex flex-col 2xl:flex-row">
                {/* Image Section */}
                <div className="relative hidden w-1/2 2xl:block">
                    <img src={FeaturesImg1.src} className="absolute bottom-1/4" alt="img" />
                    <img src={FeaturesImg.src} className="absolute left-1/4 top-1/4" alt="img" />
                </div>

                {/* Text & Features Section */}
                <div className="flex flex-col gap-10 lg:w-1/2">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl text-white">{title}</h1>
                        <p className="text-base font-semibold text-white">{desc}</p>
                    </div>

                    {/* Features List */}
                    <div className="flex flex-col gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-row gap-4">
                                <div className="rounded-full bg-black p-6">{feature.icon}</div>
                                <div className="flex flex-col justify-center">
                                    <p className="font-bold text-white">{feature.title}</p>
                                    <p className="text-white">{feature.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
