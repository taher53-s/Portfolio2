'use client'

import { motion, useReducedMotion } from 'framer-motion'
import GradientMeshBackground from '@/components/sections/GradientMeshBackground'
import MagneticButton from '@/components/ui/MagneticButton'
import CounterStat from '@/components/ui/CounterStat'
import GlassPanel from '@/components/ui/GlassPanel'

const words1 = ['TAHER']
const words2 = ['SOHAG-']
const words3 = ['PURWALA']

function WordReveal({ word, delay, outline }: { word: string; delay: number; outline?: boolean }) {
    const reduced = useReducedMotion()
    return (
        <motion.span
            className={`inline-block ${outline ? 'font-display font-extrabold text-outline' : 'font-display font-extrabold text-[var(--text-primary)]'}`}
            style={{
                fontSize: 'clamp(5rem, 13vw, 14rem)',
                lineHeight: 0.9,
                letterSpacing: '-0.05em',
                ...(!outline ? { textShadow: '0 0 80px var(--accent-a-glow)' } : { paintOrder: 'stroke fill' }),
            }}
            initial={reduced ? {} : { clipPath: 'inset(100% 0 0 0)' }}
            animate={reduced ? {} : { clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {word}
        </motion.span>
    )
}

const eyebrowSegments = ['BTech CS (AI & ML)', 'Atlas Skilltech', 'Mumbai', '2024–2028']

interface HeroProps { id?: string }

export default function Hero({ id }: HeroProps) {
    const reduced = useReducedMotion()

    return (
        <section id={id} className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 md:px-16 lg:px-24">
            <GradientMeshBackground />

            <div className="relative z-10 max-w-5xl">
                <motion.div
                    className="flex flex-wrap items-center gap-0 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]"
                    initial={reduced ? {} : { opacity: 0, y: 12, clipPath: 'inset(100% 0 0 0)' }}
                    animate={reduced ? {} : { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
                    transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    {eyebrowSegments.map((seg, i) => (
                        <span key={i} className="flex items-center">
                            {i > 0 && <span className="mx-[0.6em] text-[var(--accent-a-200)]">·</span>}
                            {seg}
                        </span>
                    ))}
                </motion.div>

                <div className="mt-4 flex flex-col">
                    {words1.map((w, i) => <WordReveal key={w} word={w} delay={0.4 + i * 0.1} />)}
                    {words2.map((w, i) => <WordReveal key={w} word={w} delay={0.6 + i * 0.1} outline />)}
                    {words3.map((w, i) => <WordReveal key={w} word={w} delay={0.8 + i * 0.1} />)}
                </div>

                <motion.p
                    className="mt-6 text-lg text-[var(--text-secondary)] md:text-xl"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }}
                >
                    Builder · Systems Thinker · AI/ML Engineer
                </motion.p>

                <motion.div
                    className="mt-8 flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.6 }}
                >
                    <MagneticButton variant="primary" href="#projects">View Work</MagneticButton>
                    <MagneticButton variant="ghost" href="#contact">Get in Touch</MagneticButton>
                </motion.div>

                <motion.div
                    className="mt-12 flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 0.6 }}
                >
                    {[
                        { value: 6, suffix: '+', label: 'Projects Shipped' },
                        { value: 500, suffix: '+', label: 'GitHub Stars' },
                        { value: 3, suffix: '', label: 'Domains — AI · DevOps · Web' },
                    ].map((stat) => (
                        <GlassPanel key={stat.label} className="border-t border-[var(--accent-a-300)]/40">
                            <div className="px-6 py-4">
                                <CounterStat value={stat.value} suffix={stat.suffix} label={stat.label} />
                            </div>
                        </GlassPanel>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-6 z-10 md:left-16"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 0.6 }}
            >
                <GlassPanel className="flex items-center gap-3 px-4 py-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="pulse-ring" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent-a-200)]" />
                    </span>
                    <span className="font-mono text-[11px] text-[var(--text-secondary)]">Open to opportunities · Mumbai, India</span>
                </GlassPanel>
            </motion.div>

            <motion.div
                className="absolute bottom-8 right-6 z-10 flex flex-col items-center gap-2 md:right-16"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 0.6 }}
            >
                <div className="flex h-[60px] w-[1px] flex-col items-center justify-start overflow-hidden bg-[var(--surface-border)]">
                    <div className="scroll-indicator-thumb" />
                </div>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">SCROLL</span>
            </motion.div>
        </section>
    )
}
