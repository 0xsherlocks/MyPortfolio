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
            cursorX.set(e.clientX - 20)
            cursorY.set(e.clientY - 20)
            setCursorXY({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', moveCursor)
        return () => window.removeEventListener('mousemove', moveCursor)
    }, [cursorX, cursorY])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] backdrop-blur-[2px] bg-white/5 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-colors duration-200"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            />
            <div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                style={{
                    left: cursorXY.x,
                    top: cursorXY.y,
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </>
    )
}
