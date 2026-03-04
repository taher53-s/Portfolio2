export interface Experience {
    id: string
    role: string
    company: string
    type: string
    period: string
    location: string
    description: string
    highlights: string[]
    stack: string[]
    accentColor: string
}

export const experiences: Experience[] = [
    {
        id: 'independent',
        role: 'Independent Builder',
        company: 'Self-directed',
        type: 'Full-time · Open Source',
        period: '2023 – Present',
        location: 'Mumbai, India',
        description: 'Designing and shipping full-stack products end-to-end, from system architecture to production deployment. Focus on developer tooling, AI systems, and performance-first web experiences.',
        highlights: [
            'Shipped 6 production projects spanning AI, CLI tooling, and SaaS analytics',
            'Maintained 3 open source repositories with combined 500+ stars',
            'Established personal design system and component library used across all projects',
            'Built and deployed on Vercel Edge with consistent Lighthouse 95+ scores',
        ],
        stack: ['Next.js', 'Python', 'TypeScript', 'Vercel', 'Docker'],
        accentColor: 'var(--accent-a-200)',
    },
    {
        id: 'ai-research',
        role: 'AI/ML Research Assistant',
        company: 'Atlas Skilltech University',
        type: 'Academic · Part-time',
        period: 'Jan 2025 – Apr 2025',
        location: 'Mumbai, India',
        description: 'Assisted faculty research in NLP and document processing pipelines. Contributed to a student-led RAG implementation benchmarking study.',
        highlights: [
            'Benchmarked 4 RAG retrieval strategies on 200-document academic corpus',
            'Implemented custom chunking heuristics improving retrieval recall by 14%',
            'Co-authored internal technical report adopted for departmental curriculum',
        ],
        stack: ['Python', 'LangChain', 'HuggingFace', 'Pinecone', 'FastAPI'],
        accentColor: 'var(--accent-c-200)',
    },
    {
        id: 'freelance',
        role: 'Freelance Frontend Developer',
        company: 'Independent Clients',
        type: 'Freelance · Contract',
        period: 'Jun 2024 – Dec 2024',
        location: 'Remote',
        description: 'Delivered 4 client projects including SaaS landing pages, e-commerce storefronts, and portfolio sites focused on performance, accessibility, and motion-first UI.',
        highlights: [
            'Delivered all 4 projects on-time and within scope',
            'Average Lighthouse score of 97 across delivered projects',
            'Implemented motion design system reused across 3 client sites',
            '2 clients returned for follow-on projects',
        ],
        stack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vercel'],
        accentColor: 'var(--accent-b-200)',
    },
]
