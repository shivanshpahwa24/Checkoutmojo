import React from "react";

import "./Button.css";

export default function Button({ children, classes, styles, href }) {
  return (
    <a
      className={`btn text-uppercase font-weight-bold button ${classes}`}
      style={styles}
      href={href}
    >
      {children}
    </a>
  );
}
