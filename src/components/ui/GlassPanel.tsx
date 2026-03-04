'use client'

import { cn } from '@/lib/utils'

interface GlassPanelProps {
    children: React.ReactNode
    className?: string
    as?: keyof JSX.IntrinsicElements
}

export default function GlassPanel({ children, className, as: Tag = 'div' }: GlassPanelProps) {
    return (
        <Tag
            className={cn(
                'relative rounded-2xl bg-[var(--surface-2)] border border-[var(--surface-border)] [backdrop-filter:var(--blur-md)] shadow-[var(--glow-xs),_0_1px_0_rgba(255,255,255,0.04)_inset]',
                className
            )}
        >
            <span className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.03]" style={{ backgroundImage: 'url(/noise.svg)', backgroundRepeat: 'repeat', backgroundSize: '180px 180px' }} aria-hidden="true" />
            <span className="relative z-[1] block">{children}</span>
        </Tag>
    )
}
