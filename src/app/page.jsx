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
import { useInView } from "react-intersection-observer";


export default function Home() {
  const [targetAdvantages, advantagesInView] = useInView({ threshold: 0 });
  const [targetHowToWork, howToWorkInView] = useInView({ threshold: 0 });
  const [current, setCurrent] = react.useState("");
     
  react.useEffect(() => {
    if (advantagesInView) {
      setCurrent("advantages");
    } else if (howToWorkInView) {
      setCurrent("howToWork");
    } 
  }, [advantagesInView, howToWorkInView]);
  
  
  return (
    <div className={styles.page}>
      <Header current={current} />
      <main className={styles.main}>        
        <MainLead/>
        <Revenue/>
        <Balance targetAdvantages = {targetAdvantages}/>
        <Partners/>
        <HowToWork targetHowToWork={targetHowToWork}/>
        <Footer/>
      </main>
      
    </div>
  );
}
