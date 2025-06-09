import { CardPrimaryProps } from '@/components/core/CardPrimary/CardPrimary.types'

function CardPrimary({ text, icon, title }: CardPrimaryProps) {
    return (
        <div className="mt-8 flex w-full flex-col gap-5 rounded-lg bg-white px-6 py-5 transition-transform hover:scale-105">
            <div className="flex size-11 items-center justify-center rounded-lg bg-color-magnolia">{icon}</div>
            <div>
                <h1 className="text-lg font-semibold text-black">{title}</h1>
            </div>
            <div>
                <p className="text-sm font-normal text-black text-color-storm">{text}</p>
            </div>
        </div>
    )
}

export default CardPrimary
