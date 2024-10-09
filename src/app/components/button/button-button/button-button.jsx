import styles from "./button-button.module.css";

export default function ButtonButton({ onClick, title, isActive}) {
 
  return (
      <button type="button" onClick={onClick} className={isActive ? `${styles.button} ${styles.active}` : `${styles.button}`}>
        {title}
      </button>
    )
}
