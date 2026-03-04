'use client'

export default function GradientMeshBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute rounded-full opacity-20" style={{ width: 700, height: 700, left: '15%', top: '20%', background: 'radial-gradient(circle, var(--accent-a-300) 0%, transparent 70%)', animation: 'meshA 22s ease-in-out infinite alternate' }} />
            <div className="absolute rounded-full opacity-18" style={{ width: 550, height: 550, left: '88%', top: '78%', background: 'radial-gradient(circle, var(--accent-b-300) 0%, transparent 70%)', animation: 'meshB 29s ease-in-out infinite alternate' }} />
            <div className="absolute rounded-full opacity-15" style={{ width: 320, height: 320, left: '62%', top: '6%', background: 'radial-gradient(circle, var(--accent-a-200) 0%, transparent 70%)', animation: 'meshC 37s ease-in-out infinite alternate' }} />
            <div className="absolute rounded-full opacity-12" style={{ width: 450, height: 450, left: '38%', top: '92%', background: 'radial-gradient(circle, var(--accent-c-glow) 0%, transparent 70%)', animation: 'meshD 25s ease-in-out infinite alternate' }} />
            <div className="absolute rounded-full opacity-10" style={{ width: 280, height: 280, left: '8%', top: '60%', background: 'radial-gradient(circle, var(--accent-b-glow) 0%, transparent 70%)', animation: 'meshA 41s ease-in-out infinite alternate-reverse' }} />
            <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'conic-gradient(from 0deg at 50% 50%, var(--accent-a-300), var(--accent-b-300), var(--accent-c-glow), var(--accent-a-300))' }} />
            <div className="perspective-grid absolute inset-0" />
        </div>
    )
}
