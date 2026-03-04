'use client'

import { useEffect, useRef, useCallback } from 'react'

export default function Cursor() {
    const outerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    const handlePointerMove = useCallback((e: PointerEvent) => {
        document.documentElement.style.setProperty('--cx', String(e.clientX))
        document.documentElement.style.setProperty('--cy', String(e.clientY))

        const target = e.target as HTMLElement | null
        const cursorType = target?.closest('[data-cursor]')?.getAttribute('data-cursor') ?? null

        if (outerRef.current) {
            const o = outerRef.current.style
            o.transform = `translate(calc(var(--cx) * 1px - 50%), calc(var(--cy) * 1px - 50%))`
            if (cursorType === 'magnetic') {
                o.width = '70px'; o.height = '70px'; o.borderColor = 'var(--accent-b-200)'; o.borderRadius = '50%'; o.mixBlendMode = 'screen'
            } else if (cursorType === 'text') {
                o.width = '2px'; o.height = '24px'; o.borderRadius = '1px'; o.borderColor = 'var(--accent-a-100)'; o.mixBlendMode = ''
            } else if (cursorType === 'pointer') {
                o.width = '50px'; o.height = '50px'; o.borderColor = 'var(--accent-a-100)'; o.borderRadius = '50%'; o.mixBlendMode = 'screen'
            } else {
                o.width = '28px'; o.height = '28px'; o.borderColor = 'var(--accent-a-200)'; o.borderRadius = '50%'; o.mixBlendMode = ''
            }
        }
        if (innerRef.current) {
            innerRef.current.style.transform = `translate(calc(var(--cx) * 1px - 50%), calc(var(--cy) * 1px - 50%))`
        }
    }, [])

    useEffect(() => {
        window.addEventListener('pointermove', handlePointerMove)
        return () => window.removeEventListener('pointermove', handlePointerMove)
    }, [handlePointerMove])

    return (
        <>
            <div ref={outerRef} className="pointer-events-none fixed left-0 top-0 z-[var(--z-cursor)] h-7 w-7 rounded-full border border-[var(--accent-a-200)]" style={{ transition: 'transform 180ms cubic-bezier(0.16,1,0.3,1), width 300ms, height 300ms, border-radius 300ms, border-color 200ms', transform: 'translate(-100px, -100px)' }} aria-hidden="true" />
            <div ref={innerRef} className="pointer-events-none fixed left-0 top-0 z-[var(--z-cursor)] h-1.5 w-1.5 rounded-full bg-[var(--accent-a-100)]" style={{ transition: 'transform 60ms linear', transform: 'translate(-100px, -100px)' }} aria-hidden="true" />
            <style>{`@media (pointer: coarse) { body { cursor: auto !important; } [aria-hidden="true"][class*="z-[var(--z-cursor)"] { display: none !important; } }`}</style>
        </>
    )
}
