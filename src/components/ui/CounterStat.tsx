'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface CounterStatProps {
    value: number
    suffix?: string
    label: string
    duration?: number
}

export default function CounterStat({ value, suffix = '', label, duration = 1.5 }: CounterStatProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-10%' })
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        if (!isInView) return
        const start = performance.now()
        let rafId: number

        function tick(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / (duration * 1000), 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.round(eased * value))
            if (progress < 1) rafId = requestAnimationFrame(tick)
        }

        rafId = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafId)
    }, [isInView, value, duration])

    return (
        <motion.div ref={ref} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <span className="bg-gradient-to-r from-[var(--accent-a-100)] to-[var(--accent-a-200)] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                {display}{suffix}
            </span>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{label}</p>
        </motion.div>
    )
}
