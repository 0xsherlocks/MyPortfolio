'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
    width: number
    height: number
    x: number
    y: number
    duration: number
    delay: number
}

export default function SmokeEffect() {
    const [particles, setParticles] = useState<Particle[]>([])

    useEffect(() => {
        // Generate random smoke particles only on the client
        const newParticles = Array.from({ length: 6 }).map(() => ({
            width: Math.random() * 200 + 100, // 100-300px width
            height: Math.random() * 200 + 100, // 100-300px height
            x: Math.random() * 100 - 50, // Slight random start offset
            y: Math.random() * 100 - 50,
            duration: Math.random() * 10 + 10, // 10-20s duration
            delay: Math.random() * 5,
        }))
        setParticles(newParticles)
    }, [])

    if (particles.length === 0) return null // Don't render until hydration matches

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        x: 0,
                        y: 0
                    }}
                    animate={{
                        opacity: [0, 0.4, 0], // Fade in then out
                        scale: [0.8, 1.5, 2], // Expand
                        x: [0, 100, 200], // Drift right
                        y: [0, -50, -100], // Drift up
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                        times: [0, 0.5, 1]
                    }}
                    className="absolute left-0 bottom-0 blur-[60px] rounded-full"
                    style={{
                        width: p.width,
                        height: p.height,
                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, rgba(0,0,0,0) 70%)', // Cyan smoke
                        left: '20%', // Start near the face area (adjust as needed)
                        top: '40%',
                    }}
                />
            ))}
        </div>
    )
}
