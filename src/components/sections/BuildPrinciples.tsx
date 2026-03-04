'use client'

interface BuildPrinciplesProps { id?: string }

export default function BuildPrinciples({ id }: BuildPrinciplesProps) {
    return (
        <section id={id} className="relative overflow-hidden py-32 px-6 md:px-16 lg:px-24">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="h-[300px] w-[300px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--accent-b-glow), transparent 70%)' }} />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <div className="flex items-center justify-center gap-6 font-display text-4xl font-bold tracking-wide md:text-6xl lg:text-7xl">
                    {['Precision', 'Performance', 'Ownership'].map((word, i) => (
                        <span key={word} className="inline-block text-[var(--text-primary)]" style={{ animation: 'clipRevealUp 0.8s ease-out both', animationDelay: `${i * 300}ms` }}>
                            {word}
                            {i < 2 && <span className="ml-6 text-[var(--text-muted)]">·</span>}
                        </span>
                    ))}
                </div>

                <div className="mt-12 flex flex-col gap-3 font-mono text-sm text-[var(--text-secondary)] md:text-base">
                    <p>Ship fast, iterate faster, never compromise on quality.</p>
                    <p>Measure everything. Trust data over intuition.</p>
                    <p>Own the outcome, not just the task.</p>
                </div>
            </div>
        </section>
    )
}
