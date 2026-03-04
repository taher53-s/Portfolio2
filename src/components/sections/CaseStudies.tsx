'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassPanel from '@/components/ui/GlassPanel'
import MagneticButton from '@/components/ui/MagneticButton'
import { projects } from '@/data/projects'

const caseStudies = projects.filter((p) => p.slug === 'mission-control' || p.slug === 'vim-plugin-marketplace')

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
                            <div className="aspect-[16/10] overflow-hidden rounded-xl" style={{ background: project.imageGradient }} />
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
