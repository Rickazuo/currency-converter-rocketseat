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
