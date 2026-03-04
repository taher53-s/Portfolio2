'use client'

import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import { Search, ArrowRight, Copy, Github, Linkedin, Sparkles, X } from 'lucide-react'

interface Command { id: string; label: string; shortcut?: string; icon: React.ReactNode; action: () => void; category: string }

interface CommandPaletteProps { open: boolean; onOpenChange: (open: boolean) => void }

export default function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
    const [query, setQuery] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)
    const [confetti, setConfetti] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const scrollTo = useCallback((id: string) => {
        onOpenChange(false)
        setTimeout(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }) }, 100)
    }, [onOpenChange])

    const copyEmail = useCallback(() => {
        navigator.clipboard.writeText('tahersohagpurwala@gmail.com')
        onOpenChange(false)
    }, [onOpenChange])

    const commands: Command[] = useMemo(() => [
        { id: 'projects', label: 'Go to Projects', shortcut: 'G P', icon: <ArrowRight size={14} />, action: () => scrollTo('projects'), category: 'Navigation' },
        { id: 'about', label: 'Go to About', shortcut: 'G A', icon: <ArrowRight size={14} />, action: () => scrollTo('about'), category: 'Navigation' },
        { id: 'skills', label: 'Go to Skills', icon: <ArrowRight size={14} />, action: () => scrollTo('skills'), category: 'Navigation' },
        { id: 'contact', label: 'Go to Contact', shortcut: 'G C', icon: <ArrowRight size={14} />, action: () => scrollTo('contact'), category: 'Navigation' },
        { id: 'email', label: 'Copy Email', icon: <Copy size={14} />, action: copyEmail, category: 'Actions' },
        { id: 'github', label: 'Open GitHub', icon: <Github size={14} />, action: () => { window.open('https://github.com/taher53-s', '_blank'); onOpenChange(false) }, category: 'Actions' },
        { id: 'linkedin', label: 'Open LinkedIn', icon: <Linkedin size={14} />, action: () => { window.open('https://www.linkedin.com/in/taher-sohagpurwala-b055a731b', '_blank'); onOpenChange(false) }, category: 'Actions' },
    ], [scrollTo, copyEmail, onOpenChange])

    const filtered = useMemo(() => {
        if (query.toLowerCase() === 'hire taher') return []
        if (!query) return commands
        return commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))
    }, [query, commands])

    useEffect(() => { setActiveIndex(0) }, [query])
    useEffect(() => { if (open) { setQuery(''); setTimeout(() => inputRef.current?.focus(), 50) } }, [open])

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, filtered.length - 1)) }
        else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)) }
        else if (e.key === 'Enter' && filtered[activeIndex]) { filtered[activeIndex].action() }
    }

    useEffect(() => {
        if (query.toLowerCase() === 'hire taher') {
            setConfetti(true)
            setTimeout(() => setConfetti(false), 2000)
        }
    }, [query])

    const groups = useMemo(() => {
        const map = new Map<string, Command[]>()
        filtered.forEach((c) => { const arr = map.get(c.category) ?? []; arr.push(c); map.set(c.category, arr) })
        return map
    }, [filtered])

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <AnimatePresence>
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild forceMount>
                            <motion.div className="fixed inset-0 z-[var(--z-palette)] bg-black/50 [backdrop-filter:var(--blur-sm)]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                        </Dialog.Overlay>
                        <Dialog.Content asChild forceMount>
                            <motion.div
                                className="fixed left-1/2 top-[20vh] z-[var(--z-palette)] w-[90vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--surface-border-bright)] bg-[var(--surface-3)] shadow-2xl [backdrop-filter:var(--blur-lg)] focus:outline-none"
                                initial={{ scale: 0.95, opacity: 0, x: '-50%' }} animate={{ scale: 1, opacity: 1, x: '-50%' }} exit={{ scale: 0.95, opacity: 0, x: '-50%' }}
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }} onKeyDown={handleKeyDown}
                            >
                                <div className="flex items-center gap-3 border-b border-[var(--surface-border)] px-4 py-3">
                                    <Search size={16} className="text-[var(--text-muted)]" />
                                    <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type a command or search..." className="flex-1 bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]" />
                                    <Dialog.Close asChild><button className="text-[var(--text-muted)]" aria-label="Close"><X size={14} /></button></Dialog.Close>
                                </div>
                                <div className="max-h-[300px] overflow-y-auto p-2">
                                    {query.toLowerCase() === 'hire taher' ? (
                                        <div className="py-8 text-center">
                                            <Sparkles className="mx-auto mb-2 text-[var(--accent-a-100)]" size={24} />
                                            <p className="text-sm font-semibold text-[var(--text-primary)]">Great choice. Let&apos;s talk.</p>
                                            <p className="mt-1 text-xs text-[var(--text-secondary)]">tahersohagpurwala@gmail.com</p>
                                        </div>
                                    ) : filtered.length === 0 ? (
                                        <p className="py-6 text-center text-xs text-[var(--text-muted)]">No results found.</p>
                                    ) : (
                                        Array.from(groups.entries()).map(([category, cmds]) => (
                                            <div key={category}>
                                                <p className="px-2 py-1.5 text-[10px] font-medium uppercase tracking-widest text-[var(--text-muted)]">{category}</p>
                                                {cmds.map((cmd) => {
                                                    const idx = filtered.indexOf(cmd)
                                                    return (
                                                        <button
                                                            key={cmd.id}
                                                            onClick={cmd.action}
                                                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${idx === activeIndex ? 'bg-[var(--accent-a-300)]/20 text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-white/[0.04]'}`}
                                                            onMouseEnter={() => setActiveIndex(idx)}
                                                            data-cursor="pointer"
                                                        >
                                                            <span className="text-[var(--text-muted)]">{cmd.icon}</span>
                                                            <span className="flex-1">{cmd.label}</span>
                                                            {cmd.shortcut && <kbd className="rounded bg-[var(--surface-2)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">{cmd.shortcut}</kbd>}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        ))
                                    )}
                                </div>
                                {confetti && (
                                    <div className="pointer-events-none absolute inset-0">
                                        {Array.from({ length: 10 }).map((_, i) => (
                                            <div key={i} className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full" style={{
                                                background: i % 2 === 0 ? 'var(--accent-a-100)' : 'var(--accent-b-100)',
                                                // @ts-expect-error CSS custom properties
                                                '--tx': `${(Math.random() - 0.5) * 200}px`, '--ty': `${(Math.random() - 0.5) * 200}px`, '--tr': `${Math.random() * 360}deg`,
                                                animation: 'confetti-burst 600ms ease-out forwards',
                                                animationDelay: `${i * 40}ms`,
                                            }} />
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    )
}
