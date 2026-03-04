import { useEffect, useState, useRef } from 'react'

export function useScrollSpy(
    sectionIds: string[],
    options?: IntersectionObserverInit
): string {
    const [activeId, setActiveId] = useState<string>('')
    const ratioMap = useRef<Map<string, number>>(new Map())

    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            threshold: 0.4,
            rootMargin: '-10% 0px -40% 0px',
            ...options,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                ratioMap.current.set(entry.target.id, entry.intersectionRatio)
            })

            let maxRatio = 0
            let maxId = ''
            ratioMap.current.forEach((ratio, id) => {
                if (ratio > maxRatio) {
                    maxRatio = ratio
                    maxId = id
                }
            })

            if (maxId) setActiveId(maxId)
        }, observerOptions)

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [sectionIds, options])

    return activeId
}
