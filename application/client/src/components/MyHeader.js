import React from 'react';
import "./header.css"
import { NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import 'bootstrap/dist/css/bootstrap.css';

class myHeader extends React.Component{
    render() {
        return (
            <div className="container-fluid-nav text-center">
                <Navbar className="background-color"  variant="light">
                        <h1 className="theHeader" >SFSU Software Engineering Project CSC648-848, Fall 2021 </h1>
                </Navbar>
            </div>

        );
    }
}




export default myHeader;