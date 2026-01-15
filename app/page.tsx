'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Copy, Mail, MapPin, CheckCircle2, Linkedin, Shield, Lock, Bug, FlaskConical, Github } from 'lucide-react'
import { useState } from 'react'
import dynamic from 'next/dynamic'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import BentoGrid from '@/components/BentoGrid'
import { projects, experiences, skillGroups, certifications, socialLinks } from '@/app/data/content'

// Dynamically import client-only components to avoid hydration errors

export default function Home() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('rajgulshan2580@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="bg-primary-bg min-h-screen text-white selection:bg-acid-green selection:text-black overflow-x-hidden">
      {/* Skip to main content link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-acid-green focus:text-black focus:rounded-lg focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navigation />
      <Hero />

      {/* About Section */}
      <About />

      {/* ZONE 2 (100vh+): Content Sections - CONSISTENT DARK THEME */}
      {/* Projects Section - Bento Grid */}
      <section id="projects" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
              SELECTED <span className="text-outline-acid">WORKS</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl font-light">
              A collection of digital forensics tools, automation scripts, and blockchain monitors.
            </p>
          </motion.div>

          <BentoGrid projects={projects} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black mb-4">
              XP <span className="text-outline-purple">&amp; EDU</span>
            </h2>
            <p className="text-lg text-text-secondary">Experience &amp; Education</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(139,92,246,0.15)' }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-300 hover:border-purple-500/30"
              >
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-3 border font-semibold bg-purple-500/10 text-purple-400 border-purple-500/20">
                        {exp.date}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-purple-400 font-medium">{exp.org}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-text-tertiary">
                        <ArrowUpRight className="w-4 h-4 mt-0.5 text-purple-400 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider - Tech Badge */}
      <div className="relative h-48 flex items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

        {/* Cyber Line */}
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Tech Badge */}
        <div className="relative z-10 px-6 py-2 bg-black/80 border border-white/10 rounded-full backdrop-blur-md shadow-[0_0_30px_rgba(204,255,0,0.1)] group hover:border-acid-green/50 transition-colors duration-500">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-acid-green rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-acid-green rounded-full animate-pulse delay-75" />
              <div className="w-1 h-1 bg-acid-green rounded-full animate-pulse delay-150" />
            </div>
            <span className="text-sm font-mono text-text-secondary tracking-[0.2em] group-hover:text-acid-green transition-colors duration-300">
              SYSTEM // SECURE
            </span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-acid-green rounded-full animate-pulse delay-150" />
              <div className="w-1 h-1 bg-acid-green rounded-full animate-pulse delay-75" />
              <div className="w-1 h-1 bg-acid-green rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Marquee Section */}
      <section id="skills" className="relative py-24 border-y border-white/5 overflow-hidden bg-black">
        {/* Background Grid for Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="rotate-[-2deg] scale-110 relative z-10">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {[...skillGroups, ...skillGroups].flatMap(group => group.items).map((skill, i) => (
              <div key={i} className="text-6xl md:text-8xl font-black text-transparent text-outline-white/20 uppercase hover:text-white hover:text-outline-none transition-all duration-500 cursor-default">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section id="certifications" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-16 text-center">
            CERTIFIED <span className="text-acid-green">INTEL</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => {
              // Icon mapping based on cert title
              const getIcon = (title: string) => {
                if (title.includes('Digital Forensics')) return Shield
                if (title.includes('Cyber Forensics')) return Lock
                if (title.includes('Bug Bounty')) return Bug
                return FlaskConical
              }
              const Icon = getIcon(cert.title)

              return (
                <motion.a
                  key={idx}
                  href={cert.url}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10, rotate: 1, borderColor: 'rgba(204,255,0,0.5)' }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-acid-green/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(204,255,0,0.2)] transition-all flex flex-col justify-between h-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-acid-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="mb-4 p-3 rounded-2xl bg-acid-green/10 w-fit group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-acid-green" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-acid-green transition-colors">{cert.title}</h3>
                    <p className="text-sm text-text-tertiary mb-4">{cert.subtitle}</p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10 relative">
                    <span className="text-xs font-mono text-accent-purple">{cert.org}</span>
                    <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-acid-green/10 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-6xl md:text-9xl font-display font-black tracking-tighter mb-8 leading-none">
              LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-green to-electric-blue">COLLABORATE</span>
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary mb-12">
              Ready to collaborate on the next generation of forensic tech?
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button
                onClick={copyEmail}
                aria-label="Copy email address to clipboard"
                className="group relative px-6 md:px-8 py-4 rounded-full bg-gradient-to-r from-[#8a2be2] to-[#00d4ff] text-white font-bold font-display text-base md:text-lg hover:scale-105 transition-all duration-300 shadow-[0_8px_24px_rgba(138,43,226,0.4)] flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span className="truncate max-w-[200px] sm:max-w-none">rajgulshan2580@gmail.com</span>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {copied ? '✓ Copied!' : 'Click to Copy'}
                </div>
                {copied ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-4 h-4 ml-2 opacity-50" />}
              </button>

              <a
                href={socialLinks.find(l => l.label === 'LinkedIn')?.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with me on LinkedIn"
                className="group relative px-8 py-4 rounded-full border-2 border-transparent bg-gradient-to-r from-[#8a2be2] to-[#00d4ff] p-[2px] hover:scale-105 transition-all duration-300"
              >
                <div className="px-8 py-4 rounded-full bg-primary-bg group-hover:bg-transparent transition-colors duration-300 flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-bold font-display text-lg text-white">Connect on LinkedIn</span>
                </div>
              </a>
            </div>

            <div className="mt-24 pt-8 border-t border-white/10">
              {/* Social Media Icons */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <a
                  href="https://github.com/0xsherlocks"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-acid-green/10 hover:border-acid-green/50 transition-all group"
                >
                  <Github className="w-5 h-5 text-white/60 group-hover:text-acid-green transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/gulshanxraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with me on LinkedIn"
                  className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-electric-blue/10 hover:border-electric-blue/50 transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-white/60 group-hover:text-electric-blue transition-colors" />
                </a>
                <a
                  href="mailto:rajgulshan2580@gmail.com"
                  className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-neon-purple/10 hover:border-neon-purple/50 transition-all group"
                >
                  <Mail className="w-5 h-5 text-white/60 group-hover:text-neon-purple transition-colors" />
                </a>
              </div>

              {/* Quick Links & Footer Info */}
              <div className="flex flex-col md:flex-row items-center justify-between text-sm text-text-tertiary gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Gurugram, Haryana, India</span>
                </div>
                <p className="text-center">© 2026 Gulshan Kumar. Built with Next.js & Agentic AI.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-acid-green to-electric-blue text-black font-bold shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:shadow-[0_0_40px_rgba(204,255,0,0.5)] transition-all z-50"
          aria-label="Back to top"
        >
          <ArrowUpRight className="w-5 h-5 rotate-[-90deg]" />
        </motion.button>
      </section>
    </main>
  )
}
