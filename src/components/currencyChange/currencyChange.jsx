import styles from "./styles.module.css";
import changeIcon from "../../assets/changeIcon.svg";
import CustomSelect from "../customSelect/customSelect";

export default function CurrencyChange({
  currency,
  changeCurrency,
  currencyOptions,
  reverseCurrency,
}) {
  return (
    <div>
      <h2>Conversor de moedas</h2>
      <div className={styles.slotsSwitch}>
        <div tabIndex={0} className={styles.currency}>
          <input
            value={currency.first.value}
            className={styles.value}
            placeholder="$"
            onChange={(e) => changeCurrency("first", "value", e.target.value)}
          ></input>
          <div className={styles.divider}></div>
          <CustomSelect
            value={currency.first.currency}
            id="first-currency-selector"
            onChange={(value) => changeCurrency("first", "currency", value)}
            options={currencyOptions}
          />
        </div>
        <div style={{ cursor: "pointer" }} onClick={reverseCurrency}>
          <img src={changeIcon} alt="icon with two arrows oposites" />
        </div>
        <div>
          <div className={styles.currency}>
            <input
              value={currency.second.value}
              className={styles.value}
              placeholder="$"
              onChange={(e) =>
                changeCurrency("second", "value", e.target.value)
              }
            />
            <div className={styles.divider}></div>
            <CustomSelect
              value={currency.second.currency}
              onChange={(value) => changeCurrency("second", "currency", value)}
              id="second-currency-selector"
              options={currencyOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
