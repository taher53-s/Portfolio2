'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkillTagProps {
    label: string
    accent?: 'a' | 'b' | 'c'
    className?: string
}

const accentMap = {
    a: 'text-[var(--accent-a-100)] border-[var(--accent-a-300)]',
    b: 'text-[var(--accent-b-100)] border-[var(--accent-b-300)]',
    c: 'text-[var(--accent-c-100)] border-[var(--accent-c-200)]/30',
} as const

export default function SkillTag({ label, accent = 'a', className }: SkillTagProps) {
    return (
        <motion.span
            variants={{ hidden: { y: 12, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            className={cn('inline-block rounded-full border bg-[var(--surface-3)] px-3.5 py-1 text-xs font-medium', accentMap[accent], className)}
        >
            {label}
        </motion.span>
    )
}
