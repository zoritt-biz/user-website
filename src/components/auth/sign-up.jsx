import React, {useState} from "react";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";

import {Avatar, CircularProgress, Dialog, Paper, TextField, Typography,} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import {registerUser} from "../../store/auth/auth.utils";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(true);
  const [open, setOpen] = useState(true);

  const {
    signUpError,
    isLoggedIn,
    errorMessage,
    isLoggingIn,
    localization,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordMismatch)
      props.signUp({email, firstName, middleName, password});
  };

  if (isLoggedIn) {
    return <Redirect to="/"/>;
  } else if (!open) {
    return <Redirect to="/"/>;
  } else {
    return (
      <Dialog onClose={() => setOpen(false)} open={open}>
        <form onSubmit={handleSubmit} className="">
          {isLoggingIn ? (
            <div className="position-relative px-3 py-2">
              <CircularProgress/>
            </div>
          ) : (
            <Paper className="DDD">
              <Avatar className="avatar" component="div">
                <LockOutlinedIcon/>
              </Avatar>
              <Typography component="h1" variant="h5">
                {localization.signUp}
              </Typography>
              <TextField
                required
                fullWidth
                autoFocus
                id="email"
                label={localization.emailAddress}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="my-2"
              />
              <TextField
                required
                fullWidth
                id="firstName"
                label={localization.firstName}
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                className="my-2"
              />
              <TextField
                required
                fullWidth
                id="middleName"
                label={localization.middleName}
                name="middleName"
                onChange={(e) => setMiddleName(e.target.value)}
                className="my-2"
              />
              <TextField
                required
                fullWidth
                name="password"
                label={localization.password}
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="my-2"
              />
              <TextField
                required
                fullWidth
                name="rePassword"
                label={localization.confirmPassword}
                type="password"
                id="rePassword"
                onChange={(e) =>
                  setPasswordMismatch(e.target.value === password)
                }
                className="my-2 text-nowrap"
              />
              {!passwordMismatch && (
                <Typography component="p" className="errorText small">
                  password doesn't match
                </Typography>
              )}
              {signUpError && (
                <Typography component="p" className="errorText small">
                  {errorMessage.message}
                </Typography>
              )}
              <button
                type="submit"
                style={{width: "100%"}}
                className="btn-custom my-3 btn"
              >
                {localization.signUp}
              </button>
              <div className="small">
                <Link to="/signin" variant="body2">
                  {localization.alreadyHaveAnAccount}
                </Link>
              </div>
            </Paper>
          )}
        </form>
      </Dialog>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    signUpError: state.auth.signUpError,
    isLoggingIn: state.auth.isLoggingIn,
    isLoggedIn: state.auth.isLoggedIn,
    errorMessage: state.auth.errorMessage,
    localization: state.localization.chosenLanguage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(registerUser(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
