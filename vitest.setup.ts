import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Testing Library 설정
afterEach(() => {
    cleanup()
})

// requestAnimationFrame 모킹
global.requestAnimationFrame = vi.fn((callback) => {
    setTimeout(callback, 0)
    return 1 // 임의의 숫자 ID 반환
})

global.cancelAnimationFrame = vi.fn((id) => {
    clearTimeout(id)
})

// ResizeObserver 모킹
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
})) 