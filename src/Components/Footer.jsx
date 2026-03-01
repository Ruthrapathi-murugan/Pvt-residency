import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-3">
      <Container>
        <Row className="gy-4 mb-5">
          {/* Brand Info */}
          <Col lg={4} md={6} className="pe-lg-5">
            <div className="d-flex align-items-center mb-4">
              <img
                src="/Logo1.jpeg"
                alt="PVT Residency Logo"
                height="60"
                className="me-3 rounded-circle border border-2 border-accent shadow-sm"
              />
              <h4 className="footer-brand mb-0 text-white" style={{ fontFamily: 'var(--font-heading)' }}>PVT Residency</h4>
            </div>
            <p className="footer-text mb-4 opacity-75 pe-md-4">
              Experience timeless charm and modern comforts just a stone's throw away from Palani’s spiritual landmarks. Your ideal choice for comfort and tranquility.
            </p>
            <div className="social-links d-flex gap-3">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="footer-title text-white mb-4 position-relative pb-2">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/"><i className="bi bi-chevron-right me-2 small text-accent"></i>Home</a></li>
              <li><a href="/about"><i className="bi bi-chevron-right me-2 small text-accent"></i>About Us</a></li>
              <li><a href="/rooms"><i className="bi bi-chevron-right me-2 small text-accent"></i>Rooms</a></li>
              <li><a href="/gallery"><i className="bi bi-chevron-right me-2 small text-accent"></i>Gallery</a></li>
              <li><a href="/contact"><i className="bi bi-chevron-right me-2 small text-accent"></i>Contact Us</a></li>
            </ul>
          </Col>

          {/* Accommodation */}
          <Col lg={3} md={6}>
            <h5 className="footer-title text-white mb-4 position-relative pb-2">Accommodation</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/rooms"><i className="bi bi-chevron-right me-2 small text-accent"></i>Premium Deluxe Room</a></li>
              <li><a href="/rooms"><i className="bi bi-chevron-right me-2 small text-accent"></i>Classic Double Room</a></li>
              <li><a href="/rooms"><i className="bi bi-chevron-right me-2 small text-accent"></i>Family Suite</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h5 className="footer-title text-white mb-4 position-relative pb-2">Contact Info</h5>
            <ul className="list-unstyled footer-contact-info">
              <li className="d-flex mb-3">
                <i className="bi bi-geo-alt-fill text-accent fs-5 me-3 mt-1"></i>
                <span className="opacity-75">172/1, Pattali Street, Kurumbapatti, Adivaram, Palani, Tamil Nadu - 624601</span>
              </li>
              <li className="d-flex mb-3">
                <i className="bi bi-telephone-fill text-accent fs-5 me-3 mt-1"></i>
                <a href="tel:+919952161959" className="opacity-75 text-decoration-none phone-hover">+91 99521-61959</a>
              </li>
              <li className="d-flex mb-3">
                <i className="bi bi-envelope-fill text-accent fs-5 me-3 mt-1"></i>
                <a href="mailto:pvtresidency@gmail.com" className="opacity-75 text-decoration-none email-hover">pvtresidency@gmail.com</a>
              </li>
            </ul>
            <a href="https://www.google.com/maps/dir/?api=1&destination=PVT+Residency,+Palani,+Tamil+Nadu" target="_blank" rel="noopener noreferrer" className="btn btn-outline-accent btn-sm mt-2 rounded-pill px-4">Get Directions</a>
          </Col>
        </Row>

        <hr className="border-secondary opacity-25 my-4" />

        {/* Copyright & Credits */}
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <small className="opacity-75 text-white">
              © {new Date().getFullYear()} <span className="fw-semibold">PVT Residency</span>. All rights reserved.
            </small>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <small className="opacity-75 text-white">
              Created by <a href="https://www.ruthradigitalsolutions.com" target="_blank" rel="noopener noreferrer" className="custom-credit-link fw-bold text-accent ms-1">Ruthra Digital Solutions</a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;