"use client";
import react from "react";
//import Form from 'next/form'
import styles from "./footer.module.css";
import ButtonBlack from "../button/button-black/button-black";

export default function Footer() {
  const [text, setText] = react.useState("");
  const [email, setEmail] = react.useState("");
  const isEmailWalid =  react.useMemo(() => {
    let _isEmailWalid
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(email) ) {
      _isEmailWalid = true
    }
    else {
      _isEmailWalid = false
    }
    return _isEmailWalid

  }, [email] );

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`текст ${text} отправлен с email ${email} `);
  };

  return (
    <footer className={styles.footer}>
      <h2 className={styles.slogan}>Заполните форму</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea rows="14" className={styles.text} name="myText" value={text} onChange={(e) => setText(e.target.value)} placeholder="Напишите свой вопрос"/>
        <div>
          <div>
            <input className={isEmailWalid ? `${styles.mail}` : `${styles.mail} ${styles.mail_error}`} type="email" name="myEmail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите e-mail" />
            <p className={isEmailWalid ? `${styles.error}` : `${styles.error} ${styles.error_on}`}>Неправильно указана почта</p>
          </div>
          <div className={styles.checkbox}>
            <input className={styles.checkbox_icon} type="checkbox" id="horns" name="horns" />
            <p className={styles.checkbox_discription}>Я ознакомлен(а) с <a className={styles.link} href="##">политикой конфиденциальности</a> и согласен(на) на обработку <a className={styles.link} href="##">персональных данных</a>.</p>
          </div>          
          <ButtonBlack title="отправить" doHaveActive={false}/>
        </div>
      </form>
    </footer>
  );
}
