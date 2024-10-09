  import styles from "./button-orange.module.css";

export default function ButtonOrange({ title }) {

  return (
      <button onClick={() => {console.log("Кнопка нажата")}} className={styles.button}>
        {title}
      </button>
    )
}
