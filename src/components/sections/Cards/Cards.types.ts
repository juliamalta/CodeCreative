// CardSection.types.ts
export interface CardData {
    icon: JSX.Element
    title: string
    text: string
    iconBgColor?: string
}

export interface CardSectionProps {
    titlePrimary?: string
    cards: CardData[]
}
