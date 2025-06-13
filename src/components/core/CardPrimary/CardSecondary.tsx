import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardSecondary({ text, icon, title, iconBgColor }: CardProps) {
    return (
        <div className="mt-10 rounded-sm transition-transform hover:scale-105">
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-color-haiti px-6 py-5">
                <div className="flex size-11 items-center justify-center rounded-lg bg-gradient-to-r from-color-studio to-color-persianBlue">
                    {icon}
                </div>
                <div>
                    <h1 className="text-lg font-semibold text-white">{title}</h1>
                </div>
                <div>
                    <p className="text-center text-sm font-normal text-color-cblue">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default CardSecondary
