import ButtonOrange from "../button/button-orange/button-orange";
import styles from "./main-lead.module.css";

export default function MainLead() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        Монетизируйте клиентскую базу, не снижая NPS
      </h1>
      <h2 className={styles.slogan}>
        Найдите идеальный баланс выручки и удовлетворённости пользователей с
        платформой рекламной монетизации
      </h2>
      <div className={styles.button}>
        <ButtonOrange title="Заказать звонок" />
      </div>
    </div>
  );
}
