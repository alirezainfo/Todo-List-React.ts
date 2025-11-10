import { getTodo } from "./services/todoService";
import { useState, useEffect } from "react";
import type { todo } from "./types/todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  
function addToDoFunc() {
  
  if (!inputValue.trim()) return;

  setTodos((prevTodos) => [
    {
      userId: 1,
      id: prevTodos.length+1,
      title: inputValue,
      completed: false,
    },
    ...prevTodos
  ]);

  setInputValue("");
}


  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const data = await getTodo();
        setTodos(data);
      } catch (err: any) {
      } finally {
      }
    };

    fetchTodo();
  }, []);

  return (
    <>
      <h1 className="text-gray-900 text-center mt-20">Alireza's To-Do List</h1>

      <div className="mx-30 my-10 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <input id="todoInput" className="border" type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />
          <button onClick={addToDoFunc}>Create</button>
        </div>
        <div>
          <select name="" id="">
            <option value="">گزینه ی مورد نظر را انتخاب کنید.</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>
      </div>

      <div id="todoItems" className="">
        <ul className="mx-25 flex justify-center items-center flex-wrap gap-1.5">
          {todos.slice(0, 10).map((todo) => (
            <li key={todo.id} className="w-[350px] h-20 px-2 border border-gray-300 flex justify-between items-center">
              <p className="">{todo.title}</p>
              <div className="flex justify-center items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check-check-icon lucide-check-check"
                >
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trash2-icon lucide-trash-2"
                >
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M3 6h18" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
