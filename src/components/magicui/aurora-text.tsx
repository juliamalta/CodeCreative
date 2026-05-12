'use client'

import React, { memo } from 'react'

interface AuroraTextProps {
    children: React.ReactNode
    className?: string
    colors?: string[]
}

export const AuroraText = memo(({ children, className = '', colors = ['#D1ADFF'] }: AuroraTextProps) => {
    const gradientStyle: React.CSSProperties = {
        backgroundImage: `linear-gradient(to bottom, ${colors.join(', ')})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }

    return (
        <span className={`inline-block bg-clip-text text-transparent ${className}`} style={gradientStyle}>
            {children}
        </span>
    )
})

AuroraText.displayName = 'AuroraText'
