'use client'

import { chatProps } from '@/components/core/ChatBox/ChatBox.type'
import { useState, FormEvent } from 'react'
import { LuSendHorizontal } from 'react-icons/lu'

function Chatbox({ onEnviarMensagem }: chatProps) {
    const [mensagem, setMensagem] = useState('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if (!mensagem.trim()) return // evita enviar mensagem vazia
        onEnviarMensagem(mensagem)
        setMensagem('')
    }

    return (
        <div>
            <div className="flex gap-2">
                <form className="flex w-full space-x-3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Digite sua mensagem..."
                        className="flex-1 rounded-lg border-2 p-2 text-black"
                        value={mensagem} // <-- input controlado
                        onChange={(e) => setMensagem(e.target.value)} // <-- atualiza estado
                    />
                    <button
                        type="submit"
                        className="rounded-lg bg-color-studio px-4 py-2 text-white hover:bg-color-haiti">
                        <LuSendHorizontal />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chatbox
