import React from "react";
import { Link } from "react-router-dom";
import Svg from "../../assets/images/background/footer.svg";

import "./Footer.css";

export default function Footer() {
  return (
    <footer
      className="page-footer font-small stylish-color-dark pt-4"
      style={{
        position: "absolute",
        width: "100%",
        height: "400px",
        backgroundImage: `url(${Svg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="container text-center text-md-left"
        style={{ marginTop: "140px" }}
      >
        <div className="col-12 text-center mb-3">
          <h2 className="font-weight-bold text-white">Checkoutmojo</h2>
        </div>
        <div className="row mt-4">
          <div className=" col-12 col-md-5 d-flex mx-auto text-white ">
            <div className="mx-auto">
              <small className="mt-3 list-title">Company</small>

              <ul className="list-unstyled footer-list">
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>

                <li>
                  <Link to="/support">Support</Link>
                </li>
              </ul>
            </div>

            <div className=" mx-auto">
              <small className="mt-3 list-title">Data</small>

              <ul className="list-unstyled footer-list">
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
