import { useState } from "react";

import styles from "./styles.module.css";

import CurrencyChange from "../components/currencyChange/currencyChange";
import HistoricChart from "../components/historicChart/historicChart";

import switzerland from "../assets/switzerland.png";
import unitedKingdom from "../assets/unitedKingdom.png";
import brazil from "../assets/brazil.png";
import europeanUnion from "../assets/europeanUnion.png";
import unitedStates from "../assets/unitedStates.png";
import Footer from "../components/footer/footer";

const currencyOptions = [
  {
    currentCurrency: "BRL",
    img: brazil,
    rate: {
      USD: 5.1932,
      EUR: 5.5144,
      GBP: 6.24524,
      CHF: 0.180283,
      BRL: 1,
    },
  },
  {
    currentCurrency: "USD",
    img: unitedStates,
    rate: {
      BRL: 0.192471,
      EUR: 1.0597,
      GBP: 1.2036,
      CHF: 1.064541,
      USD: 1,
    },
  },
  {
    currentCurrency: "EUR",
    img: europeanUnion,
    rate: {
      USD: 0.9436,
      BRL: 0.180928,
      GBP: 1.13095,
      CHF: 1.00409,
      EUR: 1,
    },
  },
  {
    currentCurrency: "GBP",
    img: unitedKingdom,
    rate: {
      USD: 0.8308,
      EUR: 0.88442,
      BRL: 0.159874,
      CHF: 0.8875,
      GBP: 1,
    },
  },
  {
    currentCurrency: "CHF",
    img: switzerland,
    rate: {
      USD: 0.9362,
      EUR: 0.9955,
      GBP: 1.1275,
      BRL: 0.1803,
      CHF: 1,
    },
  },
];

function HomePage() {
  const [currency, setCurrency] = useState({
    first: { value: "", currency: "BRL" },
    second: { value: "", currency: "USD" },
  });

  const changeCurrency = (slot, subslot, value) => {
    const tempCurrency = {
      ...currency,
      [slot]: { ...currency[slot], [subslot]: value },
    };

    const calculateCurrency = (valueToCalculate, currencyValue) =>
      value === "" || valueToCalculate === ""
        ? 0
        : parseFloat(valueToCalculate) * currencyValue;

    if (slot === "first") {
      const index = currencyOptions.findIndex(
        (currency) => currency.currentCurrency === tempCurrency.second.currency
      );

      tempCurrency.second.value = calculateCurrency(
        tempCurrency.first.value,
        currencyOptions[index].rate[tempCurrency.first.currency]
      );
    } else {
      const index = currencyOptions.findIndex(
        (currency) => currency.currentCurrency === tempCurrency.first.currency
      );

      tempCurrency.first.value = calculateCurrency(
        tempCurrency.second.value,
        currencyOptions[index].rate[tempCurrency.second.currency]
      );
    }

    setCurrency(tempCurrency);
  };

  const reverseCurrency = () => {
    const tempCurrency = {
      first: currency.second,
      second: currency.first,
    };

    setCurrency(tempCurrency);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerConversor}>
        <CurrencyChange
          currency={currency}
          changeCurrency={changeCurrency}
          currencyOptions={currencyOptions}
          reverseCurrency={reverseCurrency}
        />
        <h2 style={{ marginTop: "64px", marginBottom: 0 }}>Taxa de câmbio</h2>
        <HistoricChart />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
