import { render, screen } from '@testing-library/react'
import CanvasPage from '../page'

describe('CanvasPage', () => {
    it('renders canvas page with server data', async () => {
        render(await CanvasPage())

        // 제목과 설명 확인
        expect(screen.getByText('Canvas Animation with SSR')).toBeInTheDocument()
        expect(
            screen.getByText(/이 페이지는 서버 사이드 렌더링과 Canvas 애니메이션을 함께 사용하는 예제입니다./)
        ).toBeInTheDocument()

        // 서버 시간 표시 확인
        expect(screen.getByText(/서버 시간:/)).toBeInTheDocument()

        // 애니메이션 섹션 확인
        expect(screen.getByText('원 애니메이션')).toBeInTheDocument()
        expect(
            screen.getByText(/1초마다 원이 하나씩 추가되거나 제거됩니다./)
        ).toBeInTheDocument()

        // CircleAnimation 컴포넌트가 렌더링되었는지 확인
        expect(document.querySelector('canvas')).toBeInTheDocument()
    })
}) 