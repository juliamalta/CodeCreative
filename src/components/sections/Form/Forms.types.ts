export interface ContactData {
    desc: string
    titleContact: string
     icon?: JSX.Element
}

export type FormsProps = {
    title: string | React.ReactNode
    desc: string
    contact: ContactData[]
}
