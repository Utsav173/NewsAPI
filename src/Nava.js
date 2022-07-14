import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  Link
} from "react-router-dom";

export const Nava = (props) => {
  return (
    <Navbar
      className={`bg-${props.mode} text-${
        props.mode === "light" ? "dark" : "light"
      }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          to="#home"
          className={`text-${props.mode === "light" ? "dark" : "light"}`}
        >
          All News App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/home"
              className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`}
            >
              Home
            </Link>
            <Link
              to="/sports"
              className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`}
              >
              Sports
            </Link>
            <Link
              to="/business"
              className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`}
              >
              Business
            </Link>
            <Link
              to="/technology"
              className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`}
              >
             technology
            </Link>
            <Link
              to="/science"
              className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`}
              >
              science
            </Link>
            <Link
              to="/politics"
              className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`}
              >
              politics
            </Link>
            <Link
              to="/world"
              className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`}
              >
              world
            </Link>
            <Link
              to="/national"
              className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`}
              >
              national
            </Link>
            <Link
              to="/entertainment"
              className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`}
              >
              entertainment
            </Link>
          </Nav>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {`${
                props.mode === "light"
                  ? "Enable Dark Mode"
                  : "Enable Light Mode"
              }`}
            </label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
