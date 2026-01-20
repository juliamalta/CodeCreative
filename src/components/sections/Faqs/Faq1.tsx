import Accordion from '@/components/core/Accordion/Accordion'
import { BlurFade } from '@/components/magicui/blur-fade'
import { FaqProps } from '@/components/sections/Faqs/Faqs.types'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

function Faq1({ faqs, title, description }: FaqProps) {
    return (
        <div className="container flex flex-col justify-between gap-8 py-24 lg:flex-row">
            <div className="flex flex-col gap-8">
                <BlurFade delay={0.15} direction="down" inView>
                    <p className="text-4xl font-semibold w-2/3">{title}</p>
                </BlurFade>
                <div>
                    <p className="w-full text-sm 2xl:w-2/4">{description}</p>
                </div>
            </div>
            <div className="w-full 2xl:w-2/3">
                {faqs.map((item, idx) => (
                    <Accordion title={item.title}>{item.answer}</Accordion>
                ))}
            </div>
        </div>
    )
}
export default Faq1
