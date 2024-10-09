import react from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../images/logo.svg"

import styles from "./header.module.css";

export default function Header ({current}) {
  const [openBurger,setOpenBurger] = react.useState(false)
    
      return (
        <header className={styles.header}>
          <a href="#">
           <Image src={logo} alt='logo' className={styles.logo} />
          </a>  
          <div>
          <nav className={styles.links}>
            <Link className={current === 'advantages' ?`${styles.link_active}` : `${styles.link}`} href="#advantages"> Преимущества </Link>
            <Link className={current === 'howToWork' ?`${styles.link_active}` : `${styles.link}`} href="#howToWork"> Как работаем </Link>
          </nav>
          <button type="button" onClick={() => setOpenBurger(prevState => !prevState) } className={openBurger ? `${styles.burger} ${styles.burger__active}` : `${styles.burger}`}></button>
         
          </div> 
          <div className={openBurger ? `${styles.burger_menu__active}` : `${styles.burger_menu}`}>
            <Link className={current === 'advantages' ?`${styles.link_active}` : `${styles.link}`} href="#advantages"> Преимущества </Link>
            <Link className={current === 'howToWork' ?`${styles.link_active}` : `${styles.link}`} href="#howToWork"> Как работаем </Link>
          </div>      
        </header>
      );

      
        
    
}