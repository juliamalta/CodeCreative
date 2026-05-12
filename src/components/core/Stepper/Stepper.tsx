import React from 'react'
import { StepperProps } from '@/components/core/Stepper/Stepper.types'

function Stepper({ steps }: StepperProps) {
    return (
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-0">
            {steps.map((step, index) => {
                const isLast = index === steps.length - 1

                return (
                    <div
                        key={index}
                        className="relative flex w-full flex-col items-center justify-start gap-5 px-4 py-5">
                        {!isLast && (
                            <>
                                {/* linha desktop */}
                                <div className="absolute right-0 top-16 hidden h-[2px] w-full translate-x-1/2 bg-gradient-to-r from-[#7E22CE] via-[#7E22CE] to-[#7E22CE] lg:block" />

                                {/* linha mobile */}
                                <div className="absolute bottom-[-20px] left-1/2 h-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#7E22CE] via-[#7E22CE] to-[#7E22CE] lg:hidden" />
                            </>
                        )}

                        <div className="z-10 rounded-full bg-gradient-to-r from-color-purbleh to-color-mauve p-[4px] shadow-[0_0_20px_rgba(221,184,255,0.35)]">
                            <div className="rounded-full bg-color-woodsmoke3 p-6 sm:p-8">
                                <p className="text-2xl font-bold text-white sm:text-3xl">
                                    {String(index + 1).padStart(2, '0')}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-center text-lg font-semibold text-white sm:text-xl">{step.title}</h1>
                        </div>

                        <div className="w-full max-w-[260px] text-center">
                            <p className="text-sm font-normal text-color-maverick sm:text-base">{step.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Stepper
