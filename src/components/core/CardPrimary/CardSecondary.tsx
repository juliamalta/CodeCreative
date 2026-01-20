import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardSecondary({ text, icon, title, tag }: CardProps) {
    return (
        <div className="transition-transform hover:scale-105">
            <div>
                <div
                    className="flex size-full items-center justify-center gap-4 rounded-2xl border-2 border-color-studio p-12"
                    style={{ backgroundColor: '#0E0D2B' }}>
                    <div className="flex flex-col gap-2">
                        <div>
                            <p className="whitespace-nowrap font-semibold text-white 2xl:text-3xl">
                                {title}
                                <span className="text-color-studio">_</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-color-cblue sm:text-xs 2xl:text-sm">{text}</p>
                        </div>
                        <div className="mt-3 flex gap-4 flex-wrap">
                            {tag?.map((t, i) => (
                                <div
                                    className="flex h-5 items-center justify-center rounded-2xl border border-color-studio px-3 py-3"
                                    key={i}>
                                    <p className="text-center text-color-studio">{t}</p>
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
