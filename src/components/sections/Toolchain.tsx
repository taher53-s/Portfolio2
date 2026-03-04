'use client'

import { Monitor, Terminal, GitBranch, Figma, Box, Globe, LayoutDashboard, Cpu, BookOpen, Command, Zap, FileCode } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassPanel from '@/components/ui/GlassPanel'

const tools = [
    { name: 'Neovim', desc: 'Editor', icon: <FileCode size={16} /> },
    { name: 'tmux', desc: 'Sessions', icon: <Terminal size={16} /> },
    { name: 'Wezterm', desc: 'Terminal', icon: <Monitor size={16} /> },
    { name: 'GitHub', desc: 'Source', icon: <GitBranch size={16} /> },
    { name: 'Vercel', desc: 'Deploy', icon: <Globe size={16} /> },
    { name: 'Figma', desc: 'Design', icon: <Figma size={16} /> },
    { name: 'Docker', desc: 'Containers', icon: <Box size={16} /> },
    { name: 'Insomnia', desc: 'APIs', icon: <Cpu size={16} /> },
    { name: 'Linear', desc: 'Tasks', icon: <LayoutDashboard size={16} /> },
    { name: 'Obsidian', desc: 'Notes', icon: <BookOpen size={16} /> },
    { name: 'Raycast', desc: 'Launcher', icon: <Command size={16} /> },
    { name: 'Oh My Zsh', desc: 'Shell', icon: <Zap size={16} /> },
]

interface ToolchainProps { id?: string }

export default function Toolchain({ id }: ToolchainProps) {
    return (
        <section id={id} className="py-32 px-6 md:px-16 lg:px-24">
            <AnimatedSection>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-6xl">Daily Toolchain</h2>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">The exact setup I use every day to ship.</p>
            </AnimatedSection>

            <div className="mt-12 flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                    <AnimatedSection key={tool.name} delay={i * 0.03}>
                        <GlassPanel className="group flex items-center gap-3 px-4 py-3 transition-all duration-300 hover:border-[var(--accent-a-200)]/30">
                            <span className="text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--accent-a-100)]">{tool.icon}</span>
                            <div>
                                <span className="text-sm font-medium text-[var(--text-primary)]">{tool.name}</span>
                                <span className="ml-2 text-[10px] text-[var(--text-muted)]">{tool.desc}</span>
                            </div>
                        </GlassPanel>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    )
}
