import { Navigation } from '@/components/layout/navigation'
import '@/styles/index.css'

export const metadata = {
    title: 'Next.js Template',
    description: 'Next.js + TypeScript + Zustand + Testing Example',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                <main className="container mx-auto p-4">{children}</main>
            </body>
        </html>
    )
} 