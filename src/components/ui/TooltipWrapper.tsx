'use client'

import * as RadixTooltip from '@radix-ui/react-tooltip'

interface TooltipWrapperProps { children: React.ReactNode; content: string }

export default function TooltipWrapper({ children, content }: TooltipWrapperProps) {
    return (
        <RadixTooltip.Provider delayDuration={200}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content
                        className="z-[var(--z-modal)] max-w-xs rounded-lg border border-[var(--surface-border)] bg-[var(--surface-3)] px-3 py-2 text-xs text-[var(--text-secondary)] shadow-lg [backdrop-filter:var(--blur-md)]"
                        sideOffset={8}
                    >
                        {content}
                        <RadixTooltip.Arrow className="fill-[var(--surface-3)]" width={10} height={5} />
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    )
}
