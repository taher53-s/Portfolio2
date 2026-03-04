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
