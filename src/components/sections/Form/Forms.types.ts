export interface ContactData {
    desc: string
    titleContact: string
}

export type FormsProps = {
    title: string | React.ReactNode
    desc: string
    contact: ContactData[]
}
