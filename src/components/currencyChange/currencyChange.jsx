import styles from "./styles.module.css";
import changeIcon from "../../assets/changeIcon.svg";

export default function CurrencyChange() {
  return (
    <div>
      <h2>Conversor de moedas</h2>
      <div className={styles.slotsSwitch}>
        <div tabIndex={0} className={styles.currency}>
          <input className={styles.value} placeholder="R$"></input>
          <div className={styles.divider}></div>
          <select className={styles.exchange} name="" id=""></select>
        </div>
        <img src={changeIcon} alt="icon with two arrows oposites" />
        <div>
          <div className={styles.currency}>
            <input className={styles.value} placeholder="R$"></input>
            <div className={styles.divider}></div>
            <select className={styles.exchange} name="" id=""></select>
          </div>
        </div>
      </div>
    </div>
  );
}
