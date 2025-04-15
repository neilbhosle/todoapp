import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo({todos, setTodos}) {
    const [todo, setTodo] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      const trimmed = todo.trim();
      if (!trimmed || todos.some(t => t.text === trimmed)) return;
    
      const newTodo = {
        text: trimmed,
        completed: false
      };
    
      setTodos([...todos, newTodo]);
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