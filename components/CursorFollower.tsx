'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorFollower() {
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
            setCursorXY({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', moveCursor)
        return () => window.removeEventListener('mousemove', moveCursor)
    }, [cursorX, cursorY])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-acid-green rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            >
                <div className="absolute inset-0 bg-acid-green/20 rounded-full blur-sm" />
            </motion.div>
            <div
                className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
                style={{
                    left: cursorXY.x,
                    top: cursorXY.y,
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </>
    )
}
