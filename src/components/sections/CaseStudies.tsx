'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassPanel from '@/components/ui/GlassPanel'
import MagneticButton from '@/components/ui/MagneticButton'
import { projects } from '@/data/projects'

const caseStudies = projects.filter((p) => p.slug === 'mission-control' || p.slug === 'neovim-plugin-marketplace')

interface CaseStudiesProps { id?: string }

export default function CaseStudies({ id }: CaseStudiesProps) {
    return (
        <section id={id} className="py-32 px-6 md:px-16 lg:px-24">
            <AnimatedSection>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-6xl">Case Studies</h2>
            </AnimatedSection>

            <div className="mt-16 space-y-8">
                {caseStudies.map((project, i) => (
                    <AnimatedSection key={project.slug} direction={i === 0 ? 'left' : 'right'} delay={0.1}>
                        <GlassPanel className="grid gap-6 p-6 md:grid-cols-[1fr_1.2fr]">
                            <CaseImage project={project} />
                            <div className="flex flex-col justify-center">
                                <span className="text-[10px] font-medium uppercase tracking-widest text-[var(--text-muted)]">{project.category}</span>
                                <h3 className="mt-2 text-xl font-bold text-[var(--text-primary)]">{project.title}</h3>
                                <div className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
                                    <p><strong className="text-[var(--text-primary)]">Problem:</strong> {project.problem}</p>
                                    <p><strong className="text-[var(--text-primary)]">Key Decision:</strong> {project.solution.split('.')[0]}.</p>
                                    <p><strong className="text-[var(--text-primary)]">Outcome:</strong> {project.outcome.split('.')[0]}.</p>
                                </div>
                                <div className="mt-5">
                                    <MagneticButton variant="secondary" href={`#`} onClick={() => { window.location.href = `/projects/${project.slug}` }}>
                                        Read Full Case Study →
                                    </MagneticButton>
                                </div>
                            </div>
                        </GlassPanel>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    )
}

function CaseImage({ project }: { project: typeof caseStudies[number] }) {
    const [imgError, setImgError] = React.useState(false)
    return (
        <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '16 / 10' }}>
            {imgError ? (
                <div className="absolute inset-0" style={{ background: project.imageGradient }} />
            ) : (
                <Image
                    src={`/projects/${project.slug}.png`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-expo)] group-hover:scale-105"
                    onError={() => setImgError(true)}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        </div>
    )
}
