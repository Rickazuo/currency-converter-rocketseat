import { useState } from "react";
import styles from "./styles.module.css";

import CurrencyChange from "../components/currencyChange/currencyChange";
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
            BRL: 0.192471,
            EUR: 1.0597,
            GBP: 1.2036,
            CHF: 1.064541,
        },
    },
    {
        currentCurrency: "EUR",
        rate: {
            USD: 0.9436,
            BRL: 0.180928,
            GBP: 1.13095,
            CHF: 1.00409,
        },
    },
    {
        currentCurrency: "GBP",
        rate: {
            USD: 0.8308,
            EUR: 0.88442,
            BRL: 0.159874,
            CHF: 0.8875,
        },
    },
    {
        currentCurrency: "CHF",
        rate: {
            USD: 0.9362,
            EUR: 0.9955,
            GBP: 1.1275,
            BRL: 0.1803,
        },
    },
];

function HomePage() {
    const [currency, setCurrency] = useState({
        first: { value: 1000, currency: "BRL" },
        second: { value: 5193.2, currency: "USD" },
    });

    const changeCurrency = (slot, subslot, value) => {
        const tempCurrency = {
            ...currency,
            [slot]: { ...currency[slot], [subslot]: value },
        };

        const index = currencyOptions.findIndex(
            (currency) =>
                currency.currentCurrency === tempCurrency[slot].currency
        );

        if (slot === "first") {
            tempCurrency.second.value =
                parseFloat(tempCurrency.first.value) *
                currencyOptions[index].rate[tempCurrency.second.currency];
        } else {
            tempCurrency.first.value =
                parseFloat(tempCurrency.second.value) *
                currencyOptions[index].rate[tempCurrency.first.currency];
        }

        setCurrency(tempCurrency);
    };

    return (
        <div className={styles.container}>
            <div>
                <CurrencyChange
                    currency={currency}
                    changeCurrency={changeCurrency}
                    currencyOptions={currencyOptions}
                />
                <HistoricChart />
            </div>
        </div>
    );
}

export default HomePage;
