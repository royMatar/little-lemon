import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar expand="lg">
      <Container id="navcontainer">
        <Navbar.Brand href="/" className="brand-left">
          <img src="Logo.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/" className="nav-link">
              About
            </Link>
            <Link to="/" className="nav-link">
              Menu
            </Link>
            <Link to="/booking" className="nav-link">
              Reservation
            </Link>
            <Link to="/" className="nav-link">
              Order Online
            </Link>
            <Link to="/" className="nav-link">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
