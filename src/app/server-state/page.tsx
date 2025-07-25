import { ServerDataDisplay } from '@/components'

async function getServerData() {
    // 서버에서 2초 대기 후 데이터 반환 (실제 API 호출 시뮬레이션)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return {
        lastUpdated: new Date().toISOString(),
        serverMessage: `서버에서 생성된 메시지: ${new Date().toLocaleString()}`,
    }
}

export default async function ServerStatePage() {
    const serverData = await getServerData()

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">서버 상태 관리 예제 (SSR + Zustand)</h1>
            <div className="space-y-4">
                <p className="text-gray-600">
                    이 페이지는 서버 사이드 렌더링과 Zustand를 함께 사용하는 예제입니다.
                    서버에서 가져온 초기 데이터는 클라이언트에서 Zustand store로 관리됩니다.
                </p>
                <ServerDataDisplay initialData={serverData} />
            </div>
        </div>
    )
} 