import type { Metadata, Viewport } from 'next'
import { Outfit, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ClientLayout from '../components/ClientLayout'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fornext.dev'),
  title: {
    default: 'Gulshan Kumar | Forensic Science × AI-Driven Cyber Intelligence',
    template: '%s | Gulshan Kumar'
  },
  description: 'Forensic Science student specializing in AI automation, digital forensics, OSINT, and blockchain technology. Building secure, auditable systems with n8n, Python, and modern web technologies.',
  keywords: [
    'Forensic Science',
    'AI Automation',
    'Cyber Intelligence',
    'Digital Forensics',
    'OSINT',
    'Blockchain',
    'n8n Automation',
    'Security Automation',
    'Agentic AI',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'Gulshan Kumar',
    'Portfolio'
  ],
  authors: [{ name: 'Gulshan Kumar', url: 'https://fornext.dev' }],
  creator: 'Gulshan Kumar',
  publisher: 'Gulshan Kumar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fornext.dev',
    siteName: 'FORNEXT',
    title: 'Gulshan Kumar | Forensic Science × AI-Driven Cyber Intelligence',
    description: 'Building secure, auditable systems with AI automation, digital forensics, and blockchain technology. Specialized in n8n workflows, OSINT investigations, and modern web development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gulshan Kumar - Forensic Science × AI Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gulshan Kumar | Forensic Science × AI-Driven Cyber Intelligence',
    description: 'Building secure, auditable systems with AI automation, digital forensics, and blockchain technology.',
    images: ['/og-image.jpg'],
    creator: '@gulshanxraj',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#030014',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8985985740593673" crossOrigin="anonymous"></script>
        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Gulshan Kumar',
              url: 'https://fornext.dev',
              sameAs: [
                'https://github.com/0xsherlocks',
                'https://linkedin.com/in/gulshanxraj',
              ],
              jobTitle: 'Forensic Science Student',
              description: 'Forensic Science student specializing in AI automation, digital forensics, OSINT, and blockchain technology.',
              email: 'rajgulshan2580@gmail.com',
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'K.R. Mangalam University',
              },
              knowsAbout: [
                'Digital Forensics',
                'AI Automation',
                'Cyber Security',
                'OSINT',
                'Blockchain',
                'n8n',
                'Web Development',
                'React',
                'Next.js',
                'TypeScript',
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-primary-bg text-text-primary font-main antialiased selection:bg-acid-green selection:text-black">
        <div className="relative min-h-screen">
          <ClientLayout>{children}</ClientLayout>
        </div>
      </body>
    </html>
  )
}
