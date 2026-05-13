'use client'

import { motion } from 'framer-motion'
import { CardWorkProps } from '@/components/core/CardPrimary/Card.types'
import Image from 'next/image'
import {
    cardHoverAnimation,
    tagHoverAnimation,
    titleHoverAnimation,
} from '@/components/animations/animationCards/animations-Cards'

function CardWorkSales({ title, description, img, tag }: CardWorkProps) {
    return (
        <motion.div
            whileHover={cardHoverAnimation.whileHover}
            transition={cardHoverAnimation.transition}
            className="bg-color-woodsmoke2/40 group flex h-full flex-col overflow-hidden rounded-2xl border border-color-woodsmoke2 backdrop-blur-sm">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={img!}
                    alt={title}
                    width={371}
                    height={371}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/0" />
            </div>

            <div className="flex flex-1 flex-col gap-4 px-6 py-6">
                <div className="mt-2 flex flex-wrap gap-2">
                    {tag?.map((t, i) => (
                        <motion.div
                            key={i}
                            whileHover={tagHoverAnimation}
                            className="flex h-8 items-center justify-center rounded-full px-3">
                            <p className="text-xs font-bold text-color-mauve">{t}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.p whileHover={titleHoverAnimation} className="text-xl font-semibold text-white">
                    {title}
                </motion.p>

                <p className="text-sm leading-relaxed text-color-maverick">{description}</p>
            </div>
        </motion.div>
    )
}

export default CardWorkSales
