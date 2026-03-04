export async function loadGSAP(): Promise<{
    gsap: typeof import('gsap').gsap
    ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger
}> {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)
    return { gsap, ScrollTrigger }
}
