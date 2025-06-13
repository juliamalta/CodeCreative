// CardSection.types.ts
export interface CardData {
    icon?: JSX.Element
    title: string
    text: string
    iconsocial1?: React.ReactNode
    iconsocial2?: React.ReactNode
    iconBgColor?: string
    desc?: string
    img?: string
}

export interface CardSectionProps {
    titlePrimary?: string
    title?: string
    desc?: string
    cards: CardData[]
}
