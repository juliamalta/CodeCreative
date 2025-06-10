export interface featuresData {
    icon?: JSX.Element
    title: string
    text: string
}

export interface FeaturesProps {
    title: string
    text1: string
    text2: string
    features?: featuresData[]
}
