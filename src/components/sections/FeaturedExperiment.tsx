'use client'

import { useEffect, useRef } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import MagneticButton from '@/components/ui/MagneticButton'
import GradientMeshBackground from '@/components/sections/GradientMeshBackground'
import { projects } from '@/data/projects'

const project = projects.find((p) => p.slug === 'mission-control')!

interface FeaturedExperimentProps { id?: string }

export default function FeaturedExperiment({ id }: FeaturedExperimentProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let ctx: { revert: () => void } | null = null

        async function init() {
            const container = containerRef.current
            const image = imageRef.current
            if (!container || !image) return

            const { loadGSAP } = await import('@/lib/gsap')
            const { gsap, ScrollTrigger } = await loadGSAP()

            ctx = gsap.context(() => {
                gsap.to(image, { y: -60, ease: 'none', scrollTrigger: { trigger: container, start: 'top bottom', end: 'bottom top', scrub: true } })
                ScrollTrigger.refresh()
            }, container)
        }

        init()
        return () => { ctx?.revert() }
    }, [])

    return (
        <section id={id} ref={containerRef} className="relative overflow-hidden py-32 px-6 md:px-16 lg:px-24">
            <GradientMeshBackground />
            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
                <div ref={imageRef} className="aspect-[16/10] overflow-hidden rounded-2xl" style={{ background: project.imageGradient }} />

                <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">The Experiment</span>
                    <h3 className="mt-4 font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                        What happens when you rebuild your developer environment as a product?
                    </h3>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {['200+ stars', 'Vercel deployed', '12 integrations'].map((chip) => (
                            <span key={chip} className="rounded-full border border-[var(--accent-a-300)] bg-[var(--surface-3)] px-3 py-1 text-xs text-[var(--accent-a-100)]">{chip}</span>
                        ))}
                    </div>
                    <div className="mt-8">
                        <MagneticButton variant="primary" onClick={() => { window.location.href = '/projects/mission-control' }}>
                            Explore Mission Control →
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
