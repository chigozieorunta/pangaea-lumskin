import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "./Icon";

const menuStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "72.5%",
};

const selectStyle = {
  padding: 5,
  width: 75,
  backgroundColor: "transparent",
};

const TopRightNavigation = () => {
  return (
    <ul style={menuStyle}>
      <li>
        <Link style={{ marginRight: 15 }} to="/shop">
          Account
        </Link>
      </li>
      <li>
        <Link style={{ marginRight: 15 }} to="/help">
          <ShoppingCartIcon />
        </Link>
      </li>
      <li style={{ marginRight: 15 }}>
        <select style={selectStyle} defaultValue={"en"}>
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

export default TopRightNavigation;
