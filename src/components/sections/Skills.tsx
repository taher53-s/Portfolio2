'use client'

import { motion } from 'framer-motion'
import { Code2, Layers, Server, GitBranch, Brain, Network, Database, Wrench } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassPanel from '@/components/ui/GlassPanel'
import SkillTag from '@/components/ui/SkillTag'
import TechGraph from '@/components/ui/TechGraph'
import { skillCategories } from '@/data/skills'
import { staggerContainer } from '@/lib/motion'

const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 size={18} />, Layers: <Layers size={18} />, Server: <Server size={18} />,
    GitBranch: <GitBranch size={18} />, Brain: <Brain size={18} />, Network: <Network size={18} />,
    Database: <Database size={18} />, Wrench: <Wrench size={18} />,
}

const accentBorderMap = { a: 'hover:border-[var(--accent-a-200)]/40 hover:shadow-[var(--glow-xs)]', b: 'hover:border-[var(--accent-b-200)]/40 hover:shadow-[var(--glow-b-sm)]', c: 'hover:border-[var(--accent-c-200)]/40 hover:shadow-[var(--glow-c-sm)]' } as const
const accentTextMap = { a: 'text-[var(--accent-a-100)]', b: 'text-[var(--accent-b-100)]', c: 'text-[var(--accent-c-100)]' } as const

interface SkillsProps { id?: string }

export default function Skills({ id }: SkillsProps) {
    return (
        <section id={id} className="py-32 px-6 md:px-16 lg:px-24">
            <AnimatedSection>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-6xl">
                    The Full <span className="[-webkit-text-stroke:1.5px_var(--accent-a-200)] text-transparent">Stack</span>
                </h2>
                <p className="mt-3 max-w-xl text-[var(--text-secondary)]">End-to-end capability across languages, frameworks, and infrastructure layers.</p>
            </AnimatedSection>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {skillCategories.map((cat) => (
                    <AnimatedSection key={cat.id} delay={0.05}>
                        <GlassPanel className={`h-full p-5 transition-all duration-500 ${accentBorderMap[cat.accent]}`}>
                            <div className="flex items-center gap-3">
                                <span className={accentTextMap[cat.accent]}>{iconMap[cat.icon]}</span>
                                <h3 className="text-sm font-semibold text-[var(--text-primary)]">{cat.label}</h3>
                            </div>
                            <p className="mt-2 text-xs text-[var(--text-muted)]">{cat.description}</p>
                            <motion.div className="mt-4 flex flex-wrap gap-1.5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                {cat.skills.map((s) => <SkillTag key={s} label={s} accent={cat.accent} />)}
                            </motion.div>
                        </GlassPanel>
                    </AnimatedSection>
                ))}
            </div>

            <AnimatedSection className="mt-20" delay={0.2}>
                <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">Skill Relationships</h3>
                <TechGraph />
            </AnimatedSection>
        </section>
    )
}
