import React from "react"
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";

const NavBar = () => {
    return(
      <Navbar bg="primary" variant="dark" className="rounded">
        <Container>
          <Navbar.Brand href="#home" >Waiter.app</Navbar.Brand>
          <Nav className="d-flex justify-content-end">
            <Nav.Link  as={NavLink} to="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};
export default NavBar