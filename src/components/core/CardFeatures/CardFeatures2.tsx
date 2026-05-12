import { CardFeaturesProps } from '@/components/core/CardFeatures/CardFeatures.types'
import CheckIcon from '../../../../public/svg/check'

function CardFeatures2({ title, desc, isLast }: CardFeaturesProps) {
    return (
        <div>
            <div className="flex justify-center gap-8">
                <div className="flex gap-4">
                    <CheckIcon />
                </div>
                <div className={`flex flex-col gap-2 pb-4 ${!isLast ? 'border-b-2 border-color-woodsmoke2' : ''}`}>
                    <p className="text-md text-2xl font-bold text-white 2xl:text-2xl">{title}</p>
                    <p className="text-md text-left text-color-maverick 2xl:text-base">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CardFeatures2
