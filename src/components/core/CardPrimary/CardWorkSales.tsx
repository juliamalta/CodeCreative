import { CardWorkProps } from '@/components/core/CardPrimary/Card.types'
import Image from 'next/image'

function CardWorkSales({ title, description, img, tag }: CardWorkProps) {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border-[1px] border-color-woodsmoke2">
            <div className="h-48 overflow-hidden">
                <Image src={img!} alt={title} width={371} height={371} className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-1 flex-col gap-4 px-10 py-7">
                <div className="flex flex-col gap-4">
                    <div className="mt-3 flex flex-wrap gap-4">
                        {tag?.map((t, i) => (
                            <div
                                className="flex h-5 items-center justify-center rounded-2xl border border-color-purble p-3"
                                key={i}>
                                <p className="text-center text-sm text-color-studio">{t}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-2xl font-semibold text-white">{title}</p>
                    <p className="text-color-maverick">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardWorkSales
