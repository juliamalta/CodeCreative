'use client'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IoIosArrowBack } from 'react-icons/io'
import { LuSendHorizontal } from 'react-icons/lu'
import { BsChat } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import ListMessagens from '@/components/core/ListMessagens/ListMessagens'
import { agentProps } from '@/components/core/AgentIA/AgentIA.types'
import Chatbox from '@/components/core/ChatBox/ChatBox'
import { api } from '../../../services/api.js'

function AgentIA() {
    const [open, setOpen] = useState(false)

    const [mensagens, setMensagens] = useState([
        {
            id: 1,
            text: 'Olá! Sou assistente do CodeCreative, como posso te ajudar hoje?',
            remetente: 'bot',
        },
    ])

    const onEnviarMensagem = async (question: string) => {
        if (!question.trim()) return

        setMensagens((prev) => [...prev, { id: Date.now(), text: question, remetente: 'usuario' }])

        try {
            const resposta = await api(question)

            setMensagens((prev) => [...prev, { id: Date.now() + 1, text: resposta, remetente: 'bot' }])
        } catch (err) {
            console.error('Erro ao enviar mensagem:', err)

            setMensagens((prev) => [
                ...prev,
                { id: Date.now() + 2, text: 'Ops! Não consegui processar sua pergunta.', remetente: 'bot' },
            ])
        }
    }

    return (
        <>
            {/* Botão fixo no canto inferior direito */}
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={() => setOpen(!open)}
                    className="items-center justify-center rounded-full bg-color-studio px-4 py-4 shadow-lg transition-colors">
                    <div className="flex flex-row gap-3">
                        <BsChat size={22} color="white" />
                        <p className="text-white">Chat</p>
                    </div>
                </button>
            </div>

            {/* Janela do chat */}
            {open && (
                <div className="border-3 fixed bottom-24 right-4 z-50 flex h-2/3 w-80 max-w-full flex-col rounded-2xl bg-white shadow-lg">
                    {/* Header do chat */}
                    <div className="mb-4 flex w-full items-center justify-between gap-4 rounded-t-2xl bg-color-studio p-4">
                        <div className="flex items-center gap-4">
                            <button onClick={() => setOpen(false)}>
                                <IoIosArrowBack color="white" size={20} />
                            </button>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="Luna" />
                                <AvatarFallback>LN</AvatarFallback>
                            </Avatar>
                            <p className="font-semibold text-white">Luna</p>
                        </div>
                        <div className="items-center justify-center">
                            <button onClick={() => setOpen(false)}>
                                <IoClose size={22} color="white" />
                            </button>
                        </div>
                    </div>

                    {/* Corpo do chat */}
                    <div className="flex flex-1 flex-col justify-between p-2">
                        <div className="mb-4 flex flex-1 flex-col gap-3 overflow-y-auto rounded-lg p-2">
                            <ListMessagens messagens={mensagens} />
                        </div>

                        {/* Input */}
                        <Chatbox onEnviarMensagem={onEnviarMensagem} />
                    </div>
                </div>
            )}
        </>
    )
}

export default AgentIA
