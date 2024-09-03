import { FormEvent, useState } from 'react'

import './App.css'

interface Todo {
  title: string,
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewtodo] = useState("")

  function createTodo(event:FormEvent){
    event.preventDefault()
    setTodos([...todos, {
      title: newTodo,
      completed: false
    }])
    setNewtodo("")
  }
  function deleteTodo(title:string){
    console.log(title)
    setTodos(todos.filter((t)=> t.title !== title))
  }
  const todolist = todos.map((todo, index)=>{
    return(<div>
              <input type="checkbox" name="" id={index} />
              <li key={index}>{todo.title}</li>
              <button onClick={()=>deleteTodo(todo.title)}>Delete</button>
      </div>
    )
  })
  return (
    <>
        <form onSubmit={createTodo}>
          <input type="text" value={newTodo} onChange={(event)=>setNewtodo(event.target.value)}/>
          <input type="submit" value="Create To-Do" />
        </form>
        <div>
          <ul>{todolist}
          </ul>
        </div>
    </>
  )
}

export default App
