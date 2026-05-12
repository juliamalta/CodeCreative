import { Footer } from '@/components/sections/Footer'

export default function VendasLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white text-black">
            {children}
            <Footer rights="© 2026 Code Creative. Todos os direitos reservados." />
        </div>
    )
}
