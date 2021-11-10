import { useHistory } from 'react-router-dom';
import React from 'react';
import appStyles from '../../app-styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = () => {
  const history = useHistory();
  const classes = appStyles();
  return (
    <ArrowBackIcon
      onClick={() => history.goBack()}
      className={classes.goBack}
    />
  );
};

export default BackButton;
