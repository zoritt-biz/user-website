import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [background, setBackground] = useState(false);
  // const [toggle, setToggle] = useState(false);

  // const handleClick = () => {
  //   setBackground(!background)
  // }

  const location = useLocation();

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark w-100 position-absolute top-0 ${
        background || location.pathname !== '/'
          ? 'toggle-click'
          : 'toggle-not-click'
      }`}
    >
      <div className="container justify-content-between">
        <button
          className="navbar-toggler mx-4"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setBackground(!background)}
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <Link
          style={{ color: '#DF9C20' }}
          className="navbar-brand fs-1 text-decoration-none"
          to="/"
        >
          ዞሪት
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-4">
              <Link className="nav-link light text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link  text-white" to="/search">
                Search
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link  text-white" to="/favourites">
                Favourites
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link  text-white" to="/events">
                Events
              </Link>
            </li>
            <Button variant="outlined" className="mx-4 text-white button-style">
              Login
            </Button>

            <Button
              variant="outlined"
              className="button-style-signup text-white"
            >
              Sign Up
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
