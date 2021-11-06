import React from 'react';
import {IconButton, InputAdornment, TextField} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import appStyles from '../../app-styles';

const InputField = ({
                      value,
                      type,
                      label,
                      setValue,
                      inputProps,
                      showText,
                      handleClick,
                    }) => {
  const classes = appStyles();
  return (
    <TextField
      required
      value={value}
      variant="standard"
      label={label}
      type={type}
      sx={{mb: 4, width: {xs: '100%', sm: '60%'}}}
      className={classes.mainColor}
      onChange={setValue}
      InputProps={
        inputProps && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
              >
                {showText ? <Visibility/> : <VisibilityOff/>}
              </IconButton>
            </InputAdornment>
          ),
        }
      }
    />
  );
};

export default InputField;
