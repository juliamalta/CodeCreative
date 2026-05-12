export interface FeaturesProps {
    titlePrimary?: string
    title: string | React.ReactNode
    text1: string
    text2?: string
    features: featuresData[]
    features1: featuresData2[]
    buttonText: string
}

// CardSection.types.ts
export interface featuresData {
    title: string
    desc: string
    icon?: React.ReactNode
}
export interface featuresData2 {
    title: string
    desc: string
    isLast?: boolean
}
