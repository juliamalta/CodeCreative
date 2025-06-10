import { CiCloud } from 'react-icons/ci'
import { CiSquareCheck } from 'react-icons/ci'
import { CiMobile1 } from 'react-icons/ci'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import { TfiMedallAlt } from 'react-icons/tfi'

import { Cards1, Cards2 } from '@/components/sections/Cards'
import Contact from '@/components/sections/Contact/Contact'
import { Features1 } from '@/components/sections/Features'
import { HeroSection } from '@/components/sections/hero-section'
import { OurWork } from '@/components/sections/OurWork'

export default function Home() {
    return (
        <>
            <HeroSection
                title="Transformamos"
                text="ideias em realidades"
                desc="Somos uma agência especializada em desenvolvimento web, mobile e design digital. Criamos soluções inovadoras que impulsionam o crescimento do seu negócio."
                button1text="Solicitar Orçamento"
                button2text="Ver nossos trabalho"
            />
            <Cards1
                cards={[
                    {
                        icon: <TbWorld size={30} color="#833ECC" />,
                        title: 'Desenvolvimento Web',
                        text: 'Sites responsivos, e-commerce e aplicações web modernas usando as tecnologias mais atuais.',
                        iconBgColor: '#F3E8FF',
                    },
                    {
                        icon: <CiMobile1 size={30} color="#2699D2" />,
                        title: 'Desenvolvimento Mobile',
                        text: 'Apps nativos e híbridos para iOS e Android com performance excepcional.',
                        iconBgColor: '#C2F6FF',
                    },
                    {
                        icon: <TbWorld size={30} color="#EE7432" />,
                        title: 'Design Digital',
                        text: 'Identidade visual, UI/UX design e materiais gráficos que convertem.',
                        iconBgColor: '#FFEDD5',
                    },
                    {
                        icon: <TbWorld size={30} color="#29AB59" />,
                        title: 'Consultoria Tech',
                        text: 'Consultoria especializada em arquitetura de software e boas práticas.',
                        iconBgColor: '#DCFCE7',
                    },
                ]}
            />
            <Features1
                title="Sobre a Code Creative"
                desc="Temos o privilégio de trabalhar com centenas de empresas inovadoras, incluindo muitas das maiores referências em hardware do mundo."
            />
            <Cards2
                cards={[
                    {
                        icon: <TbWorld size={30} color="#833ECC" />,
                        title: 'Foco no Cliente',
                        text: 'Cada projeto é tratado com dedicação exclusiva, sempre priorizando as necessidades e objetivos do cliente.',
                        iconBgColor: '#F3E8FF',
                    },
                    {
                        icon: <TfiMedallAlt size={30} color="#833ECC" />,
                        title: 'Qualidade Premium',
                        text: 'Mantemos os mais altos padrões de qualidade em cada linha de código e pixel de design.',
                        iconBgColor: '#F3E8FF',
                    },
                    {
                        icon: <TbWorld size={30} color="#833ECC" />,
                        title: 'Trabalho em Equipe',
                        text: 'Nossa equipe multidisciplinar trabalha de forma integrada para entregar resultados excepcionais.',
                        iconBgColor: '#F3E8FF',
                    },
                    {
                        icon: <TbWorld size={30} color="#833ECC" />,
                        title: 'Paixão por Tecnologia',
                        text: 'Amamos o que fazemos e isso se reflete na qualidade e inovação de nossos projetos.',
                        iconBgColor: '#F3E8FF',
                    },
                ]}
            />
            <OurWork
                title="Nosso trabalho"
                desc="Profissionais apaixonados por tecnologia e design"
                cards={[
                    {
                        img: '/images/work1.png',
                        title: 'Desenvolvimento Mobile',
                        text: 'ProTracker',
                        desc: 'Loja online completa com sistema de pagamento integrado e painel administrativo',
                    },
                    {
                        img: '/images/work2.png',
                        title: 'Desenvolvimento Web',
                        text: 'ProTracker',
                        desc: 'Loja online completa com sistema de pagamento integrado e painel administrativo',
                    },
                ]}
            />
            <Contact />
        </>
    )
}
