import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css"

export default function TodoList({ todos, setTodos }) {
  const handleDelete = (itemToDelete) => {
    const newTodos = todos.filter((item) => item !== itemToDelete);
    setTodos(newTodos)
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
      {todos.map((item, index) => (
        <TodoItem key={index} item={item} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}
