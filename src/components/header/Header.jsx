import React from "react";
import CTA from "./CTA.jsx";
import ME from "../../assets/selfie.jpeg";
import HeaderSocials from "./HeaderSocials.jsx";
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello, I'm </h5>
        <h1> Aston Victor </h1>
        <h5 className="text-light"> Front-end Developer </h5>
        <CTA />
        <HeaderSocials />

        <div className="selfie">
          <img src={ME} alt="selfie" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
