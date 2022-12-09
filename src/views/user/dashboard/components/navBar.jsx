import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './navBar.scss';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <Navbar>
                <Container>
                <Navbar.Brand href="#home">PETSHELTER</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        );
    }
}
 
export default NavBar;