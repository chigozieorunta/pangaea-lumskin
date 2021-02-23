import React from "react";
import { Image } from "react-bootstrap";
import ImageLogo from "../../images/logo.png";

const Logo = () => {
  return (
    <div style={{ width: "12.5%", minWidth: 150, marginLeft: 15 }}>
      <Image style={{ width: 150 }} alt="Lumskin Logo" src={ImageLogo} fluid />
    </div>
  );
};

export default Logo;
