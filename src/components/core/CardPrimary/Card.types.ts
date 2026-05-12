export type CardProps = {
    titleApp?: string
    text?: string
    title: string | React.ReactNode
    desc?: string
    icon?: React.ReactNode
    img?: string
    iconBgColor?: string
    progress?: string
    progressvalue?: string
    progressvalueX?: number
    tag?: string[]
}

export type CardWorkProps = {
    title: string
    img?: string
    description?: string
    tag: string[]
    link?: string
    buttonText?: string
}

export type CardHigthligthProps = {
    higthligth: boolean
    text?: string
    title: string | React.ReactNode
    icon?: React.ReactNode
    iconBgColor?: string
    payment?: string
    paymentTitle?: string
}
