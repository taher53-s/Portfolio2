export interface SkillCategory {
    id: string
    label: string
    icon: string
    description: string
    skills: string[]
    accent: 'a' | 'b' | 'c'
}

export const skillCategories: SkillCategory[] = [
    { id: 'languages', label: 'Languages', icon: 'Code2', description: 'Primary implementation languages across systems and product layers.', skills: ['TypeScript', 'Python', 'Lua', 'Rust (learning)', 'SQL', 'Bash'], accent: 'a' },
    { id: 'frontend', label: 'Frontend & Motion', icon: 'Layers', description: 'Motion-driven UI systems, component architecture, design engineering.', skills: ['Next.js 14', 'React 18', 'Framer Motion', 'GSAP', 'Tailwind CSS', 'CSS Architecture', 'Radix UI', 'shadcn/ui'], accent: 'a' },
    { id: 'backend', label: 'Backend & APIs', icon: 'Server', description: 'Scalable SaaS architecture, API design, service composition.', skills: ['Node.js', 'FastAPI', 'Flask', 'Express', 'REST', 'GraphQL', 'WebSockets', 'Prisma'], accent: 'b' },
    { id: 'devops', label: 'DevOps & CI/CD', icon: 'GitBranch', description: 'Pipeline automation, containerization, deployment infrastructure.', skills: ['Docker', 'Jenkins', 'GitHub Actions', 'Linux', 'Nginx', 'Vercel Edge', 'AWS EC2/S3'], accent: 'b' },
    { id: 'aiml', label: 'Applied AI & ML', icon: 'Brain', description: 'End-to-end ML systems, NLP pipelines, LLM integrations.', skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'OpenAI API', 'HuggingFace', 'RAG Systems', 'Ollama'], accent: 'c' },
    { id: 'systems', label: 'Systems & Architecture', icon: 'Network', description: 'Performance-first architecture, system design, data flow engineering.', skills: ['System Design', 'DAG Orchestration', 'Microservices', 'Event-driven Architecture', 'Caching Strategies', 'Database Indexing'], accent: 'c' },
    { id: 'databases', label: 'Data & Databases', icon: 'Database', description: 'Relational, vector, and streaming data infrastructure.', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ClickHouse', 'Kafka', 'pgvector', 'Pinecone'], accent: 'b' },
    { id: 'tooling', label: 'Tooling & DX', icon: 'Wrench', description: 'Developer experience, CLI tools, build systems.', skills: ['Neovim', 'Lua plugin architecture', 'ESLint', 'Prettier', 'Turborepo', 'Webpack', 'Vite'], accent: 'a' },
]
