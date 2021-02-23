import React, { useEffect, useState } from "react";

const CurrencyFilter = ({ onCurrencyChange, currency }) => {
  const [currencyValue, setCurrencyValue] = useState(currency);

  const onTriggerChange = (e) => {
    setCurrencyValue(e.target.value);
  };

  useEffect(() => {
    onCurrencyChange(currencyValue);
  }, [currencyValue]);

  return (
    <select
      style={modalSelect}
      defaultValue={currency ? currency : "NGN"}
      onChange={(e) => onTriggerChange(e)}
      value={currencyValue}
    >
      <option value="USD"> USD </option>
      <option value="EUR"> EUR </option>
      <option value="CAD"> CAD </option>
      <option value="AUD"> AUD </option>
      <option value="GBP"> GBP </option>
      <option value="JPY"> JPY </option>
      <option disabled=""> --- </option>
      <option value="NGN"> NGN </option>
    </select>
  );
};

const modalSelect = {
  maxWidth: 80,
  padding: "7px 12px",
  backgroundColor: "#fff",
  fontSize: 12,
};

export default CurrencyFilter;
