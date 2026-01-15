'use client'

import { motion } from 'framer-motion'
import { Code2, Shield, Zap, Target, Brain, Lock } from 'lucide-react'

export default function About() {
    const traits = [
        {
            icon: Code2,
            title: 'Builder at Heart',
            description: 'Creating clean web interfaces, functional apps, and experimenting with emerging technologies'
        },
        {
            icon: Brain,
            title: 'Learn by Doing',
            description: 'Real projects, hands-on experimentation, and iterative improvement over theory'
        },
        {
            icon: Shield,
            title: 'Forensic Mindset',
            description: 'Analytical thinking, pattern observation, and logical problem-solving approaches'
        },
        {
            icon: Target,
            title: 'Detail-Oriented',
            description: 'Deep focus on one problem at a time, refining until the solution feels right'
        }
    ]

    const principles = [
        { icon: Lock, text: 'Security-First Approach' },
        { icon: Zap, text: 'Performance & Clarity' },
        { icon: Code2, text: 'Purpose-Driven Code' }
    ]

    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
            <div className="absolute inset-0 bg-grid-white/5" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
                        ABOUT <span className="text-outline-purple">ME</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-electric-blue rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p className="text-text-secondary">
                                I'm <span className="text-white font-semibold">Gulshan</span>, a curious and hands-on learner with a deep passion for technology, cybersecurity, and digital systems. I thrive on building things from scratch—whether it's crafting a clean web interface, developing a functional application, or diving into emerging technologies like blockchain and cryptocurrency systems.
                            </p>

                            <p className="text-text-secondary">
                                My approach centers on <span className="text-purple-400 font-medium">learning by doing</span> rather than passive consumption. Most of my growth stems from tackling real projects, breaking things, fixing them, and iteratively refining solutions. I prefer working independently, maintaining deep focus on one challenge at a time, and polishing every detail until the outcome meets my standards.
                            </p>

                            <p className="text-text-secondary">
                                Alongside development, I'm exploring <span className="text-purple-400 font-medium">forensic technology and cyber investigation</span>, which sharpens my analytical thinking, pattern recognition, and logical problem-solving abilities. I believe exceptional technology transcends aesthetics and code—it's fundamentally about <span className="text-white font-medium">clarity, security, and purpose</span>.
                            </p>

                            <div className="pt-6">
                                <p className="text-white font-medium text-xl">
                                    Right now, I'm focused on sharpening my skills, building meaningful projects, and evolving into someone who creates reliable, modern, and thoughtful digital solutions.
                                </p>
                            </div>
                        </div>

                        {/* Core Principles */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            {principles.map((principle, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                                >
                                    <principle.icon className="w-4 h-4 text-purple-400" />
                                    <span className="text-sm font-medium text-text-secondary">{principle.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Traits Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {traits.map((trait, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(168,85,247,0.15)' }}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:border-purple-500/30"
                            >
                                {/* Gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-4 p-3 rounded-xl bg-purple-500/10 w-fit group-hover:scale-110 transition-transform duration-300">
                                        <trait.icon className="w-6 h-6 text-purple-400" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                                        {trait.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        {trait.description}
                                    </p>
                                </div>

                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="text-text-secondary">Want to collaborate?</span>
                        <a
                            href="#contact"
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-electric-blue text-white font-semibold hover:scale-105 transition-transform"
                        >
                            Let's Connect
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
