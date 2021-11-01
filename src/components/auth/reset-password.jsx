import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import {
  Avatar,
  CircularProgress,
  Dialog,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import { LockOutlinedIcon } from '@mui/icons-material';

import { resetPassword } from '../../store/auth/auth.utils';

const ResetPassword = props => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(true);

  const {
    resettingDone,
    isResetting,
    localization,
    isLoggedIn,
    resettingError,
    resettingErrorMessage,
  } = props;

  const handleSubmit = e => {
    e.preventDefault();
    props.resetPassword({ email });
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  } else if (!open) {
    return <Redirect to="/" />;
  } else {
    return (
      <Dialog onClose={() => setOpen(false)} open={open}>
        <form onSubmit={handleSubmit}>
          {isResetting ? (
            <div className="position-relative px-3 py-2">
              <CircularProgress />
            </div>
          ) : (
            <Paper className="DDD">
              <Avatar className="avatar" component="div">
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {localization.forgotPassword}
              </Typography>
              <TextField
                required
                fullWidth
                id="email"
                label={localization.emailAddress}
                name="email"
                autoComplete="email"
                autoFocus
                className="my-3"
                onChange={e => setEmail(e.target.value)}
              />
              {resettingDone && (
                <Typography component="p" className="text-info">
                  Verification email sent
                  <Link to="/signin" className="ml-2">
                    signin
                  </Link>
                </Typography>
              )}
              {resettingError && (
                <Typography component="p" className="errorText small">
                  {resettingErrorMessage}
                </Typography>
              )}
              <button
                type="submit"
                style={{ width: '100%' }}
                className="btn-custom my-3 btn"
              >
                {localization.forgotPasswordBtn}
              </button>
            </Paper>
          )}
        </form>
      </Dialog>
    );
  }
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isResetting: state.auth.isResetting,
    resettingDone: state.auth.resettingDone,
    resettingError: state.auth.resettingError,
    resettingErrorMessage: state.auth.resettingErrorMessage,
    localization: state.localization.chosenLanguage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: credentials => dispatch(resetPassword(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
