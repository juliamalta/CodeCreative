import { CardFeaturesProps } from '@/components/core/CardFeatures/CardFeatures.types'

function CardFeatures({ title, desc, icon }: CardFeaturesProps) {
    return (
        <div>
            <div className="flex items-center gap-8">
                <div className="flex justify-center gap-4">
                    {icon}
                    <p className="text-md text-3xl font-bold text-white 2xl:text-3xl">{title}</p>
                </div>
                <div>
                    <p className="text-md text-color text-left text-white 2xl:w-2/3 2xl:text-base">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CardFeatures
