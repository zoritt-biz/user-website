import React from 'react';
import {Box} from '@mui/material';
import appStyles from '../../app-styles';

const Business = () => {
  const classes = appStyles();
  return (
    <Box className="col-md col-6 mb-5">
      <h5 className={classes.mainColor}>ዞሪት for Business</h5>
      <ul style={{listStyle: 'none', paddingLeft: '0px'}}>
        <li style={{marginBottom: '5px'}}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://business.zoritt.com"
            className={classes.link}
          >
            Create your Business Account
          </a>
        </li>
      </ul>
    </Box>
  );
};

export default Business;
