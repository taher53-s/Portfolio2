'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'ghost'
    className?: string
    onClick?: () => void
    type?: 'button' | 'submit'
    disabled?: boolean
    href?: string
}

const variantStyles = {
    primary: 'bg-[var(--accent-a-200)] text-[var(--color-base)] font-semibold hover:shadow-[var(--glow-sm)]',
    secondary: 'bg-[var(--surface-2)] text-[var(--accent-a-100)] border border-[var(--surface-border)] [backdrop-filter:var(--blur-md)] hover:shadow-[var(--glow-xs)]',
    ghost: 'bg-transparent text-[var(--accent-a-100)] border border-white/[0.1] hover:border-white/[0.2]',
} as const

export default function MagneticButton({ children, variant = 'primary', className, onClick, type = 'button', disabled = false, href }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { stiffness: 300, damping: 20 })
    const springY = useSpring(y, { stiffness: 300, damping: 20 })

    function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        x.set(((e.clientX - rect.left) / rect.width - 0.5) * 12)
        y.set(((e.clientY - rect.top) / rect.height - 0.5) * 12)
    }

    function handleMouseLeave() { x.set(0); y.set(0) }

    function handleClick() {
        if (href) { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: 'smooth' }); return }
        onClick?.()
    }

    return (
        <motion.button
            ref={ref} type={type} disabled={disabled} data-magnetic data-cursor="magnetic"
            className={cn('relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm transition-shadow duration-300', variantStyles[variant], disabled && 'pointer-events-none opacity-50', className)}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={handleClick}
        >
            <motion.span className="relative z-[1] flex items-center gap-2" style={{ x: useSpring(x, { stiffness: 300, damping: 20 }), y: useSpring(y, { stiffness: 300, damping: 20 }) }}>
                {children}
            </motion.span>
        </motion.button>
    )
}
