import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardPrimary({ text, icon, title }: CardProps) {
    return (
        <div className="rounded-3xl border-2 border-color-studio  transition-transform hover:scale-105">
            <div className="h-60">
                <div className="flex w-full flex-col gap-5 rounded-lg px-6 py-5">
                    <div className="flex size-11 items-center justify-center">{icon}</div>
                    <div>
                        <h1 className="text-lg font-semibold text-white">{title}</h1>
                    </div>
                    <div className="w-full 2xl:w-10/12">
                        <p className="text-sm text-color-cblue">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPrimary
