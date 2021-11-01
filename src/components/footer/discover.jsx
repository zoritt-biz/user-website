import React from 'react';
import {Link} from 'react-router-dom';

const Discover = () => {
  return (
    <div className="col-md col-6 mb-5">
      <h5 className="footer-color ">Discover</h5>
      <ul className="list-unstyled text-small">
        <li className="mb-1">
          <Link to="/events" className="link-secondary text-decoration-none">
            Events
          </Link>
        </li>
        <li className="mb-1">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.zoritt.user_app"
            className="link-secondary text-decoration-none"
          >
            ዞሪት mobile app
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Discover;
