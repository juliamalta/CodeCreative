'use client'
import { AccordionProps } from '@/components/core/Accordion/Accordion.types'
import { CardProps } from '@/components/core/CardPrimary/Card.types'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FaChevronUp } from 'react-icons/fa'

function Accordion({ title, children }: AccordionProps) {
    const [open, setOpen] = useState(false)

    return (
        <div onClick={() => setOpen(!open)} className="mb-8 flex cursor-pointer flex-col gap-8">
            <div className="flex justify-between border-b-2 pb-2">
                <h1 className="text-xl font-bold">{title}</h1>
                {open ? <FaChevronUp color="#833ECC" size={20} /> : <FaChevronDown color="#833ECC" size={20} />}
            </div>
            {open && <div>{children}</div>}
        </div>
    )
}

export default Accordion
