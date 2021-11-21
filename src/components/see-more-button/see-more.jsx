import React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import {Box} from '@mui/material';
import appStyles from '../../app-styles';

const SeeMore = () => {
  const classes = appStyles();
  return (
    <>
      <Box
        mt={5}
        display="flex"
        justifyContent="center"
        pb={5}
        borderBottom="1px solid #e1e1e1"
      >
        <Link to="/sponsored" className={classes.link}>
          <Button
            size="large"
            disableElevation
            sx={{color: 'white', textTransform: 'capitalize'}}
            variant="contained"
          >
            See More
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default SeeMore;
