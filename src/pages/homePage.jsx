import { useState } from "react";
import styles from "./styles.module.css";

import CurrencyChange from "../components/currencyChange/currencyChange";
import HistoricChart from "../components/historicChart/historicChart";

import switzerland from "../assets/switzerland.png";

const currencyOptions = [
  {
    currentCurrency: "BRL",
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
    first: { value: 0, currency: "BRL" },
    second: { value: 5.1932, currency: "USD" },
  });

  const changeCurrency = (slot, subslot, value) => {
    const tempCurrency = {
      ...currency,
      [slot]: { ...currency[slot], [subslot]: value },
    };

    const index = currencyOptions.findIndex(
      (currency) => currency.currentCurrency === tempCurrency[slot].currency
    );

    const calculateCurrency = (valueToCalculate, currencyValue) =>
      value === "" ? 0 : parseFloat(valueToCalculate) * currencyValue;

    if (slot === "first") {
      tempCurrency.second.value = calculateCurrency(
        tempCurrency.first.value,
        currencyOptions[index].rate[tempCurrency.second.currency]
      );
    } else {
      tempCurrency.first.value = calculateCurrency(
        tempCurrency.second.value,
        currencyOptions[index].rate[tempCurrency.first.currency]
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

  console.log(currency);
  return (
    <div className={styles.container}>
      <div>
        <CurrencyChange
          currency={currency}
          changeCurrency={changeCurrency}
          currencyOptions={currencyOptions}
          reverseCurrency={reverseCurrency}
        />
        <h2 style={{ marginTop: "64px", marginBottom: 0 }}>Taxa de câmbio</h2>
        <HistoricChart />
      </div>
    </div>
  );
}

export default HomePage;
