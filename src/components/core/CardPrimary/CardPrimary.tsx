import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardPrimary({ text, icon, title, iconBgColor }: CardProps) {
    return (
        <div className="mt-8 flex w-full flex-col gap-5 rounded-lg bg-white px-6 py-5 transition-transform hover:scale-105">
            <div
                className="flex size-11 items-center justify-center rounded-lg"
                style={{ backgroundColor: iconBgColor }}>
                {icon}
            </div>
            <div>
                <h1 className="text-lg font-semibold text-black">{title}</h1>
            </div>
            <div className="w-full 2xl:w-10/12">
                <p className="text-sm font-normal text-black text-color-storm">{text}</p>
            </div>
        </div>
    )
}

export default CardPrimary
