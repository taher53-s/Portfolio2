'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassPanel from '@/components/ui/GlassPanel'
import MagneticButton from '@/components/ui/MagneticButton'

interface ContactProps { id?: string }

export default function Contact({ id }: ContactProps) {
    const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus('sending')
        setTimeout(() => setStatus('sent'), 1200)
    }

    const contactInfo = [
        { icon: <Mail size={16} />, label: 'tahersohagpurwala@gmail.com', href: 'mailto:tahersohagpurwala@gmail.com' },
        { icon: <Phone size={16} />, label: '+91 7977601612', href: 'tel:+917977601612' },
        { icon: <Linkedin size={16} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/taher-sohagpurwala-b055a731b' },
        { icon: <Github size={16} />, label: 'GitHub', href: 'https://github.com/taher53-s' },
        { icon: <MapPin size={16} />, label: 'Mumbai, India' },
    ]

    return (
        <section id={id} className="py-32 px-6 md:px-16 lg:px-24">
            <SectionHeading eyebrow="Contact" title="Let's Build Something" titleAccent="Build" />

            <div className="grid gap-16 lg:grid-cols-2">
                <div>
                    <div className="space-y-3">
                        {contactInfo.map((item, i) => (
                            <AnimatedSection key={i} delay={0.1 + i * 0.05}>
                                <GlassPanel className="transition-shadow duration-300 hover:shadow-[var(--glow-xs)]">
                                    <div className="flex items-center gap-3 px-4 py-3 text-sm text-[var(--text-secondary)]">
                                        <span className="text-[var(--accent-a-200)]">{item.icon}</span>
                                        {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent-a-100)]" data-cursor="pointer">{item.label}</a> : <span>{item.label}</span>}
                                    </div>
                                </GlassPanel>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection delay={0.4}>
                        <div className="mt-10 flex flex-wrap gap-2">
                            {['Internships', 'Freelance', 'Collaborations', 'Open Source', 'Full-time 2028'].map((badge) => (
                                <span key={badge} className="rounded-full border border-[var(--accent-a-300)]/30 bg-[var(--surface-2)] px-3 py-1 text-[10px] text-[var(--text-muted)] transition-colors hover:border-[var(--accent-a-200)]/50 hover:text-[var(--accent-a-100)]">{badge}</span>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>

                <AnimatedSection direction="right" delay={0.2}>
                    <AnimatePresence mode="wait">
                        {status === 'sent' ? (
                            <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                                <GlassPanel className="flex flex-col items-center justify-center p-16 text-center">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}>
                                        <CheckCircle size={48} className="mb-4 text-[var(--accent-a-100)]" />
                                    </motion.div>
                                    <p className="text-lg font-semibold text-[var(--text-primary)]">Message sent.</p>
                                    <p className="mt-1 text-sm text-[var(--text-secondary)]">I&apos;ll reply within 24h.</p>
                                </GlassPanel>
                            </motion.div>
                        ) : (
                            <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit}>
                                <GlassPanel className="p-8">
                                    <div className="space-y-5">
                                        {[{ name: 'name', label: 'Name', type: 'text' }, { name: 'email', label: 'Email', type: 'email' }].map((field) => (
                                            <div key={field.name}>
                                                <label className="mb-1.5 block text-xs font-medium text-[var(--text-muted)]">{field.label}</label>
                                                <input name={field.name} type={field.type} value={form[field.name as keyof typeof form]} onChange={handleChange} required className="w-full rounded-lg border border-[var(--surface-border)] bg-transparent px-4 py-2.5 text-sm text-[var(--text-primary)] outline-none transition-all duration-300 placeholder:text-[var(--text-muted)] focus:border-[var(--accent-a-200)] focus:shadow-[var(--glow-sm)]" placeholder={field.label} data-cursor="text" />
                                            </div>
                                        ))}
                                        <div>
                                            <label className="mb-1.5 block text-xs font-medium text-[var(--text-muted)]">Subject</label>
                                            <select name="subject" value={form.subject} onChange={handleChange} className="w-full appearance-none rounded-lg border border-[var(--surface-border)] bg-transparent px-4 py-2.5 text-sm text-[var(--text-primary)] outline-none transition-all duration-300 focus:border-[var(--accent-a-200)] focus:shadow-[var(--glow-sm)]" data-cursor="pointer">
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Freelance Project">Freelance Project</option>
                                                <option value="Internship">Internship Opportunity</option>
                                                <option value="Collaboration">Collaboration</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-1.5 block text-xs font-medium text-[var(--text-muted)]">Message</label>
                                            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full resize-none rounded-lg border border-[var(--surface-border)] bg-transparent px-4 py-2.5 text-sm text-[var(--text-primary)] outline-none transition-all duration-300 placeholder:text-[var(--text-muted)] focus:border-[var(--accent-a-200)] focus:shadow-[var(--glow-sm)]" placeholder="Your message..." data-cursor="text" />
                                        </div>
                                        <MagneticButton type="submit" variant="primary" disabled={status === 'sending'} className="w-full">
                                            {status === 'sending' ? <span className="flex items-center gap-2"><span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />Sending...</span> : <span className="flex items-center gap-2"><Send size={14} />Send Message</span>}
                                        </MagneticButton>
                                    </div>
                                </GlassPanel>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </AnimatedSection>
            </div>
        </section>
    )
}
