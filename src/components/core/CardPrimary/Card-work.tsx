import { CardWorkProps } from '@/components/core/CardPrimary/Card.types'

import imgWork from '../../../../public/images/img2.png'
function CardWork({ title, description, img, tag }: CardWorkProps) {
    return (
        <div className="flex flex-col rounded-2xl">
            <div className="h-80 overflow-hidden">
                <img src={imgWork.src} alt="img" className="size-full object-cover" />
            </div>
            <div className="flex flex-col gap-4 px-10 py-7">
                <div className="flex gap-2">
                    {tag.map((t, i) => (
                        <div
                            className="flex h-5 items-center justify-center rounded-2xl border border-color-studio px-3 py-3"
                            key={i}>
                            <p className="text-center text-color-studio">{t}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold">{title}</p>
                    <p className="text-color-storm">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardWork
