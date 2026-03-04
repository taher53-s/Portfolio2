'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
    distance?: number
    duration?: number
    once?: boolean
}

const dirMap = { up: { y: 1, x: 0 }, down: { y: -1, x: 0 }, left: { x: 1, y: 0 }, right: { x: -1, y: 0 } } as const

export default function AnimatedSection({ children, className, delay = 0, direction = 'up', distance = 40, duration = 0.7, once = true }: AnimatedSectionProps) {
    const reduced = useReducedMotion()

    const hidden = reduced ? {} : {
        ...(direction === 'up' ? { clipPath: 'inset(100% 0 0 0)' } : { opacity: 0 }),
        x: dirMap[direction].x * distance,
        y: dirMap[direction].y * distance,
    }

    const visible = reduced ? {} : {
        ...(direction === 'up' ? { clipPath: 'inset(0% 0 0 0)' } : { opacity: 1 }),
        x: 0, y: 0,
        transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    }

    return (
        <motion.div className={cn(className)} initial={hidden} whileInView={visible} viewport={{ once, margin: '0px 0px -80px 0px' }}>
            {children}
        </motion.div>
    )
}
