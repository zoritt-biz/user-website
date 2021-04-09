import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import InputField from './common/InputField';
import Social from './common/Social';
import ButtonControl from './common/ButtonControl';
import TextWithLine from './common/TextWithLine';
import BottomText from './common/BottomText';
import TopText from './common/TopText';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-lg d-lg-flex authentication-container">
      <div className="container-fluid my-auto w-100 px-0">
        <img
          src="../images/signin.png"
          alt=""
          className="w-100 d-none d-lg-flex"
        />
      </div>
      <div className="input-container w-100 p-3">
        <TopText text="Sign in by entering information below" />

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

        <div className="d-flex justify-content-between w-100 mb-5 mt-3">
          <FormControlLabel
            className="ml-0"
            control={
              <Checkbox
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
                color="primary"
                className="mr-2 checkbox"
              />
            }
            label="Remember me"
          />
          <Button size="large" className="p-0 text-capitalize button-height">
            Forget Password?
          </Button>
        </div>
        <ButtonControl text="Sign Up" />
        <TextWithLine />

        <Social text1="Sign in with facebook" text2="Sign in with Google" />

        <BottomText
          text1="Don't have an account?"
          text2={
            <Link className="text-decoration-none button-height" to="/signup">
              Create new one
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default Signin;
