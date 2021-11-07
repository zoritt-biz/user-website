import React from 'react';
import { Modal, Typography, Box, Switch, Slider, Button } from '@mui/material';

const SearchModal = ({
  open,
  checked,
  sliderValue,
  valuetext,
  handleClose,
  handleChange,
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: 'none',
    outline: 'none',
    boxShadow: 24,
    p: 4,
  };

  const primaryColor = {
    color: '#1976d2',
  };

  const buttonStyle = {
    color: '#1976d2',
    textTransform: 'capitalize',
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" mb={2}>
          Filter
        </Typography>
        <Typography variant="body1" mt={2} mb={2}>
          {`Distance ${sliderValue} KM`}
        </Typography>
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={4}
          marks
          min={0}
          max={20}
          style={primaryColor}
        />

        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1">Open Now</Typography>
          <Switch checked={checked} onChange={handleChange} color="secondary" />
        </Box>

        <Box mt={2} textAlign="end">
          <Button variant="text" style={buttonStyle} onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="text" style={buttonStyle}>
            Search
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SearchModal;
