import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '@/app/data/content'

export default function BentoGrid({ projects }: { projects: Project[] }) {
    // Category-specific accent colors
    const categoryColors: Record<string, string> = {
        'Security Automation': '#00d4ff', // Electric Blue  
        'Blockchain Evidence': '#b537f2', // Neon Purple
        'Agentic AI': '#00f0ff', // Cyan
        'Content Automation': '#ccff00' // Acid Green
    }

    return (
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
            {projects.map((project, i) => {
                const accentColor = categoryColors[project.category] || '#ccff00'

                return (
                    <motion.div
                        key={project.id}
                        className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/80 ${i === 0 || i === 3 ? 'md:col-span-2' : 'md:col-span-1'
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: `0 0 40px ${accentColor}40`
                        }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                        <div className="relative h-full flex flex-col justify-end p-8 z-20">
                            <div className="mb-4">
                                <span
                                    className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-2 border font-semibold"
                                    style={{
                                        backgroundColor: `${accentColor}10`,
                                        color: accentColor,
                                        borderColor: `${accentColor}20`
                                    }}
                                >
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold font-display leading-tight">{project.title}</h3>
                            </div>

                            <p className="text-text-secondary text-sm line-clamp-2 mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                {project.summary}
                            </p>

                            <div className="flex gap-2 flex-wrap opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                {project.stack.slice(0, 3).map((tech) => (
                                    <span key={tech} className="text-xs text-white/60 border border-white/10 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} on GitHub`}
                                className="absolute top-6 right-6 p-3 rounded-full transition-all duration-300 backdrop-blur-sm group-hover:rotate-45 group-hover:scale-110"
                                style={{
                                    background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}10)`,
                                    boxShadow: `0 0 20px ${accentColor}30`
                                }}
                            >
                                <ArrowUpRight className="w-5 h-5 text-white" />
                            </a>
                        </div>

                        {/* Abstract Pattern / Placeholder for Image */}
                        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110 group-hover:scale-100">
                            <div
                                className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]"
                                style={{
                                    '--tw-gradient-from': `${accentColor}40`,
                                    '--tw-gradient-stops': `var(--tw-gradient-from), transparent, transparent`
                                } as React.CSSProperties}
                            />
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}
