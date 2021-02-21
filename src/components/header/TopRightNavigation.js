import React from "react";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import ShoppingCartIcon from "./ShoppingCartIcon";

const TopRightNavigation = ({ cart }) => {
  return (
    <ul style={styles.menuStyle}>
      <li>
        <Link style={styles.listStyle} to="/account">
          Account
        </Link>
      </li>
      <li>
        <Link style={styles.listStyle} to="/cart">
          <ShoppingCartIcon />
          <Badge total={cart.length} />
        </Link>
      </li>
      <li style={styles.listStyle}>
        <select style={styles.selectStyle} defaultValue={"en"}>
          <option value="en">EN</option>
          <option value="ar">AR</option>
          <option value="fr">FR</option>
          <option value="es">ES</option>
          <option value="de">DE</option>
          <option value="he">HE</option>
          <option value="id">ID</option>
          <option value="zh-TW">ZH-TW</option>
        </select>
      </li>
    </ul>
  );
};

const styles = {
  listStyle: { marginRight: 15, display: "flex" },

  menuStyle: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "72.5%",
  },

  selectStyle: {
    padding: 5,
    width: 75,
    backgroundColor: "transparent",
  },
};

export default TopRightNavigation;
