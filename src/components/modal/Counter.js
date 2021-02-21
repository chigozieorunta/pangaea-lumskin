import React, { useState, useEffect } from "react";

const Counter = ({ quantity, onCounterPlus, onCounterMinus }) => {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  return (
    <div style={styles.counterStyle}>
      <span style={styles.counterMinusStyle} onClick={onCounterMinus}>
        -
      </span>
      <span style={styles.countStyle}>{count}</span>
      <span style={styles.counterPlusStyle} onClick={onCounterPlus}>
        +
      </span>
    </div>
  );
};

const styles = {
  countStyle: { position: "relative", top: 2 },

  counterPlusStyle: {
    display: "block",
    cursor: "pointer",
    position: "relative",
    top: 1.5,
  },

  counterMinusStyle: {
    display: "block",
    cursor: "pointer",
    position: "relative",
    top: 0,
  },

  counterStyle: {
    marginTop: 10,
    borderRadius: 0,
    border: "1px solid #000",
    padding: "3px 0 8px 0",
    fontSize: 15,
    textAlign: "center",
    width: 75,
    display: "flex",
    justifyContent: "space-around",
  },
};

export default Counter;
