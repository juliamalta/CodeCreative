import { CardProps } from '@/components/core/CardPrimary/Card.types'

import work1 from '../../../../public/images/work1.png'
function CardThree({ text, icon, title, desc, img }: CardProps) {
    return (
        <div className="w-2/8 flex items-center justify-between rounded-2xl bg-color-magnolia">
            <div>
                <div>
                    <img src={img} alt="img" className="h-auto w-full rounded-xl" />
                </div>
                <div className="flex flex-col gap-4 p-6">
                    <div className="flex w-1/2 items-center justify-center rounded-full bg-color-blue px-5 py-3">
                        <p className="text-xs font-semibold text-color-studio">{title}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold">{text}</p>
                    </div>
                    <div className="w-2/3">
                        <p className="text-sm text-color-storm">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardThree
