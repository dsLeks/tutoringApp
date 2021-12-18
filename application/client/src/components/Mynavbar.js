import React, { useState, useContext } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';
import Picture from "./pictures/logo.png";
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/js/bootstrap.js';
// import 'jquery/dist/jquery.min';
import Button from "react-bootstrap/Button";
import $ from "jquery";
import Searchbar from "./SearchBar";
import { AppContext } from "../AppContext";

const Mynavbar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(AppContext);
  console.log("context", loggedInUser.status);

  const [loggedOut, setLoggedOut] = useState(false);

  const logout = () => {
    localStorage.removeItem("whpf_user");
    setLoggedInUser({});
    setLoggedOut(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark main-nav"
      id="thenavbar"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Picture} width="80" height="55" alt="" />
        </a>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
          data-target=".navbar-collapse"
        >
          <div className="navbar-nav">
            <Button
              href="/about"
              className="nav-item nav-link btn-outline-dark"
            >
              About Us {loggedInUser.firstName}
            </Button>
            {loggedInUser.isTutor && loggedInUser.firstName !== "" ? (
              <>
                <Button
                  href="/Tutor-Dashboard"
                  className="nav-item nav-link btn-outline-dark"
                >
                  Dashboard
                </Button>
                <Button
                  href="/StudentProfile"
                  className="nav-item nav-link btn-outline-dark"
                >
                  Profile
                </Button>
              </>
            ) : (
              <>
                <Button
                  href="/Apply-Tutor"
                  className="nav-item nav-link btn-outline-dark"
                >
                  Apply to be a tutor
                </Button>
              </>
            )}

            <Button href="/Postings" className="nav-item nav-link btn-outline-dark">
              Posts
            </Button>

            {/** 
            <Button
              href="/StudentProfile"
              className="nav-item nav-link btn-outline-dark"
            >
              User Profile
            </Button>
            */}
          </div>

          <Searchbar />

          <div className="navbar-nav">
            {loggedInUser.status === "Authenticated!" &&
            !!loggedInUser.email ? (
              <Button
                href="#"
                className="nav-item nav-link btn-outline-dark"
                onClick={logout}
              >
                LogOut
              </Button>
            ) : (
              <>
                <Button
                  href="/Login"
                  className="nav-item nav-link btn-outline-dark"
                >
                  Login
                </Button>

                <Button
                  href="/Registration"
                  className="nav-item nav-link btn-outline-dark"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

$("#tableMenu a").on("click", function (e) {
  e.preventDefault(); // cancel the link behaviour
  var selText = $(this).text();
  $("#tableButton").text(selText);
});

export default Mynavbar;
