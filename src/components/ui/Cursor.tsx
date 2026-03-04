'use client'

import { useEffect } from 'react'

export default function Cursor() {
    useEffect(() => {
        if (typeof window === 'undefined') return

        const ring = document.querySelector('[data-cursor-ring]') as HTMLElement | null
        const dot = document.querySelector('[data-cursor-dot]') as HTMLElement | null
        if (!ring || !dot) return

        function onMove(e: MouseEvent): void {
            document.documentElement.style.setProperty('--cx', String(e.clientX))
            document.documentElement.style.setProperty('--cy', String(e.clientY))
        }

        function onOver(e: MouseEvent): void {
            const target = e.target as HTMLElement | null
            if (!target) return
            const el = target.closest('[data-cursor]') as HTMLElement | null
            const state = el?.dataset.cursor ?? 'default'
            document.body.dataset.cursorState = state
        }

        window.addEventListener('mousemove', onMove, { passive: true })
        window.addEventListener('mouseover', onOver, { passive: true })

        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseover', onOver)
        }
    }, [])

    return null
}
