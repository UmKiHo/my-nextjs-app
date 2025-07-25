'use client'

import { usePostsStore, type Post } from '@/store/posts'
import { useEffect } from 'react'

interface PostsListProps {
    initialPosts: Post[]
}

export function PostsList({ initialPosts }: PostsListProps) {
    const { posts, setPosts } = usePostsStore()

    useEffect(() => {
        setPosts(initialPosts)
    }, [initialPosts, setPosts])

    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <article key={post.id} className="rounded-lg border p-4">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="mt-2 text-gray-600">{post.body}</p>
                </article>
            ))}
        </div>
    )
} 