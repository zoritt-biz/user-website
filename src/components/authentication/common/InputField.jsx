import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const InputField = ({
  value,
  type,
  label,
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
      label={label}
      type={type}
      className="input-items text-field mb-4 w-100"
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
