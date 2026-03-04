import Lenis from '@studio-freight/lenis'

let lenisInstance: Lenis | null = null

export function getLenis(): Lenis | null {
    if (typeof window === 'undefined') return null
    if (!lenisInstance) {
        lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
            orientation: 'vertical',
            smoothWheel: true,
        })
    }
    return lenisInstance
}

export function destroyLenis(): void {
    if (lenisInstance) {
        lenisInstance.destroy()
        lenisInstance = null
    }
}
