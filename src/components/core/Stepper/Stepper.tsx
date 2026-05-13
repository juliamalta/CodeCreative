'use client'

import React from 'react'
import { motion } from 'motion/react'

import { StepperProps } from '@/components/core/Stepper/Stepper.types'

function Stepper({ steps }: StepperProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.2,
                    },
                },
            }}
            className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
            {steps.map((step, index) => {
                const isLast = index === steps.length - 1

                return (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 30,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                        }}
                        whileHover={
                            typeof window !== 'undefined' && window.innerWidth < 1024
                                ? {
                                      y: -10,
                                      scale: 1.03,
                                  }
                                : {}
                        }
                        className="group relative flex w-full flex-col items-center justify-start gap-5 px-4 py-5 transition-all duration-300">
                        {!isLast && (
                            <>
                                {/* linha desktop fixa */}
                                <div className="absolute left-1/2 top-16 hidden h-[2px] w-[calc(100%-2rem)] bg-gradient-to-r from-[#7E22CE] via-[#C084FC] to-[#7E22CE] lg:block" />

                                {/* linha mobile animada */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.2,
                                    }}
                                    className="absolute bottom-[-20px] left-1/2 h-10 w-[2px] origin-top -translate-x-1/2 bg-gradient-to-b from-[#7E22CE] via-[#C084FC] to-[#7E22CE] lg:hidden"
                                />
                            </>
                        )}

                        {/* círculo */}
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(221,184,255,0.20)',
                                    '0 0 40px rgba(221,184,255,0.45)',
                                    '0 0 20px rgba(221,184,255,0.20)',
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                            }}
                            className="z-10 rounded-full bg-gradient-to-r from-color-purbleh to-color-mauve p-[4px]">
                            <div className="rounded-full bg-color-woodsmoke3 p-6 transition-all duration-300 group-hover:bg-[#161616] sm:p-8">
                                <motion.p
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 200,
                                        delay: 0.2 + index * 0.1,
                                    }}
                                    className="text-2xl font-bold text-white sm:text-3xl">
                                    {String(index + 1).padStart(2, '0')}
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* título */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3 + index * 0.1,
                            }}>
                            <h1 className="text-center text-lg font-semibold text-white transition-colors duration-300 group-hover:text-color-mauve sm:text-xl">
                                {step.title}
                            </h1>
                        </motion.div>

                        {/* texto */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                delay: 0.4 + index * 0.1,
                            }}
                            className="w-full max-w-[260px] text-center">
                            <p className="text-sm font-normal leading-relaxed text-color-maverick sm:text-base">
                                {step.text}
                            </p>
                        </motion.div>
                    </motion.div>
                )
            })}
        </motion.div>
    )
}

export default Stepper
