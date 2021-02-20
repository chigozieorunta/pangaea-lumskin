import React, { useState, useEffect } from "react";

const counterStyle = {
  marginTop: 10,
  borderRadius: 0,
  border: "1px solid #000",
  padding: "3px 0 8px 0",
  fontSize: 15,
  textAlign: "center",
  width: 75,
  display: "flex",
  justifyContent: "space-around",
};

const counterMinusStyle = {
  display: "block",
  cursor: "pointer",
  position: "relative",
  top: 0,
};

const counterPlusStyle = {
  display: "block",
  cursor: "pointer",
  position: "relative",
  top: 1.5,
};

const countStyle = { position: "relative", top: 2 };

const Counter = ({ quantity, onCounterPlus, onCounterMinus }) => {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  return (
    <div style={counterStyle}>
      <span style={counterMinusStyle} onClick={onCounterMinus}>
        -
      </span>
      <span style={countStyle}>{count}</span>
      <span style={counterPlusStyle} onClick={onCounterPlus}>
        +
      </span>
    </div>
  );
};

export default Counter;
