'use client'

import { MessagensProps } from '@/components/core/ListMessagens/ListMessagens.types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function ListMessagens({ messagens }: MessagensProps) {
    return (
        <div className='h-full w-full'>
            {messagens.map((msg) => (
                <div
                    key={msg.id}
                    className={`flex items-start gap-2 ${msg.remetente === 'bot' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <Avatar>
                        <AvatarImage
                            src={
                                msg.remetente === 'bot'
                                    ? 'https://github.com/shadcn.png'
                                    : 'https://github.com/shadcn.png'
                            }
                            alt="avatar"
                        />
                        <AvatarFallback>{msg.remetente === 'bot' ? 'CN' : 'U'}</AvatarFallback>
                    </Avatar>
                    <p className="text-color-black text-sm">{msg.text}</p>
                </div>
            ))}
        </div>
    )
}

export default ListMessagens
