"use client"
import ButtonBlack from "../button/button-black/button-black";
import { useMemo, useState } from "react";
import styles from "./revenue.module.css";

export default function Revenue() {
  let [activeButton, setActiveButton] = useState('operator')
  const text = useMemo(() => {
    let _text = ''
    if (activeButton === 'operator') {
      _text = "Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации"
    } else _text = "Дополнительные возможности обогащения данных об аудитории и монетизации"

    return _text
  }, [activeButton])

  return (
    <div className={styles.revenue} >      
      <h2 className={styles.slogan}>
         Дополнительные источники выручки для разных компаний
      </h2>
      <div></div>
      <div>
        <div className={styles.buttons}>
          <ButtonBlack title="Оператором" onClick={() => setActiveButton('operator')} isActive={activeButton === 'operator'} doHaveActive={true}/>
          <ButtonBlack title="ОТТ сервисам" onClick={() => setActiveButton('service')} isActive={activeButton === 'service'} doHaveActive={true}/>
        </div>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    </div>
  );
}
