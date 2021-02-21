import React from "react";
import { Link } from "react-router-dom";

const TopLeftNavigation = () => {
  return (
    <ul style={menuStyle}>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/help">Help</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  );
};

const menuStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "15%",
};

export default TopLeftNavigation;
