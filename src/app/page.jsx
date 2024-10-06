"use client"
import react from "react";
import styles from "./page.module.css";
import MainLead from "./components/main-lead/main-lead";
import Header from "./components/header/header";
import Revenue from "./components/revenue/revenue";
import Balance from "./components/balance/balance";
import Partners from "./components/partners/partners";
import HowToWork from "./components/how-to-work/how-to-work";
import Footer from "./components/footer/footer";


export default function Home() {
  
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>        
        <MainLead/>
        <Revenue/>
        <Balance/>
        <Partners/>
        <HowToWork/>
        <Footer/>
      </main>
      
    </div>
  );
}
