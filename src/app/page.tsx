import dynamic from 'next/dynamic'

import Hero from '@/components/sections/Hero'
import ScrollStory from '@/components/sections/ScrollStory'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

const CaseStudies = dynamic(() => import('@/components/sections/CaseStudies'))
const Philosophy = dynamic(() => import('@/components/sections/Philosophy'))
const BuildPrinciples = dynamic(() => import('@/components/sections/BuildPrinciples'))
const Playground = dynamic(() => import('@/components/sections/Playground'))
const Toolchain = dynamic(() => import('@/components/sections/Toolchain'))
const FeaturedExperiment = dynamic(() => import('@/components/sections/FeaturedExperiment'))
const Certifications = dynamic(() => import('@/components/sections/Certifications'))

export default function Home() {
    return (
        <main>
            <Hero id="hero" />
            <ScrollStory id="story" />
            <About id="about" />
            <Skills id="skills" />
            <Projects id="projects" />
            <CaseStudies id="case-studies" />
            <Experience id="experience" />
            <Philosophy id="philosophy" />
            <BuildPrinciples id="build-principles" />
            <Playground id="playground" />
            <Toolchain id="toolchain" />
            <FeaturedExperiment id="experiment" />
            <Certifications id="certifications" />
            <Contact id="contact" />
            <Footer />
        </main>
    )
}
