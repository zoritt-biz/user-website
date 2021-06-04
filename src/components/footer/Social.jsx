import React from 'react';

const Social = () => {
  return (
    <div>
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
      <h6 className="text-center mb-4">
        Copyright
        <span>
          <i className="far fa-copyright fa-sm mx-1"></i>
        </span>
        2020 <span className="ዞሪት fs-6">ዞሪት</span> ETH, Inc. All rights
        reserved. Terms of Use | Privacy Policy
      </h6>
    </div>
  );
};

export default Social;