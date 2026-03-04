'use client'

import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const socials = [
    { icon: <Github size={16} />, href: 'https://github.com/taher53-s', label: 'GitHub' },
    { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/taher-sohagpurwala-b055a731b', label: 'LinkedIn' },
    { icon: <Mail size={16} />, href: 'mailto:tahersohagpurwala@gmail.com', label: 'Email' },
    { icon: <Phone size={16} />, href: 'tel:+917977601612', label: 'Phone' },
]

export default function Footer() {
    return (
        <AnimatedSection delay={0.1}>
            <footer className="border-t border-[var(--surface-border)] px-6 py-16 md:px-16 lg:px-24">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                        <span className="font-display text-xl font-bold text-[var(--accent-a-100)]">TS</span>
                        <p className="mt-3 max-w-sm text-sm text-[var(--text-secondary)]">
                            Building at the intersection of AI, performance, and craft.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-start gap-6 lg:justify-end">
                        {socials.map((s) => (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]" data-cursor="pointer" aria-label={s.label}>
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-12 border-t border-[var(--surface-border)] pt-6">
                    <p className="text-xs text-[var(--text-muted)]">© 2025 Taher Sohagpurwala · Built with Next.js, Framer Motion, GSAP</p>
                    <p className="mt-1 text-[10px] text-[var(--text-muted)]">Designed &amp; developed with obsessive attention to detail.</p>
                </div>
            </footer>
        </AnimatedSection>
    )
}
