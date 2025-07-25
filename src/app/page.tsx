export default function HomePage() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Next.js + TypeScript + Zustand Example</h1>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">Features:</h2>
                <ul className="list-inside list-disc space-y-1">
                    <li>App Router</li>
                    <li>Server-Side Rendering (Posts Page)</li>
                    <li>Client-Side Rendering (Bears Page)</li>
                    <li>TypeScript</li>
                    <li>Zustand State Management</li>
                    <li>Tailwind CSS</li>
                    <li>Testing with Vitest</li>
                </ul>
            </div>
        </div>
    )
} 