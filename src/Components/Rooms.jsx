import React, { useState } from "react";
import { Container, Row, Col, Button, Image, Badge, Carousel } from "react-bootstrap";
import BookNowModal from "./BookNowModal";
import "./Rooms.css";

const rooms = [
  {
    title: "Premium Deluxe Room", // Updated Title for luxury feel
    occupancy: "2 Adults",
    size: "200 sq.ft.",
    price: "₹2,500",
    description:
      "Our elegantly appointed Deluxe Rooms offer a perfect blend of comfort and modern aesthetics. Ideal for relaxation after a temple visit or business meetings.",
    features: "Plush King Size Bed, Smart TV, Central A/C, Premium Bath Amenities, Work Desk.",
    images: ["/slide1.jpg", "/2bed.jpg", "/2bed2.jpg"],
    tags: ["Most Popular", "City View"],
  },
  {
    title: "Classic Standard Room (Non AC)",
    occupancy: "2 Adults",
    size: "200 sq.ft.",
    price: "₹2,000",
    description:
      "A peaceful retreat offering essential modern comforts in a thoughtfully designed space. Perfect for brief stays.",
    features: "Comfortable Queen Bed, Flat-screen TV, En-suite Bathroom, Complimentary Wi-Fi.",
    images: ["/slide4.jpg", "/2bed3.jpg", "/bath.jpeg"],
    tags: ["Great Value"],
  },
  {
    title: "Luxury Family Suite",
    occupancy: "3 Adults",
    size: "200 sq.ft.",
    price: "₹3,000",
    description:
      "Expansive and inviting, our Family Suites provide ample space for everyone to relax. Features a dedicated lounging area.",
    features: "Two King Beds, Spacious Seating Area, Smart TV, Central A/C, Double Vanity Bathroom.",
    images: ["/3bed.jpg", "/3bed2.jpg", "/3bed3.jpg", "/slide4.jpg"],
    tags: ["Spacious", "Families"],
  },
];

const amenities = [
  { icon: "bi-wifi", text: "High-Speed Wi-Fi" },
  { icon: "bi-cup-hot", text: "24/7 Room Service" },
  { icon: "bi-droplet", text: "24/7 Hot Water" },
  { icon: "bi-snow", text: "Air Conditioning" },
  { icon: "bi-tv", text: "Smart HD TVs" },
  { icon: "bi-car-front", text: "Ample Parking" },
];

const Rooms = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="py-5 bg-white room-section" id="rooms">
      <Container className="py-3">
        <div className="text-center mb-5">
          <h6 className="text-secondary text-uppercase fw-bold mb-2 tracking-wide">Our Accommodations</h6>
          <h2 className="section-title text-primary display-6 fw-bold">Experience True Comfort</h2>
        </div>

        {rooms.map((room, index) => (
          <Row
            key={index}
            className="mb-5 align-items-center room-card-wrapper shadow-sm rounded-4 overflow-hidden bg-light"
          >
            <Col md={6} className={`p-0 ${index % 2 === 0 ? "" : "order-md-2"}`}>
              <div className="room-image-container position-relative overflow-hidden h-100">
                <Carousel
                  fade
                  indicators={false}
                  controls={true}
                  interval={3000}
                  className="h-100 room-carousel"
                >
                  {room.images.map((imgSrc, imgIdx) => (
                    <Carousel.Item key={imgIdx} className="h-100">
                      <Image
                        src={imgSrc}
                        alt={`${room.title} image ${imgIdx + 1}`}
                        className="w-100 h-100 object-fit-cover room-image transition-transform"
                        style={{ minHeight: '350px' }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>

                <div className="position-absolute top-0 start-0 p-3" style={{ zIndex: 10 }}>
                  {room.tags.map((tag, i) => (
                    <Badge bg="secondary" className="me-2 fw-normal py-2 px-3 shadow-sm" key={i}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>

            <Col md={6} className="p-4 p-lg-5 room-details bg-white h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="pe-3">
                  <h3 className="fw-bold text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{room.title}</h3>
                  <h4 className="fw-bold text-success mb-0">{room.price} <span className="text-muted small fw-normal fs-6">/ night</span></h4>
                </div>
                <Badge bg="light" text="dark" className="border px-3 py-2 small fw-semibold"><i className="bi bi-arrows-fullscreen me-1"></i>{room.size}</Badge>
              </div>
              <p className="text-secondary fw-semibold mb-3">
                <i className="bi bi-person-fill me-2"></i>Up to {room.occupancy}
              </p>
              <p className="text-muted mb-4 lh-lg">{room.description}</p>

              <div className="mb-4">
                <h6 className="fw-bold text-dark mb-2">Room Features:</h6>
                <p className="text-muted small">{room.features}</p>
              </div>

              <hr className="my-4 text-muted opacity-25" />

              <Button
                variant="primary"
                onClick={handleShowModal}
                className="btn-primary w-100 py-3 fw-bold text-uppercase shadow-sm"
                style={{ letterSpacing: '1px' }}
              >
                Book This Room
              </Button>
            </Col>
          </Row>
        ))}

        {/* Global Amenities Overview */}
        <div className="mt-5 pt-5 border-top">
          <h4 className="text-center mb-4 text-primary fw-bold" style={{ fontFamily: 'var(--font-heading)' }}>Complimentary Amenities</h4>
          <Row className="g-4 text-center justify-content-center">
            {amenities.map((item, i) => (
              <Col xs={6} md={4} lg={2} key={i}>
                <div className="amenity-item p-3 rounded-3 bg-light transition-hover">
                  <i className={`bi ${item.icon} fs-3 text-secondary mb-2 d-block`}></i>
                  <span className="small fw-semibold text-dark">{item.text}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      <BookNowModal show={showModal} handleClose={handleCloseModal} />
    </section>
  );
};

export default Rooms;
