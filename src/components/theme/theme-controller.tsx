'use client'

import { Button } from '@/components/button'
import { useThemeStore } from '@/store/theme-store'
import clsx from 'clsx'

export function ThemeController() {
    const { currentTheme, setTheme } = useThemeStore()

    const themes = [
        {
            name: 'blue',
            label: '파란색',
            styles: 'bg-blue-500 hover:bg-blue-600 text-white'
        },
        {
            name: 'green',
            label: '초록색',
            styles: 'bg-green-500 hover:bg-green-600 text-white'
        },
        {
            name: 'purple',
            label: '보라색',
            styles: 'bg-purple-500 hover:bg-purple-600 text-white'
        },
    ] as const

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium">테마 선택</h3>
            <div className="flex gap-2">
                {themes.map((theme) => (
                    <Button
                        key={theme.name}
                        variant="custom"
                        onClick={() => setTheme(theme.name)}
                        className={clsx(
                            'min-w-[80px] shadow transition-all duration-200',
                            theme.styles,
                            currentTheme === theme.name && [
                                'ring-2 ring-offset-2',
                                theme.name === 'blue' && 'ring-blue-500',
                                theme.name === 'green' && 'ring-green-500',
                                theme.name === 'purple' && 'ring-purple-500',
                            ]
                        )}
                        data-testid={`theme-button-${theme.name}`}
                    >
                        {theme.label}
                    </Button>
                ))}
            </div>
        </div>
    )
} 