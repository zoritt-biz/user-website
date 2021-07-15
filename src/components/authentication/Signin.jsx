import React, {useState} from 'react';
import {Checkbox, CircularProgress, FormControlLabel, Typography} from '@material-ui/core';
import {Link, Redirect} from 'react-router-dom';

import InputField from './common/InputField';
import ButtonControl from './common/ButtonControl';
import BottomText from './common/BottomText';
import TopText from './common/TopText';
import {loginUser} from "../../store/auth/auth.utils";
import {connect} from "react-redux";

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    isLoggedIn,
    isLoggingIn,
    loginError,
    error
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn({email: email, password: password});
  };

  if (isLoggedIn) {
    return <Redirect to="/"/>;
  }
  return (
    <div className="container-lg authentication-container pb-3">
      <div className="container-fluid my-auto w-100 px-0">
        <img
          src="../images/signin.png"
          alt=""
          className="w-100 d-none d-lg-flex"
        />
      </div>
      <div className="input-container w-100" style={{overflowY: 'scroll'}}>
        <TopText text="Sign in by entering information below"/>
        <form onSubmit={handleSubmit}>
          {isLoggingIn ? (
            <div className="position-relative px-3 py-2 text-center">
              <CircularProgress/>
            </div>
          ) : (
            <>
              <div className="input-items-container text-center">
                <InputField
                  value={email}
                  label="Email"
                  type="email"
                  setValue={e => setEmail(e.target.value)}
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

                <div className=" mb-5 mt-3 align-items-center">
                  <FormControlLabel
                    className="ml-0 mb-0"
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={e => setChecked(e.target.checked)}
                        color="primary"
                        className="mr-2 mb-0 checkbox"
                      />
                    }
                    label="Remember me"
                  />
                  {/*<Button*/}
                  {/*  variant="text"*/}
                  {/*  size="large"*/}
                  {/*  className="p-0 text-capitalize button-height"*/}
                  {/*>*/}
                  {/*  Forget Password?*/}
                  {/*</Button>*/}
                </div>
              </div>
              {loginError && (
                <Typography component="p" className="text-danger pb-2 small">
                  {error.message}
                </Typography>
              )}
              <ButtonControl text="Sign In"/>
              <BottomText
                text1="Don't have an account?"
                text2={
                  <Link className="text-decoration-none button-height" to="/signup">
                    Create new one
                  </Link>
                }
              />
            </>
          )}
          {/* <TextWithLine />
        <Social text1="Sign in with facebook" text2="Sign in with Google" /> */}
        </form>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(loginUser(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

