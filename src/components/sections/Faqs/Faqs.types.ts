export interface faqsData {
    title: string 
    answer: string
}

export interface FaqProps {
    title: string | React.ReactNode
    description: string
    faqs: faqsData[]
}
