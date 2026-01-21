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
import Faq1 from '@/components/sections/Faqs/Faq1'
import { HeroSection } from '@/components/sections/hero-section'

export default function Home() {
    return (
        <>
            <HeroSection
                title={
                    <>
                        Elevamos sua presença digital ao <span className="text-color-studio">nível de excelência</span>
                    </>
                }
                desc="Criamos experiências digitais sofisticadas, com design e tecnologia avançada, para marcas que querem se destacar com autoridade."
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
                titlePrimary="SOBRE"
                title="Transformando seu produto em realidade"
                text1="Nascemos da união perfeita entre criatividade e tecnologia. Somos profissionais apaixonados por transformar ideias em experiências digitais marcantes. Com mais de 5 anos de expertise em design e domínio de desenvolvimento, dando vida a cada pixel com código limpo e funcionalidade impecável."
                text2="Nossa missão é ajudar empresas a crescer através da tecnologia, oferecendo soluções personalizadas que combinam design excepcional com desenvolvimento técnico de alta qualidade."
            />
            <Cards2
                titlePrimary="SERVIÇOS"
                title="Soluções que Funcionam"
                desc="Da interface que encanta aos sistemas que performam: criamos experiências digitais completas para seu negócio crescer."
                cards={[
                    {
                        icon: <TbCurrentLocation size={30} color="#FFFFFF" />,
                        tag: ['Landing Page', 'Site Institucional', 'Aplicativos'],
                        title: 'Desenvolvimento ',
                        text: 'De sites a aplicativos, entregamos soluções digitais modernas, rápidas e escaláveis, projetadas para performance e impacto real.',
                    },
                    {
                        icon: <MdOutlineGroups size={30} color="#FFFFFF" />,
                        title: 'Design',
                        tag: ['UI/UX', 'Landing Pages', 'Aplicativos'],
                        text: 'Criamos interfaces elegantes e experiências visuais marcantes, unindo UI/UX e materiais gráficos que encantam e convertem.',
                    },
                ]}
                buttonText="Solicite um orçamento"
            />
            <Cards3
                title="Nosso Trabalho"
                desc="Profissionais apaixonados por tecnologia e design"
                cards={[
                    {
                        title: 'Pro Tracker',
                        tag: ['Aplicativo', 'React Native'],
                        desc: 'Aplicativo que revoluciona a rotina de personal trainers com criação rápida de treinos personalizados e acompanhamento eficiente de alunos.',
                    },
                    {
                        title: 'Streamly',
                        tag: ['Web', 'React JS'],
                        desc: 'Plataforma web que organiza seu histórico de filmes e séries, garantindo que você nunca mais se perca na sua próxima maratona.',
                    },
                ]}
            />
            <Faq1
                title={
                    <>
                        Perguntas frequentes <span className="text-color-studio">_</span>
                    </>
                }
                description="Criar um texto para perguntas frequentes como uma forma de introdução para a sessão"
                faqs={[
                    {
                        title: 'Como funciona o processo de desenvolvimento?',
                        answer: 'Nosso processo tem 5 etapas: 1) Briefing e análise, 2) Design e prototipação, 3) Desenvolvimento, 4) Testes e revisões, 5) Entrega e treinamento. O cliente acompanha todo o processo.',
                    },
                    {
                        title: 'Vocês atendem empresas de todo o Vale do Aço?',
                        answer: 'Sim! Atendemos presencialmente Ipatinga, Timóteo, Coronel Fabriciano, Santana do Paraíso e toda região metropolitana do Vale do Aço. Também trabalhamos de forma remota para clientes de outras cidades de Minas Gerais e Brasil.',
                    },
                    {
                        title: 'Quais tecnologias vocês utilizam?',
                        answer: 'Para aplicativos: React Native, desenvolvimento nativo iOS/Android. Para web: React, Next.js, Node.js. Design: Figma, Adobe Creative Suite. Banco de dados: Firebase e MongoDB. Mas sempre utilizamos as tecnologias mais atuais e adequadas para cada projeto.',
                    },
                    {
                        title: 'Oferecem suporte após a entrega?',
                        answer: 'Sim! Todo projeto inclui 30 dias de suporte gratuito após entrega. Oferecemos planos de suporte mensal incluindo: correção de bugs, atualizações de segurança, backup automático e suporte técnico prioritário via WhatsApp',
                    },
                ]}
            />
            <Contact
                title="Está pronto para ver sua marca decolar?"
                text="Toda grande solução digital começa com uma boa conversa. Conte sua ideia para a gente e vamos transformá-la na ferramenta que seu negócio precisa."
                buttontext="Entre em contato"
            />
        </>
    )
}
