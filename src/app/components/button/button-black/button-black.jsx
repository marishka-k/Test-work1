"use client"
import react from "react";
import styles from "./button-black.module.css";

export default function ButtonBlack({ onClick, title, isActive}) {
 
  return (
      <button type="button" onClick={onClick} className={isActive ? `${styles.button} ${styles.active}` : `${styles.button}`}>
        {title}
      </button>
    )
}
