import { NAVIGATION_ITEMS } from '@/constants/menu'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navigation } from '../navigation'

// Mock next/navigation
vi.mock('next/navigation', () => ({
    usePathname: () => '/',
}))

describe('Navigation', () => {
    it('모든 네비게이션 아이템이 표시되어야 합니다', () => {
        render(<Navigation />)

        // 모든 네비게이션 링크 확인
        NAVIGATION_ITEMS.forEach(({ href, label }) => {
            const link = screen.getByRole('link', { name: label })
            expect(link).toBeInTheDocument()
            expect(link).toHaveAttribute('href', href)
        })

        // 링크 개수가 일치하는지 확인
        const links = screen.getAllByRole('link')
        expect(links).toHaveLength(NAVIGATION_ITEMS.length)
    })

    it('현재 경로의 링크가 활성화되어야 합니다', () => {
        render(<Navigation />)

        // 현재 경로(/)의 링크는 활성화 스타일을 가져야 함
        const homeLink = screen.getByRole('link', { name: 'Home' })
        expect(homeLink).toHaveClass('bg-gray-900', 'text-white')

        // 다른 링크들은 비활성화 스타일을 가져야 함
        NAVIGATION_ITEMS.filter(item => item.href !== '/').forEach(({ label }) => {
            const link = screen.getByRole('link', { name: label })
            expect(link).toHaveClass('text-gray-300')
        })
    })
}) 