'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassPanel from '@/components/ui/GlassPanel'
import CodeSnippet from '@/components/ui/CodeSnippet'
import PerformanceMeter from '@/components/ui/PerformanceMeter'
import GitHubActivity from '@/components/ui/GitHubActivity'

const sampleCode = `async function buildPipeline(config: PipelineConfig) {
  const steps = await loadSteps(config.manifest);
  const dag = compileDAG(steps);

  return dag.execute({
    parallel: true,
    retry: { maxAttempts: 3, backoff: 'exponential' },
    onProgress: (step) => emit('progress', step),
  });
}`

const scores = [
    { project: 'Mission Control', score: 97 },
    { project: 'Vim Marketplace', score: 95 },
    { project: 'Prism Analytics', score: 96 },
    { project: 'DevForge Landing', score: 98 },
]

interface PlaygroundProps { id?: string }

export default function Playground({ id }: PlaygroundProps) {
    return (
        <section id={id} className="py-32 px-6 md:px-16 lg:px-24">
            <AnimatedSection>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-6xl">Technical Playground</h2>
            </AnimatedSection>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
                <AnimatedSection delay={0.05}>
                    <GlassPanel className="h-full p-5">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Live Code</h3>
                        <CodeSnippet code={sampleCode} language="TypeScript" filename="pipeline.ts" />
                    </GlassPanel>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <GlassPanel className="h-full p-5">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Lighthouse Scores</h3>
                        <PerformanceMeter scores={scores} />
                    </GlassPanel>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                    <GlassPanel className="h-full p-5">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">GitHub Activity</h3>
                        <GitHubActivity />
                    </GlassPanel>
                </AnimatedSection>
            </div>
        </section>
    )
}
