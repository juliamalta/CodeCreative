export interface featuresData {
    icon?: JSX.Element
    title: string
    text: string
}

export interface FeaturesProps {
    title: string
    desc: string
    features: featuresData[]
}
