import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar1.css';

const Navbar1 = () => {
  return (
    <Navbar bg="white" variant="dark" expand="lg" sticky="top" className="navbar-section shadow-lg animate-navbar">
      <Container>
        <Navbar.Brand href="/" className="fw-bold d-flex align-items-center">
          <img
            src="/Logo1.jpeg"
            alt="Logo"
            height="70"
            className="me-3 logo-img"
          />
          <div className='hotelname'>PVT Residency</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/rooms">Rooms</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Button
            className="ms-3 book-now-btn"
            href="/rooms"
          >
            Book Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;