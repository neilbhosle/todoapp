import styles from './TodoItem.module.css'

export default function TodoItem({ item, handleDelete, handleToggleComplete }) {
  return (
    <div className={styles.item}>
      <div
        className={`${styles.itemName} ${item.completed ? styles.completed : ""}`} 
        onClick={() => handleToggleComplete(item.text)}
        title="Click to toggle complete"
      >
        {item.text}
        <span
          className={styles.deleteButton}
          onClick={(e) => {
            e.stopPropagation(); 
            handleDelete(item.text);
          }}
          title="Delete"
        >
          x
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
