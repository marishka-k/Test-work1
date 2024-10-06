"use client"
import react from "react";
import styles from "./button-black.module.css";

export default function ButtonBlack({ onClick, title, isActive, doHaveActive}) {
  const addClass = react.useMemo(() => {
    let _addClass = ""
    if (!doHaveActive) {
      _addClass = styles.no_active
    } else {
      isActive ? _addClass = `${styles.button} ${styles.active}` : _addClass = `${styles.button}`
    }
    return _addClass
  }, [isActive, doHaveActive])

  return (
      <button type="submit" onClick={onClick} className={addClass}>
        {title}
      </button>
    )
}
