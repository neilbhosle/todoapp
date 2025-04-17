import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css"

export default function TodoList({ todos, setTodos }) {
  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  
  const handleEdit = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };
  
  

  if (todos.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>🎉 Your list is empty!</p>
        <p>Add something amazing to do! ✨</p>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          handleDelete={handleDelete}
          handleToggleComplete={handleToggleComplete}
          handleEdit={handleEdit}
        />
      ))}

    </ul>
  );
}
