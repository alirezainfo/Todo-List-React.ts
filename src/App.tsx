import { getTodo } from './services/todoService'
import type { todo } from "./types/todo"
import './App.css'
import { useState,useEffect } from 'react'


function App() {
  const [todos, setTodos] = useState<todo[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(()=>{
    const fetchTodo = async () => {
      try{
        const data = await getTodo()
        setTodos(data)
      }catch(err:any){

      }finally{

      }
    }

    fetchTodo()
  },[])
 
  return (
   <>
    <h1 className='text-gray-900 text-center mt-20'>Alireza's To-Do List</h1>

    <div className='mx-60 flex justify-between items-center'>
      <div className='flex justify-center items-center gap-2'>
        <input className='border ' type="text" />
        <button>Create</button>
      </div>
      <div>
        <select name="" id="">
          <option value="">گزینه ی مورد نظر را انتخاب کنید.</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
    </div>


    <div id='todoItems' className=''>
      <ul className='mx-60 flex justify-center items-center flex-wrap'>
      {todos.slice(0,10).map((todo)=>(
        <li key={todo.id} className='px-4 py-2 border border-gray-300'>
          {todo.title}
        </li>
      ))}
      </ul>
    </div>
   </>
  )
}

export default App
