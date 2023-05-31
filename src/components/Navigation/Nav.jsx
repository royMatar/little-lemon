import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";

export default function Navigation() {
  return (
    <Navbar expand="lg">
      <Container id="navcontainer">
        <Navbar.Brand href="#home" className="brand-left">
          <img src="Logo.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Menu
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Reservation
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Order Online
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
