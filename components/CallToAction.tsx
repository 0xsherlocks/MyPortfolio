'use client'

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-accent-purple/5 to-transparent border-y border-glass-border"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
          Let's Build Something Together
        </h2>
        
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
          Have a challenging forensic project or need help with AI automation? I'm always open to 
          collaborating on innovative solutions that push the boundaries of cyber intelligence and 
          forensic science.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-accent-cyan text-primary-bg font-bold uppercase tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 hover:-translate-y-1"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/0xsherlocks"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-accent-cyan text-accent-cyan font-bold uppercase tracking-wide rounded-md hover:bg-accent-cyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
