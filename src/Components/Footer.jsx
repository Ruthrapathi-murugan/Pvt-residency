import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-3 mt-5">
      <Container>
        {/* First Row: Hotel Info, Menu, Rooms, Reach Us */}
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="footer-title">Pvt Residency</h5>
            <img
              src="/Logo1.jpeg"
              alt="Logo"
              height="70"
              className="me-3 mb-3 rounded-3 shadow"
            />
            <p className="footer-text">
              Pvt Residency features contemporary, air-conditioned accommodations with complimentary Wi-Fi,
              ensuite bathrooms, and attentive service. Ideally located near key landmarks, it offers 24-hour
              reception, free parking, and a welcoming, professional ambiance.
            </p>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="footer-subtitle">Menu</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/rooms" className="footer-link">Rooms</a></li>
              <li><a href="/gallery" className="footer-link">Gallery</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-subtitle">Rooms</h6>
            <ul className="list-unstyled">
              <li><a href="#deluxe" className="footer-link">Deluxe Rooms</a></li>
              <li><a href="#standard" className="footer-link">Standard Rooms</a></li>
              <li><a href="#family" className="footer-link">Family Rooms</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-subtitle">Reach Us</h6>
            <p className="footer-text">
              172/1, Pattali Street, Kurumbapatti, Adivaram, Palani, Tamil Nadu - 624601, India.
            </p>
            <a href="https://goo.gl/maps/somefakeurl" target="_blank" rel="noopener noreferrer" className="footer-link">Get Direction</a>
            <p className="mt-2 mb-0 footer-text">📞 +91 99521-61959</p>
            <p className="footer-text">📧 pvtresidency@gmail.com</p>
          </Col>
        </Row>

        {/* Second Row: Social Media Icons */}
        <Row className="text-center mb-3">
          <Col>
            <h6 className="footer-subtitle">Follow Us</h6>
            <a href="#" className="footer-link me-3">Instagram</a>
            <a href="#" className="footer-link">Facebook</a>
          </Col>
        </Row>

        <hr className="border-secondary" />

        {/* Bottom Row: Copyright */}
        <Row>
          <Col className="text-center">
            <small className="footer-text">
              © {new Date().getFullYear()} All rights reserved. Pvt Residency.<br />
              Designed by <strong className="text-primary">Ruthrapathi</strong>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;