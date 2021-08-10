import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import {Link, useLocation} from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import {connect} from "react-redux";
import {logoutUser} from "../../store/auth/auth.utils";

const Navbar = (props) => {
  const [background, setBackground] = useState(false);

  const {isLoggedIn} = props;

  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark w-100 position-absolute top-0 toggle-not-click"
      // className={`navbar navbar-expand-lg navbar-dark w-100 position-absolute top-0 ${
      //   background || location.pathname !== '/'
      //     ? 'toggle-click'
      //     : 'toggle-not-click'
      // }`}
    >
      <div className="container justify-content-between">
        <button
          className="navbar-toggler mx-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setBackground(!background)}
        >
          <span className="navbar-toggler-icon "/>
        </button>

        <div className="">
          <Link
            style={{color: '#DF9C20', width: '50px'}}
            className="navbar-brand fs-1 text-decoration-none"
            to="/"
          >
            <img src={logo} alt="logo" className="w-100"/>
          </Link>
          <Link to="/">
            <h4 style={{color: '#DF9C20'}}
                className="navbar-brand fs-1 text-decoration-none">ዞሪት
            </h4>
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-3">
              <Link className="nav-link light text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link  text-white" to="/search">
                Search
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link  text-white" to="/events">
                Events
              </Link>
            </li>
            {isLoggedIn ?
              <li>
                <Button
                  variant="outlined"
                  className="mx-3 text-white button-style text-nowrap"
                  onClick={() => props.signOut()}
                >
                  Logout
                </Button>
              </li>
              : (
                <>
                  <Link to="/signin" className="text-decoration-none">
                    <Button
                      variant="outlined"
                      className="mx-3 text-white button-style text-nowrap"
                    >
                      Sign In
                    </Button>
                  </Link>

                  <Link to="/signup" className="text-decoration-none">
                    <Button
                      variant="outlined"
                      className="button-style-signup text-white text-nowrap"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(logoutUser()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
