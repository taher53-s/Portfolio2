export interface Certification {
    id: string
    name: string
    issuer: string
    year: string
    status: 'completed' | 'in-progress'
    credentialUrl?: string
    icon: string
}

export interface Hackathon {
    id: string
    name: string
    year: string
    result: string
    project: string
    stack: string[]
}

export const certifications: Certification[] = [
    { id: 'google-ml', name: 'Google Machine Learning Crash Course', issuer: 'Google', year: '2024', status: 'completed', icon: 'Brain' },
    { id: 'meta-frontend', name: 'Meta Frontend Developer Certificate', issuer: 'Meta / Coursera', year: '2024', status: 'completed', icon: 'Layers' },
    { id: 'aws-cloud', name: 'AWS Cloud Practitioner (CLF-C02)', issuer: 'Amazon Web Services', year: '2025', status: 'in-progress', icon: 'Cloud' },
    { id: 'ck-docker', name: 'Docker Foundations Professional', issuer: 'Docker / LinkedIn Learning', year: '2024', status: 'completed', icon: 'Box' },
    { id: 'vercel-next', name: 'Next.js & React — The Complete Guide', issuer: 'Udemy / Maximilian Schwarzmüller', year: '2023', status: 'completed', icon: 'Zap' },
]

export const hackathons: Hackathon[] = [
    { id: 'hack-atlas-2024', name: 'Atlas TechSprint 2024', year: '2024', result: 'Top 8 Finalist — 120 participants', project: 'SynthFlow — AI pipeline orchestration demo', stack: ['Python', 'FastAPI', 'Next.js', 'OpenAI'] },
    { id: 'hack-build-2023', name: 'BuildWithAI Hackathon', year: '2023', result: 'Honorable Mention — 200+ participants', project: 'NeuralBrief MVP — document summarization prototype', stack: ['Python', 'LangChain', 'React', 'FastAPI'] },
    { id: 'hack-oss-2024', name: 'Open Source Weekend · Mumbai', year: '2024', result: 'Completed 2 OSS contributions in 48 hours', project: 'Contributed to Neovim plugin registry tooling', stack: ['Lua', 'Bash', 'GitHub Actions'] },
]
