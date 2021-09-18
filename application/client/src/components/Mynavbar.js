import React from 'react';
import "./navbar.css"
import { NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.css';

class mynavbar extends React.Component{
    render() {
        return (
            <Navbar bg="success" variant="dark">
                <Container>
                    <Navbar.Brand href="/">CSC648</Navbar.Brand>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                </Container>
            </Navbar>

        );
    }
}




export default mynavbar;