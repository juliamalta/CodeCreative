import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardSecondary({ text, icon, title, iconBgColor }: CardProps) {
    return (
        <div className="flex items-center justify-center gap-4 rounded-2xl p-12" style={{ backgroundColor: '#0E0D2B' }}>
            <div>
                <div className="flex size-11 items-center justify-center rounded-lg bg-gradient-to-r from-color-studio to-color-persianBlue">
                    {icon}
                </div>
            </div>
            <div className="items-center justify-center">
                <div>
                    <p className="text-lg font-semibold text-white">{title}</p>
                </div>
                <div>
                    <p className="text-color-cblue">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default CardSecondary
