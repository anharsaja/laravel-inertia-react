import { Head, useForm } from '@inertiajs/react'
import React from 'react'

export default function Create({name}) {
    const {data, setData, post, errors, processing} = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post('/');
    }
    
    return (
        <>

        <Head title="Create"/>
        <h1 className="title">Page {name}</h1>

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
                    
                    >Create Post
                </button>
            </form>
        </div>
        </>
    )
}



