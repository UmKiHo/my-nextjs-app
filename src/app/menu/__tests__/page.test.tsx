import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import MenuPage from '../page'

describe('MenuPage', () => {
    it('renders menu items', () => {
        render(<MenuPage />)

        // 제목 확인
        expect(screen.getByText('기능 메뉴')).toBeInTheDocument()

        // 각 메뉴 항목 확인
        expect(screen.getByText('Bears Counter')).toBeInTheDocument()
        expect(screen.getByText('Posts List')).toBeInTheDocument()
        expect(screen.getByText('Server State')).toBeInTheDocument()

        // 태그 확인
        expect(screen.getByText('CSR')).toBeInTheDocument()
        expect(screen.getAllByText('SSR')).toHaveLength(3) // Posts List, Server State, Canvas Animation
        expect(screen.getAllByText('Zustand')).toHaveLength(3)
        expect(screen.getByText('API')).toBeInTheDocument()
        expect(screen.getByText('Hydration')).toBeInTheDocument()

        // 링크 확인
        const links = screen.getAllByRole('link')
        expect(links).toHaveLength(4) // Bears, Posts, Server State, Canvas
        expect(links[0]).toHaveAttribute('href', '/bears')
        expect(links[1]).toHaveAttribute('href', '/posts')
        expect(links[2]).toHaveAttribute('href', '/server-state')
        expect(links[3]).toHaveAttribute('href', '/canvas')
    })
}) 