import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardSecondary({ text, icon, title, iconBgColor }: CardProps) {
    return (
        <div className="container mt-8 rounded-sm transition-transform hover:scale-105">
            <div
                className="flex items-center justify-center gap-8 rounded-2xl p-8"
                style={{ backgroundColor: '#0E0D2B' }}>
                <div className="flex items-center justify-center">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-gradient-to-r from-color-studio to-color-persianBlue">
                        {icon}
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-2">
                    <div>
                        <h1 className="text-lg font-semibold text-white">{title}</h1>
                    </div>
                    <div>
                        <p className="text-sm font-normal text-color-cblue">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSecondary
