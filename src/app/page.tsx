import { CiCloud } from 'react-icons/ci'
import { CiSquareCheck } from 'react-icons/ci'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'

import { Cards1 } from '@/components/sections/Cards'
import { Features1 } from '@/components/sections/Features'
import { HeroSection } from '@/components/sections/hero-section'

export default function Home() {
    return (
        <>
            <HeroSection />
            <Cards1
                cards={[
                    {
                        icon: <TbWorld size={20} color="#833ECC" />,
                        title: 'Desenvolvimento Web',
                        text: 'Sites responsivos, e-commerce e aplicações web modernas usando as tecnologias mais atuais.',
                    },
                    {
                        icon: <MdOutlinePhoneIphone size={20} color="#C2F6FF" />,
                        title: 'Desenvolvimento Mobile',
                        text: 'Apps nativos e híbridos para iOS e Android com performance excepcional.',
                    },
                    {
                        icon: <TbWorld size={20} color="#EE7432" />,
                        title: 'Design Digital',
                        text: 'Identidade visual, UI/UX design e materiais gráficos que convertem.',
                    },
                    {
                        icon: <TbWorld size={20} color="#29AB59" />,
                        title: 'Consultoria Tech',
                        text: 'Consultoria especializada em arquitetura de software e boas práticas.',
                    },
                ]}
            />
        </>
    )
}
