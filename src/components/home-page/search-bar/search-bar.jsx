import React, { useEffect, useRef, useState } from 'react';
import './search-bar.css';
import SearchPaper from './search-paper';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import searchBarStyles from './search-bar-styles';

const delay = 8000;

const SearchBar = ({ images }) => {
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
      className="hero-cont w-100 overflow-hidden position-relative"
      sx={{ mt: '66px' }}
    >
      <div
        className="slideshowSlider hero position-absolute"
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
      </div>
      <div
        className="slideshowSlider hero position-absolute"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <img src={image} alt="business_picture" className="dashboard-pic" />
        ))}
      </div>
      <Box className={classes.searchContainer}>
        <Link
          to="/search"
          className="search-paper-container w-100 d-flex justify-content-center mb-2"
        >
          <SearchPaper />
        </Link>
      </Box>
    </Box>
  );
};

export default SearchBar;
