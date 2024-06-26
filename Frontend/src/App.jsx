import { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })
  },[])
  
  
  
    return (
    <div>
      {/* <CardWrapper> */}

      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
      {/* </CardWrapper> */}
    </div>
    
  )
}

function CardWrapper({children}){
  // console.log(children)
  return <div style={{border: "2px solid black", padding: 50}}>
  {children}
  </div>
  }

export default App
