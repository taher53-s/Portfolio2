import { useEffect, useCallback, useRef } from 'react'

interface KeyboardOptions {
    onCommandPalette: () => void
}

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

export function useKeyboard({ onCommandPalette }: KeyboardOptions): void {
    const keyBuffer = useRef<string[]>([])
    const seqBuffer = useRef<string[]>([])
    const flushTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const seqTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const scrollTo = useCallback((id: string) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, [])

    const fireKonamiEgg = useCallback(() => {
        console.log('%c👾 Nice moves. github.com/taher53-s', 'color: #00d97e; font-size: 16px; font-weight: bold;')
        document.body.style.boxShadow = 'inset 0 0 60px var(--accent-a-glow)'
        setTimeout(() => {
            document.body.style.boxShadow = ''
        }, 800)
    }, [])

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            const tag = (e.target as HTMLElement).tagName
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

            // Cmd+K / Ctrl+K
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                onCommandPalette()
                return
            }

            // '/' opens command palette
            if (e.key === '/' && !e.metaKey && !e.ctrlKey) {
                e.preventDefault()
                onCommandPalette()
                return
            }

            // Konami code
            keyBuffer.current.push(e.code)
            if (keyBuffer.current.length > KONAMI.length) {
                keyBuffer.current.shift()
            }
            if (keyBuffer.current.join(',') === KONAMI.join(',')) {
                fireKonamiEgg()
                keyBuffer.current = []
            }
            if (flushTimer.current) clearTimeout(flushTimer.current)
            flushTimer.current = setTimeout(() => {
                keyBuffer.current = []
            }, 2000)

            // g + letter sequences
            seqBuffer.current.push(e.key)
            if (seqBuffer.current.length > 2) seqBuffer.current.shift()

            if (seqTimer.current) clearTimeout(seqTimer.current)
            seqTimer.current = setTimeout(() => {
                seqBuffer.current = []
            }, 800)

            const seq = seqBuffer.current.join('')
            const seqMap: Record<string, string> = {
                'gh': 'hero',
                'gp': 'projects',
                'ga': 'about',
                'gc': 'contact',
            }
            if (seqMap[seq]) {
                scrollTo(seqMap[seq])
                seqBuffer.current = []
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            if (flushTimer.current) clearTimeout(flushTimer.current)
            if (seqTimer.current) clearTimeout(seqTimer.current)
        }
    }, [onCommandPalette, scrollTo, fireKonamiEgg])
}
