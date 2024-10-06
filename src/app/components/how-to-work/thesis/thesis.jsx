import { useMemo, useState } from "react";
import styles from "./thesis.module.css";
import arrow45 from '../../../../images/arrow45.svg'
import Image from "next/image";

export default function Thesis({text}) {
  return (
    <li className={styles.thesis}>
      <Image src={arrow45} className= {styles.arrow} alt="arrow45" />      
      <p className={styles.text}>{text}</p>      
    </li>
  );
}
