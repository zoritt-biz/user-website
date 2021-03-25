import React from 'react';
import About from './About';
import Discover from './Discover';
import Social from './Social';
import Business from './Business';

const Footer = () => {
  return (
    <footer className="pt-4  my-md-5 pt-md-5 container">
      <div className="row footer-container-row mb-3">
        <About />
        <Discover />
        <Business />
      </div>
      <Social />
    </footer>
  );
};

export default Footer;
