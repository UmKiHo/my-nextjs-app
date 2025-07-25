import { MENU_ITEMS, NAVIGATION_ITEMS } from '@/constants/menu'
import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import MenuPage from '../page'

describe('MenuPage', () => {
    it('메뉴 페이지에 모든 메뉴 아이템이 표시되어야 합니다', () => {
        render(<MenuPage />)

        // 제목과 설명 확인
        expect(screen.getByRole('heading', { name: '기능 메뉴', level: 1 })).toBeInTheDocument()
        expect(
            screen.getByText(
                'Next.js 13 App Router와 Zustand를 활용한 다양한 렌더링 패턴과 상태 관리 예제들을 확인해보세요.'
            )
        ).toBeInTheDocument()

        // 각 메뉴 아이템의 내용 확인
        MENU_ITEMS.forEach(item => {
            // 제목 확인 (h2 요소로 찾기)
            const title = screen.getByRole('heading', { name: item.title, level: 2 })
            expect(title).toBeInTheDocument()

            // 설명 확인
            expect(screen.getByText(item.description)).toBeInTheDocument()

            // 링크 확인
            const menuCard = screen.getByRole('link', { name: new RegExp(item.title) })
            expect(menuCard).toHaveAttribute('href', item.href)

            // 태그 확인 - 각 메뉴 아이템의 컨텍스트 내에서 태그 확인
            item.tags.forEach(tag => {
                // span 요소 내에서 태그 텍스트 찾기
                const tagElements = within(menuCard).getAllByText(tag, { selector: 'span' })
                expect(tagElements.length).toBe(1)
            })
        })
    })

    it('메뉴 페이지의 링크가 네비게이션 아이템과 일치해야 합니다', () => {
        render(<MenuPage />)

        // 메뉴 페이지의 모든 링크 가져오기
        const menuPageLinks = screen.getAllByRole('link')
        const menuPageHrefs = menuPageLinks.map(link => link.getAttribute('href'))

        // 네비게이션의 링크 중에서 메뉴 페이지에 표시되어야 하는 링크들
        // (Home과 Menu를 제외한 모든 링크)
        const navigationHrefs = NAVIGATION_ITEMS
            .filter(link => link.href !== '/' && link.href !== '/menu')
            .map(link => link.href)

        // 메뉴 페이지의 모든 링크가 네비게이션에 존재하는지 확인
        menuPageHrefs.forEach((href: string | null) => {
            if (href) {
                expect(navigationHrefs).toContain(href)
            }
        })

        // 네비게이션의 모든 관련 링크가 메뉴 페이지에 존재하는지 확인
        navigationHrefs.forEach(href => {
            expect(menuPageHrefs).toContain(href)
        })

        // 링크 개수가 일치하는지 확인
        expect(menuPageHrefs.length).toBe(navigationHrefs.length)
    })
}) 