import styles from "./styles.module.css";
import CurrencyChange from "../components/currencyChange/currencyChange";
import ChartExchange from "../components/chartExchange/chartExchange";

function HomePage() {
  return (
    <div className={styles.container}>
      <div>
        <CurrencyChange />
        <ChartExchange />
      </div>
    </div>
  );
}

export default HomePage;
