
// import TodoItem from "./TodoItem";

// export default function Todo(){
//     const [todo, setTodo] = useState("")
//     const [todos, setTodos] = useState([])
//     function handleSubmit(e){
//         e.preventDefault();
//         setTodos([...todos,todo])
//         setTodo("")
//     }
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input onChange={(e)=>setTodo(e.target.value)} 
//                     id="todo-input"
//                     name="todo" 
//                     value={todo} type="text"/>
//                 <button type="submit">Add</button>
//             </form>
        
//             <ul>
//                 {todos.map((item, index) => (
//                     <li key={index}>
//                         {/* Replace this with your desired content */}
//                         <TodoItem item={item}/>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
  
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    }
  
    return (
      <div>
        <TodoForm 
          todo={todo}
          setTodo={setTodo}
          handleSubmit={handleSubmit}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    );
  }