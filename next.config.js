const securityHeaders = [
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
    },
    {
        key: 'X-Download-Options',
        value: 'noopen',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'Referrer-Policy',
        value: 'same-origin',
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
    },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    images: {
        unoptimized: true, // <<< adicionar essa linha para desabilitar otimização
    },

    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ]
    },
}

module.exports = nextConfig
