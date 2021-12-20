import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import "./styles.css";

export default function App() {
  const prefix = "$ ";
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    const { value = "" } = e.target;
    const parsedValue = value.replace(/[^\d.]/gi, "");
    setValue(parsedValue);
  };

  const handleOnBlur = () => setValue(Number(value).toFixed(2));

  return (
    <div className="App">
      <h1>Enter Input</h1>

      <CurrencyInput
        prefix={prefix}
        name="currencyInput"
        id="currencyInput"
        data-number-to-fixed="2"
        data-number-stepfactor="100"
        value={value}
        placeholder=""
        onChange={handleChange}
        onBlur={handleOnBlur}
        allowDecimals
        decimalsLimit="2"
        disableAbbreviations
      />
    </div>
  );
}
