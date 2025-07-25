import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        include: ['**/*.test.{ts,tsx}'],
        reporters: ['verbose'],
        globals: true,
        clearMocks: true,
        silent: true,
        coverage: {
            provider: 'v8',
            exclude: [
                // 설정 파일들
                'next.config.*',
                'postcss.config.*',
                'tailwind.config.*',
                'vitest.config.*',
                'vitest.setup.*',
                '.eslintrc.*',
                '.prettierrc.*',
                // 타입 정의 파일들
                '**/*.d.ts',
                // Next.js 빌드 결과물
                '.next/**',
                // 테스트 파일들
                '**/__tests__/**',
                '**/*.test.*',
            ],
            reporter: ['text', 'json-summary'],
            all: true,
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
}) 