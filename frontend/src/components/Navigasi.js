import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Badge, DropdownButton, Dropdown, InputGroup, FormControl } from "react-bootstrap";
import { FaUser, FaSearch } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import "./Navigasi.css";

const Navigasi = () => {
  return (
    <Navbar bg="primary" className="shadow">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            POS
          </Link>
        </Navbar.Brand>

        <DropdownButton id="dropdown-basic-button" title="Kategori">
          <Dropdown.Item>
            <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
              Utama
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
              Minuman
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
              Snack
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
              Pastry
            </Link>
          </Dropdown.Item>
        </DropdownButton>

        <InputGroup>
          <FormControl placeholder="Cari barang.." aria-label="Cari barang.." />
          <div className="btn btn-outline-primary" style={{ color: "white" }}>
            <FaSearch />
          </div>
        </InputGroup>

        <Nav.Link className="cart">
          <Link to="/cart">
            <BsFillCartCheckFill />
          </Link>
        </Nav.Link>
        <Nav.Link className="user">
          <Link to="/">
            <FaUser />
          </Link>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Navigasi;
