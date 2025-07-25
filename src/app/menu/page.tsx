import { MENU_ITEMS } from '@/constants/menu'
import Link from 'next/link'

export default function MenuPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">기능 메뉴</h1>
                <p className="text-gray-600">
                    Next.js 13 App Router와 Zustand를 활용한 다양한 렌더링 패턴과 상태 관리 예제들을 확인해보세요.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {MENU_ITEMS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="group block space-y-2 rounded-lg border p-6 transition-all hover:border-blue-500 hover:bg-blue-50"
                    >
                        <h2 className="text-xl font-semibold group-hover:text-blue-600">
                            {item.title}
                        </h2>
                        <p className="text-gray-600">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-gray-100 px-2.5 py-0.5 text-sm text-gray-600"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
} 