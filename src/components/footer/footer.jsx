import React from 'react';
import About from './about';
import Discover from './discover';
import Social from './social';
import Business from './business';

const Footer = () => {
  return (
    <footer className="pt-4 mt-5  my-md-5 pt-md-5 container">
      <div className="row footer-container-row mb-3">
        <About/>
        <Discover/>
        <Business/>
      </div>
      <Social/>
    </footer>
  );
};

export default Footer;
