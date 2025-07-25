import { useServerStore } from '@/store/server-store'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServerDataDisplay } from '../server-data-display'

const mockInitialData = {
    lastUpdated: '2024-01-01T00:00:00.000Z',
    serverMessage: 'Test server message',
}

describe('ServerDataDisplay', () => {
    beforeEach(() => {
        // 스토어 초기화
        const store = useServerStore.getState()
        store.setData(null)
    })

    it('renders server data', () => {
        render(<ServerDataDisplay initialData={mockInitialData} />)

        expect(screen.getByText('서버 데이터')).toBeInTheDocument()
        expect(screen.getByText(/마지막 업데이트:/)).toBeInTheDocument()
        expect(screen.getByText('Test server message')).toBeInTheDocument()
        expect(screen.getByText('클라이언트에서 메시지 업데이트')).toBeInTheDocument()
    })

    it('updates message when button is clicked', () => {
        render(<ServerDataDisplay initialData={mockInitialData} />)

        const button = screen.getByText('클라이언트에서 메시지 업데이트')
        fireEvent.click(button)

        const store = useServerStore.getState()
        expect(store.data?.serverMessage).toMatch(/클라이언트에서 업데이트:/)
    })

    it('returns null when data is not available', () => {
        const { rerender } = render(<ServerDataDisplay initialData={mockInitialData} />)

        // 스토어 데이터 제거
        const store = useServerStore.getState()
        store.setData(null)

        // 컴포넌트 리렌더링
        rerender(<ServerDataDisplay initialData={mockInitialData} />)

        expect(screen.queryByText('서버 데이터')).not.toBeInTheDocument()
    })
}) 