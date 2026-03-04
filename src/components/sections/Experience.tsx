'use client'

import { useEffect, useRef } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassPanel from '@/components/ui/GlassPanel'
import { experiences } from '@/data/experience'

const allStack = Array.from(new Set(experiences.flatMap((e) => e.stack)))

interface ExperienceProps { id?: string }

export default function Experience({ id }: ExperienceProps) {
    const lineRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let ctx: { revert: () => void } | null = null

        async function init() {
            const container = containerRef.current
            const line = lineRef.current
            if (!container || !line) return

            const { loadGSAP } = await import('@/lib/gsap')
            const { gsap, ScrollTrigger } = await loadGSAP()

            ctx = gsap.context(() => {
                gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: container, start: 'top 70%', end: 'bottom 60%', scrub: true } })
                container.querySelectorAll('.exp-card').forEach((card) => {
                    gsap.fromTo(card, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', scrollTrigger: { trigger: card, start: 'top 85%' } })
                })
                ScrollTrigger.refresh()
            }, container)
        }

        init()
        return () => { ctx?.revert() }
    }, [])

    return (
        <section id={id} className="py-32 px-6 md:px-16 lg:px-24">
            <AnimatedSection>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-6xl">Experience</h2>
            </AnimatedSection>

            <div ref={containerRef} className="relative mt-16 pl-10">
                <div ref={lineRef} className="absolute left-0 top-0 h-full w-[2px] origin-top bg-[var(--accent-a-300)]" style={{ transform: 'scaleY(0)' }} />

                {experiences.map((exp) => (
                    <div key={exp.id} className="exp-card relative mb-10 opacity-0">
                        <span className="absolute -left-10 top-4 h-3 w-3 rounded-full border-2 bg-[var(--color-base)]" style={{ borderColor: exp.accentColor }} />
                        <GlassPanel className="p-6">
                            <div className="flex flex-wrap items-start justify-between gap-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">{exp.role}</h3>
                                    <p className="text-sm text-[var(--text-secondary)]">{exp.company}</p>
                                </div>
                                <div className="text-right">
                                    <span className="rounded-full border border-[var(--surface-border)] bg-[var(--surface-3)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--text-muted)]">{exp.type}</span>
                                    <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">{exp.period}</p>
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-[var(--text-secondary)]">{exp.description}</p>
                            <ul className="mt-3 space-y-1">
                                {exp.highlights.map((h, i) => <li key={i} className="flex gap-2 text-xs text-[var(--text-secondary)]"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-a-300)]" />{h}</li>)}
                            </ul>
                        </GlassPanel>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex gap-3 overflow-x-auto pb-2" style={{ animation: 'none' }}>
                {[...allStack, ...allStack].map((tag, i) => (
                    <span key={i} className="shrink-0 whitespace-nowrap rounded-full border border-[var(--surface-border)] bg-[var(--surface-2)] px-3 py-1 text-[10px] text-[var(--text-muted)]">{tag}</span>
                ))}
            </div>
        </section>
    )
}
