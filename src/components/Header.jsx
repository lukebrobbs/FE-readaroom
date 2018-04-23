import React from 'react';
import logo from '../images/logo.png';

const Header = () => (
  <header className="container-fluid bg-dark py-4">
    <div className="container justify-content-between">
      <figure>
        <img
          className="d-inline mr-4 float-left"
          src={logo}
          height="100px"
          width="100px"
          alt="Read a room logo, a green square with rounded edges and two r characters"
        />
      </figure>
      <h1 className="display-1 text-center text-success font-weight-bold d-inline">
        Read a Room
      </h1>
    </div>
  </header>
);

export default Header;
