import { ThemeCard } from '@/components/theme/theme-card'
import { ThemeController } from '@/components/theme/theme-controller'

export default function ThemePage() {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">테마 변경 예제</h1>
                <p className="text-gray-600">
                    Zustand를 사용하여 테마 색상을 관리하는 예제입니다.
                    버튼을 클릭하여 테마를 변경해보세요.
                </p>
            </div>

            <ThemeController />

            <div className="grid gap-4 sm:grid-cols-2">
                <ThemeCard
                    title="첫 번째 카드"
                    description="테마 색상이 적용되는 카드입니다. 버튼을 클릭하면 배경색이 변경됩니다."
                />
                <ThemeCard
                    title="두 번째 카드"
                    description="모든 카드는 동일한 테마 스토어를 구독하고 있어 동시에 변경됩니다."
                />
            </div>
        </div>
    )
} 