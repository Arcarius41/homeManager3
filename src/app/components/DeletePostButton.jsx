'use client'
import { useRouter } from "next/navigation"

export default function DeletePostButton({ postId }) {
    const router = useRouter()

    async function handeleClick(){
        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE'
            })
            router.refresh()
        } catch (e){
            console.error(e)
        }
    }
    return (
        <button onClick={handeleClick}>Delete</button>
    )
}