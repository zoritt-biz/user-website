import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import appStyles from '../../app-styles';

const About = () => {
  const classes = appStyles();
  return (
    <Box className="col-md col-6 mb-5">
      <h5 className={classes.mainColor}>About</h5>
      <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
        <li style={{ marginBottom: '5px' }}>
          <Link to="/about-us" className={classes.link}>
            About us
          </Link>
        </li>
        <li style={{ marginBottom: '5px' }}>
          <Link to="/" className={classes.link}>
            Contact Us
          </Link>
        </li>
        <li style={{ marginBottom: '5px' }}>
          <Link to="/terms-of-service" className={classes.link}>
            Terms Of Service
          </Link>
        </li>
        <li style={{ marginBottom: '5px' }}>
          <Link to="/privacy-policy" className={classes.link}>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default About;
