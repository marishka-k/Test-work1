import Image from "next/image";
import clickwave from "../../../images/clickwave.svg";
import zyphronix from "../../../images/zyphronix.svg";
import novasphere from "../../../images/novasphere.svg";

import styles from "./partners.module.css";

export default function Partners() {
  return (
    <div className={styles.content}>
      <h2 className={styles.slogan}> Наши партнёры по монетизации </h2>
      <div className={styles.patrners}>        
        <Image src={clickwave} className={`${styles.patrner} ${styles.clickwave}`} alt="clickwave" />
        <Image src={zyphronix} className={`${styles.patrner} ${styles.zyphronix}`} alt="zyphronix" />
        <Image src={novasphere} className={`${styles.patrner} ${styles.novasphere}`} alt="novasphere"/>   
      </div>
    </div>
  );
}
