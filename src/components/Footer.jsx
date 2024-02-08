


// Footer.js
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div  >
            <p>&copy; {currentYear} All rights reserved</p>
        </div>
    );
};

export default Footer;
