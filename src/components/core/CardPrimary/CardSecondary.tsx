import { CardProps } from '@/components/core/CardPrimary/Card.types'
import img from '../../../../public/images/cardimh.png'
function CardSecondary({ text, icon, title, tag }: CardProps) {
    return (
        <div className="transition-transform hover:scale-105">
            <div>
                <div
                    className="flex size-full items-center justify-center gap-4 rounded-2xl p-12 shadow-sm md:h-60"
                    style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <img src={img.src} alt="logo" />
                            <p className="whitespace-nowrap font-semibold text-color-wood 2xl:text-3xl">{title}</p>
                        </div>
                        <div>
                            <p className="text-sm text-color-storm sm:text-xs 2xl:text-sm">{text}</p>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-4">
                            {tag?.map((t, i) => (
                                <div
                                    className="flex h-5 items-center justify-center rounded-2xl border border-color-purble p-3"
                                    key={i}>
                                    <p className="text-center text-sm text-color-studio">{t}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSecondary
