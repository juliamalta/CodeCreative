export interface infoData {
    text1: string | React.ReactNode
    icon1: JSX.Element
    icon2: JSX.Element
    text2: string
    title: string
    link?: string
}

export type FooterProps = {
    info: infoData[]
    rights: string
}
