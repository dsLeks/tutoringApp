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



            // <nav className="navbar navbar-expand-lg navbar-dark main-nav" id="thenavbar">
            //     <a className="navbar-brand" href="/">
            //                 <img src={Picture} width="80" height="55" alt="" />
            //              </a>
            //     <div className="container-fluid">
            //         <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
            //                 data-bs-target="#navbarCollapse">
            //             <span className="navbar-toggler-icon"></span>
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarCollapse">
            //             <div className="navbar-nav">
            //                 <a href="/" className="nav-item nav-link active">Home</a>
            //                 <a href="/" className="nav-item nav-link">About Us</a>
            //                 <a href="/" className="nav-item nav-link">Apply to be a tutor</a>
            //             </div>
            //             <div className="dropdown">
            //                 <Nav>
            //                         <NavDropdown title="Categories" id="navDropDown" >
            //                              <NavDropdown.Item href="#"> Course </NavDropdown.Item>
            //                              <NavDropdown.Item href="#"> Major </NavDropdown.Item>
            //                              <NavDropdown.Item href="#"> Tutors </NavDropdown.Item>
            //                          </NavDropdown>
            //                     </Nav>
            //
            //                         <input type="text" className="form-control" placeholder="Search.."/>
            //                     <button type="submit" className="btn btn-success">Search</button>
            //
            //
            //
            //             </div>
            //             <div className="navbar-nav ms-auto">
            //                 <a href="#" className="nav-item nav-link">Login</a>
            //                 <a href="#" className="nav-item nav-link">Register</a>
            //             </div>
            //         </div>
            //     </div>
            // </nav>
                // <nav className="navbar navbar-expand-lg navbar-dark main-nav" id="thenavbar">
                //
                //     <a className="navbar-brand" href="/">
                //         <img src={Picture} width="80" height="55" alt="" />
                //     </a>
                //     <div className="container-fluid">
                //     <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                //             data-bs-target="#navbarCollapse">
                //         <span className="navbar-toggler-icon"></span>
                //     </button>
                //     <div className="collapse navbar-collapse" id="navbarCollapse">
                //     <div className="container justify-content-center">
                //         <div className="navbar-nav">
                //         <ul className="nav navbar-nav flex-fill w-100 flex-nowrap">
                //             <li className="nav-item active">
                //                 <a className="nav-link" href="/">Home</a>
                //             </li>
                //             <li className="nav-item">
                //                 <a className="nav-link" href="/about">About Us</a>
                //             </li>
                //             <li className="nav-item">
                //                 <a className="nav-link" href="/">Apply to be a tutor</a>
                //             </li>
                //         </ul>
                //
                //         <ul className="nav navbar-nav flex-fill justify-content-center">
                //
                //         </ul>
                //
                //         {/* OLD DROPDOWN */}
                //         {/* <div className="dropdown">
                //             <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2"
                //                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                //                 Categories
                //             </button>
                //             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                //                 <li><a className="dropdown-item" href="#">History</a></li>
                //                 <li><a className="dropdown-item" href="#">Science</a></li>
                //                 <li><a className="dropdown-item" href="#">Math</a></li>
                //             </ul>
                //         </div> */}
                //
                //         </div>
                //         {/*<div className="dropdown">*/}
                //         {/*<Nav>*/}
                //         {/*    <NavDropdown title="Categories" >*/}
                //         {/*        <NavDropdown.Item href="#"> Course </NavDropdown.Item>*/}
                //         {/*        <NavDropdown.Item href="#"> Major </NavDropdown.Item>*/}
                //         {/*        <NavDropdown.Item href="#"> Tutors </NavDropdown.Item>*/}
                //         {/*    </NavDropdown>*/}
                //         {/*</Nav>*/}
                //         {/*</div>*/}
                //         {/*</div>*/}
                //         {/*<div className="form-group">*/}
                //         {/*    <input type="text" className="form-control" placeholder="Search.."/>*/}
                //         {/*</div>*/}
                //
                //         {/*<button type="submit" className="btn btn-success">Search</button>*/}
                //
                //         <ul className="nav navbar-nav flex-fill w-100 justify-content-end">
                //
                //             <li className="nav-item">
                //                 <a className="nav-link" href="/">Register</a>
                //             </li>
                //             <li className="nav-item">
                //                 <a className="nav-link" href="/">Login</a>
                //             </li>
                //             <li className="nav-item">
                //                 <a className="nav-link" href="/"></a>
                //             </li>
                //         </ul>
                //     </div>
                //     </div>
                //     </div>
                // </nav>
                // {/*<a className="navbar-brand" href="/">*/}
                // {/*    <img src={Picture} width="80" height="55" alt="" />*/}
                // {/*</a>*/}
                // {/*<Container className="navbar">*/}
                // {/*    /!*<Navbar.Brand href="/">CSC648</Navbar.Brand>*!/*/}
                // {/*        <NavLink to="/about">About Us</NavLink>*/}
                // {/*        <NavLink to="/">Apply to be a tutor</NavLink>*/}
                // {/*        <NavLink to="/">Register/Log in</NavLink>*/}
                // {/*        /!*<NavLink to="/about">About</NavLink>*!/*/}
                // {/*</Container>*/}


        );
    }
}




export default mynavbar;