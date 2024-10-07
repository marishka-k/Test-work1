"use client";
import ButtonBlack from "../button/button-button/button-button";
import { useMemo, useState } from "react";
import styles from "./balance.module.css";
import Thesis from "./thesis/thesis";
import line from "../../../images/line.svg"
import linecenter from "../../../images/linecenter.svg"
import Image from "next/image";

export default function Balance() {
  
  return (
    <div className={styles.balance} id='advantages'>
      <h2 className={styles.slogan}>
        Баланс между выручкой и удовлетворённостью пользователей
      </h2>
      <div className={styles.thesises}>
        <Thesis
          slogan= "Частотность под контролем"
          text= "Чтобы не ронять NPS и не увеличивать отток пользователей"
        />
        <div className={styles.lanse}>
            <Image src={line} className={styles.line} alt="line"/>
            <Image src={linecenter} className={styles.image} alt="linecenter"/>
            <Image src={line} className={`${styles.line} ${styles.line_unwrap}`} alt="lineunwrap"/>
        </div>
        <Thesis 
          slogan= "Максимальная выручка"
          text = "За счёт заполенения всех рекламных мест по высокой цене"
        />
      </div>
    </div>
  );
}
