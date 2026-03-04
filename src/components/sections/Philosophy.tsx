'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassPanel from '@/components/ui/GlassPanel'
import { buildPrinciples } from '@/data/philosophy'

interface PhilosophyProps { id?: string }

export default function Philosophy({ id }: PhilosophyProps) {
    return (
        <section id={id} className="py-32 px-6 md:px-16 lg:px-24">
            <AnimatedSection>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-6xl">How I Build</h2>
            </AnimatedSection>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {buildPrinciples.map((p, i) => (
                    <AnimatedSection key={p.id} delay={i * 0.05}>
                        <GlassPanel className="group h-full p-6 transition-all duration-500 hover:border-[var(--accent-a-200)]/30 hover:shadow-[var(--glow-xs)]">
                            <span className="block font-display text-5xl font-extrabold [-webkit-text-stroke:1px_var(--accent-a-300)] text-transparent opacity-20 transition-opacity duration-500 group-hover:opacity-40">
                                {p.number}
                            </span>
                            <h3 className="mt-2 text-base font-semibold text-[var(--text-primary)]">{p.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{p.body}</p>
                        </GlassPanel>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    )
}
