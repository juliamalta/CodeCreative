export interface aboutData {
    icon?: JSX.Element
    title: string
    text: string
}

export interface AboutProps {
    titlePrimary?: string
    title: string
    text1: string
    text2: string
    about?: aboutData[]
}
