import { CiMobile1 } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { GoArrowUpRight } from 'react-icons/go'
import { IoMdHeartEmpty } from 'react-icons/io'
import { MdOutlineColorize } from 'react-icons/md'
import { MdCode } from 'react-icons/md'
import { MdOutlineGroups } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import { TbCurrentLocation } from 'react-icons/tb'
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
                desc="Desenvolvimento website, mobile e design digital. Criamos soluções inovadoras que impulsionam o crescimento do seu negócio."
                button1text="Solicitar Orçamento"
                button2text="Ver nossos trabalhos"
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
                        text: 'Apps nativos e híbridos para iOS e Android com performance excepcional.',
                        iconBgColor: '#C2F6FF',
                    },
                    {
                        icon: <MdOutlineColorize size={30} color="#833ECC" />,
                        title: 'Design Digital',
                        text: 'Design de interface e experiência do usuário (UI/UX) e materiais gráficos que convertem.',
                        iconBgColor: '#FFEDD5',
                    },
                    {
                        icon: <MdCode size={30} color="#833ECC" />,
                        title: 'Consultoria Tech',
                        text: 'Consultoria especializada em arquitetura de software e boas práticas.',
                        iconBgColor: '#DCFCE7',
                    },
                ]}
            />
            <AboutUs1
                title="Sobre a Code Creative"
                text1="Você tem uma ideia incrível mas não sabe como tirar do papel? Somos especializados em transformar ideias em soluções tecnológicas inovadoras. Com mais de 5 anos no mercado, já entregamos projetos para clientes de diversos segmentos."
                text2="Nossa missão é ajudar empresas a crescer através da tecnologia, oferecendo soluções personalizadas que combinam design excepcional com desenvolvimento técnico de alta qualidade."
            />
            <Cards2
                title="Nossos valores"
                desc="Os princípios que guiam nosso trabalho e relacionamento com clientes"
                cards={[
                    {
                        icon: <TbCurrentLocation size={30} color="#FFFFFF" />,
                        title: 'Foco no Cliente',
                        text: 'Cada projeto é tratado com dedicação exclusiva, sempre priorizando as necessidades e objetivos do cliente.',
                    },
                    {
                        icon: <MdOutlineGroups size={30} color="#FFFFFF" />,
                        title: 'Trabalho em Equipe',
                        text: 'Nossa equipe multidisciplinar trabalha de forma integrada para entregar resultados excepcionais.',
                    },
                    {
                        icon: <TfiMedallAlt size={30} color="#FFFFFF" />,
                        title: 'Qualidade Premium',
                        text: 'Mantemos os mais altos padrões de qualidade em cada linha de código e de design.',
                    },
                    {
                        icon: <IoMdHeartEmpty size={30} color="#FFFFFF" />,
                        title: 'Paixão por Tecnologia',
                        text: 'Amamos o que fazemos, e isso se reflete na qualidade, inovação e comprometimento presentes em cada projeto que entregamos.',
                    },
                ]}
            />
            <Cards3
                title="Nosso Trabalho"
                desc="Profissionais apaixonados por tecnologia e design"
                cards={[
                    {
                        title: 'Mobile',
                        titleApp: 'ProTracker',
                        text: 'Aplicativo para gestão de treinos',
                        desc: 'Otimize seu tempo, personalize treinos. Aplicativo essencial para personal trainers.',
                        progress: 'Progresso',
                        progressValue: '10%',
                        progressValueX: 10,
                    },
                    {
                        title: 'Web',
                        titleApp: 'PrimeFlix',
                        text: 'Gerenciador de séries e filmes',
                        desc: 'Acompanhe os episódios que você já assistiu e nunca mais se perca na sua maratona.',
                        progress: 'Progresso',
                        progressValue: '5%',
                        progressValueX: 5,
                    },
                ]}
            />
            <Contact
                title="Pronto para iniciar nosso próximo projeto?"
                text="Deixe nós colocar suas ideias em prática. Solicite seu orçamento gratuito agora"
                buttontext="Entre em contato"
            />
        </>
    )
}
