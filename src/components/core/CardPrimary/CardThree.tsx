import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardThree({ text, icon, title, desc, img }: CardProps) {
    return (
        <div className="rounded-2xl bg-white shadow-2xl transition-transform hover:scale-105 sm:w-2/3 lg:w-1/3 lg:flex-col">
            <div>
                <img src={img} alt="img" className="h-auto w-full rounded-t-2xl object-cover" />
            </div>
            <div className="flex flex-col gap-4 p-6">
                <div>
                    <p className="text-xl font-semibold md:text-2xl">{text}</p>
                </div>
                <div className="inline-flex w-max items-center justify-center rounded-full bg-color-blue px-5 py-2">
                    <p className="text-xs font-semibold text-color-studio">{title}</p>
                </div>
                <div className="w-full 2xl:w-2/3">
                    <p className="text-sm text-color-storm">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CardThree
