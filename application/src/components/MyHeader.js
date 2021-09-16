import React from 'react';
import "./header.css"
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

class myHeader extends React.Component{
    render() {
        return (
            <div className="container-fluid-nav text-center">

            <Navbar className="background-color" fixed="center" variant="light">
                <Container>
                    <h8 className="theHeader" >SFSU Software Engineering Project CSC648-848, Fall 2021 For Demonstration Only</h8>
                </Container>
            </Navbar>
            </div>

        );
    }
}




export default myHeader;