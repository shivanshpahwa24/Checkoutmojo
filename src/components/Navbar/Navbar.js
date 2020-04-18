import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
      <div className="container">
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
            <Link className="nav-item nav-link" to="/">
              <Button>Install</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
