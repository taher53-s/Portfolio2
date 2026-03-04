'use client'

import { motion } from 'framer-motion'

interface ScoreEntry { project: string; score: number }

interface PerformanceMeterProps { scores: ScoreEntry[] }

export default function PerformanceMeter({ scores }: PerformanceMeterProps) {
    return (
        <div className="flex flex-col gap-4">
            {scores.map((entry) => (
                <div key={entry.project}>
                    <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-xs font-medium text-[var(--text-primary)]">{entry.project}</span>
                        <span className="flex items-center gap-1.5 text-xs">
                            <span className="font-mono font-bold text-[var(--accent-a-100)]">{entry.score}</span>
                            <span className={entry.score >= 95 ? 'text-[var(--accent-a-100)]' : 'text-[var(--accent-b-100)]'}>
                                {entry.score >= 95 ? 'Excellent' : 'Good'}
                            </span>
                        </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--surface-2)]">
                        <motion.div
                            className="h-full rounded-full"
                            style={{ background: 'linear-gradient(90deg, var(--accent-a-300), var(--accent-a-100))' }}
                            initial={{ width: '0%' }}
                            whileInView={{ width: `${entry.score}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
