import { FiGithub } from 'react-icons/fi'
import { GoArrowUpRight } from 'react-icons/go'

import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardThree({ text, icon, title, desc, img, iconsocial1, iconsocial2 }: CardProps) {
    return (
        <div className="border-color-moon rounded-2xl border-2 bg-white shadow-2xl transition-transform hover:scale-105 sm:w-2/3 lg:w-1/3 lg:flex-col">
            <div>
                <img src={img} alt="img" className="h-auto w-full rounded-t-2xl object-cover" />
            </div>
            <div className="flex flex-row p-6">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-xl font-semibold md:text-2xl">{text}</p>
                    </div>
                    <div className="inline-flex w-max items-center justify-center rounded-full bg-gradient-to-r from-color-studio to-color-persianBlue px-5 py-2">
                        <p className="text-xs font-semibold text-white">{title}</p>
                    </div>
                    <div className="w-full">
                        <p className="text-color-cblue text-sm">{desc}</p>
                    </div>
                </div>
                <div className="mx-auto flex gap-6">
                    <div className="bg-color-moon flex h-11 items-center justify-center rounded-full px-3">
                        {iconsocial1}
                    </div>
                    <div className="bg-color-moon flex h-11 items-center justify-center rounded-full px-3">
                        {iconsocial2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardThree
