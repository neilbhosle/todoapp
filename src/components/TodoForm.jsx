import styles from './TodoForm.module.css'
export default function TodoForm({ todo, setTodo, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={styles.todoform}>
    <div className={styles.inputContainer}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        id="todo-input"
        name="todo"
        value={todo}
        type="text"
        placeholder="Add a new todo..."
        className={styles.modernInput}
      />
      <button type="submit" className={styles.modernButton}>Add</button>

      </div>
    </form>
  );
}
