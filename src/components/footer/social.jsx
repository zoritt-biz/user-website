import React from 'react';
import { Link } from 'react-router-dom';
import appStyles from '../../app-styles';
import Playstore from '../../assets/images/playstore.svg';
import { Box, Typography } from '@mui/material';
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
      <Box mb={4} className={classes.mainColor} textAlign="center">
        <h5>Follow us</h5>
      </Box>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
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
            alt="play"
            style={{ width: '33px', display: 'flex', mr: 3, my: 'auto' }}
          />
          <Box display="flex" flexDirection="column">
            <Typography
              fontSize="10px"
              mr="auto"
              component="span"
              sx={{ opacity: '0.7' }}
            >
              GET IT ON
            </Typography>

            <Typography component="span">Google Play</Typography>
          </Box>
        </button>
      </a>

      <Box mb={4} mt={3} textAlign="center">
        <Typography component="h6">
          Copyright
          <span>
            <Box ml={1} mr={1} display="inline">
              <i className="far fa-copyright fa-sm" />
            </Box>
          </span>
          {new Date().getFullYear()}{' '}
          <span className={classes.mainColor}>ዞሪት</span> ETHIOPIA. All rights
          reserved.{' '}
          <Link to="/terms-of-service" className={classes.link}>
            Terms of Use
          </Link>{' '}
          |{' '}
          <Link to="/privacy-policy" className={classes.link}>
            Privacy Policy
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Social;
