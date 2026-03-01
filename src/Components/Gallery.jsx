import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css';

const images = [
  { src: '/slide1.jpg', alt: 'Premium Deluxe Header' },
  { src: '/slide2.jpg', alt: 'Modern Room Interiors' },
  { src: '/slide3.jpg', alt: 'Cozy Atmosphere' },
  { src: '/slide4.jpg', alt: 'Premium Bedding' },
  { src: '/2bed.jpg', alt: 'Classic Standard Room View' },
  { src: '/2bed2.jpg', alt: 'Classic Standard Room Comfort' },
  { src: '/2bed3.jpg', alt: 'Classic Standard Room Layout' },
  { src: '/3bed.jpg', alt: 'Luxury Family Suite' },
  { src: '/3bed2.jpg', alt: 'Luxury Family Suite Layout' },
  { src: '/3bed3.jpg', alt: 'Luxury Family Suite Comfort' },
  { src: '/bath.jpeg', alt: 'Modern Clean Bathroom' },
  { src: '/Corridor.JPG', alt: 'Quiet Corridors' },
  { src: '/staircase.JPG', alt: 'Elegant Staircase' },
  { src: '/Frontview.JPG', alt: 'Hotel Exterior View' },
  { src: '/Parking.JPG', alt: 'Secure Parking Area' },
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
