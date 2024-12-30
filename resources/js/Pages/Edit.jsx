import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { useRoute } from '../../../vendor/tightenco/ziggy/src/js';

export default function Edit({ post }) {
    const route = useRoute();
    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });

    function submit(e) {
        e.preventDefault();
        // put(`/post/${post.id}`);
        put(route('post.update', post))
    }

    return (
        <>

            <Head title="Edit" />
            <h1 className="title">Page Edit</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows={10}
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && '!ring-red-500'}

                    ></textarea>

                    {errors.body && <p className='error'>{errors.body}</p>}

                    <button
                        className="primary-btn mt-4"
                        disabled={processing}

                    >Edit
                    </button>
                </form>
            </div>
        </>
    )
}