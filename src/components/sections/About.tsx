'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import GlassPanel from '@/components/ui/GlassPanel'
import SkillTag from '@/components/ui/SkillTag'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { staggerContainer } from '@/lib/motion'

const timelineItems = [
    { year: '2024–2028', title: 'B.Tech CS (AI & ML), Atlas Skilltech University', text: 'Specializing in applied machine learning, system design, and developer infrastructure. CGPA: 8.7' },
    { year: '2024', title: 'Independent Builder, Full-time', text: 'Designing, building, and shipping full-stack AI and developer tooling products from concept to production.' },
    { year: '2024', title: 'Freelance Frontend Developer', text: 'Delivering motion-first, performance-obsessed interfaces for clients across India and remotely.' },
    { year: '2023', title: 'First Shipped Project', text: 'DevForge CLI — my first open source tool. 400 npm installs. The bug that started everything.' },
]

const skills = ['TypeScript', 'Python', 'Next.js', 'React', 'GSAP', 'FastAPI', 'Docker', 'TensorFlow', 'LangChain']

interface AboutProps { id?: string }

export default function About({ id }: AboutProps) {
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
                gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: container, start: 'top 70%', end: 'bottom 50%', scrub: true } })
                container.querySelectorAll('.tl-item').forEach((item) => {
                    gsap.fromTo(item, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', scrollTrigger: { trigger: item, start: 'top 85%' } })
                })
                ScrollTrigger.refresh()
            }, container)
        }

        init()
        return () => { ctx?.revert() }
    }, [])

    return (
        <section id={id} className="relative py-32 px-6 md:px-16 lg:px-24">
            <AnimatedSection className="mb-16 max-w-3xl">
                <p className="font-display text-2xl font-bold leading-relaxed md:text-4xl">
                    <span className="bg-gradient-to-r from-[var(--accent-a-100)] to-[var(--accent-b-100)] bg-clip-text text-transparent">
                        I&apos;m a second-year engineering student who ships production systems, not homework.
                    </span>
                </p>
            </AnimatedSection>

            <div ref={containerRef} className="grid gap-16 lg:grid-cols-[1fr_360px]">
                <div className="relative pl-10">
                    <div ref={lineRef} className="absolute left-0 top-0 h-full w-[2px] origin-top bg-[var(--accent-a-300)]" style={{ transform: 'scaleY(0)' }} />
                    {timelineItems.map((item, i) => (
                        <div key={i} className="tl-item relative mb-12 opacity-0">
                            <span className="absolute -left-10 top-1.5 h-3 w-3 rounded-full border-2 border-[var(--accent-a-200)] bg-[var(--color-base)]" />
                            <span className="mb-1 block font-mono text-xs text-[var(--accent-a-200)]">{item.year}</span>
                            <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
                            <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <GlassPanel className="p-6">
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">Core Skills</h4>
                        <motion.div className="flex flex-wrap gap-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            {skills.map((s) => <SkillTag key={s} label={s} accent="a" />)}
                        </motion.div>
                    </GlassPanel>

                    <div className="flex items-center gap-3 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-2)] px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-a-200)]" style={{ animation: 'pulseDot 2s ease-in-out infinite' }} />
                        <span className="text-xs text-[var(--text-secondary)]">Currently open to internships, collabs, and freelance projects.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
