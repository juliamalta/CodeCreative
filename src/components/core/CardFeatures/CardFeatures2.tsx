import { CardFeaturesProps } from '@/components/core/CardFeatures/CardFeatures.types'
import CheckIcon from '../../../../public/svg/check'

function CardFeatures2({ title, desc, isLast }: CardFeaturesProps) {
    return (
        <div className={`flex gap-5 pb-6 ${!isLast ? 'border-b-2 border-color-woodsmoke2' : ''}`}>
            <div className="mt-1">
                <CheckIcon />
            </div>

            <div className="flex flex-col gap-5">
                <p className="text-2xl font-bold text-white">{title}</p>

                <p className="text-left text-color-maverick">{desc}</p>
            </div>
        </div>
    )
}

export default CardFeatures2
