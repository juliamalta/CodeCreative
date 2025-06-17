import { Separator } from '@radix-ui/react-separator'
import { ArrowRight } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { GoArrowUpRight } from 'react-icons/go'

import { CardProps } from '@/components/core/CardPrimary/Card.types'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

function CardThree({ text, icon, title, desc, img, iconsocial1, iconsocial2 }: CardProps) {
    return (
        <div className="rounded-2xl bg-white shadow-2xl transition-transform hover:scale-105 lg:flex-col">
            <div className="flex flex-col gap-8 p-6">
                <div className="flex justify-between">
                    <div>
                        <div>
                            <p className="text-xl font-semibold md:text-lg">{text}</p>
                        </div>
                        <div>
                            <p className="text-sm text-color-studio">ProTracker</p>
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-color-studio to-color-persianBlue px-5 py-2">
                        <p className="text-xs font-semibold text-white">{title}</p>
                    </div>
                </div>

                <div className="w-full">
                    <p className="text-sm text-color-haiti">{desc}</p>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                        <div>
                            <p>Progresso</p>
                        </div>
                        <div>
                            <p>10%</p>
                        </div>
                    </div>
                    <div>
                        <Progress value={10} />
                    </div>
                    <div>
                        <Separator />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardThree
