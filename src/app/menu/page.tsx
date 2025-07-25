import Link from 'next/link'

interface MenuItem {
    href: string
    title: string
    description: string
    tags: string[]
}

const menuItems: MenuItem[] = [
    {
        href: '/bears',
        title: 'Bears Counter',
        description: '클라이언트 사이드 렌더링(CSR) 예제입니다. Zustand를 사용한 상태 관리를 보여줍니다.',
        tags: ['CSR', 'Zustand', 'State Management'],
    },
    {
        href: '/posts',
        title: 'Posts List',
        description: '서버 사이드 렌더링(SSR) 예제입니다. 외부 API에서 데이터를 가져와 Zustand로 관리합니다.',
        tags: ['SSR', 'Zustand', 'API', 'Data Fetching'],
    },
    {
        href: '/server-state',
        title: 'Server State',
        description: 'SSR과 Zustand를 함께 사용하는 고급 예제입니다. 서버 데이터를 클라이언트에서 관리하는 방법을 보여줍니다.',
        tags: ['SSR', 'Zustand', 'Hydration', 'State Management'],
    },
    {
        href: '/canvas',
        title: 'Canvas Animation',
        description: 'SSR 페이지에서 Canvas를 사용하는 예제입니다. 동적인 원 애니메이션을 통해 클라이언트 사이드 렌더링과 SSR의 조화를 보여줍니다.',
        tags: ['SSR', 'Canvas', 'Animation', 'Client Components'],
    },
]

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
                {menuItems.map((item) => (
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