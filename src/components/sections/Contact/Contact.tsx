'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { ContactProps } from '@/components/sections/Contact/Contact.types'
import { Button } from '@/components/ui/button'

function Contact({ title, text, buttontext }: ContactProps) {
    return (
        <section className="container mx-auto mb-24">
            <div className="flex flex-col rounded-3xl bg-color-haiti sm:flex-row">
                <div className="mx-auto flex flex-col items-center justify-center gap-5 p-5 py-24 sm:p-8 lg:p-16">
                    <div>
                        <h1 className="text-center text-xl font-semibold text-white sm:text-left sm:text-2xl lg:text-4xl">
                            {title}
                        </h1>
                    </div>
                    <div>
                        <p className="whitespace-pre-line text-center text-sm font-normal text-color-cblue sm:text-left sm:text-base lg:text-base">
                            {text}
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-4 sm:justify-normal">
                        <div>
                            <Button variant="herobutton" size="hero" asChild>
                                <Link href="https://www.instagram.com/codecreativebr/">
                                    {buttontext} <ArrowRight className="ml-2 size-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
