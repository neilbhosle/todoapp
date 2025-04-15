import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css"

export default function TodoList({ todos, setTodos }) {
  const handleDelete = (textToDelete) => {
    const newTodos = todos.filter((item) => item.text !== textToDelete);
    setTodos(newTodos);
  };

  const handleToggleComplete = (textToToggle) => {
    const updated = todos.map((item) =>
      item.text === textToToggle
        ? { ...item, completed: !item.completed }
        : item
    );
    setTodos(updated);
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
        <TodoItem
          key={index}
          item={item}
          handleDelete={handleDelete}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
    </ul>
  );
}
