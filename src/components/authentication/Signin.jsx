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
    <div className="container-lg authentication-container pb-3">
      <div className="container-fluid my-auto w-100 px-0">
        <img
          src="../images/signin.png"
          alt=""
          className="w-100 d-none d-lg-flex"
        />
      </div>
      <div className="input-container w-100" style={{ overflowY: 'scroll' }}>
        <TopText text="Sign in by entering information below" />

        <div className="input-items-container">
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

          <div className="d-flex justify-content-between mb-5 mt-3 align-items-center">
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
            <Button
              variant="text"
              size="large"
              className="p-0 text-capitalize button-height"
            >
              Forget Password?
            </Button>
          </div>
        </div>
        <ButtonControl text="Sign Up" />
        {/* <TextWithLine />

        <Social text1="Sign in with facebook" text2="Sign in with Google" /> */}

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
