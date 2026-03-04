'use client'

import { useEffect, useRef } from 'react'

interface ScrollStoryProps { id?: string }

export default function ScrollStory({ id }: ScrollStoryProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const stageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let ctx: { revert: () => void } | null = null

        async function init() {
            const container = containerRef.current
            const stage = stageRef.current
            if (!container || !stage) return

            const { loadGSAP } = await import('@/lib/gsap')
            const { gsap, ScrollTrigger } = await loadGSAP()

            ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: { trigger: container, start: 'top top', end: '+=300%', pin: stage, anticipatePin: 1, scrub: 1 },
                })

                tl.fromTo('#ch1', { scale: 0.88, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
                    .to('#ch1', { x: '-80vw', opacity: 0, duration: 0.8 }, '+=0.3')
                    .fromTo('#ch2', { x: '80vw', opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 })
                    .to('#ch2', { x: '-80vw', opacity: 0, duration: 0.8 }, '+=0.3')
                    .fromTo('#ch3', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })

                ScrollTrigger.refresh()
            }, container)
        }

        init()
        return () => { ctx?.revert() }
    }, [])

    return (
        <section id={id} ref={containerRef} className="relative" style={{ height: '400vh' }}>
            <div ref={stageRef} className="flex h-[100vh] items-center justify-center overflow-hidden">
                <div className="relative h-full w-full">
                    <div id="ch1" className="absolute inset-0 flex items-center justify-center px-8 text-center opacity-0">
                        <p className="max-w-3xl font-display text-3xl font-bold leading-snug text-[var(--text-primary)] md:text-5xl lg:text-6xl">
                            6 shipped products. 3 design systems. Zero compromises.
                        </p>
                    </div>

                    <div id="ch2" className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-8 text-center opacity-0">
                        <p className="max-w-3xl font-display text-2xl font-bold leading-snug text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                            From CLI to AI pipeline — I build across every layer of the stack.
                        </p>
                        <div className="flex gap-12">
                            <div className="text-center">
                                <span className="block font-mono text-3xl font-extrabold text-[var(--accent-a-100)]">12+</span>
                                <span className="text-xs text-[var(--text-muted)]">Technologies</span>
                            </div>
                            <div className="text-center">
                                <span className="block font-mono text-3xl font-extrabold text-[var(--accent-b-100)]">8</span>
                                <span className="text-xs text-[var(--text-muted)]">Skill Domains</span>
                            </div>
                            <div className="text-center">
                                <span className="block font-mono text-3xl font-extrabold text-[var(--accent-c-100)]">95+</span>
                                <span className="text-xs text-[var(--text-muted)]">Avg. Lighthouse</span>
                            </div>
                        </div>
                    </div>

                    <div id="ch3" className="absolute inset-0 flex items-center justify-center gap-12 px-8 opacity-0">
                        <div className="max-w-md">
                            <p className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
                                The full stack,<br />owned end-to-end.
                            </p>
                        </div>
                        <div className="hidden w-80 overflow-hidden rounded-xl border border-[var(--surface-border)] bg-[var(--color-ink)] md:block">
                            <div className="flex items-center gap-1.5 border-b border-[var(--surface-border)] px-3 py-2">
                                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                                <span className="ml-2 font-mono text-[10px] text-[var(--text-muted)]">pipeline.ts</span>
                            </div>
                            <pre className="p-3 font-mono text-xs leading-relaxed"><code>
                                <span className="text-[var(--accent-a-100)]">async function</span> <span className="text-[var(--text-primary)]">buildPipeline</span>{'() {\n'}
                                {'  '}  <span className="text-[var(--accent-a-100)]">const</span> steps = <span className="text-[var(--accent-a-100)]">await</span> load(){';\n'}
                                {'  '}  <span className="text-[var(--accent-a-100)]">return</span> steps.map(run){';\n'}
                                {'}'}
                            </code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
