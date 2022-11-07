import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/navbar.css'

function BarraDeNavegacion() {
  return (
    <Navbar className="color-background" expand="lg">
      <Container>
        <div className="container-navegador">
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>            
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default BarraDeNavegacion;