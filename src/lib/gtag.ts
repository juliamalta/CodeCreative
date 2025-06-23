declare global {
    interface Window {
        gtag: (...args: any[]) => void
    }
}

export {}

export const GA_MEASUREMENT_ID = 'G-322MDB8015'

export const pageview = (url: string) => {
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    })
}

export const event = ({ action, category, label, value }: any) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
    })
}
