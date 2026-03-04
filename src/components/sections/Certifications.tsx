'use client'

import { Brain, Layers, Cloud, Box, Zap, Trophy, Medal, GitBranch } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassPanel from '@/components/ui/GlassPanel'
import { certifications, hackathons } from '@/data/certifications'

const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain size={16} />, Layers: <Layers size={16} />, Cloud: <Cloud size={16} />,
    Box: <Box size={16} />, Zap: <Zap size={16} />,
}

interface CertificationsProps { id?: string }

export default function Certifications({ id }: CertificationsProps) {
    return (
        <section id={id} className="py-32 px-6 md:px-16 lg:px-24">
            <AnimatedSection>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-6xl">Credentials &amp; Recognition</h2>
            </AnimatedSection>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
                <div>
                    <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Certifications</h3>
                    <div className="space-y-3">
                        {certifications.map((cert, i) => (
                            <AnimatedSection key={cert.id} delay={i * 0.05}>
                                <GlassPanel className="flex items-center gap-4 px-5 py-4">
                                    <span className="text-[var(--text-muted)]">{iconMap[cert.icon] ?? <Medal size={16} />}</span>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-[var(--text-primary)]">{cert.name}</p>
                                        <p className="text-xs text-[var(--text-muted)]">{cert.issuer} · {cert.year}</p>
                                    </div>
                                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${cert.status === 'completed' ? 'border-[var(--accent-a-300)] text-[var(--accent-a-100)]' : 'border-[var(--accent-b-300)] text-[var(--accent-b-100)]'} ${cert.status === 'in-progress' ? 'animate-pulse' : ''}`}>
                                        {cert.status === 'completed' ? 'Completed' : 'In Progress'}
                                    </span>
                                </GlassPanel>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Hackathons</h3>
                    <div className="grid gap-4">
                        {hackathons.map((hack, i) => (
                            <AnimatedSection key={hack.id} delay={i * 0.05}>
                                <GlassPanel className="p-5">
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            <Trophy size={14} className="text-[var(--accent-b-100)]" />
                                            <h4 className="text-sm font-semibold text-[var(--text-primary)]">{hack.name}</h4>
                                        </div>
                                        <span className="shrink-0 font-mono text-xs text-[var(--text-muted)]">{hack.year}</span>
                                    </div>
                                    <p className="mt-2 text-xs font-medium text-[var(--accent-b-100)]">{hack.result}</p>
                                    <p className="mt-1 text-xs text-[var(--text-secondary)]">{hack.project}</p>
                                    <div className="mt-2 flex flex-wrap gap-1">
                                        {hack.stack.map((t) => <span key={t} className="rounded-full bg-[var(--surface-3)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]">{t}</span>)}
                                    </div>
                                </GlassPanel>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
