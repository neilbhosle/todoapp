
import styles from './TodoItem.module.css'

export default function TodoItem({ item, handleDelete }) {
    return ( <div className={styles.item}>
      <div className={styles.itemName}>
      {item}
      <span
          className={styles.deleteButton}
          onClick={() => handleDelete(item)}
          title="Delete"
        >x</span>
      </div>
      <hr  className={styles.line} />
    </div>
    );
  }