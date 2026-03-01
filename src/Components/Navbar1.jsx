import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import BookNowModal from './BookNowModal';
import './Navbar1.css';

const Navbar1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Add a slight shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar
        bg="white"
        variant="light"
        expand="lg"
        sticky="top"
        className={`navbar-section py-3 transition-all ${scrolled ? 'shadow-sm' : ''}`}
      >
        <Container className="px-lg-5">
          <Navbar.Brand href="/" className="d-flex align-items-center logo-brand me-auto">
            <img
              src="/Logo1.jpeg"
              alt="PVT Residency Logo"
              height="55"
              className="me-2 logo-img"
            />
            <div className="hotel-name-container ms-2">
              <span className="pvt-text">PVT</span> <span className="residency-text">Residency</span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none px-2 custom-toggler" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links align-items-lg-center mt-3 mt-lg-0 text-center text-lg-start">
              <Nav.Link href="/" className="nav-item-custom mx-lg-2">Home</Nav.Link>
              <Nav.Link href="/about" className="nav-item-custom mx-lg-2">About</Nav.Link>
              <Nav.Link href="/rooms" className="nav-item-custom mx-lg-2">Rooms</Nav.Link>
              <Nav.Link href="/gallery" className="nav-item-custom mx-lg-2">Gallery</Nav.Link>
              <Nav.Link href="/contact" className="nav-item-custom mx-lg-2">Contact</Nav.Link>

              <div className="d-lg-none my-3 border-top w-100 opacity-25"></div>

              <Button
                variant="primary"
                className="ms-lg-4 px-4 py-2 mt-2 mt-lg-0 fw-bold rounded-pill shadow-sm book-now-btn d-inline-flex align-items-center justify-content-center"
                onClick={handleShow}
              >
                Book Now <i className="bi bi-calendar-check ms-2"></i>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <BookNowModal show={showModal} handleClose={handleClose} />
    </>
  );
};

export default Navbar1;