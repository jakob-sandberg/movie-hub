import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Link to="/" className="navbar-brand">
          The Movie Hub
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/top-rated" className="nav-link">
              Top Rated
            </NavLink>

            <NavLink to="/popular" className="nav-link">
              Popular
            </NavLink>

            <NavLink to="/cinema" className="nav-link">
              Cinema
            </NavLink>

            <NavLink to="/genre" className="nav-link">
              Genres
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
