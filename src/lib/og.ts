import type { Metadata } from 'next'
import type { Project } from '@/data/projects'

export function generateProjectMetadata(project: Project): Metadata {
    return {
        title: `${project.title} — Taher Sohagpurwala`,
        description: project.tagline,
        openGraph: {
            title: `${project.title} — Taher Sohagpurwala`,
            description: project.tagline,
            type: 'article',
            images: [{ url: '/og-default.png', width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} — Taher Sohagpurwala`,
            description: project.tagline,
        },
    }
}

export function generateSiteMetadata(): Metadata {
    return {
        title: 'Taher Sohagpurwala — Builder · Systems Thinker · AI/ML Engineer',
        description:
            'Full-stack developer building AI systems, developer tooling, and performance-first web experiences. B.Tech CS (AI & ML) at Atlas Skilltech University.',
        openGraph: {
            title: 'Taher Sohagpurwala — Builder · Systems Thinker · AI/ML Engineer',
            description:
                'Full-stack developer building AI systems, developer tooling, and performance-first web experiences.',
            type: 'website',
            images: [{ url: '/og-default.png', width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Taher Sohagpurwala — Builder · Systems Thinker · AI/ML Engineer',
            description:
                'Full-stack developer building AI systems, developer tooling, and performance-first web experiences.',
        },
    }
}
