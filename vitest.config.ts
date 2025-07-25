/// <reference types="vitest" />
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
            include: [
                // 실제 소스 코드만 포함
                'src/**/*.{ts,tsx}',
            ],
            exclude: [
                // 테스트 파일들
                '**/__tests__/**',
                '**/*.test.*',
                '**/test/**',
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
