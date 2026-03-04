export interface Project {
    slug: string
    title: string
    category: string
    year: string
    status: 'shipped' | 'in-progress' | 'concept'
    tagline: string
    problem: string
    solution: string
    outcome: string
    stack: string[]
    accentColor: string
    imageGradient: string
    imageDescription: string
    featured: boolean
    gridSpan: 'wide' | 'tall' | 'standard' | 'hero'
    liveUrl?: string
    githubUrl?: string
}

export const projects: Project[] = [
    {
        slug: 'mission-control',
        title: 'Mission Control',
        category: 'Developer Tooling · OS Interface',
        year: '2024',
        status: 'shipped',
        tagline: 'An AI-powered OS-style command interface for developers.',
        problem: 'Developers context-switch between 12+ tools daily. Every switch costs focus, flow, and time.',
        solution: 'A unified, keyboard-first OS-style interface that aggregates terminal, file ops, AI completions, task management, and system metrics into a single cinematic dashboard. Deployed on Vercel with real-time AI suggestion layers.',
        outcome: 'Personal productivity increase of 3× context retention. Featured in 2 developer Discord communities. 200+ GitHub stars within first week.',
        stack: ['Next.js 14', 'TypeScript', 'Framer Motion', 'OpenAI API', 'Vercel Edge', 'Tailwind CSS', 'GSAP'],
        accentColor: 'hsl(156, 85%, 52%)',
        imageGradient: 'linear-gradient(135deg, #0B0F14 0%, #0d2818 40%, #0a1a2e 100%)',
        imageDescription: 'Dark cinematic OS dashboard UI mockup with glassmorphism command palette overlay.',
        featured: true,
        gridSpan: 'hero',
        liveUrl: 'https://mission-control.vercel.app',
        githubUrl: 'https://github.com/taher53-s/mission-control',
    },
    {
        slug: 'vim-plugin-marketplace',
        title: 'Vim Plugin Marketplace',
        category: 'Systems · Developer Tooling',
        year: '2024',
        status: 'shipped',
        tagline: 'A typed plugin registry and discovery engine for the Neovim ecosystem.',
        problem: 'The Neovim plugin ecosystem has 3,000+ plugins with no unified discovery layer.',
        solution: 'A full-stack marketplace built on a custom Lua plugin architecture with conflict detection, compatibility scoring, and semantic search.',
        outcome: '150+ plugins indexed at launch. Conflict detection accuracy of 94%. Adopted by 3 active Neovim Discord servers.',
        stack: ['Lua', 'Neovim API', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector'],
        accentColor: 'hsl(36, 90%, 58%)',
        imageGradient: 'linear-gradient(135deg, #0B0F14 0%, #1a1200 50%, #0e0d00 100%)',
        imageDescription: 'Neovim-inspired terminal UI reimagined as a modern SaaS marketplace.',
        featured: true,
        gridSpan: 'wide',
        githubUrl: 'https://github.com/taher53-s/vim-plugin-marketplace',
    },
    {
        slug: 'synthflow',
        title: 'SynthFlow',
        category: 'AI Systems · Data Pipeline',
        year: '2024',
        status: 'shipped',
        tagline: 'Declarative AI pipeline orchestration for applied ML workflows.',
        problem: 'Building reproducible ML pipelines requires stitching together incompatible tools and writing boilerplate config.',
        solution: 'A YAML-driven pipeline engine that compiles AI workflow definitions into optimized DAGs with branching logic, parallel execution, and automatic retry.',
        outcome: 'Pipeline definition time reduced by 70% vs. manual Airflow setup. Supports 12 model providers.',
        stack: ['Python', 'FastAPI', 'PyYAML', 'Celery', 'Redis', 'Docker', 'HuggingFace', 'Ollama'],
        accentColor: 'hsl(200, 85%, 55%)',
        imageGradient: 'linear-gradient(135deg, #050d1a 0%, #001830 50%, #0B0F14 100%)',
        imageDescription: 'AI pipeline DAG visualization with animated directed acyclic graph.',
        featured: true,
        gridSpan: 'tall',
        githubUrl: 'https://github.com/taher53-s/synthflow',
    },
    {
        slug: 'prism-analytics',
        title: 'Prism Analytics',
        category: 'Full-Stack SaaS · Data Analytics',
        year: '2023',
        status: 'shipped',
        tagline: 'Real-time behavioral analytics dashboard for indie SaaS products.',
        problem: 'PostHog and Mixpanel are overkill for solo founders. Integration takes days.',
        solution: 'Lightweight, privacy-first analytics SaaS with a 1-line embed script. Tracks custom events, funnel flows, and retention curves.',
        outcome: '5 indie product integrations in beta. Event ingestion latency under 18ms. 99.7% uptime.',
        stack: ['Next.js', 'TypeScript', 'ClickHouse', 'Kafka', 'Node.js', 'Prisma', 'Tailwind', 'Recharts'],
        accentColor: 'hsl(280, 80%, 65%)',
        imageGradient: 'linear-gradient(135deg, #0B0F14 0%, #130b1f 50%, #0B0F14 100%)',
        imageDescription: 'SaaS analytics dashboard with KPI stat cards and area charts.',
        featured: false,
        gridSpan: 'standard',
        githubUrl: 'https://github.com/taher53-s/prism-analytics',
    },
    {
        slug: 'devforge',
        title: 'DevForge',
        category: 'Developer Tooling · CLI',
        year: '2023',
        status: 'shipped',
        tagline: 'Opinionated project scaffolding CLI for modern full-stack stacks.',
        problem: 'Bootstrapping a production-ready project takes 4–6 hours of config every time.',
        solution: 'Interactive CLI generating fully configured templates in under 60 seconds with 8 stack combinations.',
        outcome: '400+ CLI installs via npm. Average setup time reduced from 4 hours to 52 seconds.',
        stack: ['Node.js', 'TypeScript', 'Inquirer.js', 'Handlebars', 'GitHub Actions', 'npm'],
        accentColor: 'hsl(156, 85%, 52%)',
        imageGradient: 'linear-gradient(135deg, #0B0F14 0%, #061a0f 50%, #0B0F14 100%)',
        imageDescription: 'CLI tool promotional visual in a terminal window.',
        featured: false,
        gridSpan: 'standard',
        githubUrl: 'https://github.com/taher53-s/devforge',
    },
    {
        slug: 'neural-brief',
        title: 'NeuralBrief',
        category: 'AI Systems · NLP',
        year: '2024',
        status: 'in-progress',
        tagline: 'Context-aware document intelligence and summarization engine.',
        problem: 'Reading a 40-page research paper to extract 3 actionable insights is a solved problem that most tools get wrong.',
        solution: 'A RAG-based document intelligence engine that ingests PDFs, extracts structured semantic chunks, and generates hierarchical summaries with inline citation anchors.',
        outcome: 'Summarization accuracy benchmarked at 91%. Chrome extension at 120 active installs in beta.',
        stack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'Next.js', 'TypeScript', 'Plasmo'],
        accentColor: 'hsl(200, 85%, 55%)',
        imageGradient: 'linear-gradient(135deg, #050a14 0%, #001a2e 50%, #0B0F14 100%)',
        imageDescription: 'Document AI interface with PDF viewer, summary tree, and chat panel.',
        featured: false,
        gridSpan: 'wide',
        githubUrl: 'https://github.com/taher53-s/neural-brief',
    },
]
