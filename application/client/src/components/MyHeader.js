import React from 'react';
import "./header.css"
import { NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.css';

class myHeader extends React.Component{
    render() {
        return (
            <div className="container-fluid-nav text-center">

            <Navbar className="background-color" fixed="center" variant="light">
                <Container>
                    <h8 className="theHeader" style={{margin:'auto'}} >SFSU Software Engineering Project CSC648-848, Fall 2021 For Demonstration Only</h8>
                </Container>
            </Navbar>
            </div>

        );
    }
}




export default myHeader;