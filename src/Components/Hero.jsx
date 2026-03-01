import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import BookNowModal from './BookNowModal';


const slides = [
  { image: '/slide1.jpg', subtitle: 'Pvt Residency, Palani', text: 'Stay Beyond Expectations' },
  { image: '/slide2.jpg', subtitle: 'Modern Comforts', text: 'Your Comfort, Our Priority' },
  { image: '/slide3.jpg', subtitle: 'Prime Location', text: 'Feel at Home in Every Stay' },
  { image: '/slide4.jpg', subtitle: 'Luxury Redefined', text: 'Discover True Hospitality' },
];


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // slightly slower for a more relaxing feel

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="hero-slider position-relative">
        <div
          className="hero-slide-bg"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        ></div>

        <div className="hero-overlay d-flex align-items-center justify-content-center">
          <div className="text-center hero-content" key={currentSlide}>
            <p className="hero-subtitle mb-2 text-uppercase tracking-widest animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {slides[currentSlide].subtitle}
            </p>
            <h1 className="hero-title mb-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {slides[currentSlide].text}
            </h1>
            <Button
              size="lg"
              className="btn-primary hero-btn animate-slide-up shadow-lg py-3 px-5 fw-bold"
              style={{ animationDelay: '0.5s', letterSpacing: '1px' }}
              onClick={handleShowModal}
            >
              BOOK YOUR STAY
            </Button>
          </div>
        </div>
      </div>

      {/* About Section Below Hero */}
      <section className="hero-description-section py-5 px-3 position-relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="bg-decoration" style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'var(--accent-color)', opacity: 0.3, zIndex: 0, filter: 'blur(50px)' }}></div>

        <Container className="position-relative z-1 my-5">
          <Row className="align-items-center justify-content-between">
            {/* Image on the left */}
            <Col md={5} className="text-center mb-5 mb-md-0 position-relative">
              <div className="image-wrapper shadow-xl rounded-4 overflow-hidden position-relative">
                <img
                  src="/Logo1.jpeg"
                  alt="PVT Residency Logo"
                  className="img-fluid w-100 object-fit-cover"
                  style={{ minHeight: '350px' }}
                />
                <div className="glass-effect text-dark p-3 position-absolute bottom-0 start-0 w-100 text-center fw-semibold">
                  Serving since 2021
                </div>
              </div>
            </Col>

            {/* Text on the right */}
            <Col md={6}>
              <h4 className="text-secondary text-uppercase fw-bold mb-2 tracking-wide" style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>Welcome To</h4>
              <h2 className="display-5 fw-bold text-primary mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Stay in Style,<br />Live in Luxury.</h2>

              <p className="lead text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Welcome to <strong>PVT Residency</strong>, your perfect getaway in the heart of Palani. We offer a refreshing
                blend of modern comforts and warm South Indian hospitality.
              </p>

              <ul className="list-unstyled mb-5 d-flex flex-wrap gap-3">
                <li className="d-flex align-items-center"><i className="bi bi-check-circle-fill text-secondary me-2 fs-5"></i> Spacious Rooms</li>
                <li className="d-flex align-items-center"><i className="bi bi-check-circle-fill text-secondary me-2 fs-5"></i> Complimentary WiFi</li>
                <li className="d-flex align-items-center"><i className="bi bi-check-circle-fill text-secondary me-2 fs-5"></i> 24/7 Room Service</li>
                <li className="d-flex align-items-center"><i className="bi bi-check-circle-fill text-secondary me-2 fs-5"></i> Secure Parking</li>
              </ul>

              <Button href="/about" variant="outline-primary" className="py-2 px-4 shadow-sm text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>
                Discover More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Location Highlights Section */}
      <section className="location-highlights-section py-5 bg-light position-relative">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-secondary text-uppercase fw-bold mb-2" style={{ letterSpacing: '2px' }}>Prime Location</h6>
            <h2 className="section-title text-primary display-6 fw-bold">Everything Within Reach</h2>
          </div>

          <Row className="g-4 justify-content-center">
            <Col xs={12} md={4}>
              <Card className="highlight-card h-100 border-0 shadow-sm text-center p-4 hover-lift">
                <div className="icon-wrapper mx-auto mb-3 bg-primary text-white d-flex align-items-center justify-content-center rounded-circle" style={{ width: '70px', height: '70px', fontSize: '1.8rem' }}>
                  🛕
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold mb-3 text-dark">Temple Access</Card.Title>
                  <Card.Text className="text-muted">
                    Just a walkable distance to the famous Palani Murugan Temple – ideal for early morning darshan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="highlight-card h-100 border-0 shadow-sm text-center p-4 hover-lift">
                <div className="icon-wrapper mx-auto mb-3 bg-secondary text-white d-flex align-items-center justify-content-center rounded-circle" style={{ width: '70px', height: '70px', fontSize: '1.8rem' }}>
                  🚌
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold mb-3 text-dark">Bus Stand</Card.Title>
                  <Card.Text className="text-muted">
                    Only 1 KM away from Palani Bus Stand – quick and convenient access to local transportation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="highlight-card h-100 border-0 shadow-sm text-center p-4 hover-lift">
                <div className="icon-wrapper mx-auto mb-3 text-white d-flex align-items-center justify-content-center rounded-circle" style={{ backgroundColor: '#slate-800', width: '70px', height: '70px', fontSize: '1.8rem' }}>
                  🚆
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold mb-3 text-dark">Railway Station</Card.Title>
                  <Card.Text className="text-muted">
                    Located just 2 KM from Palani Railway Station – perfectly situated for outstation travelers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Reusable Modal Component */}
      <BookNowModal show={showModal} handleClose={handleCloseModal} />

    </div>
  );
};

export default Hero;
