'use client'

import { motion, useReducedMotion } from 'framer-motion'
import GradientMeshBackground from '@/components/sections/GradientMeshBackground'
import MagneticButton from '@/components/ui/MagneticButton'
import CounterStat from '@/components/ui/CounterStat'

const words1 = ['TAHER']
const words2 = ['SOHAG-']
const words3 = ['PURWALA']

function WordReveal({ word, delay, outline }: { word: string; delay: number; outline?: boolean }) {
    const reduced = useReducedMotion()
    return (
        <motion.span
            className={`inline-block ${outline ? 'font-display font-extrabold [-webkit-text-stroke:2px_var(--accent-a-200)] text-transparent' : 'font-display font-extrabold text-[var(--text-primary)]'}`}
            style={{ fontSize: 'clamp(5rem, 13vw, 14rem)', lineHeight: 0.9 }}
            initial={reduced ? {} : { clipPath: 'inset(100% 0 0 0)' }}
            animate={reduced ? {} : { clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {word}
        </motion.span>
    )
}

interface HeroProps { id?: string }

export default function Hero({ id }: HeroProps) {
    return (
        <section id={id} className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 md:px-16 lg:px-24">
            <GradientMeshBackground />

            <div className="relative z-10 max-w-5xl">
                <motion.p
                    className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-a-200)]"
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                >
                    BTech CS (AI &amp; ML) · Atlas Skilltech · Mumbai
                </motion.p>

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
                    className="mt-12 flex gap-10"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 0.6 }}
                >
                    <CounterStat value={6} suffix="+" label="Projects Shipped" />
                    <CounterStat value={3} suffix="+" label="Open Source Repos" />
                    <CounterStat value={500} suffix="+" label="GitHub Stars" />
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-6 z-10 flex items-center gap-2 md:left-16"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 0.6 }}
            >
                <span className="h-2 w-2 rounded-full bg-[var(--accent-a-200)]" style={{ animation: 'pulseDot 2s ease-in-out infinite' }} />
                <span className="font-mono text-[11px] text-[var(--text-secondary)]">Available for opportunities</span>
            </motion.div>

            <motion.div
                className="absolute bottom-8 right-6 z-10 flex flex-col items-center gap-2 md:right-16"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 0.6 }}
            >
                <div className="h-12 w-[1px] bg-[var(--text-muted)]" style={{ animation: 'scrollBounce 2s ease-in-out infinite' }} />
                <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-muted)]">scroll</span>
            </motion.div>
        </section>
    )
}
