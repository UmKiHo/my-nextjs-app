import { createMockCanvasContext, render } from '@/test/test-utils'
import { act } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { CircleAnimation } from '../circle-animation'

// Canvas 메서드 모킹
const mockContext = createMockCanvasContext()
const mockGetContext = vi.fn().mockReturnValue(mockContext)

describe('CircleAnimation', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        vi.useFakeTimers()

        // Canvas mock 설정
        HTMLCanvasElement.prototype.getContext = mockGetContext
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('renders canvas element', () => {
        const { container } = render(<CircleAnimation />)
        const canvas = container.querySelector('canvas')

        expect(canvas).toBeInTheDocument()
        expect(canvas).toHaveAttribute('width', '400')
        expect(canvas).toHaveAttribute('height', '300')
    })

    it('adds circles every second until reaching 5', () => {
        render(<CircleAnimation />)

        // 초기 상태
        expect(mockContext.fillText).toHaveBeenCalledWith('Circles: 0 / 5', 200, 30)

        // 1초 후
        act(() => {
            vi.advanceTimersByTime(1000)
        })
        expect(mockContext.fillText).toHaveBeenCalledWith('Circles: 1 / 5', 200, 30)

        // 5초 후 (5개의 원)
        act(() => {
            vi.advanceTimersByTime(4000)
        })
        expect(mockContext.fillText).toHaveBeenCalledWith('Circles: 5 / 5', 200, 30)

        // 6초 후 (여전히 5개)
        act(() => {
            vi.advanceTimersByTime(1000)
        })
        expect(mockContext.fillText).toHaveBeenCalledWith('Circles: 5 / 5', 200, 30)
    })

    it('removes circles after reaching 5', () => {
        render(<CircleAnimation />)

        // 5개의 원 생성
        act(() => {
            vi.advanceTimersByTime(5000)
        })

        // 원 제거 시작 (isAdding 상태 변경)
        act(() => {
            vi.advanceTimersByTime(1000)
        })

        // 다음 상태 업데이트 대기
        act(() => {
            vi.advanceTimersByTime(1000)
        })

        // 원이 하나씩 제거되는 것을 확인
        const fillTextCalls = mockContext.fillText.mock.calls
        const lastCall = fillTextCalls[fillTextCalls.length - 1]
        expect(lastCall[0]).toBe('Circles: 4 / 5')

        // 모든 원 제거
        act(() => {
            vi.advanceTimersByTime(4000)
        })
        expect(mockContext.fillText).toHaveBeenCalledWith('Circles: 0 / 5', 200, 30)
    })
}) 