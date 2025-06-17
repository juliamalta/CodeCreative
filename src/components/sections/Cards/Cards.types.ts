// CardSection.types.ts
export interface CardData {
    icon?: JSX.Element
    title: string
    titleApp?: string
    text: string
    progress?: string
    progressValue?: string
    progressValueX?: number
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
