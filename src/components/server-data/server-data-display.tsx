'use client'

import { Button } from '@/components'
import { useServerStore, type ServerData } from '@/store/server-store'
import { useEffect } from 'react'

interface ServerDataDisplayProps {
    initialData: ServerData
}

export function ServerDataDisplay({ initialData }: ServerDataDisplayProps) {
    const { data, setData, updateMessage } = useServerStore()

    useEffect(() => {
        setData(initialData)
    }, [initialData, setData])

    if (!data) return null

    return (
        <div className="space-y-4 rounded-lg border p-4">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">서버 데이터</h2>
                <p className="text-gray-600">
                    마지막 업데이트: {new Date(data.lastUpdated).toLocaleString()}
                </p>
                <p className="text-lg">{data.serverMessage}</p>
            </div>

            <div className="space-y-2">
                <Button
                    onClick={() => updateMessage(`클라이언트에서 업데이트: ${new Date().toLocaleString()}`)}
                    value="클라이언트에서 메시지 업데이트"
                />
            </div>
        </div>
    )
} 