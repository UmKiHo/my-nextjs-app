'use client'

import { BearCount, Button } from '@/components'
import { useBearStore } from '@/store'

export default function BearsPage() {
    const bearsState = useBearStore(state => state)

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-2xl font-bold">Bears Counter (CSR Example)</h1>
            <BearCount bearCount={bearsState.bears} />
            <div className="space-y-2">
                <Button
                    onClick={() => bearsState.increaseBears()}
                >
                    Increase Bears
                </Button>
                <Button
                    onClick={() => bearsState.decreaseBears()}
                    disabled={bearsState.bears === 0}
                >
                    Decrease Bears
                </Button>
                <Button
                    onClick={() => bearsState.annahilateBears()}
                    disabled={bearsState.bears === 0}
                >
                    Annahilate Bears
                </Button>
            </div>
        </div>
    )
} 