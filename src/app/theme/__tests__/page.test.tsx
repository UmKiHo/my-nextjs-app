import { render, screen } from '@testing-library/react'
import ThemePage from '../page'

describe('ThemePage', () => {
    it('renders theme page with all components', () => {
        render(<ThemePage />)

        // 제목과 설명 확인
        expect(screen.getByText('테마 변경 예제')).toBeInTheDocument()
        expect(
            screen.getByText(/Zustand를 사용하여 테마 색상을 관리하는 예제입니다./)
        ).toBeInTheDocument()

        // 테마 카드 확인
        expect(screen.getByText('첫 번째 카드')).toBeInTheDocument()
        expect(screen.getByText('두 번째 카드')).toBeInTheDocument()
        expect(
            screen.getByText(/테마 색상이 적용되는 카드입니다./)
        ).toBeInTheDocument()
        expect(
            screen.getByText(/모든 카드는 동일한 테마 스토어를 구독하고 있어/)
        ).toBeInTheDocument()

        // 테마 컨트롤러 버튼들 확인
        expect(screen.getByText('파란색')).toBeInTheDocument()
        expect(screen.getByText('초록색')).toBeInTheDocument()
        expect(screen.getByText('보라색')).toBeInTheDocument()
    })
}) 