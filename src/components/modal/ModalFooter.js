import React from "react";
import { Link } from "react-router-dom";
import { formatCost } from "../../utils/FormatCost";

const ModalFooter = ({ totalCost, currency }) => {
  return (
    <section style={styles.footerStyle}>
      <div style={styles.footerSummary}>
        <div>Sub-Total</div>
        <div>
          {currency} {formatCost(totalCost)}
        </div>
      </div>
      <Link to="./" style={styles.footerButton}>
        Proceed To Checkout
      </Link>
    </section>
  );
};

const styles = {
  footerStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 200,
    width: "100%",
    backgroundColor: "#f2f2ef",
    borderTop: "1px solid #d0d0d0",
    boxShadow: "0 -4px 12px rgb(0 0 0 / 15%)",
    zIndex: 1,
    padding: "1.5em",
  },

  footerButton: {
    color: "#fff",
    letterSpacing: 2,
    backgroundColor: "#4b5548",
    border: "none",
    marginTop: 15,
    fontSize: 12,
    padding: "16px 20px",
    display: "block",
    width: "100%",
    textTransform: "uppercase",
    textAlign: "center",
  },

  footerSummary: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default ModalFooter;
