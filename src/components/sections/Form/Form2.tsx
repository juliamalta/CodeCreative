'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'sonner'
import { db } from '@/lib/firebase'
import Image from 'next/image'
import { FormsProps } from '@/components/sections/Form/Forms.types'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/form'
import { Input } from '@/components/input'
import { Button } from '@/components/ui/button'
import logo from '../../../../public/images/logohorizontal.png'

export function Forms2({ title, desc, contact }: FormsProps) {
    const formSchema = z.object({
        fullName: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.'),
        number: z.string().min(8, 'Informe um número válido.'),
        company: z.string().min(2, 'Informe sua empresa.').optional(),
        period: z.string().min(1, 'Selecione uma opção.'),
        resume: z.any().optional(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            number: '',
            company: '',
            period: '',
            resume: null,
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const resumeURL = null

            await addDoc(collection(db, 'leadsSales'), {
                fullName: values.fullName,
                number: values.number,
                company: values.company,
                period: values.period,
                resumeURL,
                createdAt: new Date(),
            })

            console.log('Lead enviado com sucesso!')
            toast.success('Mensagem enviada com sucesso!')

            form.reset()
        } catch (error) {
            toast.error('Erro ao enviar mensagem. Tente novamente.')
            console.error('Erro ao enviar formulário:', error)
        }
    }

    function maskBRPhone(value: string) {
        if (!value) return ''

        value = value.replace(/\D/g, '')
        value = value.slice(0, 13)

        value = value.replace(/^(\d{2})(\d)/, '+$1 $2')
        value = value.replace(/^(\+\d{2})\s?(\d{2})(\d)/, '$1 $2 $3')
        value = value.replace(/(\d{5})(\d{4})$/, '$1-$2')

        return value
    }

    const fieldClass =
        'w-full h-12 rounded-lg bg-color-woodsmoke3 text-white border-2 border-color-blue2 px-4 transition-all focus:border-transparent focus:ring-2 focus:ring-primary'

    return (
        <section
            id="formhero"
            className="relative mx-auto overflow-hidden bg-color-woodsmoke3 bg-cover bg-center px-2 py-16 sm:py-24"
            style={{ backgroundImage: "url('/images/bg-code-creative.png')" }}>
            {/* FUNDO ANIMADO */}
            <div className="pointer-events-none absolute inset-0 z-0">
                {/* Glow Roxo */}
                <div className="absolute left-[-120px] top-10 h-72 w-72 animate-pulse rounded-full bg-purple-500/20 blur-3xl" />

                {/* Glow Azul */}
                <div className="absolute bottom-0 right-[-120px] h-80 w-80 animate-pulse rounded-full bg-blue-500/20 blur-3xl [animation-delay:1s]" />

                {/* Glow Central Girando */}
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite] rounded-full bg-fuchsia-500/10 blur-3xl" />

                {/* Partículas */}
                <div className="absolute left-[10%] top-[20%] h-2 w-2 animate-bounce rounded-full bg-white/40" />
                <div className="absolute left-[30%] top-[70%] h-3 w-3 animate-ping rounded-full bg-purple-400/40" />
                <div className="absolute right-[20%] top-[30%] h-2 w-2 animate-bounce rounded-full bg-blue-400/40 [animation-delay:1s]" />
                <div className="absolute bottom-[20%] left-[50%] h-2 w-2 animate-ping rounded-full bg-fuchsia-400/40 [animation-delay:2s]" />
            </div>

            {/* Fade inferior */}
            <div className="absolute bottom-0 left-0 z-[1] h-32 w-full bg-gradient-to-b from-transparent to-color-woodsmoke3" />

            <div className="container relative z-10 flex flex-col gap-10 lg:flex-row">
                {/* TEXTO */}
                <div className="flex flex-col justify-center gap-8 lg:w-2/3">
                    <div>
                        <div className="flex items-start">
                            <Image width={252} height={73} src={logo} alt="logo" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h1 className="text-left text-4xl font-normal leading-tight text-white md:text-5xl 2xl:w-3/4 2xl:text-6xl">
                            {title}
                        </h1>
                        <p className="text-left text-base text-color-boulder 2xl:w-2/3">{desc}</p>
                    </div>

                    <div className="flex flex-row items-center gap-12 sm:flex-row sm:justify-center lg:justify-start">
                        {contact.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div>{item.icon}</div>

                                <div>
                                    <p className="text-3xl font-bold text-white">{item.titleContact}</p>
                                    <p className="text-sm text-white">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FORMULÁRIO */}
                <div className="w-full lg:w-2/3 2xl:w-1/2">
                    <div className="space-y-8 rounded-2xl border-[2px] border-color-woodsmoke2 bg-color-woodsmoke3 p-10 shadow-2xl backdrop-blur-xl">
                        <div>
                            <p className="w-full text-left text-2xl font-bold text-white">
                                Quero meu orçamento gratuito
                            </p>
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                {/* NOME */}
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-xs font-semibold text-color-maverick">
                                                NOME COMPLETO
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    className={fieldClass}
                                                    placeholder="Como posso te chamar?"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* WHATSAPP + EMPRESA */}
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name="number"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-xs font-semibold text-color-maverick">
                                                    WHATSAPP
                                                </FormLabel>

                                                <FormControl>
                                                    <Input
                                                        className={fieldClass}
                                                        placeholder="(+55) 31 9 0000-0000"
                                                        value={field.value}
                                                        onChange={(e) => {
                                                            const masked = maskBRPhone(e.target.value)
                                                            field.onChange(masked)
                                                        }}
                                                    />
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-xs font-semibold text-color-maverick">
                                                    TIPO DE NEGÓCIO
                                                </FormLabel>

                                                <FormControl>
                                                    <select {...field} className={fieldClass}>
                                                        <option value="">Selecione</option>
                                                        <option value="ecommerce">E-commerce</option>
                                                        <option value="institucional">Institucional</option>
                                                        <option value="landingpage">Landing Page</option>
                                                    </select>
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* HORÁRIO */}
                                <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="period"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-xs font-semibold text-color-maverick">
                                                    MELHOR HORÁRIO PARA CONTATO
                                                </FormLabel>

                                                <FormControl>
                                                    <div className="grid w-full grid-cols-3 gap-3">
                                                        {['manhã', 'tarde', 'noite'].map((option) => {
                                                            const isActive = field.value === option

                                                            return (
                                                                <button
                                                                    key={option}
                                                                    type="button"
                                                                    onClick={() => field.onChange(option)}
                                                                    className={`rounded-xl border py-2 text-sm font-medium transition-all duration-300 ${
                                                                        isActive
                                                                            ? 'border-transparent bg-color-purble text-white shadow-lg shadow-purple-500/30'
                                                                            : 'border-color-woodsmoke2 bg-color-woodsmoke3 text-white hover:scale-[1.03] hover:border-color-purble'
                                                                    }`}>
                                                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* BOTÃO */}
                                <Button
                                    type="submit"
                                    className="w-full rounded-full bg-color-purble py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:border-2 hover:border-color-purble hover:bg-white hover:text-color-purble hover:shadow-xl">
                                    Quero meu site exclusivo
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}
