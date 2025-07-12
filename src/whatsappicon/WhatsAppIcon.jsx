import React from 'react'
import './WhatsAppIcon.css'

const Landing = () => {
    return (
        <div className="main-container">
            <a
                href="https://wa.me/919701303201"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa fa-whatsapp whatsapp-icon" />
            </a>
        </div>
    );
};

export default Landing;
