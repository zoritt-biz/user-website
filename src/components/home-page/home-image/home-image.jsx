import React, { useEffect, useRef, useState } from 'react';
import './home-image-style.css';
import SearchPaper from '../search-bar/search-paper';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import searchBarStyles from '../search-bar/search-bar-styles';

const delay = 8000;

const HomeImage = ({ images }) => {
  const classes = searchBarStyles();
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Box
      className="hero-cont"
      width="100%"
      overflow="hidden"
      position="relative"
      sx={{ mt: '66px' }}
    >
      <Box
        className="slideshowSlider hero"
        position="absolute"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="business_picture"
            className="dashboard-pic-back"
          />
        ))}
      </Box>
      <Box
        className="slideshowSlider hero"
        position="absolute"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <img src={image} alt="business_picture" className="dashboard-pic" />
        ))}
      </Box>
      <Box className={classes.searchContainer}>
        <Box mb={2} width={'100%'}>
          <Link to="/search">
            <SearchPaper />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeImage;
