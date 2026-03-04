'use client'

import { motion, useReducedMotion } from 'framer-motion'
import GradientMeshBackground from '@/components/sections/GradientMeshBackground'
import MagneticButton from '@/components/ui/MagneticButton'
import CounterStat from '@/components/ui/CounterStat'
import GlassPanel from '@/components/ui/GlassPanel'

const eyebrowSegments = ['BTech CS (AI & ML)', 'Atlas Skilltech', 'Mumbai', '2024–2028']

interface HeroProps { id?: string }

export default function Hero({ id }: HeroProps) {
    const reduced = useReducedMotion()

    return (
        <section id={id} className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
            <GradientMeshBackground />

            <div className="relative z-10 w-full">
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

                <h1
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        letterSpacing: '-0.04em',
                        lineHeight: 0.9,
                        marginTop: '1rem',
                    }}
                >
                    {/* Line 1 — TAHER */}
                    <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.05em' }}>
                        <motion.span
                            style={{
                                display: 'block',
                                fontSize: 'clamp(5rem, 15vw, 14rem)',
                                background: 'linear-gradient(135deg, var(--accent-a-100), var(--accent-a-200))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                whiteSpace: 'nowrap',
                                textShadow: 'none',
                            }}
                            initial={reduced ? {} : { clipPath: 'inset(100% 0 0 0)' }}
                            animate={reduced ? {} : { clipPath: 'inset(0% 0 0 0)' }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        >
                            TAHER
                        </motion.span>
                    </span>

                    {/* Line 2 — SOHAGPURWALA */}
                    <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.05em' }}>
                        <motion.span
                            style={{
                                display: 'block',
                                fontSize: 'clamp(3rem, 10.5vw, 10rem)',
                                WebkitTextStroke: '1.5px rgba(240, 237, 230, 0.3)',
                                WebkitTextFillColor: 'transparent',
                                whiteSpace: 'nowrap',
                            }}
                            initial={reduced ? {} : { clipPath: 'inset(100% 0 0 0)' }}
                            animate={reduced ? {} : { clipPath: 'inset(0% 0 0 0)' }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        >
                            SOHAGPURWALA
                        </motion.span>
                    </span>
                </h1>

                <motion.p
                    style={{
                        marginTop: 'clamp(1rem, 2vw, 2rem)',
                        fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
                        letterSpacing: '0.08em',
                        color: 'var(--text-secondary)',
                    }}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }}
                >
                    Builder · Systems Thinker · AI/ML Engineer
                </motion.p>

                <motion.div
                    className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.6 }}
                >
                    <MagneticButton variant="primary" href="#projects">View Work</MagneticButton>
                    <MagneticButton variant="ghost" href="#contact">Get in Touch</MagneticButton>
                </motion.div>

                <motion.div
                    className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4"
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
