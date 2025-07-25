import { ThemeCard } from '@/components/theme/theme-card'
import { ThemeController } from '@/components/theme/theme-controller'
import { useThemeStore } from '@/store/theme-store'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Theme Components', () => {
    beforeEach(() => {
        // 각 테스트 전에 테마 스토어 초기화
        const store = useThemeStore.getState()
        store.setTheme('blue')
    })

    describe('ThemeCard', () => {
        it('현재 테마 색상을 올바르게 표시합니다', () => {
            render(
                <ThemeCard title="테스트 카드" description="테스트 설명" />
            )

            const card = screen.getByTestId('theme-card')
            expect(card.className).toContain('bg-blue-100')
        })

        it('테마 변경 시 새로운 색상을 적용합니다', () => {
            const { rerender } = render(
                <ThemeCard title="테스트 카드" description="테스트 설명" />
            )

            const card = screen.getByTestId('theme-card')

            // 초록색으로 테마 변경
            useThemeStore.getState().setTheme('green')
            rerender(<ThemeCard title="테스트 카드" description="테스트 설명" />)
            expect(card.className).toContain('bg-green-100')

            // 보라색으로 테마 변경
            useThemeStore.getState().setTheme('purple')
            rerender(<ThemeCard title="테스트 카드" description="테스트 설명" />)
            expect(card.className).toContain('bg-purple-100')
        })
    })

    describe('ThemeController', () => {
        it('각 테마 버튼이 올바른 색상을 표시합니다', () => {
            render(<ThemeController />)

            const blueButton = screen.getByTestId('theme-button-blue')
            const greenButton = screen.getByTestId('theme-button-green')
            const purpleButton = screen.getByTestId('theme-button-purple')

            expect(blueButton.className).toContain('bg-blue-500')
            expect(greenButton.className).toContain('bg-green-500')
            expect(purpleButton.className).toContain('bg-purple-500')
        })

        it('버튼 클릭으로 테마가 변경됩니다', () => {
            render(
                <>
                    <ThemeController />
                    <ThemeCard title="테스트 카드" description="테스트 설명" />
                </>
            )

            const card = screen.getByTestId('theme-card')

            // 초록색 테마로 변경
            const greenButton = screen.getByTestId('theme-button-green')
            fireEvent.click(greenButton)
            expect(card.className).toContain('bg-green-100')

            // 보라색 테마로 변경
            const purpleButton = screen.getByTestId('theme-button-purple')
            fireEvent.click(purpleButton)
            expect(card.className).toContain('bg-purple-100')
        })

        it('선택된 테마 버튼에 올바른 시각적 표시가 됩니다', () => {
            render(<ThemeController />)

            const blueButton = screen.getByTestId('theme-button-blue')
            const greenButton = screen.getByTestId('theme-button-green')

            // 초기 상태에서 파란색 버튼이 선택됨
            expect(blueButton.className).toContain('ring-2')
            expect(blueButton.className).toContain('ring-blue-500')
            expect(greenButton.className).not.toContain('ring-2')

            // 초록색으로 변경 후 확인
            fireEvent.click(greenButton)
            expect(blueButton.className).not.toContain('ring-2')
            expect(greenButton.className).toContain('ring-2')
            expect(greenButton.className).toContain('ring-green-500')
        })
    })
}) 