import Link from "next/link";
import styles from "./how-to-work.module.css";
import Image from "next/image";
import Thesis from "./thesis/thesis";
import noteboock from "../../../images/noteboock.jpg"
import ButtonBlack from "../button/button-black/button-black";


export default function HowToWork() {
  return (
    <div className={styles.content} id='howToWork'>
      <div>
        <h2 className={styles.slogan}> Подробные отчёты для вас и правообладателей </h2>
        <ul className={styles.thesises}>
          <Thesis text="Выручка, CTR, показы и другие показатели в реальном времени."/>      
          <Thesis text="Инструменты контроля качества трафика."/>      
          <Thesis text="Ежемесячные автоматические отчёты для каждого правообладателя."/>      
        </ul>
        <div className={styles.button}>
          <ButtonBlack title="Заказать звонок" onClick={() => console.log('Заказали звонок')}  doHaveActive={false}/>
        </div>
      </div>      
        <div className={styles.noteboock}></div>
      {/*   <Image src={noteboock} alt='noteboock' className={styles.noteboock} />        */} 
    </div>
  );
}
