import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    // Replace with the actual WhatsApp number
    const phoneNumber = "919952161959";
    const message = "Hello! I would like to know more about PVT Residency.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float bg-success text-white d-flex align-items-center justify-content-center shadow-lg hover-scale"
            aria-label="Chat with us on WhatsApp"
        >
            <i className="bi bi-whatsapp fs-3"></i>
        </a>
    );
};

export default WhatsAppButton;
