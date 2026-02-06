'use client'
import { useEffect } from 'react'

export default function TestEnv() {
    useEffect(() => {
        console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)
    }, [])

    return <div>Verificando NEXT_PUBLIC_API_URL… Abra o console!</div>
}
