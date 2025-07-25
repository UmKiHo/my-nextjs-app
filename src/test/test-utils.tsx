import '@testing-library/jest-dom/vitest'
import { RenderOptions, RenderResult, render as rtlRender } from '@testing-library/react'
import { ReactElement } from 'react'
import { vi } from 'vitest'

// Next.js 13 App Router의 layout을 시뮬레이션하는 wrapper
export function renderWithLayout(
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) {
    return rtlRender(ui, {
        wrapper: ({ children }) => (
            <div>
                <main className="container mx-auto p-4">{children}</main>
            </div>
        ),
        ...options,
    })
}

// 기본 render 함수 재정의
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => rtlRender(ui, { ...options })

export * from '@testing-library/react'
export { customRender as render }

// 서버 컴포넌트를 위한 타입
export type ServerComponent<P = {}> = (props: P) => Promise<JSX.Element>

// 테스트용 mock 데이터
export const mockPosts = [
    {
        id: 1,
        title: 'Test Post 1',
        body: 'This is test post 1',
    },
    {
        id: 2,
        title: 'Test Post 2',
        body: 'This is test post 2',
    },
]

export const mockServerData = {
    lastUpdated: '2024-01-01T00:00:00.000Z',
    serverMessage: 'Test server message',
}

// Canvas Context 모킹을 위한 유틸리티
export function createMockCanvasContext() {
    return {
        clearRect: vi.fn(),
        fillRect: vi.fn(),
        beginPath: vi.fn(),
        arc: vi.fn(),
        fill: vi.fn(),
        stroke: vi.fn(),
        fillText: vi.fn(),
        strokeStyle: '',
        fillStyle: '',
        lineWidth: 0,
        font: '',
        textAlign: 'start' as CanvasTextAlign,
    }
} 