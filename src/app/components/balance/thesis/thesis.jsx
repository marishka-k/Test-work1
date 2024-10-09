import styles from "./thesis.module.css";
import arrow45 from '../../../../images/arrow45.svg'
import Image from "next/image";

export default function Thesis({slogan, text}) {
  return (
    <div className={styles.thesis}>
      <Image src={arrow45} className= {styles.arrow} alt="arrow45" />
      <h2 className={styles.slogan}> {slogan} </h2>
      <p className={styles.text}>{text}</p>
      
    </div>
  );
}
