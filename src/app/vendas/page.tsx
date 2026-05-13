import { Forms2 } from '@/components/sections/Form/Form2'
import Cards4 from '@/components/sections/Cards/Cards4'
import Aboutus2 from '@/components/sections/AboutUs/AboutUs2'
import Cards5 from '@/components/sections/Cards/Cards5'
import { GoVerified } from 'react-icons/go'
import { Forms3 } from '@/components/sections/Form/Form3'
import Step1 from '@/components/sections/Step-section/step1'
import Features1 from '@/components/sections/Features/Features1'
import { AuroraText } from '@/components/magicui/aurora-text'
import StarIcon from '../../../public/svg/star'
import CalendarIcon from '../../../public/svg/calendar'
import RocketIcon from '../../../public/svg/rocket'
import Graphic from '../../../public/svg/graphic'
import { BiSolidGridAlt } from 'react-icons/bi'
import { BsFileBarGraph } from 'react-icons/bs'
import DateIcon from '../../../public/svg/date'

export default function Sales() {
    return (
        <>
            {/* FORM HERO */}
            <Forms2
                title={
                    <>
                        Seu negócio tem tudo para crescer.
                        <AuroraText className="font-bold">Só falta o site certo.</AuroraText>
                    </>
                }
                desc="Criamos sites profissionais e landing pages de alta conversão que transformam visitantes em clientes fiéis."
                contact={[
                    {
                        titleContact: '100%',
                        desc: 'EXCLUSIVO',
                        icon: <StarIcon />,
                    },
                    {
                        titleContact: '15 dias',
                        desc: 'PARA ENTREGA',
                        icon: <CalendarIcon />,
                    },
                ]}
            />
            {/* SOBRE */}
            <Aboutus2
                title={
                    <>
                        Soluções que<br></br>
                        <AuroraText className="font-bold"> convertem</AuroraText>
                    </>
                }
                text1="Criamos sites profissionais e landing pages de alta conversão que transformam visitantes em clientes fiéis."
            />
            {/* SERVIÇOS */}
            <Cards4
                title="Nossos serviços"
                desc="Oferecemos soluções completas em tecnologia e design para impulsionar seu negócio"
                cardsHight={[
                    {
                        higthligth: false,
                        icon: <Graphic />,
                        title: 'Site Institucional',
                        text: 'A vitrine digital definitiva para sua empresa, com foco em autoridade e presença de mercado.',
                        iconBgColor: '#F3E8FF',
                        paymentTitle: 'A PARTIR DE',
                        payment: 'R$ 2.500',
                    },
                    {
                        icon: <RocketIcon />,
                        higthligth: true,
                        title: 'Landing Page',
                        text: 'Páginas de alta performance desenhadas especificamente para campanhas de tráfego pago e conversão.',
                        iconBgColor: '#C2F6FF',
                        paymentTitle: 'A PARTIR DE',
                        payment: 'R$ 1.200',
                    },
                ]}
                buttonText="Falar com a Code Creative"
            />
            {/* PORTFÓLIO */}
            <Cards5
                icon={<BiSolidGridAlt size={15} color="#787878" />}
                titlePrimary="Portfolio"
                title={
                    <>
                        Trabalhos que<br></br>
                        <AuroraText className="font-bold"> transformam marcas</AuroraText>
                    </>
                }
                desc="Conheça alguns dos projetos que entregamos com foco total em estética e resultados de conversão."
                cards={[
                    {
                        title: 'Clínica Amparium',
                        img: '/images/img3.png',
                        tag: ['Site com crescimento constante'],
                        desc: 'Site criado do zero para clínica que precisava transmitir credibilidade online',
                        link: ' https://www.amparium.com.br/',
                        buttonText: 'Acessar Projeto',
                    },
                    {
                        title: 'Dra. Anlles',
                        img: '/images/site2.png',
                        tag: ['SITE INSTITUCIONAL'],
                        desc: 'Site institucional que humaniza o atendimento em saúde mental, com design acolhedor, sistema de agendamento integrado e conteúdo educativo sobre bem-estar emocional.',
                        link: 'https://www.draanlles.com.br/',
                        buttonText: 'Acessar Projeto',
                    },
                    {
                        title: 'Barbearia',
                        img: '/images/barber.png',
                        tag: ['LANDING PAGE DE ALTA CONVERSÃO'],
                        desc: 'Landing page para curso presencial de barbearia. Design urbano, copy focado em conversão e estrutura pensada para transformar visitante em aluno',
                        link: 'https://barber-academy-six.vercel.app/',
                        buttonText: 'Acessar Projeto',
                    },
                ]}
                buttonText="Quero um site assim para o meu negócio"
            />

            {/* ETAPAS */}
            <Step1
                icon={<BsFileBarGraph size={15} color="#787878" />}
                titlePrimary="Processo"
                title={
                    <>
                        Do briefing a entrega<br></br>
                        <AuroraText className="font-bold">em 15 dias</AuroraText>
                    </>
                }
                text1="Desde a primeira linha de código ao design final, focamos no retorno real sobre o seu investimento digital."
            />

            {/* DIFERENCIAIS */}
            <Features1
                title={
                    <>
                        Por que a Code Creative é a <AuroraText className="font-bold"> escolha certa?</AuroraText>
                    </>
                }
                text1="Um processo transparente e focado na agilidade que seu negócio exige hoje."
                features={[
                    {
                        title: '100%',
                        desc: 'dos nossos projetos entregues dentro do prazo contratado',
                        icon: <CalendarIcon />,
                    },
                    { title: '24h', desc: 'Respondemos todos os contatos em até 24 horas.', icon: <DateIcon /> },
                ]}
                features1={[
                    {
                        title: 'Presença Local',
                        desc: 'Estamos no coração do Vale do Aço. Reuniões presenciais e suporte que entende a dinâmica do nosso mercado regional.',
                    },
                    {
                        title: 'Design + Code no mesmo time',
                        desc: 'Nada de templates genéricos. Criamos do zero para garantir que seu site seja único, rápido e altamente escalável.',
                    },
                    {
                        title: 'Prazo Real de 15 Dias',
                        desc: 'Compromisso inegociável. Cronograma transparente com entrega final garantida em contrato.',
                        isLast: true,
                    },
                ]}
                buttonText="Quero começar meu projeto"
            />

            {/* FORM FINAL */}
            <Forms3
                title={
                    <>
                        Pronta para ter um site que
                        <span className="font-bold text-color-mauve"> representa sua empresa</span> de verdade?
                    </>
                }
                desc="Não perca mais clientes para a concorrência por causa de um site amador. Vamos construir algo incrível juntos hoje."
                contact={[
                    {
                        titleContact: '100%',
                        desc: 'Exclusivo',
                        icon: <GoVerified size={38} color="#DDB8FF" />,
                    },
                    {
                        titleContact: '15 dias',
                        desc: 'Para entrega',
                        icon: <GoVerified size={38} color="#DDB8FF" />,
                    },
                ]}
            />
        </>
    )
}
