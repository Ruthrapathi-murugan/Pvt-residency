import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Rooms.css";

const rooms = [
  {
    title: "Deluxe Rooms",
    occupancy: "2 Adults",
    description:
      "Our Deluxe Rooms are designed for comfort and convenience, offering modern interiors and spacious layouts. Ideal for business and leisure travelers alike, each room is equipped with contemporary furnishings and essential amenities for a restful stay.",
    features:
      "Bed, flat-screen TV, central A/C, private bathroom with hot water, writing desk, and 24/7 room service.",
    image: "/slide1.jpg",
  },
  {
    title: "Standard Rooms",
    occupancy: "2 Adults",
    description:
      "Perfect for short stays or budget-conscious travelers, our Standard Rooms provide all the essentials with no compromise on comfort.",
    features:
      "Comfortable bedding, flat-screen TV, centralized A/C, private bath, complimentary Wi-Fi, and round-the-clock service.",
    image: "/slide4.jpg",
  },
  {
    title: "Family Rooms",
    occupancy: "4 Adults",
    description:
      "Spacious and welcoming, our Family Rooms are ideal for small families or groups looking for comfort and convenience under one roof.",
    features:
      "Multiple beds, additional seating area, flat-screen TV, centralized A/C, intercom, and a spacious bathroom with hot water.",
    image: "./slide4.jpg",
  },
];

const amenities = [
  "Free Wi-Fi in all rooms and common areas",
  "24/7 Room Service for your comfort and convenience",
  "Hot Water available round the clock",
  "Wake-Up Call Service on request",
  "Air Conditioning in all rooms",
  "Lift access to all floors",
  "Flat-Screen TVs in every room",
  "Ample Car Parking space for guests",
  "Intercom facility for internal communication",
];

const Rooms = () => {
  return (
    <section className="py-5 bg-light room-section" id="rooms">
      <Container>
        <h2 className="text-center mb-5 fw-bold section-title">
          Choose Your Room
        </h2>

        {rooms.map((room, index) => (
          <Row
            key={index}
            className="mb-5 align-items-center animated-room-section"
          >
            <Col md={6} className={index % 2 === 0 ? "" : "order-md-2"}>
              <Image
                src={room.image}
                alt={room.title}
                fluid
                className="rounded shadow-lg hover-zoom room-image"
              />
            </Col>

            <Col md={6} className="room-details animate-fade-in">
              <h3 className="fw-semibold text-primary">{room.title}</h3>
              <p>
                <strong>Occupancy:</strong> {room.occupancy}
              </p>
              <p>{room.description}</p>
              <p>
                <strong>Features:</strong> {room.features}
              </p>
              <h6 className="mt-3 text-secondary">Amenities</h6>
              <ul className="list-unstyled">
                {amenities.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <Button
                variant="primary"
                href="https://www.booking.com/hotel/in/pvt-residency.en-gb.html?aid=2311236&label=en-in-booking-desktop-SoQWfYhAMBURf0HSQntj1AS652796016141%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-334108349%3Alp9062010%3Ali%3Adec%3Adm&sid=aedd892810be0f8ddb58c93cf05b6fd8&all_sr_blocks=1442808803_415723496_2_0_0&checkin=2025-07-05&checkout=2025-07-06&dest_id=-2106913&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=4&highlighted_blocks=1442808803_415723496_2_0_0&hpos=4&matching_block_id=1442808803_415723496_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1442808803_415723496_2_0_0__90000&srepoch=1750857180&srpvid=ee35f0b8020d37036696091568d9da18&type=total&ucfs=1&" // replace with your actual Booking.com link
                className="mt-3 shadow book-btn"
                target="_blank" // opens in new tab
                rel="noopener noreferrer"
              >
                Book Now
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Rooms;
