'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Particles() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 100 }
    const mouseXSpring = useSpring(mouseX, springConfig)
    const mouseYSpring = useSpring(mouseY, springConfig)

    const [particles, setParticles] = useState<any[]>([])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    useEffect(() => {
        // Generate particles only on client side
        setParticles(Array.from({ length: 80 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            startY: Math.random() * 100,
            size: Math.random() * 4 + 3, // 3-7px
            duration: Math.random() * 20 + 15, // 15-35s
            delay: Math.random() * 10,
            color: ['#ccff00', '#00d4ff', '#b537f2', '#ff00ff', '#ffffff'][Math.floor(Math.random() * 5)],
            opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7
        })))
    }, [])

    return (
        <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <Particle
                    key={p.id}
                    particle={p}
                    mouseXSpring={mouseXSpring}
                    mouseYSpring={mouseYSpring}
                />
            ))}
        </div>
    )
}

function Particle({ particle, mouseXSpring, mouseYSpring }: any) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    useEffect(() => {
        const unsubscribeX = mouseXSpring.on('change', (latest: number) => {
            // Calculate particle position on screen
            const particleX = (particle.left / 100) * window.innerWidth
            const particleY = y.get()

            // Calculate distance from mouse
            const dx = particleX - latest
            const dy = particleY - mouseYSpring.get()
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Repulsion effect within 150px radius
            if (distance < 150 && distance > 0) {
                const force = (150 - distance) / 150 // 0 to 1
                const angle = Math.atan2(dy, dx)
                const pushX = Math.cos(angle) * force * 30
                x.set(pushX)
            } else {
                x.set(0)
            }
        })

        const unsubscribeY = mouseYSpring.on('change', (latest: number) => {
            const particleX = (particle.left / 100) * window.innerWidth
            const particleY = y.get()

            const dx = particleX - mouseXSpring.get()
            const dy = particleY - latest
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150 && distance > 0) {
                const force = (150 - distance) / 150
                const angle = Math.atan2(dy, dx)
                const pushY = Math.sin(angle) * force * 30
                y.set(pushY)
            } else {
                y.set(0)
            }
        })

        return () => {
            unsubscribeX()
            unsubscribeY()
        }
    }, [mouseXSpring, mouseYSpring, particle.left, x, y])

    return (
        <motion.div
            className="absolute rounded-full"
            style={{
                left: `${particle.left}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: `radial-gradient(circle, ${particle.color} 0%, ${particle.color}99 50%, transparent 100%)`,
                boxShadow: `0 0 ${particle.size * 3}px ${particle.color}80, 0 0 ${particle.size * 6}px ${particle.color}40`,
                filter: `blur(${particle.size * 0.15}px)`,
                x,
                y,
            }}
            initial={{
                bottom: '-5%',
                opacity: 0,
            }}
            animate={{
                bottom: ['null', '105%'],
                opacity: [0, particle.opacity, particle.opacity, 0],
            }}
            transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay,
            }}
        />
    )
}
