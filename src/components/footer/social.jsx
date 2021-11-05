import React from 'react';
import { Link } from 'react-router-dom';
import appStyles from '../../app-styles';
import Playstore from '../../assets/images/playstore.svg';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  playstore: {
    width: '147px',
    height: '50px',
    border: 'none',
    backgroundColor: 'black',
    borderRadius: '5px',
    color: 'white',
  },
}));

const Social = () => {
  const classes = appStyles();
  const socialClass = useStyles();
  return (
    <div>
      <h5 className="footer-color mb-4 d-flex justify-content-center">
        Follow us
      </h5>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none !important',
          marginBottom: '24px',
          justifyContent: 'center',
          paddingLeft: '0px',
        }}
      >
        <li style={{ marginBottom: '5px' }}>
          <a
            href="https://www.facebook.com/ZorittFB"
            target="_blank"
            className={classes.link}
            rel="noreferrer"
          >
            <i
              style={{ marginRight: '24px', color: '#4267b2' }}
              className="fab fa-facebook-f fa-2x"
            />
          </a>
          <a href="/#" target="_blank" className={classes.link}>
            <i
              style={{ marginRight: '24px', color: '#1da1f2' }}
              className="fab fa-twitter fa-2x"
            />
          </a>
          <a
            href="https://www.instagram.com/zor.itt/"
            target="_blank"
            className={classes.link}
            rel="noreferrer"
          >
            <i
              style={{ marginRight: '24px', color: '#e1306c' }}
              className="fab fa-instagram fa-2x"
            />
          </a>
          <a href="/#" target="_blank" className={classes.link}>
            <i
              style={{ color: '#0088cc' }}
              className="fab fa-telegram-plane fa-2x"
            />
          </a>
        </li>
      </ul>
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.zoritt.user_app"
        className={classes.link}
        rel="noreferrer"
      >
        <button
          style={{
            display: 'flex',
            margin: 'auto ',
            paddingTop: '7px',
            paddingLeft: '12px',
            marginBottom: '10px',
          }}
          className={socialClass.playstore}
        >
          <img
            src={Playstore}
            alt="playstore"
            style={{ width: '33px', display: 'flex', mr: 3, my: 'auto' }}
          />
          <Box display="flex" flexDirection="column">
            <Typography
              component="span"
              sx={{ fontSize: '10px', opacity: '0.7', mr: 'auto' }}
            >
              {' '}
              GET IT ON
            </Typography>

            <span>Google Play</span>
          </Box>
        </button>
      </a>

      <Typography component="h6" sx={{ mb: 4, mt: 3, textAlign: 'center' }}>
        Copyright
        <span>
          <i
            style={{ marginLeft: '5px', marginRight: '5px' }}
            className="far fa-copyright fa-sm"
          />
        </span>
        {new Date().getFullYear()}{' '}
        <span className={classes.mainColor}>ዞሪት</span> ETHIOPIA All rights
        reserved.{' '}
        <Link to="/terms-of-service" className={classes.link}>
          Terms of Use
        </Link>{' '}
        |{' '}
        <Link to="/privacy-policy" className={classes.link}>
          Privacy Policy
        </Link>
      </Typography>
    </div>
  );
};

export default Social;
