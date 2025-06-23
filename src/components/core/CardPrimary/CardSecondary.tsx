import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardSecondary({ text, icon, title, iconBgColor }: CardProps) {
    return (
        <div className="transition-transform hover:scale-105">
            <div>
                <div
                    className="flex size-full h-32 items-center justify-center gap-4 rounded-2xl px-6 py-8"
                    style={{ backgroundColor: '#0E0D2B' }}>
                    <div>
                        <div className="flex size-11 items-center justify-center rounded-lg bg-gradient-to-r from-color-studio to-color-persianBlue">
                            {icon}
                        </div>
                    </div>
                    <div className="items-center justify-center">
                        <div>
                            <p className="whitespace-nowrap font-semibold text-white 2xl:text-lg">{title}</p>
                        </div>
                        <div>
                            <p className="text-sm text-color-cblue sm:text-xs 2xl:text-sm">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSecondary
