import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-section py-5 bg-light">
      <Container className="py-4">
        <div className="text-center mb-5">
          <h6 className="text-secondary text-uppercase fw-bold mb-2 tracking-wide">Get in Touch</h6>
          <h2 className="section-title text-primary display-6 fw-bold">Contact Us</h2>
        </div>

        <Row className="g-4 g-lg-5 align-items-stretch">
          {/* Contact Information & Map */}
          <Col lg={5} className="d-flex">
            <Card className="w-100 border-0 shadow-lg rounded-4 overflow-hidden info-card bg-primary text-white">
              <Card.Body className="p-4 p-md-5 d-flex flex-column h-100">
                <h4 className="fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  PVT Residency
                </h4>

                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-geo-alt-fill fs-4 text-secondary me-3 mt-1"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Location</h6>
                    <p className="mb-0 text-white-50 lh-base">
                      172/1, Pattali Street, Kurumbapatti, Adivaram,<br />Palani, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-telephone-fill fs-4 text-secondary me-3 mt-1"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Phone</h6>
                    <a href="tel:+919952161959" className="text-white-50 text-decoration-none phone-link">+91 99521-61959</a>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-5">
                  <i className="bi bi-envelope-fill fs-4 text-secondary me-3 mt-1"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Email</h6>
                    <a href="mailto:pvtresidency@gmail.com" className="text-white-50 text-decoration-none email-link">pvtresidency@gmail.com</a>
                  </div>
                </div>

                <div className="map-responsive mt-auto rounded-3 shadow-sm border border-secondary border-opacity-25 overflow-hidden">
                  <iframe
                    title="PVT Residency Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1309.3838618204213!2d77.52162966005933!3d10.443912215665433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9de66ce6a9173%3A0x57ac49a0f712d146!2sPVT%20ROYAL%20RESIDENCY%20LODGE!5e0!3m2!1sen!2sin!4v1750840962831!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    allowFullScreen=""
                    loading="lazy"
                    className="border-0 m-0 p-0 d-block"
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col lg={7} className="d-flex">
            <Card className="w-100 border-0 shadow-lg rounded-4 form-card bg-white">
              <Card.Body className="p-4 p-md-5">
                <h4 className="fw-bold text-dark mb-4 text-center text-lg-start">Send Us a Message</h4>
                <p className="text-muted mb-4 text-center text-lg-start">Have any questions? We'd love to hear from you.</p>

                <Form className="contact-form">
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Label className="small fw-semibold text-secondary-emphasis">Full Name</Form.Label>
                        <Form.Control type="text" placeholder="John Doe" required className="py-2 px-3 custom-input" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Label className="small fw-semibold text-secondary-emphasis">Email Address</Form.Label>
                        <Form.Control type="email" placeholder="john@example.com" required className="py-2 px-3 custom-input" />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group controlId="formSubject">
                        <Form.Label className="small fw-semibold text-secondary-emphasis">Subject</Form.Label>
                        <Form.Control type="text" placeholder="Room Inquiry" required className="py-2 px-3 custom-input" />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group controlId="formMessage">
                        <Form.Label className="small fw-semibold text-secondary-emphasis">Your Message</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="How can we help you?" required className="py-2 px-3 custom-input" />
                      </Form.Group>
                    </Col>

                    <Col xs={12} className="mt-4">
                      <Button variant="primary" type="submit" size="lg" className="w-100 fw-bold shadow-sm py-3 text-uppercase" style={{ letterSpacing: '1px' }}>
                        Send Message <i className="bi bi-send-fill ms-2"></i>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;;