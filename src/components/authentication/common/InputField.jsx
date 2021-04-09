import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const InputField = ({
  value,
  type,
  label,
  helperText,
  classes,
  setValue,
  inputProps,
  showText,
  handleClick,
}) => {
  return (
    <TextField
      required
      value={value}
      variant="standard"
      helperText={helperText}
      label={label}
      type={type}
      className={classes}
      onChange={setValue}
      InputProps={
        inputProps && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
              >
                {showText ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }
      }
    />
  );
};

export default InputField;
