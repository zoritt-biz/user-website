import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
  return (
    <div className="col-md col-6 mb-5">
      <h5 className="footer-color ">About</h5>
      <ul className="list-unstyled text-small">
        <li className="mb-1">
          <Link to="/about-us" className="link-secondary text-decoration-none">
            About us
          </Link>
        </li>
        <li className="mb-1">
          <Link to="/" className="link-secondary text-decoration-none">
            Contact Us
          </Link>
        </li>
        <li className="mb-1">
          <Link to="/terms-of-service" className="link-secondary text-decoration-none">
            Terms Of Service
          </Link>
        </li>
        <li className="mb-1">
          <Link to="/privacy-policy" className="link-secondary text-decoration-none">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
