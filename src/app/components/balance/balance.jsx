"use client";
import styles from "./balance.module.css";
import Thesis from "./thesis/thesis";


export default function Balance({targetAdvantages}) {
  
  return (
    <div className={styles.balance} ref={targetAdvantages} id='advantages'>
      <h2 className={styles.slogan}>
        Баланс между выручкой и удовлетворённостью пользователей
      </h2>
      <div className={styles.thesises}>
        <Thesis
          slogan= "Частотность под контролем"
          text= "Чтобы не ронять NPS и не увеличивать отток пользователей"
        />
        <div className={styles.lanse}>          
        </div>
        <Thesis 
          slogan= "Максимальная выручка"
          text = "За счёт заполенения всех рекламных мест по высокой цене"
        />
      </div>
    </div>
  );
}
