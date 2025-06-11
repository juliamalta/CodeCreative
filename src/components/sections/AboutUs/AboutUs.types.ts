export interface aboutData {
    icon?: JSX.Element
    title: string
    text: string
}

export interface AboutProps {
    title: string
    text1: string
    text2: string
    about?: aboutData[]
}
