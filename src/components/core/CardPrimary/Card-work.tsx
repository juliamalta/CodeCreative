import { CardWorkProps } from '@/components/core/CardPrimary/Card.types'

import imgWork from '../../../../public/images/img2.png'
import Image from 'next/image'
function CardWork({ title, description, img, tag }: CardWorkProps) {
    return (
        <div className="flex flex-col rounded-2xl">
            <div className="h-80 overflow-hidden">
                <Image src={img!} alt="img" width={501} height={323} className="size-full object-cover" />
            </div>
            <div className="flex flex-col gap-4 px-10 py-7">
                <div className="flex gap-2">
                    {tag.map((t, i) => (
                        <div
                            className="flex h-5 items-center justify-center whitespace-nowrap rounded-2xl border border-color-boulder px-3 py-3"
                            key={i}>
                            <p className="text-center text-color-boulder">{t}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-semibold">{title}</p>
                    <p className="text-color-storm">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardWork
