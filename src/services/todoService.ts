import type { todo } from "../types/todo"

export async function getTodo(): Promise<todo[]> {
    const res = await fetch ("https://jsonplaceholder.typicode.com/todos")

    if(!res.ok){
        console.log("خطا از سمت سرور")
    }
    return res.json()
}