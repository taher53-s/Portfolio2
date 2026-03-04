'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
    eyebrow: string
    title: string
    titleAccent?: string
    align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, titleAccent, align = 'left' }: SectionHeadingProps) {
    const words = title.split(' ')
    const center = align === 'center'

    return (
        <div className={cn('mb-16', center && 'text-center')}>
            <div className={cn('flex items-center gap-3', center && 'justify-center')}>
                <span className="h-px w-5 bg-[var(--accent-a-300)]" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-a-200)]">{eyebrow}</span>
            </div>
            <h2 className={cn('mt-4 font-display text-4xl font-black tracking-tight text-[var(--text-primary)] md:text-6xl')}>
                {words.map((word, i) => {
                    const isAccent = titleAccent && word === titleAccent
                    return (
                        <span key={i}>
                            {isAccent ? (
                                <span className="text-outline">{word}</span>
                            ) : (
                                word
                            )}
                            {i < words.length - 1 ? ' ' : ''}
                        </span>
                    )
                })}
            </h2>
            <motion.div
                className="section-underline mt-3"
                style={{ width: 0, ...(center ? { marginLeft: 'auto', marginRight: 'auto' } : {}) }}
                whileInView={{ width: 64 }}
                viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
        </div>
    )
}
