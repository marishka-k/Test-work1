import Thesis from "./thesis/thesis";
import ButtonSubmit from "../button/button-submit/button-submit";

import styles from "./how-to-work.module.css";


export default function HowToWork({targetHowToWork}) {
  return (
    <div className={styles.content} ref={targetHowToWork} id='howToWork'>
      <div>
        <h2 className={styles.slogan}> Подробные отчёты для вас и правообладателей </h2>
        <ul className={styles.thesises}>
          <Thesis text="Выручка, CTR, показы и другие показатели в реальном времени."/>      
          <Thesis text="Инструменты контроля качества трафика."/>      
          <Thesis text="Ежемесячные автоматические отчёты для каждого правообладателя."/>      
        </ul>
        <div className={styles.button}>
          <ButtonSubmit title="Заказать звонок" onClick={() => console.log('Заказали звонок')} isButtonDisabled={false}/>
        </div>
      </div>      
        <div className={styles.noteboock}></div>      
    </div>
  );
}
