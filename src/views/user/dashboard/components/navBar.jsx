/* REACT */
import React, { Component } from 'react'

/* PLUGINS */
import { Container, Nav, Navbar } from 'react-bootstrap'

/* STYLES */
import './navBar.scss';

class NavBar extends Component {
    render() { 
        return (
            <React.Fragment>
                <Navbar>
                    <Container>
                    <Navbar.Brand href="#home">PETSHELTER</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="/add" className="add_pet_btn">Add Pet</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </React.Fragment>
            
        );
    }
}

export default (NavBar);