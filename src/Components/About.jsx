import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './About.css';

const About = () => {
  const amenities = [
    { icon: 'bi-car-front-fill', title: 'Ample Parking' },
    { icon: 'bi-snow', title: 'Air-Conditioned' },
    { icon: 'bi-shield-check', title: 'Secure Property' },
    { icon: 'bi-bell-fill', title: '24/7 Room Service' },
    { icon: 'bi-wifi', title: 'Free High-Speed Wi-Fi' },
    { icon: 'bi-tv-fill', title: 'Smart HD TVs' },
    { icon: 'bi-telephone-fill', title: 'Intercom Facility' },
  ];

  return (
    <section id="about" className="py-5 bg-white">
      <Container className="py-4">
        <div className="text-center mb-5">
          <h6 className="text-secondary text-uppercase fw-bold mb-2 tracking-wide">Discover PVT Residency</h6>
          <h2 className="section-title text-primary display-6 fw-bold">About Us</h2>
        </div>

        {/* Intro Section */}
        <Row className="align-items-center mb-5 pb-4">
          <Col md={6} className="mb-5 mb-md-0 pe-md-5">
            <h3 className="fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>
              Timeless Charm,<br />Modern Comforts
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Conveniently located just a stone’s throw away from the renowned Idumban Kovil and Thiruavinankudi Temple,
              PVT Residency is an ideal choice for <strong>pilgrims, families, and travelers</strong> seeking comfort and
              easy access to Palani’s spiritual landmarks.
            </p>
            <p className="text-muted leading-relaxed">
              At PVT Residency, we are committed to providing a memorable stay through personalized service, clean and contemporary amenities,
              and a welcoming atmosphere. Whether you’re here for a spiritual journey, a family vacation, or a business trip,
              we invite you to experience a stay where modern luxury meets traditional charm.
            </p>
          </Col>
          <Col md={6} className="text-center position-relative">
            <div className="about-image-wrapper mx-auto position-relative">
              <div className="bg-decoration-circle bg-secondary opacity-25 position-absolute rounded-circle" style={{ width: '100%', height: '100%', top: '5%', left: '-5%', zIndex: 0 }}></div>
              <img src="/slide2.jpg" alt="Hotel Interior" className="img-fluid rounded-circle shadow-lg position-relative z-1 object-fit-cover border border-4 border-white" style={{ width: '400px', height: '400px' }} />
            </div>
          </Col>
        </Row>

        {/* Vision & Mission */}
        <Row className="align-items-center my-5 py-4 bg-light rounded-4 shadow-sm overflow-hidden">
          <Col md={5} className="p-0 d-none d-md-block h-100">
            <img src="/slide4.jpg" alt="Comfortable Stay" className="img-fluid w-100 h-100 object-fit-cover" style={{ minHeight: '400px' }} />
          </Col>
          <Col md={7} className="p-5">
            <div className="mb-5">
              <h4 className="fw-bold text-primary mb-3 d-flex align-items-center">
                <i className="bi bi-eye-fill text-secondary me-3 fs-3"></i>Our Vision
              </h4>
              <p className="text-muted">
                To be the preferred choice for travelers seeking a blend of modern comfort, exceptional service,
                and spiritual tranquility in Palani. We aim to provide an unforgettable experience that exceeds expectations
                and becomes a cherished part of our guests’ journeys.
              </p>
            </div>
            <div>
              <h4 className="fw-bold text-primary mb-3 d-flex align-items-center">
                <i className="bi bi-bullseye text-secondary me-3 fs-3"></i>Our Mission
              </h4>
              <p className="text-muted mb-0">
                Our mission is to offer a welcoming environment where guests feel at home. We strive to provide exceptional hospitality
                by ensuring clean, comfortable accommodations, personalized service, and convenient amenities.
              </p>
            </div>
          </Col>
        </Row>

        {/* Amenities */}
        <div className="text-center my-5 pt-4">
          <h2 className="fw-bold text-primary mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Experience Amenities Beyond Expectation</h2>
          <p className="mx-auto text-muted mb-5" style={{ maxWidth: "750px" }}>
            At PVT Residency, we focus on the essentials that make your stay smooth and comfortable.
            Enjoy high-speed Wi-Fi, 24/7 front desk, secure parking, elevator access, and more.
            Nothing unnecessary — just quietly exceptional comfort.
          </p>

          <Row className="g-4 justify-content-center">
            {amenities.map((item, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index}>
                <Card className="h-100 border-0 shadow-sm amenity-card hover-lift bg-white">
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                    <i className={`bi ${item.icon} fs-1 text-primary mb-3 transition-icon`}></i>
                    <span className="fw-semibold text-dark small">{item.title}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Temple Timings Section */}
        <div className="temple-timings-section mt-5 pt-5 border-top">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>Palani Murugan Temple</h2>
            <h6 className="text-secondary text-uppercase tracking-wide fw-bold">Daily Pooja Timings</h6>
            <p className="text-muted mt-3 mx-auto" style={{ maxWidth: '700px' }}>
              Located just minutes away from PVT Residency, the famous Palani Murugan Temple attracts thousands of devotees daily.
              Below are the standard darshan and pooja timings for your convenience:
            </p>
          </div>

          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
                <div className="bg-primary text-white p-3 text-center fw-bold text-uppercase tracking-wide">
                  Schedule
                </div>
                <ul className="list-group list-group-flush custom-timing-list">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-4">
                    <span className="fw-semibold text-dark"><i className="bi bi-brightness-alt-high text-secondary me-2"></i>Vilaa Pooja</span>
                    <Badge bg="light" text="primary" className="py-2 px-3 fw-bold border">6:30 A.M.</Badge>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-4">
                    <span className="fw-semibold text-dark"><i className="bi bi-sun text-secondary me-2"></i>Siru Kall Pooja</span>
                    <Badge bg="light" text="primary" className="py-2 px-3 fw-bold border">8:00 A.M.</Badge>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-4">
                    <span className="fw-semibold text-dark"><i className="bi bi-clock-history text-secondary me-2"></i>Kaala Santhi</span>
                    <Badge bg="light" text="primary" className="py-2 px-3 fw-bold border">9:00 A.M.</Badge>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-4 bg-light">
                    <span className="fw-semibold text-dark"><i className="bi bi-brightness-high-fill text-secondary me-2"></i>Utchikkala Pooja</span>
                    <Badge bg="primary" className="py-2 px-3 fw-bold shadow-sm">12:00 NOON</Badge>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-4">
                    <span className="fw-semibold text-dark"><i className="bi bi-sunset-fill text-secondary me-2"></i>Raja Alankaram</span>
                    <Badge bg="light" text="primary" className="py-2 px-3 fw-bold border">5:30 P.M.</Badge>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-4">
                    <span className="fw-semibold text-dark"><i className="bi bi-moon-stars-fill text-secondary me-2"></i>Iraakkaala Pooja</span>
                    <Badge bg="light" text="primary" className="py-2 px-3 fw-bold border">8:00 P.M.</Badge>
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>

      </Container>
    </section>
  );
};

export default About;
