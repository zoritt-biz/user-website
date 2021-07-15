import React, {useState} from 'react';

import {CircularProgress, Typography} from '@material-ui/core';

import {Link, Redirect} from 'react-router-dom';

import TopText from './common/TopText';
import InputField from './common/InputField';
import ButtonControl from './common/ButtonControl';
import BottomText from './common/BottomText';
import {registerUser} from "../../store/auth/auth.utils";
import {connect} from "react-redux";

const Signup = (props) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    isSigningUp,
    signUpError,
    error,
    isLoggedIn
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUp({firstName, middleName, lastName, email, phoneNumber, password});
  };

  if (isLoggedIn) {
    return <Redirect to="/"/>
  }
  return (
    <div className="container-lg d-lg-flex authentication-container">
      <div className="input-container w-100 my-5" style={{overflowY: 'scroll'}}>
        <TopText text="Sign up by entering information below"/>
        <form onSubmit={handleSubmit} className="">
          {isSigningUp ? (
            <div className="position-relative px-3 py-2 text-center">
              <CircularProgress/>
            </div>
          ) : (
            <>
              <div className="input-items-container text-center">
                <InputField
                  value={firstName}
                  label="First Name"
                  type="text"
                  setValue={e => setFirstName(e.target.value)}
                />
                <InputField
                  value={middleName}
                  label="Middle Name"
                  type="text"
                  setValue={e => setMiddleName(e.target.value)}
                />
                <InputField
                  value={lastName}
                  label="Last Name"
                  type="text"
                  setValue={e => setLastName(e.target.value)}
                />
                <InputField
                  value={email}
                  label="Email"
                  type="email"
                  setValue={e => setEmail(e.target.value)}
                />
                <InputField
                  value={phoneNumber}
                  label="Phone Number"
                  type="number"
                  setValue={e => setPhoneNumber(e.target.value)}
                />
                <InputField
                  value={password}
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  setValue={e => setPassword(e.target.value)}
                  inputProps={true}
                  showText={showPassword}
                  handleClick={handleClickShowPassword}
                />
                <InputField
                  value={confirmPassword}
                  label="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  setValue={e => setConfirmPassword(e.target.value)}
                  inputProps={true}
                  showText={showConfirmPassword}
                  handleClick={handleClickShowConfirmPassword}
                />
                <div className="px-2 px-md-5 my-3">
                  <span>
                <span>By continuing you accept the </span>{' '}
                    <Link className="text-decoration-none" to="/">
                  Term of service
                </Link>
                <span> and </span>{' '}
                    <Link className="text-decoration-none" to="/">
                  Privacy Policy
                </Link>
              </span>
                </div>
              </div>
              <ButtonControl text="Sign Up"/>
              {signUpError && (
                <Typography component="p" className="text-danger pb-2 small">
                  {error.message}
                </Typography>
              )}
              <BottomText
                text1="Already have an account?"
                text2={
                  <Link className="text-decoration-none button-height" to="/signin">
                    Sign In
                  </Link>
                }
              />
            </>
          )}
        </form>
        {/* <TextWithLine />
        <Social text1="Sign up with facebook" text2="Sign up with google" /> */}

      </div>
      <div className="container-fluid my-auto w-100 px-0">
        <img
          src="../images/signup.png"
          alt=""
          className="w-100 d-none d-lg-flex"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSigningUp: state.auth.isSigningUp,
    signUpError: state.auth.signUpError,
    isLoggedIn: state.auth.isLoggedIn,
    error: state.auth.error,
    signUpSuccess: state.auth.signUpSuccess,
    firebaseUser: state.auth.firebaseUser,
    gqlUser: state.auth.gqlUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(registerUser(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
