import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { generateProjectMetadata } from '@/lib/og'
import ProjectDetailClient from './client'

interface PageProps { params: { slug: string } }

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
    const project = projects.find((p) => p.slug === params.slug)
    if (!project) return { title: 'Not Found' }
    return generateProjectMetadata(project)
}

export default function ProjectPage({ params }: PageProps) {
    const project = projects.find((p) => p.slug === params.slug)
    if (!project) notFound()

    const currentIndex = projects.indexOf(project)
    const nextProject = projects[(currentIndex + 1) % projects.length]

    return <ProjectDetailClient project={project} nextProject={nextProject} />
}
