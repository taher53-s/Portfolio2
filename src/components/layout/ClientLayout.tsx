'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { getLenis, destroyLenis } from '@/lib/lenis'
import { useKeyboard } from '@/lib/keyboard'
import Cursor from '@/components/ui/Cursor'
import NavBar from '@/components/layout/NavBar'
import MotionLayout from '@/components/layout/MotionLayout'
import CommandPalette from '@/components/ui/CommandPalette'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const rafId = useRef<number>(0)
    const [paletteOpen, setPaletteOpen] = useState(false)

    const togglePalette = useCallback(() => setPaletteOpen((o) => !o), [])

    useKeyboard({ onCommandPalette: togglePalette })

    useEffect(() => {
        const lenis = getLenis()
        if (!lenis) return

        function raf(time: number) {
            lenis!.raf(time)
            rafId.current = requestAnimationFrame(raf)
        }
        rafId.current = requestAnimationFrame(raf)

        // Sync Lenis with GSAP ScrollTrigger
        async function syncGSAP() {
            const { loadGSAP } = await import('@/lib/gsap')
            const { ScrollTrigger } = await loadGSAP()

            lenis!.on('scroll', () => {
                ScrollTrigger.update()
            })

            ScrollTrigger.scrollerProxy(document.body, {
                scrollTop(value?: number) {
                    if (arguments.length && value !== undefined) {
                        lenis!.scrollTo(value, { immediate: true })
                    }
                    return lenis!.scroll
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight,
                    }
                },
                pinType: document.body.style.transform ? 'transform' : 'fixed',
            })

            ScrollTrigger.addEventListener('refresh', () => lenis!.resize())
            ScrollTrigger.refresh()
        }

        syncGSAP()

        return () => {
            cancelAnimationFrame(rafId.current)
            destroyLenis()
        }
    }, [])

    return (
        <>
            <div data-cursor-ring aria-hidden="true" />
            <div data-cursor-dot aria-hidden="true" />
            <Cursor />
            <NavBar />
            <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
            <MotionLayout>{children}</MotionLayout>
        </>
    )
}
