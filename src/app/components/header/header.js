import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../../images/logo.svg"
import burger from "../../../images/burger.svg"

export default function Header () {
    
      return (
        <header className={styles.header}>
          <a href="#">
           <Image src={logo} alt='logo' className={styles.logo} />
          </a>  
          <div>
          <nav className={styles.links}>
            <Link className={styles.link} href="#advantages"> Преимущества </Link>
            <Link className={styles.link} href="#howToWork"> Как работаем </Link>
          </nav>
          <Image src={burger} className={styles.burger} alt='logo' />
          </div>        
        </header>
      );

      
        
    
}