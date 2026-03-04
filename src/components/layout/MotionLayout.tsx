'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function MotionLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const reduced = useReducedMotion()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={reduced ? {} : { clipPath: 'inset(0 0 100% 0)' }}
                animate={reduced ? {} : { clipPath: 'inset(0 0 0% 0)' }}
                exit={reduced ? {} : { opacity: 0, y: -12 }}
                transition={reduced ? {} : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
