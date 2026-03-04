'use client'

export default function GradientMeshBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 600px 600px at 15% 25%, var(--accent-a-300), transparent)', opacity: 0.6, animation: 'meshA 20s ease-in-out infinite alternate', willChange: 'background-position' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 500px 500px at 85% 75%, var(--accent-b-300), transparent)', opacity: 0.5, animation: 'meshB 27s ease-in-out infinite alternate', willChange: 'background-position' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 300px 300px at 65% 8%, var(--accent-a-200), transparent)', opacity: 0.4, animation: 'meshC 34s ease-in-out infinite alternate', willChange: 'background-position' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 400px 400px at 40% 90%, var(--accent-c-glow), transparent)', opacity: 0.5, animation: 'meshD 22s ease-in-out infinite alternate', willChange: 'background-position' }} />
            <div className="absolute inset-0" style={{ background: 'conic-gradient(from 180deg at 50% 50%, var(--surface-1), transparent)', opacity: 0.03 }} />
            <div className="absolute inset-0" style={{ mixBlendMode: 'screen' }} />
        </div>
    )
}
