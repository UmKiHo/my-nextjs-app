import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Navigation } from '../navigation'

// next/navigation 모킹
vi.mock('next/navigation', () => ({
    usePathname: () => '/',
}))

// next/link 모킹
vi.mock('next/link', () => ({
    default: ({ href, children, className }: any) => (
        <a href={href} className={className}>
            {children}
        </a>
    ),
}))

describe('Navigation', () => {
    it('renders all navigation links', () => {
        render(<Navigation />)

        // 모든 링크가 렌더링되는지 확인
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Menu')).toBeInTheDocument()
        expect(screen.getByText('Bears')).toBeInTheDocument()
        expect(screen.getByText('Posts')).toBeInTheDocument()
        expect(screen.getByText('Server State')).toBeInTheDocument()
        expect(screen.getByText('Canvas')).toBeInTheDocument()

        // 링크의 href 속성 확인
        expect(screen.getByText('Home')).toHaveAttribute('href', '/')
        expect(screen.getByText('Menu')).toHaveAttribute('href', '/menu')
        expect(screen.getByText('Bears')).toHaveAttribute('href', '/bears')
        expect(screen.getByText('Posts')).toHaveAttribute('href', '/posts')
        expect(screen.getByText('Server State')).toHaveAttribute('href', '/server-state')
        expect(screen.getByText('Canvas')).toHaveAttribute('href', '/canvas')
    })

    it('applies active styles to current path', () => {
        vi.mock('next/navigation', () => ({
            usePathname: () => '/bears',
        }))

        render(<Navigation />)

        // 현재 경로의 링크는 활성화 스타일을 가짐
        expect(screen.getByText('Bears')).toHaveClass('bg-gray-900 text-white')

        // 다른 링크들은 비활성화 스타일을 가짐
        expect(screen.getByText('Home')).toHaveClass('text-gray-300')
        expect(screen.getByText('Menu')).toHaveClass('text-gray-300')
        expect(screen.getByText('Posts')).toHaveClass('text-gray-300')
        expect(screen.getByText('Server State')).toHaveClass('text-gray-300')
        expect(screen.getByText('Canvas')).toHaveClass('text-gray-300')
    })
}) 