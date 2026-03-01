import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css';

const images = [
  { src: '/slide1.jpg', alt: 'Deluxe Room View' },
  { src: '/slide2.jpg', alt: 'Modern Interiors' },
  { src: '/slide3.jpg', alt: 'Cozy Atmosphere' },
  { src: '/slide4.jpg', alt: 'Premium Bedding' },
  { src: '/slide4.jpg', alt: 'Spacious Suite' },
  { src: '/slide4.jpg', alt: 'Luxury Accommodation' },
  { src: '/staircase.JPG', alt: 'Elegant Staircase' },
  { src: '/underground.JPG', alt: 'Underground Level' },
  { src: '/Parking.JPG', alt: 'Secure Parking Area' },
  { src: '/Frontview.JPG', alt: 'Hotel Exterior View' },
  { src: '/Corridor.JPG', alt: 'Quiet Corridors' },
];

const Gallery = () => {
  return (
    <section className="gallery-section py-5 bg-white" id="gallery">
      <Container className="py-4">
        <div className="text-center mb-5">
          <h6 className="text-secondary text-uppercase fw-bold mb-2 tracking-wide">Take a Tour</h6>
          <h2 className="section-title text-primary display-6 fw-bold">Our Photo Gallery</h2>
          <p className="text-muted mx-auto mt-3" style={{ maxWidth: '600px' }}>
            Browse through our gallery to get a glimpse of the luxurious comfort, elegant interiors, and premium facilities that await you at PVT Residency.
          </p>
        </div>

        <Row className="g-4 masonry-style-grid">
          {images.map((img, index) => (
            <Col lg={4} md={6} sm={6} xs={12} key={index}>
              <div className="gallery-card rounded-4 overflow-hidden shadow-sm position-relative h-100 bg-light">
                <div className="image-wrapper h-100 w-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="img-fluid w-100 h-100 object-fit-cover transition-transform"
                    style={{ minHeight: '250px' }}
                    loading="lazy"
                  />
                </div>
                <div className="gallery-overlay d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100">
                  <span className="text-white fw-bold d-none">{img.alt}</span>
                  <div className="view-icon text-white fs-2"><i className="bi bi-zoom-in"></i></div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
