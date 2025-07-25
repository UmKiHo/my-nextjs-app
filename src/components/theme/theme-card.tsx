'use client'

import { useThemeStore } from '@/store/theme-store'
import clsx from 'clsx'

interface ThemeCardProps {
    title: string
    description: string
}

export function ThemeCard({ title, description }: ThemeCardProps) {
    const { currentTheme } = useThemeStore()

    const themeStyles = {
        blue: 'bg-blue-100 border-blue-200 hover:bg-blue-200',
        green: 'bg-green-100 border-green-200 hover:bg-green-200',
        purple: 'bg-purple-100 border-purple-200 hover:bg-purple-200',
    }

    return (
        <div
            className={clsx(
                'rounded-lg border p-6 transition-colors duration-300',
                themeStyles[currentTheme]
            )}
            data-testid="theme-card"
        >
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    )
} 