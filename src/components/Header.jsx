import React from 'react';
import banner from '../images/RAR-header-lighter.png';

const Header = () => (
  <header>
    <figure>
      <img
        className="shadow-lg"
        src={banner}
        height="100%"
        width="100%"
        alt="Read a room logo, a green square with rounded edges and two r characters"
      />
    </figure>
  </header>
);

export default Header;
