import React from 'react';
import { Button, Box } from '@mui/material';
const style = {
  background: '-webkit-linear-gradient(#4285f4, #db4437, #f4b400, #0f9d58)',
  // -webkit-background-clip: "text",
  backgroundClip: 'text',
  // -webkit-text-fill-color: "transparent",
  marginRight: '15px',
};

const Social = ({ text1, text2 }) => {
  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'flex' },
        justifyContent: { md: 'space-around' },
      }}
      textAlign="center"
    >
      <Button
        variant="outlined"
        startIcon={
          <i
            styles={{ marginRight: '5px', color: '#4267b2' }}
            className="fab fa-facebook-f fa-2x "
          />
        }
        sx={{ textTransform: 'capitalize', width: { sm: '250px', md: 'auto' } }}
      >
        {text1}
      </Button>
      <Button
        variant="outlined"
        startIcon={<i styles={style} className="fab fa-google fa-2x" />}
        sx={{ textTransform: 'capitalize', width: { sm: '250px', md: 'auto' } }}
      >
        {text2}
      </Button>
    </Box>
  );
};

export default Social;
