import React from "react";

import LogoImage from "../../assets/images/logo/logo.png";

export default function Logo() {
  return (
    <img
      src={LogoImage}
      height={75}
      width={170}
      style={{ marginLeft: "-1rem" }}
      alt="InfluRocket"
    />
  );
}
