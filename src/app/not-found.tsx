'use client'

import { motion, useReducedMotion } from 'framer-motion'
import GradientMeshBackground from '@/components/sections/GradientMeshBackground'
import MagneticButton from '@/components/ui/MagneticButton'
import GlassPanel from '@/components/ui/GlassPanel'

export default function NotFound() {
    const reduced = useReducedMotion()

    return (
        <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6">
            <GradientMeshBackground />
            <div className="relative z-10 flex flex-col items-center text-center">
                <motion.h1
                    className="bg-gradient-to-r from-[var(--accent-a-100)] to-[var(--accent-b-100)] bg-clip-text font-display text-[8rem] font-extrabold leading-none text-transparent md:text-[12rem]"
                    initial={reduced ? {} : { scale: 0.8, opacity: 0 }}
                    animate={reduced ? {} : { scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                    404
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg text-[var(--text-secondary)]"
                    initial={reduced ? {} : { y: 20, opacity: 0 }}
                    animate={reduced ? {} : { y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    This page doesn&apos;t exist. Yet.
                </motion.p>

                <motion.div
                    className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
                    initial={reduced ? {} : { y: 20, opacity: 0 }}
                    animate={reduced ? {} : { y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <MagneticButton variant="primary" onClick={() => window.location.href = '/'}>
                        ← Back to Home
                    </MagneticButton>
                    <MagneticButton variant="ghost" onClick={() => window.location.href = '/#projects'}>
                        View Projects
                    </MagneticButton>
                </motion.div>

                <motion.div
                    className="mt-12"
                    initial={reduced ? {} : { y: 30, opacity: 0 }}
                    animate={reduced ? {} : { y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <GlassPanel className="px-5 py-3">
                        <p className="text-xs text-[var(--text-muted)]">
                            <span className="text-[var(--accent-a-100)]">taher</span>@portfolio <span className="text-[var(--accent-a-200)]">~</span> <span className="text-[var(--text-secondary)]">$ find . -name &quot;page&quot; -type f</span>
                        </p>
                        <p className="mt-1 text-xs text-[var(--accent-b-100)]">Error: No matches found</p>
                    </GlassPanel>
                </motion.div>
            </div>
        </section>
    )
}
