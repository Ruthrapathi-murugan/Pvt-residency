import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold heading-glow">Contact Us</h2>

        <Row className="mb-5 contact-card shadow-lg rounded-4 p-4">
          <Col md={6} className="info-column">
            <h5 className="fw-bold text-primary">Pvt Residency</h5>
            <p><strong>Address:</strong><br />172/1, Pattali Street, Kurumbapatti, Adivaram, Palani,<br />Tamil Nadu, India</p>
            <p><strong>Phone:</strong> <a href="tel:+919952161959">+91 99521-61959</a></p>
            <p><strong>Email:</strong> <a href="mailto:pvtresidency@gmail.com">pvtresidency@gmail.com</a></p>

            <div className="map-responsive mt-4 rounded-4 shadow">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1309.3838618204213!2d77.52162966005933!3d10.443912215665433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9de66ce6a9173%3A0x57ac49a0f712d146!2sPVT%20ROYAL%20RESIDENCY%20LODGE!5e0!3m2!1sen!2sin!4v1750840962831!5m2!1sen!2sin"
                width="100%"
                height="250"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>

          <Col md={6} className="form-column">
            <Form className="bg-white p-4 rounded-4 shadow contact-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Type your message here..." required />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit" className="rounded-3 shadow-sm">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;