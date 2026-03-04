'use client'

import { cn } from '@/lib/utils'

interface GlassPanelProps {
    children: React.ReactNode
    className?: string
}

export default function GlassPanel({ children, className }: GlassPanelProps) {
    return (
        <div
            className={cn(
                'relative overflow-hidden rounded-2xl',
                className
            )}
            style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 100%)',
                backdropFilter: 'var(--blur-md)',
                WebkitBackdropFilter: 'var(--blur-md)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderTop: '1px solid rgba(255,255,255,0.12)',
                borderLeft: '1px solid rgba(255,255,255,0.09)',
                boxShadow: '0 1px 0 rgba(255,255,255,0.05) inset, 0 -1px 0 rgba(0,0,0,0.4) inset, 0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
            }}
        >
            <div
                className="absolute inset-0 rounded-[inherit] pointer-events-none"
                style={{
                    backgroundImage: "url('/noise.svg')",
                    backgroundRepeat: 'repeat',
                    backgroundSize: '180px 180px',
                    opacity: 0.025,
                }}
                aria-hidden="true"
            />
            <div className="relative">{children}</div>
        </div>
    )
}
