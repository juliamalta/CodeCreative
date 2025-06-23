declare global {
    interface Window {
        gtag: (...args: any[]) => void
    }
}

export {}

export const GA_MEASUREMENT_ID = 'G-322MDB8015'

export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            // eslint-disable-next-line camelcase
            page_path: url,
        })
    }
}

export const event = ({ action, category, label, value }: any) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            // eslint-disable-next-line camelcase
            event_category: category,
            // eslint-disable-next-line camelcase
            event_label: label,
            value,
        })
    }
}
