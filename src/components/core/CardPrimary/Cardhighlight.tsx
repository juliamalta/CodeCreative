import { CardHigthligthProps } from '@/components/core/CardPrimary/Card.types'

function CardHighlight({ text, icon, title, payment, paymentTitle, higthligth }: CardHigthligthProps) {
    return (
        <div
            className={`relative rounded-3xl transition-transform hover:scale-105 ${
                higthligth
                    ? 'border-[1px] border-color-purble bg-color-mine'
                    : 'rounded-3xl border-[1px] border-color-woodsmoke shadow-sm transition-transform hover:scale-105'
            }`}>
            {higthligth && (
                <div className="absolute right-3 rounded-sm bg-color-purble px-4 py-1 text-xs font-semibold text-white shadow-md">
                    Mais vendido
                </div>
            )}
            <div className="mx-auto flex h-full flex-col justify-between">
                <div className="flex w-full flex-col gap-5 rounded-lg px-6 py-5">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-color-purble">{icon}</div>

                    <div>
                        <h1 className="text-2xl font-semibold text-white">{title}</h1>
                    </div>

                    <div className="w-full">
                        <p className="text-sm font-normal text-color-maverick">{text}</p>
                    </div>
                </div>

                <div className="px-6 py-5">
                    <div className="mb-4 border-t border-color-gallery"></div>

                    <div className="w-full">
                        <p className="text-sm font-normal text-white">{paymentTitle}</p>
                        <p className="text-3xl font-bold text-color-maverick">{payment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHighlight
