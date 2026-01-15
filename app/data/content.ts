import {
    ArrowUpRight,
    BookOpenCheck,
    Cpu,
    ExternalLink,
    FileText,
    Github,
    GraduationCap,
    Mail,
    MapPin,
    PenSquare,
    Shield,
    Workflow,
    Linkedin,
} from 'lucide-react'

export type Project = {
    id: string
    title: string
    category: string
    summary: string
    impact: string[]
    stack: string[]
    link: { label: string; url: string }
}

export type Experience = {
    date: string
    title: string
    org: string
    description: string
    bullets: string[]
    kind: 'experience' | 'education'
}

export const projects: Project[] = [
    {
        id: 'email-security',
        title: 'Outlook + Gmail Security & Scam Protector',
        category: 'Security Automation',
        summary: 'AI-powered triage that scores, labels, and alerts across Outlook and Gmail inboxes.',
        impact: [
            'Quarantines malicious payloads with auditable labeling',
            'Dispatches real-time alerts to Slack/email',
            'Telemetry ready for dashboards and reports',
        ],
        stack: ['n8n', 'Gmail API', 'Outlook API', 'Virustotal API', 'Python'],
        link: { label: 'View on GitHub', url: 'https://github.com/0xsherlocks' },
    },
    {
        id: 'crypto-tracker',
        title: 'Crypto Portfolio Tracker',
        category: 'Blockchain Evidence',
        summary: 'Live asset tracking with anomaly alerts, exportable reports, and tax-ready summaries.',
        impact: ['Real-time portfolio views', 'CSV exports for compliance', 'Alerting on sudden movements'],
        stack: ['React', 'Tailwind', 'Recharts', 'CoinGecko API'],
        link: { label: 'View on GitHub', url: 'https://github.com/0xsherlocks' },
    },
    {
        id: 'agentic-automation',
        title: 'Agentic AI & n8n Automation Systems',
        category: 'Agentic AI',
        summary: 'Autonomous workflows that collect, enrich, and report on forensic signals.',
        impact: [
            'Evidence enrichment with markdown exports',
            'Automated reporting hooks',
            'Designed for auditable, explainable runs',
        ],
        stack: ['n8n', 'Python', 'AI/ML APIs', 'OpenAI', 'API Handling'],
        link: { label: 'View on GitHub', url: 'https://github.com/0xsherlocks' },
    },
    {
        id: 'linkedin-automation',
        title: 'LinkedIn Automation: AI Content Generator',
        category: 'Content Automation',
        summary: 'AI-first content generator that drafts, schedules, and posts with generated visuals.',
        impact: ['Scheduled content calendar', 'Auto-image generation', 'Engagement tracking'],
        stack: ['n8n', 'LinkedIn API', 'DALL-E', 'GPT-4'],
        link: { label: 'View on GitHub', url: 'https://github.com/0xsherlocks' },
    },
]

export const experiences: Experience[] = [
    {
        date: 'July 2025 – Aug 2025',
        title: 'Blockchain & Crypto Intern',
        org: 'Future Interns',
        description: 'Exploring decentralized systems and how blockchain records support forensic transparency.',
        bullets: [
            'Analyzed 100+ blockchain transactions to understand tracing methodologies',
            'Built a personal crypto portfolio tracker with live price feeds',
            'Researched forensic tooling used in major crypto crime investigations',
        ],
        kind: 'experience',
    },
    {
        date: 'June 2025 – July 2025',
        title: 'Forensic Science Intern',
        org: 'State Forensic Science Lab, CID Patna',
        description:
            'Hands-on exposure to digital investigations, OSINT, and evidence handling while supporting active cases.',
        bullets: [
            'Assisted in analysis of 15+ cases involving fingerprint and document examination',
            'Documented evidence handling procedures to streamline lab workflows',
            'Participated in OSINT investigations for cyber crime cases',
        ],
        kind: 'experience',
    },
    {
        date: 'Aug 2024 – Present',
        title: 'Forensic Science Student',
        org: 'K.R. Mangalam University',
        description: 'Focused on digital forensics, cybercrime, OSINT, blockchain evidence, automation, and AI.',
        bullets: ['Academic foundation with applied research', 'Exploring digital investigations and automation'],
        kind: 'education',
    },
]

export const skillGroups = [
    {
        title: 'Forensics & OSINT',
        // Icon logic usually handled in component or passed as string if serializing
        items: ['Digital forensics', 'OSINT investigations', 'Chain of custody', 'Cybercrime Investigation', 'Forensic Science'],
    },
    {
        title: 'Automation & AI',
        items: ['n8n automation', 'API Handling', 'Agentic AI systems', 'Workflow orchestration', 'Data processing'],
    },
    {
        title: 'Blockchain & Security',
        items: ['Blockchain tracing', 'Smart contracts basics', 'Threat modeling', 'Evidence integrity'],
    },
    {
        title: 'Frontend & Communication',
        items: ['React & Tailwind', 'UI architecture', 'Data visualization', 'Technical writing'],
    },
]

export const certifications = [
    {
        title: 'Digital Forensics',
        subtitle: 'Awareness on Trends and Technology',
        org: 'K.R. Mangalam University',
        url: 'https://drive.google.com/drive/folders/1IOjJ6sKhaKLVT2BN_QIVpcG6B2Zhkr0i?usp=drive_link',
    },
    {
        title: 'Cyber Forensics',
        subtitle: 'Cyber Security & Penetration Testing',
        org: 'Alpha Probe Forensic | Jun 2025',
        url: 'https://drive.google.com/file/d/1aw2SiLworzVDa2DQ0VS-D63pdFw-2MkC/view?usp=drive_link',
    },
    {
        title: 'Bug Bounty Workshop',
        subtitle: 'Bug Bounty and Cyber Crime Investigation',
        org: 'Indian Cyber Club',
        url: 'https://drive.google.com/file/d/1eDM1km9Nom9alY4cV_o5aF0-iqkJ8BzD/view?usp=drive_link',
    },
    {
        title: 'FUSE 1.0',
        subtitle: 'Forensic Science Workshop',
        org: 'K.R. Mangalam University | Sep 2024',
        url: 'https://drive.google.com/file/d/1wZAsrBW829EqhWSjyeIDNlJ0KJLBOtFW/view?usp=drive_link',
    },
    {
        title: 'AWS - Amazon Web Services',
        subtitle: 'Cloud Computing',
        org: 'K.R. Mangalam University | April 2025',
        url: 'https://drive.google.com/file/d/1GCmSZXQU5C91-pS_cuR0ELg1vV99BU3a/view?usp=drive_link&usp=embed_facebook',
    },
    {
        title: 'International Conference AMGSE-2025',
        subtitle: 'Green Chemistry and Sustainable Environment',
        org: 'K.R. Mangalam University & Shivaji College | March 2025',
        url: 'https://drive.google.com/drive/folders/1Y9Wh6kojir-p0CY5rkJwOpTD7uRuDihf?usp=drive_link',
    },
]

export const writing = [
    {
        title: 'Designing Agentic AI for Digital Forensics',
        date: 'Dec 2025',
        summary: 'Blueprints for explainable assistants that stay auditable during investigations.',
    },
    {
        title: 'n8n Patterns for Security Automation',
        date: 'Nov 2025',
        summary: 'Reusable playbooks to triage alerts, enrich indicators, and dispatch escalations quickly.',
    },
    {
        title: 'Blockchain Evidence & Chain of Custody',
        date: 'Oct 2025',
        summary: 'How immutable ledgers and proofs can support courtroom-ready evidence.',
    },
]

export const socialLinks = [
    { label: 'Email', value: 'rajgulshan2580@gmail.com', url: 'mailto:rajgulshan2580@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/gulshanxraj', url: 'https://linkedin.com/in/gulshanxraj' },
    { label: 'GitHub', value: 'github.com/0xsherlocks', url: 'https://github.com/0xsherlocks' },
    { label: 'Location', value: 'Gurugram, Haryana, India', url: '#' },
]
