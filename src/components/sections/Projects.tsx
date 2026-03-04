'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import MagneticButton from '@/components/ui/MagneticButton'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

const categories = ['All', 'AI Systems', 'Dev Tooling', 'Full-Stack', 'SaaS']

const categoryMap: Record<string, (cat: string) => boolean> = {
    'All': () => true,
    'AI Systems': (c) => c.includes('AI'),
    'Dev Tooling': (c) => c.includes('Developer') || c.includes('CLI') || c.includes('Systems'),
    'Full-Stack': (c) => c.includes('Full-Stack') || c.includes('SaaS'),
    'SaaS': (c) => c.includes('SaaS') || c.includes('Analytics'),
}

const spanMap = { hero: 'col-span-full row-span-3', wide: 'sm:col-span-2', tall: 'row-span-2', standard: '' } as const

interface ProjectsProps { id?: string }

export default function Projects({ id }: ProjectsProps) {
    const [active, setActive] = useState('All')

    const filtered = useMemo(() => {
        const fn = categoryMap[active]
        return fn ? projects.filter((p) => fn(p.category)) : projects
    }, [active])

    return (
        <section id={id} className="py-32 px-6 md:px-16 lg:px-24">
            <AnimatedSection>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-6xl">Selected Work</h2>
                <div className="relative mt-2 h-[2px] w-24 overflow-hidden rounded-full bg-[var(--surface-border)]">
                    <motion.div className="absolute left-0 h-full bg-[var(--accent-a-200)]" initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} />
                </div>
            </AnimatedSection>

            <div className="mt-10 flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <MagneticButton key={cat} variant={cat === active ? 'primary' : 'ghost'} onClick={() => setActive(cat)} className="px-5 py-2 text-xs">
                        {cat}
                    </MagneticButton>
                ))}
            </div>

            <motion.div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" layout>
                <AnimatePresence mode="popLayout">
                    {filtered.map((p) => (
                        <motion.div key={p.slug} className={spanMap[p.gridSpan]} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
                            <ProjectCard project={p} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <div className="mt-12 text-center">
                <MagneticButton variant="secondary" onClick={() => window.open('https://github.com/taher53-s', '_blank')}>
                    View All on GitHub
                </MagneticButton>
            </div>
        </section>
    )
}
