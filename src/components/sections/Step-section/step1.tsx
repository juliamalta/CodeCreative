import { Stepper } from '@/components/core/Stepper'
import { StepProps } from '@/components/sections/Step-section/step.types'
function Step1({ title, text1, text2, icon, titlePrimary }: StepProps) {
    return (
        <section className="bg-color-woodsmoke3 pt-16 sm:py-24" id="sobre">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8 lg:flex-col">
                <div className="opacity-8 flex items-center gap-2 rounded-full bg-color-woodsmoke2 px-6 py-2">
                    <div>{icon}</div>
                    <div>
                        <p className="font-regular text-base text-color-boulder">{titlePrimary}</p>
                    </div>
                </div>
                <div className="lg:w- flex flex-col gap-10">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-full 2xl:w-full">
                            <p className="items-center justify-center text-center text-4xl font-semibold text-white 2xl:text-5xl">
                                {title}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <p className="w-2/3 text-center text-base font-normal text-color-maverick">{text1}</p>
                        <p className="text-base font-normal text-color-maverick">{text2}</p>
                    </div>
                </div>
                <div>
                    <Stepper
                        steps={[
                            {
                                title: 'BRIEFING',
                                text: 'Entendemos seu público, objetivos e diferenciais competitivos.',
                            },
                            {
                                title: 'PROPOSTA',
                                text: 'Apresentamos o mapa visual e a estratégia de conversão ideal.',
                            },
                            {
                                title: 'DESENVOLVIMENTO',
                                text: 'Código limpo e design refinado construídos em alta performance.',
                            },
                            {
                                title: 'ENTREGA',
                                text: 'Seu site no ar e sua empresa pronta para novos resultados.',
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

export default Step1
