// CardSection.types.ts
export interface CardData {
    icon?: JSX.Element
    text: string
    title: string
    desc: string
    img?: string
}

export interface OurWorkProps {
    title: string
    desc: string
    cards: CardData[]
}
