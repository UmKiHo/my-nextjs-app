import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ServerStatePage from '../page'

// Date.toLocaleString 모킹
const mockDate = new Date('2024-01-01T00:00:00.000Z')
vi.spyOn(global, 'Date').mockImplementation(() => mockDate)

describe('ServerStatePage', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('renders server state page with initial data', async () => {
        const page = await ServerStatePage()
        render(page)

        expect(
            screen.getByText('서버 상태 관리 예제 (SSR + Zustand)')
        ).toBeInTheDocument()

        expect(
            screen.getByText(/이 페이지는 서버 사이드 렌더링과 Zustand를 함께 사용하는 예제입니다./)
        ).toBeInTheDocument()

        expect(
            screen.getByText(/서버에서 생성된 메시지:/)
        ).toBeInTheDocument()
    })

    it('waits for data loading', async () => {
        const startTime = Date.now()
        const page = await ServerStatePage()
        const endTime = Date.now()

        // getServerData 함수의 2초 지연 확인
        expect(endTime - startTime).toBeGreaterThanOrEqual(2000)

        render(page)
    })
}) 