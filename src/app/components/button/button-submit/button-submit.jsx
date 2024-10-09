import styles from "./button-submit.module.css";

export default function ButtonSubmit({ title, isButtonDisabled, onClick}) {
  
  return (
      <button type="submit" onClick={onClick} className={isButtonDisabled ? `${styles.disabled}` : `${styles.active}`}>
        {title}
      </button>
    )
}
