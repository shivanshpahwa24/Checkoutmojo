import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white shadow my-0 py-0">
      <div className="container-fluid d-flex align-items-center">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="d-flex align-items-center navbar-nav ml-auto font-weight-bold">
            <Link
              to="/"
              className="nav-item nav-link text-uppercase"
              style={{ cursor: "pointer" }}
            >
              Demo
            </Link>
            <Link
              to="/"
              className="nav-item nav-link text-uppercase"
              style={{ cursor: "pointer" }}
            >
              Pricing
            </Link>
            <span className="nav-item nav-link">
              <Button href="https://chrome.google.com/webstore/detail/checkoutmojo/hfmoopgkmgphacmnlipfebinmoakbbia">
                Install
              </Button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
