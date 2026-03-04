'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import { useScrollSpy } from '@/lib/useScrollSpy'

const links = [
    { label: 'Work', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Playground', id: 'playground' },
    { label: 'Contact', id: 'contact' },
]

const sectionIds = links.map((l) => l.id)

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const activeId = useScrollSpy(sectionIds)

    useEffect(() => {
        function onScroll() { setScrolled(window.scrollY > 60) }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = useCallback((id: string) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        setMobileOpen(false)
    }, [])

    return (
        <motion.nav
            className="fixed left-0 right-0 top-0 z-[var(--z-nav)] flex items-center justify-between px-6 py-4 md:px-16"
            initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={scrolled ? { backdropFilter: 'var(--blur-md)', background: 'var(--surface-2)', borderBottom: '1px solid var(--surface-border)', transition: 'all 300ms' } : { transition: 'all 300ms' }}
        >
            <button onClick={() => scrollTo('hero')} className="font-display text-xl font-bold text-[var(--accent-a-100)]" data-cursor="pointer">TS</button>

            <div className="hidden items-center gap-1 md:flex">
                {links.map((link) => (
                    <button key={link.id} onClick={() => scrollTo(link.id)} className="relative px-3 py-1.5 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]" data-cursor="pointer">
                        {link.label}
                        {activeId === link.id && <motion.span layoutId="nav-active" className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[var(--accent-a-200)]" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
                    </button>
                ))}
            </div>

            <div className="hidden md:block">
                <MagneticButton variant="primary" href="#contact" className="px-5 py-2 text-xs">Hire Me</MagneticButton>
            </div>

            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
                <Dialog.Trigger asChild>
                    <button className="md:hidden text-[var(--text-primary)]" data-cursor="pointer" aria-label="Menu"><Menu size={20} /></button>
                </Dialog.Trigger>
                <AnimatePresence>
                    {mobileOpen && (
                        <Dialog.Portal forceMount>
                            <Dialog.Overlay asChild forceMount>
                                <motion.div className="fixed inset-0 z-[var(--z-modal)] bg-black/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                            </Dialog.Overlay>
                            <Dialog.Content asChild forceMount>
                                <motion.div className="fixed inset-y-0 right-0 z-[var(--z-modal)] w-[280px] bg-[var(--surface-1)] p-8" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 400, damping: 35 }}>
                                    <Dialog.Close asChild><button className="mb-8 text-[var(--text-muted)]" aria-label="Close"><X size={20} /></button></Dialog.Close>
                                    <div className="space-y-2">
                                        {links.map((link, i) => (
                                            <motion.button key={link.id} onClick={() => scrollTo(link.id)} className="block w-full py-3 text-left text-lg font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.05, duration: 0.4 }} data-cursor="pointer">
                                                {link.label}
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    )}
                </AnimatePresence>
            </Dialog.Root>
        </motion.nav>
    )
}
