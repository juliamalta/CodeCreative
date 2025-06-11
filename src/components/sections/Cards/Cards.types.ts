// CardSection.types.ts
export interface CardData {
    icon?: JSX.Element
    title: string
    text: string
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
