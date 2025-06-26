import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Container, Row, Col } from 'react-bootstrap';


const slides = [
  {
    image: './slide1.jpg',
    text: 'Welcome to Pvt Residency, Palani',
  },
  {
    image: '/slide2.jpg',
    text: 'Stay Beyond Expectations',
  },
  {
    image: '/slide3.jpg',
    text: 'Your Comfort, Our Priority',
  },
  {
    image: '/slide4.jpg',
    text: 'Feel at Home in Every Stay',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="hero-slider"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="overlay">
          <h1 className="animated-text" key={currentSlide}>
  {slides[currentSlide].text}
</h1>

        </div>
      </div>

      {/* About Section Below Hero */}
      <div className="hero-description-section bg-white py-5 px-3">
      <Container>
        <Row className="align-items-center">
          {/* Image on the left */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src="/Logo1.jpeg"
              alt="Logo"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: '300px', height: 'auto' }}
            />
          </Col>

          {/* Text on the right */}
          <Col md={6}>
            <h2 className="animated-text">Stay in Style, Live in Luxury</h2>
            <p style={{ fontSize: '1.1rem' }}>
              Welcome to <strong>Pvt Residency</strong>, your perfect getaway in the heart of Palani. Established in 2021, Pvt Residency offers a refreshing
              blend of modern comforts and warm hospitality. Our hotel features spacious, <em>elegantly designed rooms</em> equipped
              with  air conditioning and complimentary Wi-Fi, ensuring a relaxed and connected stay.
            </p>
            <a href="/about" className="btn btn-primary mt-3">More About Us</a>
          </Col>
        </Row>

        {/* Location Highlights Section */}
<div className="location-highlights-section py-5 text-center">
  <Container>
    <Row className="g-4 justify-content-center">
      <Col xs={12} md={4}>
        <div className="highlight-card shadow animated-card">
          <h4>🛕 Temple Access</h4>
          <p>Just a walkable distance to the famous Palani Murugan Temple – ideal for early morning darshan.</p>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div className="highlight-card shadow animated-card">
          <h4>🚌 Bus Stand</h4>
          <p>Only 1 KM away from Palani Bus Stand – quick and convenient access to transportation.</p>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div className="highlight-card shadow animated-card">
          <h4>🚆 Railway Station</h4>
          <p>Located just 2 KM from Palani Railway Station – ideal for outstation travelers.</p>
        </div>
      </Col>
    </Row>
  </Container>
</div>

      </Container>
    </div>
      
    </div>
  );
};

export default Hero;
