'use client'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IoIosArrowBack } from 'react-icons/io'
import { LuSendHorizontal } from 'react-icons/lu'
import { BsChat } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import AgentIA from '@/components/core/AgentIA/AgentIA'

function Chat() {
    return (
        <>
            <AgentIA />
        </>
    )
}

export default Chat
