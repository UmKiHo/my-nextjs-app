import { create } from 'zustand'

type Theme = 'blue' | 'green' | 'purple'

interface ThemeState {
    currentTheme: Theme
    setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
    currentTheme: 'blue',
    setTheme: (theme) => set({ currentTheme: theme }),
})) 