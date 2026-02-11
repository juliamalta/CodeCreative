'use client'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IoIosArrowBack } from 'react-icons/io'
import { BsChat } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import ListMessagens from '@/components/core/ListMessagens/ListMessagens'
import Chatbox from '@/components/core/ChatBox/ChatBox'
import { api } from '../../../services/api.js'
import avatarcode from '../../../../public/images/avatarcode.png'
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
                    className="flex items-center justify-center rounded-full bg-color-purble px-4 py-4 shadow-lg transition-colors">
                    <div className="flex flex-row gap-3">
                        <BsChat size={22} color="white" />
                        <p className="text-white">Chat</p>
                    </div>
                </button>
            </div>

            {/* Janela do chat */}
            {open && (
                <div className="fixed bottom-24 right-4 z-50 flex h-[500px] w-80 max-w-full flex-col rounded-2xl bg-white shadow-lg">
                    {/* Header */}
                    <div className="flex w-full items-center justify-between gap-4 rounded-t-2xl bg-color-purble p-4">
                        <div className="flex items-center gap-4">
                            <button onClick={() => setOpen(false)}>
                                <IoIosArrowBack color="white" size={20} />
                            </button>
                            <Avatar>
                                <AvatarImage src={avatarcode.src} alt="Luna" />
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

                    <div className="flex flex-1 flex-col overflow-hidden p-2">
                        <div className="flex-1 overflow-y-auto p-2">
                            <ListMessagens messagens={mensagens} />
                        </div>

                        <div className="p-2">
                            <Chatbox onEnviarMensagem={onEnviarMensagem} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AgentIA
