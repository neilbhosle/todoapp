import styles from './Footer.module.css';

export default function Footer({ completedTodos, active, total, visible, showFooter }) {
  if (!showFooter) return null;

  return (
    <div
      className={`${styles.footer} ${visible ? styles.slideUp : styles.slideDown}`}
    >
      <span className={styles.title}>
        Total Todos: {total} | Completed: {completedTodos} | Active: {active}
      </span>
    </div>
  );
}
