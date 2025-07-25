/// <reference types="vitest" />
import '@testing-library/jest-dom'

declare module 'vitest' {
    interface Assertion<T = any> extends jest.Matchers<void, T> { }
}

declare global {
    // Canvas 관련 타입 확장
    interface HTMLCanvasElement {
        getContext(contextId: '2d'): CanvasRenderingContext2D | null
    }
} 