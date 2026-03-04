'use client'

import { useState } from 'react'
import TooltipWrapper from '@/components/ui/TooltipWrapper'

interface NodeData { id: string; label: string; x: number; y: number; r: number; accent: string; description: string }
interface EdgeData { from: string; to: string }

const nodes: NodeData[] = [
    { id: 'frontend', label: 'Frontend', x: 150, y: 100, r: 32, accent: 'var(--accent-a-200)', description: 'Next.js, React, Framer Motion, GSAP, Tailwind' },
    { id: 'aiml', label: 'AI/ML', x: 450, y: 100, r: 32, accent: 'var(--accent-c-200)', description: 'TensorFlow, PyTorch, LangChain, HuggingFace' },
    { id: 'backend', label: 'Backend', x: 300, y: 200, r: 26, accent: 'var(--accent-b-200)', description: 'Node.js, FastAPI, Express, GraphQL' },
    { id: 'systems', label: 'Systems', x: 100, y: 280, r: 26, accent: 'var(--accent-c-100)', description: 'System Design, Microservices, DAGs' },
    { id: 'devops', label: 'DevOps', x: 500, y: 250, r: 20, accent: 'var(--accent-b-100)', description: 'Docker, GitHub Actions, CI/CD' },
    { id: 'databases', label: 'Data', x: 400, y: 330, r: 20, accent: 'var(--accent-b-200)', description: 'PostgreSQL, Redis, ClickHouse, pgvector' },
    { id: 'languages', label: 'Languages', x: 250, y: 340, r: 24, accent: 'var(--accent-a-100)', description: 'TypeScript, Python, Lua, SQL' },
    { id: 'tooling', label: 'Tooling', x: 50, y: 180, r: 18, accent: 'var(--accent-a-200)', description: 'Neovim, Turborepo, Vite, ESLint' },
]

const edges: EdgeData[] = [
    { from: 'frontend', to: 'backend' }, { from: 'frontend', to: 'aiml' }, { from: 'backend', to: 'databases' },
    { from: 'backend', to: 'devops' }, { from: 'aiml', to: 'backend' }, { from: 'systems', to: 'backend' },
    { from: 'systems', to: 'databases' }, { from: 'languages', to: 'frontend' }, { from: 'languages', to: 'backend' },
    { from: 'tooling', to: 'frontend' }, { from: 'tooling', to: 'systems' }, { from: 'devops', to: 'databases' },
]

export default function TechGraph() {
    const [hovered, setHovered] = useState<string | null>(null)
    const nodeMap = new Map(nodes.map((n) => [n.id, n]))

    return (
        <div className="w-full overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-1)]">
            <svg viewBox="0 0 560 400" className="w-full" style={{ height: 'auto' }}>
                {edges.map((e) => {
                    const a = nodeMap.get(e.from)
                    const b = nodeMap.get(e.to)
                    if (!a || !b) return null
                    const isActive = hovered === e.from || hovered === e.to
                    return <line key={`${e.from}-${e.to}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="var(--accent-a-300)" strokeWidth={isActive ? 1.5 : 0.7} opacity={isActive ? 0.6 : 0.15} style={{ transition: 'all 300ms' }} />
                })}
                {nodes.map((n) => (
                    <TooltipWrapper key={n.id} content={n.description}>
                        <g onMouseEnter={() => setHovered(n.id)} onMouseLeave={() => setHovered(null)} style={{ cursor: 'none' }}>
                            <circle cx={n.x} cy={n.y} r={n.r} fill="var(--surface-2)" stroke={hovered === n.id ? n.accent : 'var(--surface-border)'} strokeWidth={hovered === n.id ? 2 : 1} style={{ transition: 'stroke 300ms, stroke-width 300ms' }} />
                            {hovered === n.id && <circle cx={n.x} cy={n.y} r={n.r + 6} fill="none" stroke={n.accent} strokeWidth={0.5} opacity={0.3} />}
                            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="var(--text-primary)" fontSize={n.r > 24 ? 11 : 9} fontFamily="var(--font-inter)" fontWeight={500}>{n.label}</text>
                        </g>
                    </TooltipWrapper>
                ))}
            </svg>
        </div>
    )
}
