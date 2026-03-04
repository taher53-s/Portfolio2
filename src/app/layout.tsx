import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Syne } from 'next/font/google'
import ClientLayout from '@/components/layout/ClientLayout'
import { generateSiteMetadata } from '@/lib/og'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap', weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = generateSiteMetadata()

export const viewport: Viewport = { themeColor: '#0B0F14', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${syne.variable}`}>
            <body className={inter.className}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    )
}
