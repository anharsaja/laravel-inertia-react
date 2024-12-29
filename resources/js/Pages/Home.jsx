import { Link } from '@inertiajs/react'
import React from 'react'

export default function Home({ name, posts }) {
    return (
        <>
            <h1 className="title">Page {name}</h1>

            <div>
                {posts.map(post => (
                    <div key={post.id} className='p-4 border-b'>
                        <div className="text-sm text-slate-600">
                            <span>Post on:</span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    )
}



