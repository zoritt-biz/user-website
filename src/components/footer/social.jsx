import React from 'react';
import {Link} from 'react-router-dom';
import Playstore from '../../assets/images/playstore.svg';

const Social = () => {
  return (
    <div>
      <h5 className="footer-color mb-4 d-flex justify-content-center">
        Follow us
      </h5>
      <ul className="list-unstyled text-small d-block d-flex justify-content-center mb-4">
        <li className="mb-1">
          <a
            href="https://www.facebook.com/ZorittFB"
            target="_blank"
            className="link-secondary text-decoration-none container"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f fa-2x facebook mr-4"/>
          </a>
          <a
            href="/#"
            target="_blank"
            className="link-secondary text-decoration-none container"
          >
            <i className="fab fa-twitter fa-2x  twitter mr-4"/>
          </a>
          <a
            href="https://www.instagram.com/zor.itt/"
            target="_blank"
            className="link-secondary text-decoration-none container"
            rel="noreferrer"
          >
            <i className="fab fa-instagram fa-2x instagram mr-4"/>
          </a>
          <a
            href="/#"
            target="_blank"
            className="link-secondary text-decoration-none container"
          >
            <i className="fab fa-telegram-plane fa-2x telegram"/>
          </a>
        </li>
      </ul>
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.zoritt.user_app"
        className="text-decoration-none"
        rel="noreferrer"
      >
        <button className="d-flex m-auto py-1 mb-2 playstore">
          <img
            src={Playstore}
            alt="playstore"
            className="d-flex mr-3 my-auto"
            style={{width: '33px'}}
          />
          <div className="d-flex flex-column">
            <span
              className="mr-auto"
              style={{fontSize: '10px', opacity: '0.7'}}
            >
              GET IT ON
            </span>
            <span>Google Play</span>
          </div>
        </button>
      </a>

      <h6 className="text-center mb-4 mt-3">
        Copyright
        <span>
          <i className="far fa-copyright fa-sm mx-1"/>
        </span>
        {new Date().getFullYear()} <span className="ዞሪት fs-6">ዞሪት</span>{' '}
        ETHIOPIA All rights reserved.{' '}
        <Link to="/terms-of-service" className="text-decoration-none">
          Terms of Use
        </Link>{' '}
        |{' '}
        <Link to="/privacy-policy" className="text-decoration-none">
          Privacy Policy
        </Link>
      </h6>
    </div>
  );
};

export default Social;
