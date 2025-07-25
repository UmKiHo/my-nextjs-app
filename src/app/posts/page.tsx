import { PostsList } from '@/components'

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) throw new Error('Failed to fetch posts')
    return res.json()
}

export default async function PostsPage() {
    const posts = await getPosts()

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Posts (SSR Example)</h1>
            <PostsList initialPosts={posts} />
        </div>
    )
} 