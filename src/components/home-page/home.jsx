import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import SearchPaper from './search';
import { Link } from 'react-router-dom';

const delay = 8000;

const Home = ({ images }) => {
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
    <div className="hero-cont w-100 overflow-hidden position-relative">
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

      <div className="position-absolute d-flex w-100 p-3 h-100" />
      <div className="position-absolute d-flex w-100 p-3 h-100">
        <div className="w-100 align-self-end">
          <h1 className="text-white font-weight-bold text-truncate">
            <Link to="/search" className="search-paper-container">
              <SearchPaper />
            </Link>
          </h1>
        </div>
      </div>

      {/*<div className="slideshowDots">*/}
      {/*  {images.map((_, idx) => (*/}
      {/*    <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}*/}
      {/*         onClick={() => {*/}
      {/*           setIndex(idx);*/}
      {/*         }}/>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
};

export default Home;
