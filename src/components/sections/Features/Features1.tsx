import { Button } from '@/components/ui/button'
import { FeaturesProps } from '@/components/sections/Features/Features.types'
import CardFeatures from '@/components/core/CardFeatures/CardFeatures'
import Link from 'next/link'
import CardFeatures2 from '@/components/core/CardFeatures/CardFeatures2'
function Features1({ title, text1, features, buttonText, features1 }: FeaturesProps) {
    return (
        <section id="features">
            <div className="bg-color-woodsmoke3">
                <div className="container py-24">
                    <div className="flex flex-col justify-between gap-12 lg:flex-row">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-10">
                                <p className="w-full items-center justify-center text-center text-4xl font-semibold text-white md:text-left 2xl:w-2/3 2xl:text-5xl">
                                    {title}
                                </p>
                                <p className="text-center text-base font-normal text-color-maverick md:text-left lg:w-2/3">
                                    {text1}
                                </p>
                            </div>
                            <div className="hidden flex-col justify-center gap-8 lg:flex">
                                {features.map((feature, index) => (
                                    <CardFeatures
                                        key={index}
                                        title={feature.title}
                                        desc={feature.desc}
                                        icon={feature.icon}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 lg:flex-row">
                            <div className="flex flex-col justify-center gap-8">
                                {features1.map((features, index) => (
                                    <CardFeatures2
                                        key={index}
                                        title={features.title}
                                        desc={features.desc}
                                        isLast={features.isLast}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features1
