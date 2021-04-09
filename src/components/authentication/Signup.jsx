import React, { useState } from 'react';

import { Checkbox, FormControlLabel } from '@material-ui/core';

import { Link } from 'react-router-dom';

import TopText from './common/TopText';
import InputField from './common/InputField';
import Social from './common/Social';
import ButtonControl from './common/ButtonControl';
import TextWithLine from './common/TextWithLine';
import BottomText from './common/BottomText';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="container-lg d-lg-flex authentication-container">
      <div className="input-container w-100 p-3">
        <TopText text="Sign up by entering information below" />
        <InputField
          value={fullName}
          helperText="Please fill your business full name"
          label="Full Name"
          type="text"
          classes="text-field w-100 mb-4"
          setValue={e => setFullName(e.target.value)}
        />
        <InputField
          value={email}
          helperText="Please fill your business email"
          label="Email"
          type="email"
          classes="text-field w-100 mb-4"
          setValue={e => setEmail(e.target.value)}
        />
        <InputField
          value={password}
          helperText="Please fill your business password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          classes="text-field w-100 mb-2"
          setValue={e => setPassword(e.target.value)}
          inputProps={true}
          showText={showPassword}
          handleClick={handleClickShowPassword}
        />

        <InputField
          value={confirmPassword}
          helperText="Please fill your corrent password"
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          classes="text-field w-100 mb-2"
          setValue={e => setConfirmPassword(e.target.value)}
          inputProps={true}
          showText={showConfirmPassword}
          handleClick={handleClickShowConfirmPassword}
        />

        <FormControlLabel
          className="ml-0 mb-5 mt-3"
          control={
            <Checkbox
              checked={checked}
              onChange={e => setChecked(e.target.checked)}
              color="primary"
              className="mr-2 checkbox"
            />
          }
          label={
            <span>
              <span>By signing up you accept the </span>{' '}
              <Link className="text-decoration-none" to="/">
                Term of service
              </Link>
              <span> and </span>{' '}
              <Link className="text-decoration-none" to="/">
                Privacy Policy
              </Link>
            </span>
          }
        />

        <ButtonControl text="Sign Up" />
        <TextWithLine />
        <Social text1="Sign up with facebook" text2="Sign up with google" />
        <BottomText
          text1="Already have an account?"
          text2={
            <Link className="text-decoration-none button-height" to="/signin">
              Sign In
            </Link>
          }
        />
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

export default Signup;
