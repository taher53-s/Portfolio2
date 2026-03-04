import type { Metadata, Viewport } from 'next'
import { Inter, Syne, Space_Mono } from 'next/font/google'
import ClientLayout from '@/components/layout/ClientLayout'
import { generateSiteMetadata } from '@/lib/og'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const syne = Syne({ subsets: ['latin'], variable: '--font-display', weight: ['400', '600', '700', '800'], display: 'swap' })
const spaceMono = Space_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '700'], display: 'swap' })

export const metadata: Metadata = generateSiteMetadata()

export const viewport: Viewport = { themeColor: '#0B0F14', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`dark ${inter.variable} ${syne.variable} ${spaceMono.variable}`}>
            <body className={inter.className}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    )
}
