import { FEATURES } from '@/constants/features'
import { render, screen } from '@testing-library/react'
import HomePage from '../page'

describe('HomePage', () => {
    it('renders title and features list', () => {
        render(<HomePage />)

        // 제목 확인
        expect(
            screen.getByText('Next.js + TypeScript + Zustand Example')
        ).toBeInTheDocument()
        expect(screen.getByText('Features:')).toBeInTheDocument()

        // 기능 목록이 모두 있는지 확인
        FEATURES.forEach(feature => {
            expect(screen.getByText(feature)).toBeInTheDocument()
        })
    })

    it('renders features in correct HTML structure', () => {
        render(<HomePage />)

        // ul 요소가 존재하는지 확인
        const featuresList = screen.getByRole('list')
        expect(featuresList).toBeInTheDocument()
        expect(featuresList).toHaveClass('list-disc', 'list-inside')

        // li 요소들이 올바른 수만큼 존재하는지 확인
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(FEATURES.length)

        // 각 li 요소가 올바른 텍스트를 포함하는지 확인
        listItems.forEach((item, index) => {
            expect(item).toHaveTextContent(FEATURES[index])
        })
    })
}) 