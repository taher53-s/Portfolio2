'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import MagneticButton from '@/components/ui/MagneticButton'
import CounterStat from '@/components/ui/CounterStat'
import type { Project } from '@/data/projects'

interface ProjectDetailClientProps {
    project: Project
    nextProject: Project
}

export default function ProjectDetailClient({ project, nextProject }: ProjectDetailClientProps) {
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let ctx: { revert: () => void } | null = null

        async function init() {
            const { loadGSAP } = await import('@/lib/gsap')
            const { gsap, ScrollTrigger } = await loadGSAP()

            ctx = gsap.context(() => {
                if (heroRef.current) {
                    gsap.to(heroRef.current, {
                        y: 80,
                        ease: 'none',
                        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
                    })
                }
                ScrollTrigger.refresh()
            })
        }

        init()
        return () => { ctx?.revert() }
    }, [])

    return (
        <div className="min-h-screen">
            <div ref={heroRef} className="relative flex aspect-[3/2] max-h-[70vh] items-end overflow-hidden" style={{ background: project.imageGradient }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)] via-transparent to-transparent" />
                <div className="relative z-10 px-6 pb-12 md:px-16 lg:px-24">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-[var(--text-muted)]">{project.category} · {project.year}</span>
                    <h1 className="mt-2 font-display text-5xl font-bold text-[var(--text-primary)] md:text-7xl">{project.title}</h1>
                    <p className="mt-2 max-w-xl text-lg text-[var(--text-secondary)]">{project.tagline}</p>
                </div>
            </div>

            <div className="px-6 pt-4 md:px-16 lg:px-24">
                <Link href="/#projects" className="group inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-a-100)]" data-cursor="pointer">
                    <ArrowLeft size={14} />
                    <span className="relative">
                        ← Back to Work
                        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[var(--accent-a-200)] transition-all duration-300 group-hover:w-full" />
                    </span>
                </Link>
            </div>

            <div className="grid gap-16 px-6 py-16 md:px-16 lg:grid-cols-[1fr_320px] lg:px-24">
                <div className="space-y-10">
                    <AnimatedSection>
                        <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">The Problem</h2>
                        <p className="mt-3 text-lg leading-relaxed text-[var(--text-secondary)]">{project.problem}</p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">The Solution</h2>
                        <p className="mt-3 text-lg leading-relaxed text-[var(--text-secondary)]">{project.solution}</p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">The Outcome</h2>
                        <p className="mt-3 text-lg leading-relaxed text-[var(--text-secondary)]">{project.outcome}</p>
                    </AnimatedSection>
                </div>

                <aside className="space-y-6">
                    <AnimatedSection direction="right">
                        <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-2)] p-6">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Stack</h3>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.stack.map((t) => <span key={t} className="rounded-full bg-[var(--surface-3)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]">{t}</span>)}
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.1}>
                        <div className="space-y-3">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--accent-a-100)] transition-colors hover:text-[var(--accent-a-200)]" data-cursor="pointer">
                                    <ExternalLink size={14} /> Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]" data-cursor="pointer">
                                    <Github size={14} /> Source Code
                                </a>
                            )}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.15}>
                        <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-2)] p-6">
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Status</h3>
                            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${project.status === 'shipped' ? 'border-[var(--accent-a-300)] text-[var(--accent-a-100)]' : 'border-[var(--accent-b-300)] text-[var(--accent-b-100)]'}`}>
                                {project.status === 'in-progress' ? 'In Progress' : 'Shipped'}
                            </span>
                        </div>
                    </AnimatedSection>
                </aside>
            </div>

            <motion.section className="px-6 py-16 md:px-16 lg:px-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Next Project</p>
                <Link href={`/projects/${nextProject.slug}`} className="group mt-4 block" data-cursor="pointer">
                    <div className="overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-2)] p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-a-100)]">{nextProject.title}</h3>
                                <p className="mt-1 text-sm text-[var(--text-secondary)]">{nextProject.tagline}</p>
                            </div>
                            <span className="text-[var(--text-muted)] transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </div>
                    </div>
                </Link>
            </motion.section>
        </div>
    )
}
