import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import React from 'react';
import appStyles from '../../app-styles';

const BackButton = () => {
  const history = useHistory();
  const classes = appStyles();
  return (
    <Button
      variant="contained"
      onClick={() => history.goBack()}
      className={classes.goBack}
    >
      Go Back
    </Button>
  );
};

export default BackButton;
