import React from 'react';
import {Link} from 'react-router-dom';
import appStyles from '../../app-styles';

const Discover = () => {
  const classes = appStyles();
  return (
    <div className="col-md col-6 mb-5">
      <h5 className={classes.mainColor}>Discover</h5>
      <ul style={{listStyle: 'none', paddingLeft: '0px'}}>
        <li style={{marginBottom: '5px'}}>
          <Link to="/events" className={classes.link}>
            Events
          </Link>
        </li>
        <li style={{marginBottom: '5px'}}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.zoritt.user_app"
            className={classes.link}
          >
            ዞሪት mobile app
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Discover;
