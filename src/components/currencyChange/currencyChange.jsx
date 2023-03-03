import styles from "./styles.module.css";
import changeIcon from "../../assets/changeIcon.svg";

export default function CurrencyChange({
  currency,
  changeCurrency,
  currencyOptions,
}) {
  return (
    <div>
      <h2>Conversor de moedas</h2>
      <div className={styles.slotsSwitch}>
        <div tabIndex={0} className={styles.currency}>
          <input
            value={currency.first.value}
            className={styles.value}
            placeholder="R$"
            onChange={(e) => changeCurrency("first", "value", e.target.value)}
          ></input>
          <div className={styles.divider}></div>
          <select
            className={styles.exchange}
            defaultValue={currency.first.currency}
            id="first-currency-selector"
            onChange={(e) =>
              changeCurrency("first", "currency", e.target.value)
            }
          >
            {currencyOptions.map((actualCurrency) => (
              <option>{actualCurrency.currentCurrency}</option>
            ))}
          </select>
        </div>
        <img src={changeIcon} alt="icon with two arrows oposites" />
        <div>
          <div className={styles.currency}>
            <input
              value={currency.second.value}
              className={styles.value}
              placeholder="R$"
              onChange={(e) =>
                changeCurrency("second", "value", e.target.value)
              }
            />
            <div className={styles.divider}></div>
            <select
              className={styles.exchange}
              defaultValue={currency.second.currency}
              onChange={(e) =>
                changeCurrency("second", "currency", e.target.value)
              }
              id="second-currency-selector"
            >
              {currencyOptions.map((actualCurrency) => (
                <option>{actualCurrency.currentCurrency}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
