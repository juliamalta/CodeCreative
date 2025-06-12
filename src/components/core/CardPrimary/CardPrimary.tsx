import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardPrimary({ text, icon, title }: CardProps) {
    return (
        <div className="card-border-gradient rounded-lg p-[2px] transition-transform hover:scale-105">
            <div className="bg-color-haiti">
                <div className="flex w-full flex-col gap-5 rounded-lg px-6 py-5">
                    <div className="flex size-11 items-center justify-center rounded-lg">{icon}</div>
                    <div>
                        <h1 className="text-lg font-semibold text-white">{title}</h1>
                    </div>
                    <div className="w-full 2xl:w-10/12">
                        <p className="text-color-scampi text-sm font-normal">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPrimary
