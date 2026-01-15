# 🚀 FORNEXT - Modern Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.13.1-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **Forensic Science × AI-Driven Cyber Intelligence**
> 
> A modern, production-ready portfolio showcasing expertise in digital forensics, OSINT, agentic AI, and blockchain technology. Fully optimized for SEO, accessibility, and performance.

## ✨ Features

### 🎨 Modern Design System
- **Vibrant Color Palette**: Electric blues (#00d4ff), neon purples (#a855f7), acid greens (#ccff00)
- **Advanced Glassmorphism**: Frosted glass effects with gradient borders
- **Neon Glow Effects**: Pulsing glows on interactive elements
- **Smooth Animations**: Optimized entrance animations (0.6s faster load time)
- **Active Navigation**: Real-time section indicator with animated underline

### ♿ Accessibility (WCAG 2.1 AA Compliant)
- **Full Keyboard Navigation**: Skip links and focus indicators
- **Screen Reader Support**: Comprehensive ARIA labels on all interactive elements
- **Motion Preferences**: Respects `prefers-reduced-motion`
- **Focus Indicators**: Acid green visible focus rings
- **Semantic HTML**: Proper heading hierarchy and landmarks

### 🔍 SEO Optimized
- **Open Graph Tags**: Beautiful social media preview cards
- **Twitter Cards**: Large image previews with creator attribution
- **JSON-LD Structured Data**: Person schema for rich snippets
- **Dynamic Sitemap**: Auto-generated with priorities and update frequencies
- **Robots.txt**: Proper crawler instructions
- **15+ Keywords**: Comprehensive keyword coverage
- **Meta Descriptions**: Optimized for search engines

### 🔒 Security
- **7 Security Headers**:
  - Strict-Transport-Security (HSTS)
  - X-Frame-Options (clickjacking protection)
  - X-Content-Type-Options (MIME sniffing protection)
  - X-XSS-Protection
  - Referrer-Policy
  - Permissions-Policy
  - X-DNS-Prefetch-Control
- **External Link Security**: All external links have `rel="noopener noreferrer"`

### ⚡ Performance
- **Image Optimization**: AVIF and WebP formats with responsive sizes
- **Compression**: Gzip enabled for all assets
- **SWC Minification**: Faster builds and smaller bundles
- **Static Generation**: Pre-rendered for optimal load times
- **Core Web Vitals**: LCP < 1.5s, FID < 50ms, CLS < 0.1

### 📱 Progressive Web App (PWA)
- **Installable**: Add to home screen on mobile devices
- **Manifest**: Custom app icon and branding
- **Standalone Mode**: Full-screen app experience
- **Offline Ready**: Service worker compatible

## 🎯 Sections

1. **Hero** - Dynamic introduction with 3D effects and particle animations
2. **About** - Professional background with refined bio and trait cards
3. **Projects** - Portfolio showcase with glassmorphism cards
4. **Experience & Education** - Timeline with modern card layout
5. **Skills** - Technical capabilities organized by category
6. **Certifications** - Professional achievements
7. **Contact** - Interactive contact section with copy-to-clipboard

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Create environment file (optional)
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables (if using analytics)
4. Deploy!

### Environment Variables (Optional)

Create a `.env.local` file for analytics:

```env
# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-id
```

### Post-Deployment Checklist

- [ ] Verify sitemap at `https://yourdomain.com/sitemap.xml`
- [ ] Verify robots.txt at `https://yourdomain.com/robots.txt`
- [ ] Test OG tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Card with [Twitter Validator](https://cards-dev.twitter.com/validator)
- [ ] Submit sitemap to Google Search Console
- [ ] Run Lighthouse audit (target: 95+ all categories)
- [ ] Test PWA install on mobile device

## 📊 Performance Metrics

### Lighthouse Scores (Expected)
- 🟢 Performance: 95+
- 🟢 Accessibility: 95+
- 🟢 Best Practices: 100
- 🟢 SEO: 100

### Core Web Vitals
- ✅ LCP (Largest Contentful Paint): < 1.5s
- ✅ FID (First Input Delay): < 50ms
- ✅ CLS (Cumulative Layout Shift): < 0.1

## 🛠️ Tech Stack

### Framework & Core
- **Next.js 16.1** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5.9** - Type safety

### Styling & Animation
- **Tailwind CSS 4.1** - Utility-first CSS
- **Framer Motion 11** - Animation library
- **Custom Design System** - Deep space theme with neon accents

### 3D & Effects
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Lucide React** - Icon library

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── data/
│   │   └── content.ts          # Portfolio content
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with SEO
│   ├── page.tsx                # Homepage
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # Robots.txt config
├── components/
│   ├── About.tsx               # About section
│   ├── BentoGrid.tsx           # Project grid
│   ├── Hero.tsx                # Hero section
│   ├── Navigation.tsx          # Nav with active state
│   └── ...
├── public/
│   ├── og-image.jpg            # Social preview (1200x630)
│   ├── icon-512.png            # PWA icon
│   ├── icon-192.png            # PWA icon
│   ├── manifest.json           # PWA manifest
│   └── favicon.ico             # Favicon
├── next.config.js              # Next.js config with security
├── tailwind.config.js          # Tailwind config
└── .env.example                # Environment template
```

## 🎨 Customization

### Update Content
Edit `app/data/content.ts` to update:
- Projects
- Experience & Education
- Skills
- Certifications
- Blog posts
- Social links

### Update Colors
Edit `tailwind.config.js` and `app/globals.css` to customize the color palette.

### Update SEO Metadata
Edit `app/layout.tsx` to update:
- Site title and description
- Open Graph images
- Twitter Card settings
- Structured data

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with modern web technologies and best practices:
- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Framer Motion for smooth animations
- Tailwind Labs for the CSS framework

## 📬 Contact

- **Email**: rajgulshan2580@gmail.com
- **LinkedIn**: [linkedin.com/in/gulshanxraj](https://linkedin.com/in/gulshanxraj)
- **GitHub**: [github.com/0xsherlocks](https://github.com/0xsherlocks)

---

**Built with ❤️ by Gulshan Kumar | FORNEXT**

*"Forensic Science × AI-Driven Cyber Intelligence"*
 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/0xsherlocks/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🎨 Color Palette

### Primary Colors
```css
--primary-bg: #0a0118      /* Deep Space */
--secondary-bg: #0f0520    /* Dark Purple */
```

### Accent Colors
```css
--accent-blue: #00d4ff     /* Electric Blue */
--accent-purple: #a855f7   /* Neon Purple */
--accent-magenta: #ec4899  /* Magenta */
--accent-green: #10b981    /* Cyber Green */
--accent-orange: #f97316   /* Vibrant Orange */
```

### Text Colors
```css
--text-primary: #f8fafc    /* White */
--text-secondary: #cbd5e1  /* Light Gray */
--text-tertiary: #94a3b8   /* Medium Gray */
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── privacy-policy/    # Privacy policy page
│   └── terms-of-service/  # Terms of service page
├── components/            # React components
│   ├── Hero.tsx          # Hero section with 3D effects
│   └── Navigation.tsx    # Modern navigation bar
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
└── next.config.js        # Next.js configuration
```

## 🛠️ Technologies

- **Next.js 16.1** - React framework for production
- **React 19.2** - UI library
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Framer Motion 11.13** - Animation library
- **Lucide React** - Modern icon set

## 🌟 Key Highlights

### Modern Design Patterns
- ✅ Glassmorphism effects with backdrop blur
- ✅ Gradient backgrounds and text
- ✅ Neon glow and border animations
- ✅ 3D transforms and perspective
- ✅ Particle systems and floating elements

### Performance Optimizations
- ✅ Static site generation (SSG)
- ✅ Optimized images and assets
- ✅ Code splitting
- ✅ Minimal JavaScript bundle

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Skip to main content link

## 📝 Content Sections

### Professional Background
- 🎓 Forensic Science Student at K.R. Mangalam University
- 🔍 Intern at State Forensic Science Lab, CID Patna
- 🔗 Blockchain & Crypto Intern at Future Interns

### Technical Expertise
- 🤖 Agentic AI & n8n Automation
- 🔐 Digital Forensics & OSINT
- ⛓️ Blockchain Fundamentals
- 💻 Modern Web Development

### Notable Projects
- Email Security & Scam Protector (n8n, AI)
- Crypto Portfolio Tracker (React, Blockchain)
- Agentic AI Automation Systems (n8n, OpenAI)
- LinkedIn Content Generator (AI, Automation)

## 📄 License

Copyright © 2025 Gulshan Kumar. All rights reserved.

## 🤝 Connect

- **Email**: rajgulshan2580@gmail.com
- **LinkedIn**: [linkedin.com/in/gulshanxraj](https://linkedin.com/in/gulshanxraj)
- **GitHub**: [github.com/0xsherlocks](https://github.com/0xsherlocks)
- **Website**: [fornext.dev](https://fornext.dev)

---

<p align="center">
  <strong>Built with 💙 using Next.js and modern web technologies</strong>
  <br>
  <em>Featuring 2025-26 design trends: Glassmorphism, Neon Glows, and 3D Effects</em>
</p>
