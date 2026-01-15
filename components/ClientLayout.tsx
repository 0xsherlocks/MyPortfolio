'use client'

import dynamic from 'next/dynamic'
import React from 'react'

// Dynamically import CursorFollower to avoid hydration errors
const CursorFollower = dynamic(() => import('@/components/CursorFollower'), { ssr: false })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CursorFollower />
            {children}
        </>
    )
}
