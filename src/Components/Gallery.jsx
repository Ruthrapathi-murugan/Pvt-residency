// Gallery.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css';

const images = [
  '/slide1.jpg',
  '/slide2.jpg',
  '/slide3.jpg',
  '/slide4.jpg',
  '/slide4.jpg',
  '/slide4.jpg',
  '/staircase.JPG',
  '/underground.JPG',
  '/Parking.JPG',
  '/Frontview.JPG',
  'Corridor.JPG',
];

const Gallery = () => {
  return (
    <section className="gallery-section py-5 bg-light" id="gallery">
      <Container>
        <h2 className="text-center fw-bold mb-5">Our Gallery</h2>
        <Row>
          {images.map((img, index) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
              <div className="gallery-card">
                <img src={img} alt={`Hotel view ${index + 1}`} className="img-fluid rounded shadow" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
