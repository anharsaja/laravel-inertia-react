export default function Show({ post }) {
    return (
        <>
            <h1 className="title">Show</h1>

            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>Post on: </span>
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </div>
                <div className="font-medium">{post.body}</div>
            </div>
        </>
    )
}
