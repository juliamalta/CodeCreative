export interface aboutData {
    icon?: JSX.Element
    title: string | React.ReactNode
    text: string
}

export interface AboutProps {
    titlePrimary?: string
    title: string
    text1: string
    text2?: string
}
export interface About2Props {
    titlePrimary?: string
    title: string | React.ReactNode
    text1: string
    text2?: string

    about?: aboutData[]
}
