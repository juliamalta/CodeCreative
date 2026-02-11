import Accordion from '@/components/core/Accordion/Accordion'
import { BlurFade } from '@/components/magicui/blur-fade'
import { FaqProps } from '@/components/sections/Faqs/Faqs.types'
import { FaWhatsapp } from 'react-icons/fa'

function Faq1({ faqs, title, description }: FaqProps) {
    return (
        <div className="container flex flex-col justify-between gap-8 py-16 sm:py-24 lg:flex-row">
            <div className="flex flex-col gap-8">
                <BlurFade delay={0.15} direction="down" inView>
                    <p className="tex w-2/3 text-4xl font-semibold">{title}</p>
                </BlurFade>
                <div>
                    <p className="w-full text-sm text-color-storm 2xl:w-2/3">{description}</p>
                </div>
                <div className="hidden lg:flex">
                    <a
                        href="https://wa.me/5531996398460"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto relative flex w-full items-center justify-center gap-3 rounded-full bg-color-purble px-5 py-3 text-sm font-semibold text-white transition hover:border-2 hover:border-color-studio hover:bg-white hover:text-color-studio sm:w-fit sm:text-base 2xl:text-base">
                        <FaWhatsapp className="text-xl sm:text-2xl" />
                        <span className="whitespace-nowrap">Tire sua dúvida com nossa equipe</span>
                    </a>
                </div>
            </div>
            <div className="w-full">
                {faqs.map((item, idx) => (
                    <Accordion key={idx} title={item.title} accordion={!item.accordion}>
                        {item.answer}
                    </Accordion>
                ))}
            </div>
        </div>
    )
}
export default Faq1
