import Link from "next/link";
import styles from "./partners.module.css";
import Image from "next/image";
import clickwave from "../../../images/clickwave.svg";
import zyphronix from "../../../images/zyphronix.svg";
import novasphere from "../../../images/novasphere.svg";

export default function Partners() {
  return (
    <div className={styles.content}>
      <h2 className={styles.slogan}> Наши партнёры по монетизации </h2>
      <div className={styles.patrners}>
        <Image src={clickwave} className={styles.patrner} alt="clickwave" />
        <Image src={zyphronix} className={styles.patrner} alt="zyphronix" />
        <Image src={novasphere} className={styles.patrner} alt="novasphere"/>      
      </div>
    </div>
  );
}
