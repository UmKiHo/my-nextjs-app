import { CircleAnimation } from '@/components'

async function getServerData() {
    // 서버에서 1초 대기 (SSR 시뮬레이션)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        title: 'Canvas Animation with SSR',
        description: '이 페이지는 서버 사이드 렌더링과 Canvas 애니메이션을 함께 사용하는 예제입니다.',
        timestamp: new Date().toISOString(),
    }
}

export default async function CanvasPage() {
    const data = await getServerData()

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-gray-600">{data.description}</p>
                <p className="text-sm text-gray-500">
                    서버 시간: {new Date(data.timestamp).toLocaleString()}
                </p>
            </div>

            <div className="space-y-4">
                <div className="rounded-lg border bg-white p-4">
                    <h2 className="mb-4 text-lg font-semibold">원 애니메이션</h2>
                    <CircleAnimation />
                    <p className="mt-4 text-sm text-gray-600">
                        1초마다 원이 하나씩 추가되거나 제거됩니다. 최대 5개까지 원이
                        생성되며, 5개가 되면 하나씩 제거되기 시작합니다.
                    </p>
                </div>
            </div>
        </div>
    )
} 