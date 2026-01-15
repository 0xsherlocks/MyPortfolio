/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Space / Black Hole Theme
        'primary-bg': '#000000', // Pure black base
        'secondary-bg': '#020617', // Very dark slate/blue
        'glass-border': 'rgba(255, 255, 255, 0.08)',

        // Acid / Neon Accents
        'acid-green': '#ccff00',
        'neon-purple': '#b537f2',
        'electric-blue': '#00f0ff',
        'hot-pink': '#ff0099',

        // Text
        'text-primary': '#ffffff',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'text-dim': 'rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        main: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        display: ['var(--font-space-grotesk)', 'sans-serif'], // For headers
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(180deg, rgba(3,0,20,0) 0%, rgba(3,0,20,1) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        'acid-flow': 'linear-gradient(90deg, #ccff00, #00f0ff, #b537f2)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', filter: 'brightness(100%)' },
          '50%': { opacity: '1', filter: 'brightness(150%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
