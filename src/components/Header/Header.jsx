import React from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';

const Header = ({handleShow}) => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">My Contact Book</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            <Button variant="outline-success" onClick={handleShow}>Add New Contact</Button>
        </Container>
    </Navbar>
  )
}

export default Header