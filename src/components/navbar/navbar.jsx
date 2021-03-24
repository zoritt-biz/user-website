import React from 'react';
import { Button } from '@material-ui/core';

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container justify-content-between">
          <button
            className="navbar-toggler mx-4"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <a
            style={{ color: '#DF9C20' }}
            className="navbar-brand fs-1 "
            href="/#"
          >
            ዞሪት
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-4">
                <a className="nav-link light" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/#">
                  Search
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/#">
                  Favourites
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/#">
                  Add
                </a>
              </li>
              <Button variant="outlined" className="mx-4  button-style">
                Login
              </Button>

              <Button variant="outlined" className="mx-4 button-style-signup">
                Sign Up
              </Button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
