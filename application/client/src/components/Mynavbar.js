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
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/" className="nav-item nav-link">About Us</a>
                            <a href="/" className="nav-item nav-link">Apply to be a tutor</a>


                        </div>

                        <form className="d-flex" id="cater-nav">
                            <Nav >
                                <NavDropdown title="Categories" id="navDropDown" >
                                    <NavDropdown.Item href="#"> Course </NavDropdown.Item>
                                    <NavDropdown.Item href="#"> Major </NavDropdown.Item>
                                    <NavDropdown.Item href="#"> Tutors </NavDropdown.Item>
                                    <NavDropdown.Item href="#"> Hello </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <div className="input-group" id="thesearch">
                                <input type="text" className="form-control " placeholder="Search.."/>
                                    <button type="button" className="btn btn-success">Search</button>
                            </div>
                        </form>



                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link">Login</a>
                            <a href="#" className="nav-item nav-link">Register</a>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}




export default mynavbar;