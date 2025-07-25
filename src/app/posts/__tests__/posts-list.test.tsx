import { PostsList } from '@/components/posts/posts-list'
import { usePostsStore } from '@/store/posts'
import { render, screen } from '@testing-library/react'

const mockPosts = [
    {
        id: 1,
        title: 'Test Post 1',
        body: 'This is test post 1',
    },
    {
        id: 2,
        title: 'Test Post 2',
        body: 'This is test post 2',
    },
]

describe('PostsList', () => {
    beforeEach(() => {
        const store = usePostsStore.getState()
        store.setPosts([])
    })

    it('renders posts from initial data', () => {
        render(<PostsList initialPosts={mockPosts} />)

        expect(screen.getByText('Test Post 1')).toBeInTheDocument()
        expect(screen.getByText('This is test post 1')).toBeInTheDocument()
        expect(screen.getByText('Test Post 2')).toBeInTheDocument()
        expect(screen.getByText('This is test post 2')).toBeInTheDocument()
    })

    it('updates store with initial posts', () => {
        render(<PostsList initialPosts={mockPosts} />)

        const store = usePostsStore.getState()
        expect(store.posts).toEqual(mockPosts)
    })
}) 