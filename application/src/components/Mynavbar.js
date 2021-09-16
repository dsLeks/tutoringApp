import React from 'react';
import "./navbar.css"
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";
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