import { useState, useEffect } from "react";
import styles from "./styles.module.css";

import CurrencyChange from "../components/currencyChange/currencyChange";
import ChartExchange from "../components/chartExchange/chartExchange";
import HistoricChart from "../components/historicChart/historicChart";

const currencyOptions = [
  {
    currentCurrency: "BRL",
    rate: {
      USD: 5.1932,
      EUR: 5.5144,
      GBP: 6.24524,
      CHF: 0.180283,
    },
  },
  {
    currentCurrency: "USD",
    rate: {
      BRL: 2,
      EUR: 3,
      GBP: 5,
      CHF: 1.064541,
    },
  },
  {
    currentCurrency: "EUR",
    rate: {
      USD: 2,
      BRL: 3,
      GBP: 5,
      CHF: 3,
    },
  },
  {
    currentCurrency: "GBP",
    rate: {
      USD: 2,
      EUR: 3,
      BRL: 5,
      CHF: 3,
    },
  },
  {
    currentCurrency: "CHF",
    rate: {
      USD: 2,
      EUR: 3,
      GBP: 5,
      BRL: 3,
    },
  },
];

function HomePage() {
  const [currency, setCurrency] = useState({
    first: { value: 1000, currency: "BRL" },
    second: { value: 5000, currency: "USD" },
  });

  const changeCurrency = (slot, value) => {
    setCurrency((prev) => ({
      ...prev,
      [slot]: { ...prev[slot], currency: parseFloat(value) },
    }));
  };

  const changeValue = (slot, value) => {
    if (slot === "first")
      setCurrency((prev) => ({
        first: { value: value, currency: "BRL" },
        second: { value: 5000, currency: "USD" },
      }));
  };

  return (
    <div className={styles.container}>
      <div>
        <CurrencyChange
          currency={currency}
          changeCurrency={changeCurrency}
          currencyOptions={currencyOptions}
        />
        <ChartExchange />
        <HistoricChart />
      </div>
    </div>
  );
}

export default HomePage;
