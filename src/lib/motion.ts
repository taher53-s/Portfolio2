import type { Variants, Transition } from 'framer-motion'

const expoTransition: Transition = {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
}

export const fadeUp: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: expoTransition },
}

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export const scaleIn: Variants = {
    hidden: { scale: 0.94, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
}

export const slideInLeft: Variants = {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: expoTransition },
}

export const slideInRight: Variants = {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: expoTransition },
}

export const clipReveal: Variants = {
    hidden: { clipPath: 'inset(100% 0 0 0)' },
    visible: { clipPath: 'inset(0% 0 0 0)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export function createStagger(staggerChildren: number, delayChildren: number = 0.05): Variants {
    return {
        hidden: {},
        visible: { transition: { staggerChildren, delayChildren } },
    }
}

export const motionConfig = {
    reducedMotion: 'user' as const,
}
