
/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/


// backup
export function Todos({todos}) {
    
    return <div>
        {todos.map(function(todo) {
           
            return <div className="todo-container">
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{ todo.completed == true ? "Completed" : "Mark as Completed"}</button>
                
            </div>
        })}
    </div>
}


