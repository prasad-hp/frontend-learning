  import { useState } from 'react'
  import './App.css'

  function App() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')

    function createTodo(event){
      event.preventDefault()
      if(newTodo.trim() === "")return
      setTodos([...todos, newTodo])
      setNewTodo("")
    }
    function deleteTodo(index){
      setTodos(
        todos.filter((_, i)=>i !==index)
      )
    }
    return (
      <>
        <form onSubmit={createTodo}>
          <input type="text" value={newTodo} onChange={(event)=>setNewTodo(event.target.value)} placeholder='input todo text' />
          <input type="submit" value={"Add Todo"} />
        </form> 
        <ul>
          {todos.map((todo, index)=>{ 
            return <li key={index}><input type="checkbox" name={todo} id="" />{todo} <button onClick={()=>deleteTodo(index)}>Delete</button> </li>
          })}
        </ul>
      </>
    )
  }

  export default App
