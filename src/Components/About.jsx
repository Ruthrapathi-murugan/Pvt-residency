import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';

const About= () => {
  const amenities = [
    { icon: '🚗', title: 'Ample Car Parking' },
    { icon: '❄️', title: 'Air-conditioned' },
    { icon: '🛡️', title: 'Under protection' },
    { icon: '🛎️', title: '24/7 Room Service' },
    { icon: '📶', title: 'Free wi-fi' },
    { icon: '📺', title: 'Flat-Screen TVs' },
    { icon: '📞', title: 'Intercom facility' },
  ];

  return (
    <section id="about" className="about-section">
      <>
        <center><h1>About US</h1></center>
      <Container>
      

        {/* Intro Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="section-title">Timeless Charm, <br />Modern Comforts</h2>
            <p>
              Conveniently located just a stone’s throw away from the renowned Idumban Kovil and Thiruavinankudi Temple, 
              Pvt Residency is an ideal choice for <strong>pilgrims, families, and travelers</strong> seeking comfort and 
              <strong> easy access to Palani’s spiritual landmarks</strong>.
            </p>
            <p>
              At Pvt Residency, we are committed to providing a <strong>memorable stay through personalized service, clean and contemporary amenities</strong>, 
              and a welcoming atmosphere. Whether you’re here for a spiritual journey, a family vacation, or a business trip, 
              we invite you to experience a stay where <strong>modern luxury meets traditional charm</strong>.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <div className="circle-image">
              <img src="/slide2.jpg" alt="Key Access" className="img-fluid rounded-circle" />
            </div>
          </Col>
        </Row>

        {/* Vision & Mission */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center mb-3 mb-md-0">
            <img src="/slide4.jpg" alt="Family Room" className="img-fluid hanger-img" />
          </Col>
          <Col md={6}>
            <h4 className="vision-title">Vision</h4>
            <p>
              To be the preferred choice for travelers seeking a blend of modern comfort, exceptional service, 
              and spiritual tranquility in Palani. We aim to provide an unforgettable experience that exceeds expectations 
              and becomes a cherished part of our guests’ journeys.
            </p>
            <h4 className="vision-title">Mission</h4>
            <p>
              Our mission is to offer a welcoming environment where guests feel at home. We strive to provide exceptional hospitality 
              by ensuring clean, comfortable accommodations, personalized service, and convenient amenities.
            </p>
          </Col>
        </Row>

        {/* Amenities */}
        <div className="text-center mb-4">
          <h2 className="section-title">Experience Amenities Beyond Expectation</h2>
          <p className="mx-auto" style={{ maxWidth: "750px" }}>
            At Pvt Residency, we focus on the essentials that make your stay smooth and comfortable. 
            Enjoy high-speed Wi-Fi, 24/7 front desk, secure parking, elevator access, and more. 
            Nothing unnecessary — just quietly exceptional comfort.
          </p>
        </div>

        <Row className="text-center amenities-grid">
          {amenities.map((item, index) => (
            <Col xs={6} md={3} key={index} className="mb-5">
              <div className="amenity-card">
                <div className="icon">{item.icon}</div>
                <div className="title">{item.title}</div>
              </div>
            </Col>
          ))}
        </Row>
        {/* Temple Timings Section */}
<div className="temple-timings-section text-center mt-5">
  <h2 className="section-title">Palani Murugan Temple – Daily Pooja Timings</h2>
  <p className="mb-4">
    Located just minutes away from Pvt Residency, the famous Palani Murugan Temple attracts thousands of devotees daily.
    Below are the standard darshan and pooja timings for your convenience:
  </p>
  
  <Row className="justify-content-center">
    <Col md={6}>
      <ul className="list-group text-start">
        <li className="list-group-item d-flex justify-content-between">
          <span>Vilaa Pooja</span>
          <span>6:30 a.m.</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Siru Kall Pooja</span>
          <span>8:00 a.m.</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Kaala Santhi</span>
          <span>9:00 a.m.</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Utchikkala Pooja</span>
          <span>12:00 noon</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Raja Alankaram</span>
          <span>5:30 p.m.</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Iraakkaala Pooja</span>
          <span>8:00 p.m.</span>
        </li>
      </ul>
    </Col>
  </Row>
</div>

      </Container>
        </>
    </section>
  
  );
};

export default About;
