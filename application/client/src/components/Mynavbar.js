import React from 'react';
import "./navbar.css"
import { NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Picture from './pictures/logo.png'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';
import Searchbar from './SearchBar';

class mynavbar extends React.Component{
   
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark main-nav" id="thenavbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={Picture} width="80" height="55" alt="" />
                                      </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Button href="/about" className="nav-item nav-link">About Us</Button>
                            <Button href="/Apply-Tutor" className="nav-item nav-link">Apply to be a tutor</Button>
                            <Button href="/Tutor-Dashboard" className="nav-item nav-link">Dashboard(temp)</Button>
                            <Button href="/StudentProfile" className="nav-item nav-link">User Profile</Button>
                        </div> 

                        <Searchbar/>

                        <div className="navbar-nav">
                            <Button href="/Login" className="nav-item nav-link">Login</Button>
                            <Button href="/Registration" className="nav-item nav-link">Register</Button>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}

$("#tableMenu a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    $("#tableButton").text(selText);
});

export default mynavbar;


