'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Token {
    text: string
    type: 'keyword' | 'string' | 'comment' | 'type' | 'punct' | 'number' | 'default'
}

const KEYWORDS = new Set(['const', 'let', 'var', 'function', 'return', 'import', 'from', 'export', 'async', 'await', 'if', 'else', 'new', 'class', 'interface', 'type', 'extends', 'implements'])
const TYPES = new Set(['string', 'number', 'boolean', 'void', 'Promise', 'Record', 'Array'])

function tokenize(code: string): Token[] {
    const tokens: Token[] = []
    const regex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b\d+(?:\.\d+)?\b)|(\b[a-zA-Z_]\w*\b)|([^\s\w])/g
    let match: RegExpExecArray | null
    let lastIndex = 0

    while ((match = regex.exec(code)) !== null) {
        if (match.index > lastIndex) tokens.push({ text: code.slice(lastIndex, match.index), type: 'default' })
        if (match[1]) tokens.push({ text: match[1], type: 'comment' })
        else if (match[2]) tokens.push({ text: match[2], type: 'string' })
        else if (match[3]) tokens.push({ text: match[3], type: 'number' })
        else if (match[4]) {
            if (KEYWORDS.has(match[4])) tokens.push({ text: match[4], type: 'keyword' })
            else if (TYPES.has(match[4])) tokens.push({ text: match[4], type: 'type' })
            else tokens.push({ text: match[4], type: 'default' })
        }
        else if (match[5]) tokens.push({ text: match[5], type: 'punct' })
        lastIndex = match.index + match[0].length
    }
    if (lastIndex < code.length) tokens.push({ text: code.slice(lastIndex), type: 'default' })
    return tokens
}

const colorMap: Record<Token['type'], string> = {
    keyword: 'text-[var(--accent-a-100)]',
    string: 'text-[var(--accent-b-100)]',
    comment: 'text-[var(--text-muted)] italic',
    type: 'text-[var(--accent-c-100)]',
    punct: 'text-[var(--text-secondary)]',
    number: 'text-[var(--accent-b-200)]',
    default: 'text-[var(--text-primary)]',
}

interface CodeSnippetProps {
    code: string
    language: string
    filename?: string
}

export default function CodeSnippet({ code, language, filename }: CodeSnippetProps) {
    const [copied, setCopied] = useState(false)
    const tokens = tokenize(code)

    async function handleCopy() {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="overflow-hidden rounded-xl border border-[var(--surface-border)] bg-[var(--color-ink)]">
            <div className="flex items-center justify-between border-b border-[var(--surface-border)] px-4 py-2.5">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    {filename && <span className="font-mono text-xs text-[var(--text-muted)]">{filename}</span>}
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">{language}</span>
                    <button onClick={handleCopy} className="flex h-6 w-6 items-center justify-center rounded text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]" data-cursor="pointer" aria-label="Copy code">
                        <AnimatePresence mode="wait">
                            {copied ? <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Check size={13} /></motion.span> : <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Copy size={13} /></motion.span>}
                        </AnimatePresence>
                    </button>
                </div>
            </div>
            <pre className={cn('overflow-x-auto p-4 font-mono text-[13px] leading-relaxed')}>
                <code>{tokens.map((t, i) => <span key={i} className={colorMap[t.type]}>{t.text}</span>)}</code>
            </pre>
        </div>
    )
}
