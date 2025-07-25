import { mockPosts } from '@/test/test-utils'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import PostsPage from '../page'

// fetch 모킹
global.fetch = vi.fn()

function mockFetch(data: unknown) {
    return vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(data),
    } as Response)
}

function mockFetchError() {
    return vi.mocked(fetch).mockResolvedValueOnce({
        ok: false,
    } as Response)
}

describe('PostsPage', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('renders posts from API', async () => {
        mockFetch(mockPosts)

        const page = await PostsPage()
        render(page)

        expect(screen.getByText('Posts (SSR Example)')).toBeInTheDocument()
        expect(screen.getByText('Test Post 1')).toBeInTheDocument()
        expect(screen.getByText('This is test post 1')).toBeInTheDocument()
        expect(screen.getByText('Test Post 2')).toBeInTheDocument()
        expect(screen.getByText('This is test post 2')).toBeInTheDocument()

        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts')
    })

    it('handles API error', async () => {
        mockFetchError()

        await expect(PostsPage()).rejects.toThrow('Failed to fetch posts')
    })
}) 