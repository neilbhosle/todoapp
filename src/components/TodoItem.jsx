import { useState } from 'react';
import styles from './TodoItem.module.css';
import completeSound from '../sounds/complete.wav';
import deleteSound from '../sounds/delete.wav';
import editSound from '../sounds/edit.wav';

export default function TodoItem({ item, handleDelete, handleToggleComplete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  const handleSave = () => {
    if (editedText.trim() !== "") {
      handleEdit(item.id, editedText);  // Use item.id instead of item.text
      setIsEditing(false);
      playSound(editSound);
    }
  };

  return (
    <div className={styles.item}>
      {!isEditing ? (
        <div className={styles.itemRow}>
          <span
            className={`${styles.itemName} ${item.completed ? styles.completed : ''}`}
            onClick={() => {
              handleToggleComplete(item.id);
              playSound(completeSound);
            }}
            title="Click to toggle complete"
          >
            {item.text}
          </span>

          <div className={styles.actions}>
            <span
              className={styles.editButton}
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              title="Edit"
            >
              ✏️
            </span>

            <span
              className={styles.deleteButton}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(item.id);  // Use item.id instead of item.text
                playSound(deleteSound);
              }}
              title="Delete"
            >
              ❌
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.editWrapper}>
          <input
            className={styles.editInput}
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            autoFocus
          />
          <button className={styles.saveBtn} onClick={handleSave}>Save</button>
          <button className={styles.cancelBtn} onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
      <hr className={styles.line} />
    </div>
  );
}
