'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
    project: Project
    style?: React.CSSProperties
}

const statusColors = { shipped: 'text-[var(--accent-a-100)] border-[var(--accent-a-300)]', 'in-progress': 'text-[var(--accent-b-100)] border-[var(--accent-b-300)]', concept: 'text-[var(--accent-c-100)] border-[var(--accent-c-200)]/40' } as const

export default function ProjectCard({ project, style }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} data-cursor="pointer" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-a-200)] rounded-2xl" prefetch>
            <motion.article
                className={cn('group relative overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-2)] text-left transition-shadow duration-500')}
                style={style}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
                <motion.div className="aspect-[16/10] w-full" style={{ background: project.imageGradient }} whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}>
                    <div className="absolute right-3 top-3 flex gap-2">
                        <span className={cn('rounded-full border bg-[var(--surface-3)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider', statusColors[project.status])}>{project.status === 'in-progress' ? 'In Progress' : project.status}</span>
                    </div>
                </motion.div>
                <div className="p-5">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-[var(--text-muted)]">{project.category} · {project.year}</p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">{project.title}</h3>
                    <p className="mt-1 text-xs text-[var(--text-secondary)] line-clamp-2">{project.tagline}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                        {project.stack.slice(0, 4).map((t) => <span key={t} className="rounded-full bg-[var(--surface-3)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]">{t}</span>)}
                        {project.stack.length > 4 && <span className="rounded-full bg-[var(--surface-3)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]">+{project.stack.length - 4}</span>}
                    </div>
                </div>
                <div className={cn('absolute bottom-0 left-0 right-0 translate-y-full px-5 py-3 bg-[var(--surface-3)] [backdrop-filter:var(--blur-sm)] transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-y-0')}>
                    <span className="text-xs font-medium text-[var(--accent-a-100)]">View Case Study →</span>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.04] shadow-[var(--glow-xs)] transition-shadow duration-500 group-hover:shadow-[var(--glow-md)]" aria-hidden="true" />
            </motion.article>
        </Link>
    )
}
