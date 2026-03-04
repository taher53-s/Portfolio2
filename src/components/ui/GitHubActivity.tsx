'use client'

import { cn } from '@/lib/utils'

function generateGrid(): number[][] {
    const weeks = 52
    const days = 7
    const grid: number[][] = []
    for (let w = 0; w < weeks; w++) {
        const week: number[] = []
        for (let d = 0; d < days; d++) {
            const rand = Math.random()
            if (rand < 0.25) week.push(0)
            else if (rand < 0.5) week.push(1)
            else if (rand < 0.72) week.push(2)
            else if (rand < 0.88) week.push(3)
            else week.push(4)
        }
        grid.push(week)
    }
    return grid
}

const grid = generateGrid()

const intensityMap = [
    'bg-[var(--surface-2)]',
    'bg-[var(--accent-a-300)]/30',
    'bg-[var(--accent-a-300)]/50',
    'bg-[var(--accent-a-300)]/70',
    'bg-[var(--accent-a-200)]',
] as const

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['', 'Mon', '', 'Wed', '', 'Fri', '']

export default function GitHubActivity() {
    let cellIdx = 0

    return (
        <div className="w-full">
            <div className="mb-2 flex pl-6">
                {months.map((m) => (
                    <span key={m} className="flex-1 text-[9px] text-[var(--text-muted)]">{m}</span>
                ))}
            </div>
            <div className="flex gap-0.5">
                <div className="flex flex-col gap-0.5 pr-1">
                    {days.map((d, i) => (
                        <span key={i} className="flex h-[12px] items-center text-[8px] text-[var(--text-muted)]">{d}</span>
                    ))}
                </div>
                <div className="flex gap-0.5">
                    {grid.map((week, wi) => (
                        <div key={wi} className="flex flex-col gap-0.5">
                            {week.map((intensity, di) => {
                                const idx = cellIdx++
                                return (
                                    <div
                                        key={di}
                                        className={cn('h-[12px] w-[12px] rounded-[2px]', intensityMap[intensity])}
                                        style={{ animation: 'ghCell 400ms ease-out both', animationDelay: `${idx * 3}ms` }}
                                    />
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-3 text-xs text-[var(--text-muted)]">~150 contributions this year</p>
        </div>
    )
}
