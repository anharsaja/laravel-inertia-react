import { Head, Link, useForm, usePage } from "@inertiajs/react"
import { useRoute } from '../../../vendor/tightenco/ziggy'

export default function Show({ post }) {
    const { delete: destroy } = useForm();
    const { component } = usePage()

    function submit(e) {
        e.preventDefault()
        // destroy(`/post/${post.id}`)
        destroy(route('post.destroy', post))
    }

    return (
        <>
            <Head title={component} />
            <h1 className="title">Show</h1>

            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>Post on: </span>
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </div>
                <div className="font-medium">{post.body}</div>

                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">
                            Delete
                        </button>
                    </form>
                    {/* <Link href={`/post/${post.id}/edit`} className="bg-blue-500 rounded-md text-sm px-4 py-1 text-white">
                        Edit
                    </Link> */}
                    <Link href={route('post.edit', post)} className="bg-blue-500 rounded-md text-sm px-4 py-1 text-white">
                        Edit
                    </Link>
                </div>

            </div>
        </>
    )
}
