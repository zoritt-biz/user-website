import React from 'react';
import { Search } from '@material-ui/icons';
import { TextField, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment } from '@material-ui/core';

const useStyles = makeStyles({
  iconSize: {
    fontSize: '30px',
  },
  container: {
    height: '300px',
    background: '#E3E3E3',
  },
  primaryColor: {
    color: '#DF9C20',
  },
  paper: {
    marginTop: '130px',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={`text-center w-100 px-4 align-middle ${classes.container}`}>
      <h2 className="pt-5">You can find everything in</h2>
      <h1 className={classes.primaryColor}> ዞሪት</h1>
      <Paper className={`w-100 ${classes.paper}`} elevation={0}>
        <TextField
          type="search"
          className="w-100 mt-1"
          variant="outlined"
          placeholder="What are you looking for?"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search className={classes.iconSize} />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </div>
  );
};

export default Home;
