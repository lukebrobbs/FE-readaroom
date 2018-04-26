import React from "react";
import banner from "../images/RAR-header-light.png";

const Header = () => (
  <header>
    <figure>
      <img
        // className="d-inline mr-4 float-left"
        src={banner}
        height="100%"
        width="100%"
        alt="Read a room logo, a green square with rounded edges and two r characters"
      />
    </figure>
  </header>
);

export default Header;
