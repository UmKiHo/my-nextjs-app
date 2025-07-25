import { create } from 'zustand'

export interface Post {
    id: number
    title: string
    body: string
}

interface PostsStore {
    posts: Post[]
    setPosts: (posts: Post[]) => void
    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void
    error: string | null
    setError: (error: string | null) => void
}

export const usePostsStore = create<PostsStore>((set) => ({
    posts: [],
    setPosts: (posts) => set({ posts }),
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
    error: null,
    setError: (error) => set({ error }),
})) 