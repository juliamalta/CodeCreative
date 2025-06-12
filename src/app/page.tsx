import { AiOutlineMail } from 'react-icons/ai'
import { CiMobile1 } from 'react-icons/ci'
import { FaWhatsapp } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { TfiMedallAlt } from 'react-icons/tfi'

import AboutUs1 from '@/components/sections/AboutUs/AboutUs1'
import { Cards1, Cards2 } from '@/components/sections/Cards'
import Cards3 from '@/components/sections/Cards/Cards3'
import Contact from '@/components/sections/Contact/Contact'
import { HeroSection } from '@/components/sections/hero-section'

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
                title="Nossos serviços"
                desc="Oferecemos soluções completas em tecnologia e design para impulsionar seu negócio"
                cards={[
                    {
                        icon: <TbWorld size={30} color="#833ECC" />,
                        title: 'Desenvolvimento Web',
                        text: 'Sites responsivos, e-commerce e aplicações web modernas usando as tecnologias mais atuais.',
                        iconBgColor: '#F3E8FF',
                    },
                    {
                        icon: <CiMobile1 size={30} color="#833ECC" />,
                        title: 'Desenvolvimento Mobile',
                        text: 'Sites responsivos, e-commerce e aplicações web modernas usando as tecnologias mais atuais.',
                        iconBgColor: '#C2F6FF',
                    },
                    {
                        icon: <TbWorld size={30} color="#833ECC" />,
                        title: 'Design Digital',
                        text: 'Sites responsivos, e-commerce e aplicações web modernas usando as tecnologias mais atuais.',
                        iconBgColor: '#FFEDD5',
                    },
                    {
                        icon: <TbWorld size={30} color="#833ECC" />,
                        title: 'Consultoria Tech',
                        text: 'Sites responsivos, e-commerce e aplicações web modernas usando as tecnologias mais atuais.',
                        iconBgColor: '#DCFCE7',
                    },
                ]}
            />
            <AboutUs1
                title="Sobre a Code Creative"
                text1="Somos uma agência digital especializada em transformar ideias em soluções tecnológicas inovadoras. Com mais de 3 anos no mercado, já entregamos mais de 50 projetos para clientes de diversos segmentos"
                text2="Nossa missão é ajudar empresas a crescer através da tecnologia, oferecendo soluções personalizadas que combinam design excepcional com desenvolvimento técnico de alta qualidade."
            />
            <Cards2
                title="Nossos valores"
                desc="Os princípios que guiam nosso trabalho e relacionamento com clientes"
                cards={[
                    {
                        icon: <TbWorld size={30} color="#FFFFFF" />,
                        title: 'Foco no Cliente',
                        text: 'Cada projeto é tratado com dedicação exclusiva, sempre priorizando as necessidades e objetivos do cliente.',
                    },
                    {
                        icon: <TfiMedallAlt size={30} color="#FFFFFF" />,
                        title: 'Qualidade Premium',
                        text: 'Mantemos os mais altos padrões de qualidade em cada linha de código e pixel de design.',
                    },
                    {
                        icon: <TbWorld size={30} color="#FFFFFF" />,
                        title: 'Trabalho em Equipe',
                        text: 'Nossa equipe multidisciplinar trabalha de forma integrada para entregar resultados excepcionais.',
                    },
                    {
                        icon: <TbWorld size={30} color="#FFFFFF" />,
                        title: 'Paixão por Tecnologia',
                        text: 'Amamos o que fazemos e isso se reflete na qualidade e inovação de nossos projetos.',
                    },
                ]}
            />
            <Cards3 title="Nosso trabalho" desc="Profissionais apaixonados por tecnologia e design" cards={[]} />
        </>
    )
}
