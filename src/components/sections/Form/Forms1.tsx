'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'sonner'
import { db } from '@/lib/firebase' // ajuste o caminho conforme seu projeto

import { FormsProps } from '@/components/sections/Form/Forms.types'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/form'
import { Input } from '@/components/input'
import { Button } from '@/components/ui/button'

export function Forms1({ title, desc, contact }: FormsProps) {
    const formSchema = z.object({
        fullName: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.'),
        number: z.string().min(8, 'Informe um número válido.'),
        company: z.string().min(2, 'Informe sua empresa.').optional(),
        hasSite: z.string().min(1, 'Selecione uma opção.'),
        budget: z.string().min(1, 'Selecione um orçamento.'),
        resume: z.any().optional(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            number: '',
            company: '',
            hasSite: '',
            budget: '',
            resume: null,
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const resumeURL = null

            // Se futuramente quiser upload de arquivo:
            // if (values.resume) {
            //     resumeURL = await uploadFile(values.resume)
            // }

            await addDoc(collection(db, 'leads'), {
                fullName: values.fullName,
                number: values.number,
                company: values.company,
                hasSite: values.hasSite,
                budget: values.budget,
                resumeURL,
                createdAt: new Date(),
            })

            console.log('Lead enviado com sucesso!')
            toast.success('Mensagem enviada com sucesso! ')

            form.reset()
        } catch (error) {
            toast.error('Erro ao enviar mensagem. Tente novamente.')
            console.error('Erro ao enviar formulário:', error)
        }
    }

    function maskBRPhone(value: string) {
        if (!value) return ''

        // remove tudo que não for número
        value = value.replace(/\D/g, '')

        // limita tamanho (55 + DDD + 9 dígitos = 13 números)
        value = value.slice(0, 13)

        // aplica máscara
        value = value.replace(/^(\d{2})(\d)/, '+$1 $2')
        value = value.replace(/^(\+\d{2})\s?(\d{2})(\d)/, '$1 $2 $3')
        value = value.replace(/(\d{5})(\d{4})$/, '$1-$2')

        return value
    }
    const fieldClass =
        'w-full h-12 rounded-lg border-2 border-color-athensGray px-4 text-black transition-all focus:border-transparent focus:ring-2 focus:ring-primary'

    return (
        <section
            id="inicio"
            className="mx-auto bg-cover bg-center px-2 py-16 sm:py-24"
            style={{ backgroundImage: "url('/images/codebg.png')" }}>
            <div className="container flex flex-col gap-10 lg:flex-row">
                <div className="flex flex-col justify-center gap-8 lg:w-1/2">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl font-semibold text-white sm:text-center md:text-6xl lg:text-left 2xl:w-2/3">
                            {title}
                        </h1>
                        <p className="text-base text-color-boulder sm:text-center lg:text-left 2xl:w-2/3">{desc}</p>
                    </div>

                    <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                        {contact.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="rounded-full bg-color-masala px-5 py-5 transition-transform hover:scale-105 hover:border-[1px] hover:border-color-purble">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-white">{item.titleContact}</p>
                                    <p className="text-sm text-white">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FORMULÁRIO */}
                <div className="w-full lg:w-1/2">
                    <div className="space-y-8 rounded-2xl bg-white px-8 py-10">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                {/* NOME */}
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base font-semibold text-black">
                                                Seu nome
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
                                                <FormLabel className="text-base font-semibold text-black">
                                                    WhatsApp
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
                                                <FormLabel className="text-base font-semibold text-black">
                                                    Empresa
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className={fieldClass}
                                                        placeholder="Nome da sua empresa"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* SELECTS */}
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name="hasSite"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base font-semibold text-black">
                                                    Tem site hoje?
                                                </FormLabel>
                                                <FormControl>
                                                    <select {...field} className={fieldClass}>
                                                        <option value="">Selecione</option>
                                                        <option value="sim">Sim, tenho um site</option>
                                                        <option value="nao">Não</option>
                                                    </select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="budget"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base font-semibold text-black">
                                                    Orçamento
                                                </FormLabel>
                                                <FormControl>
                                                    <select {...field} className={fieldClass}>
                                                        <option value="">Selecione</option>
                                                        <option value="ate_3k">Até R$ 3.000</option>
                                                        <option value="3k_10k">R$ 3.000 - R$ 10.000</option>
                                                        <option value="10k_30k">R$ 10.000 - R$ 30.000</option>
                                                        <option value="30k_plus">R$ 30.000+</option>
                                                    </select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* BOTÃO */}
                                <Button type="submit" className="w-full rounded-full bg-color-purble py-3">
                                    Quero ser contatada
                                </Button>

                                <p className="text-center text-sm">
                                    Seus dados ficam só com a gente. Sem spam, prometido.
                                </p>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}
