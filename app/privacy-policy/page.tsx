import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | FORNEXT',
  description: 'Privacy policy for Gulshan Kumar\'s portfolio website',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-primary-bg text-text-primary">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-purple transition-colors mb-8"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p className="text-lg">Last updated: January 14, 2025</p>
          
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Information We Collect</h2>
            <p>
              This portfolio website is informational and does not actively collect personal information. 
              When you contact me through the contact form, I collect only the information you provide 
              (name, email, and message) to respond to your inquiry.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact me at{' '}
              <a 
                href="mailto:rajgulshan2580@gmail.com"
                className="text-accent-blue hover:text-accent-purple transition-colors"
              >
                rajgulshan2580@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
