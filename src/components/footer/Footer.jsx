import React from 'react';

const footer = () => {
  return (
    <footer className="pt-4  my-md-5 pt-md-5 container">
      <div className="row footer-container-row mb-3">
        <div className="col-md col-6 mb-5">
          <h5 className="footer-color ">About</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                About ዞሪት
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Contact Us
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Site Feedback
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Content Guidlines
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Terms Of Service
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Privacy Policy
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Become የዞሪት ቤተሰብ
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md col-6 mb-5">
          <h5 className="footer-color ">Discover</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                My Account
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Events
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Support
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                ዞሪት ሞባይል
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Developers
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md col-6 mb-5">
          <h5 className="footer-color ">ዞሪት for Business</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Claim your Business Account
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Advertise on ዞሪት
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Set your Business Plan
              </a>
            </li>
            <li className="mb-1">
              <a href="/#" className="link-secondary text-decoration-none">
                Register your Businesss
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h5 className="footer-color mb-4 d-flex justify-content-center">
        Follow us
      </h5>
      <ul className="list-unstyled text-small d-block d-flex justify-content-center mb-5">
        <li className="mb-1">
          <a
            href="/#"
            className="link-secondary text-decoration-none container"
          >
            <i className="fab fa-facebook-f fa-2x facebook mr-4"></i>
            <i className="fab fa-twitter fa-2x  twitter mr-4"></i>
            <i className="fab fa-instagram fa-2x instagram mr-4"></i>
            <i className="fab fa-telegram-plane fa-2x telegram"></i>
          </a>
        </li>
      </ul>
      <h6 className="d-flex justify-content-center">
        Copyright{'  '}
        <span>
          {' '}
          <i className="far fa-copyright mx-1 fa-sm"></i>
        </span>{' '}
        2020 <span className="ዞሪት fs-6 mx-1">ዞሪት</span> ETH, Inc. All rights
        reserved. Terms of Use | Privacy Policy
      </h6>
    </footer>
  );
};

export default footer;
