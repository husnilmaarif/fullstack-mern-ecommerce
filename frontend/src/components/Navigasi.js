import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navigasi.css";

const Navigasi = () => {
  return (
    <Navbar bg="dark" variant="dark" className="shadow">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "whitesmoke" }}>
            E-commerce
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link className="cart">
            <i className="fas fa-shopping-cart"></i>
            <Link to="/cart" style={{ textDecoration: "none", color: "whitesmoke" }}>
              {" "}
              Cart <span>0</span>
            </Link>
          </Nav.Link>
          <Nav.Link className="shop">
            <Link to="/" style={{ textDecoration: "none", color: "whitesmoke" }}>
              Shop
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigasi;
