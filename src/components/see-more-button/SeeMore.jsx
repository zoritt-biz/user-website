import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    background: '#DF9C20',
    textTransform: 'none',
    width: '250px',
    borderRadius: '8px',
    fontSize: '18px',
    color: '#fff',
  },
});

const SeeMore = () => {
  const classes = useStyles();
  return (
    <div className="mt-5 d-flex justify-content-center mb-5">
      <Button
        size="large"
        disableElevation
        className={classes.button}
        variant="contained"
      >
        See More
      </Button>
    </div>
  );
};

export default SeeMore;
