/* REACT */
import React, { Component } from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'

/* COMPONENTS */

/* REDUX */
// import { addPet } from '../../../../_actions/pet_list.action';

import './navBar.scss';

class NavBar extends Component {
    render() { 
        const { onShowAddModal } = this.props;
        return (
            <>
                <Navbar>
                    <Container>
                    <Navbar.Brand href="#home">PETSHELTER</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Button className="add_pet_btn" onClick={() => { onShowAddModal() }}>Add Pet</Button>
                    </Nav>
                    </Container>
                </Navbar>
                
            </>
            
        );
    }
}

export default (NavBar);