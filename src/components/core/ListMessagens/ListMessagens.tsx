'use client'

import { MessagensProps } from '@/components/core/ListMessagens/ListMessagens.types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import avatarcode from '../../../../public/images/avatarcode.png'
import avatarclient from '../../../../public/images/avatarcliente.png'

function ListMessagens({ messagens }: MessagensProps) {
    const lastMsg = messagens[messagens.length - 1]
    const showTyping = lastMsg?.remetente === 'usuario'

    return (
        <div className="flex h-full w-full flex-col gap-2">
            {messagens.map((msg) => (
                <div
                    key={msg.id}
                    className={`flex items-start gap-2 ${
                        msg.remetente === 'bot' ? 'flex-row' : 'flex-row-reverse items-center'
                    }`}>
                    <Avatar
                        className={`h-8 w-8 items-center justify-center ${
                            msg.remetente === 'bot' ? 'bg-blue-500 text-white' : 'border-2 bg-color-studio text-white'
                        }`}>
                        {msg.remetente === 'bot' ? (
                            <AvatarImage src={avatarcode.src} alt="Bot" />
                        ) : (
                            <AvatarImage src={avatarclient.src} alt="Usuário" />
                        )}
                        <AvatarFallback>{msg.remetente === 'bot' ? 'CN' : 'You'}</AvatarFallback>
                    </Avatar>
                    <p
                        className={`text-color-black text-sm ${
                            msg.remetente === 'bot'
                                ? 'text-md w-full p-2'
                                : 'text-md my-3 w-full items-center rounded-sm bg-color-purble p-2 text-white shadow-xl'
                        }`}>
                        {msg.text}
                    </p>
                </div>
            ))}

            {showTyping && (
                <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8 bg-blue-500 text-white">
                        <AvatarImage src={avatarcode.src} alt="Bot" />
                    </Avatar>
                    <p className="text-color-black w-full p-2 text-sm">Digitando...</p>
                </div>
            )}
        </div>
    )
}

export default ListMessagens
