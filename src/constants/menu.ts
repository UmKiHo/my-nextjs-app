interface MenuItem {
    href: string
    title: string
    description: string
    tags: string[]
    label: string
}

export const MENU_ITEMS: MenuItem[] = [
    {
        href: '/bears',
        title: 'Bears Counter',
        label: 'Bears',
        description: '클라이언트 사이드 렌더링(CSR) 예제입니다. Zustand를 사용한 상태 관리를 보여줍니다.',
        tags: ['CSR', 'Zustand', 'State Management'],
    },
    {
        href: '/posts',
        title: 'Posts List',
        label: 'Posts',
        description: '서버 사이드 렌더링(SSR) 예제입니다. 외부 API에서 데이터를 가져와 Zustand로 관리합니다.',
        tags: ['SSR', 'Zustand', 'API', 'Data Fetching'],
    },
    {
        href: '/server-state',
        title: 'Server State',
        label: 'Server State',
        description: 'SSR과 Zustand를 함께 사용하는 고급 예제입니다. 서버 데이터를 클라이언트에서 관리하는 방법을 보여줍니다.',
        tags: ['SSR', 'Zustand', 'Hydration', 'State Management'],
    },
    {
        href: '/canvas',
        title: 'Canvas Animation',
        label: 'Canvas',
        description: 'SSR 페이지에서 Canvas를 사용하는 예제입니다. 동적인 원 애니메이션을 통해 클라이언트 사이드 렌더링과 SSR의 조화를 보여줍니다.',
        tags: ['SSR', 'Canvas', 'Animation', 'Client Components'],
    },
    {
        href: '/theme',
        title: 'Theme',
        label: 'Theme',
        description: '다크 모드와 라이트 모드를 전환할 수 있는 테마 기능 예제입니다. Zustand를 사용한 테마 상태 관리를 보여줍니다.',
        tags: ['CSR', 'Zustand', 'Theme', 'State Management'],
    },
]

export const NAVIGATION_ITEMS = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    ...MENU_ITEMS.map(({ href, label }) => ({ href, label })),
] 