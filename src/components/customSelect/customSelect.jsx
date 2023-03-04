import { useState } from "react";
import styles from "./styles.module.css";

const CustomSelect = ({ value, id, onChange, options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleSelect = (option) => {
    onChange(option.currentCurrency);
    setShowOptions(false);
  };

  return (
    <div className={styles.customSelect}>
      <div
        className={styles.selectSelected}
        onClick={() => setShowOptions(!showOptions)}
      >
        <img
          src={options?.find((option) => option.currentCurrency === value)?.img}
          alt=""
        />
        {value}
        <div className={styles.selectArrow}></div>
      </div>
      {showOptions && (
        <div className={styles.selectItems}>
          {options.map((option) => (
            <div
              key={option.currentCurrency}
              className={`${styles.selectItem} ${
                value.currentCurrency === option ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              <img src={option.img} alt="" />
              {option.currentCurrency}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
