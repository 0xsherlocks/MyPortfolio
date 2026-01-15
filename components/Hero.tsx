'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Shield, Zap, Lock } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import SmokeEffect from './SmokeEffect'
import Particles from './Particles'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-primary-bg selection:bg-acid-green selection:text-black pt-20 lg:pt-0">

      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-hero-gradient opacity-60" />

      {/* Gradient Orbs - Colorful blurs for visual depth */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"
          style={{ animation: 'float 15s ease-in-out infinite' }} />
        <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-acid-green/15 blur-[100px] rounded-full"
          style={{ animation: 'float 20s ease-in-out infinite reverse' }} />
        <div className="absolute top-[15%] right-[25%] w-[300px] h-[300px] bg-pink-500/20 blur-[110px] rounded-full animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[2] opacity-50">
        <Particles />
      </div>


      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* LEFT COLUMN: Text Content */}
          <motion.div
            style={{ y: yText }}
            className="flex flex-col items-start text-left order-2 lg:order-1"
          >

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-acid-green/50 transition-colors cursor-default shadow-[0_0_15px_rgba(0,255,0,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acid-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-acid-green"></span>
                </span>
                <span className="text-[10px] md:text-xs font-mono text-white/70 tracking-wider">AVAILABLE TO WORK</span>
              </div>
            </motion.div>

            {/* Main Headlines */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-xl md:text-3xl font-display font-medium text-white mb-2 tracking-wide">
                Hi, I'm
              </h2>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold text-white tracking-tight mb-4 leading-[1.1]">
                Gulshan <br /> Kumar
              </h1>
            </motion.div>

            {/* Role / Subheading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-xl md:text-3xl font-display font-bold text-[#00d4ff] tracking-wide">
                Digital Forensics & AI Architect
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-8"
            >
              Blending strict <span className="text-white font-medium">Digital Forensics</span> with <span className="text-white font-medium">Agentic AI</span> & <span className="text-white font-medium">Blockchain</span> to build auditable, automated security systems for the next generation of the web.
              <span className="block mt-4 text-sm font-mono text-white/40">Creator of <span className="text-white/80">FORNEXT</span></span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6 mb-16"
            >
              <a
                href="#projects"
                className="group relative px-10 py-4 rounded-xl bg-[#00d4ff] text-black font-bold font-display tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] flex items-center gap-2"
              >
                Hire Me
              </a>

              <a
                href="#contact"
                className="px-10 py-4 rounded-xl border border-[#00d4ff] hover:bg-[#00d4ff]/10 text-white font-bold font-display transition-all duration-300 hover:scale-105"
              >
                Let's Talk
              </a>
            </motion.div>

            {/* Socials & Trust (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col gap-6"
            >
              <div className="flex gap-6">
                {[
                  { icon: Github, url: 'https://github.com/0xsherlocks' },
                  { icon: Linkedin, url: 'https://linkedin.com/in/gulshanxraj' },
                  { icon: Mail, url: 'mailto:rajgulshan2580@gmail.com' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-full border border-white/20 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all text-white/50 bg-transparent flex items-center justify-center"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 opacity-60">
                <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                  <Shield className="w-3 h-3" /> Security
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                  <Zap className="w-3 h-3" /> Automation
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                  <Lock className="w-3 h-3" /> Forensics
                </div>
              </div>
            </motion.div>
          </motion.div>


          {/* RIGHT COLUMN: Large Blended Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="relative h-[500px] md:h-[700px] w-full flex items-center justify-end order-1 lg:order-2"
          >
            {/* Smoke Effect - Atmospheric layer */}
            <div className="absolute inset-0 -z-10 overflow-hidden opacity-60 mix-blend-screen">
              <SmokeEffect />
            </div>

            {/* Background glow behind image */}
            <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Profile Image */}
            <div className="relative w-full h-full max-w-[650px] ml-auto z-10">
              <Image
                src="/profile-main.png"
                alt="Gulshan Kumar"
                fill
                priority
                className="object-cover object-center lg:object-right-top"
                style={{
                  maskImage: 'linear-gradient(to left, black 72%, transparent 95%)',
                  WebkitMaskImage: 'linear-gradient(to left, black 72%, transparent 95%)'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
