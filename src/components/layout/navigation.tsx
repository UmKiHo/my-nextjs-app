'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/bears', label: 'Bears' },
    { href: '/posts', label: 'Posts' },
    { href: '/theme', label: 'Theme' },
    { href: '/server-state', label: 'Server State' },
    { href: '/canvas', label: 'Canvas' },
]

export function Navigation() {
    const pathname = usePathname()

    return (
        <nav className="flex space-x-4 bg-gray-800 p-4">
            {links.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className={clsx(
                        'rounded-md px-3 py-2 text-sm font-medium',
                        pathname === href
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    )}
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
} 