import { useForm } from "@inertiajs/react"
import {useRoute } from '../../../vendor/tightenco/ziggy'

export default function Show({ post }) {

    const { delete: destroy } = useForm();

    function submit(e) {
        e.preventDefault()
        // destroy(`/post/${post.id}`)
        destroy(route('post.destroy', post))
    }

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

                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">
                            Delete
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}
