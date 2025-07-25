import { FEATURES } from '@/constants/features'

export default function HomePage() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Next.js + TypeScript + Zustand Example</h1>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">Features:</h2>
                <ul className="list-inside list-disc space-y-1">
                    {FEATURES.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
} 