import React, {useState} from 'react';
import TopText from '../../components/authentication/top-text';
import InputField from '../../components/authentication/input-field';
import {Link} from 'react-router-dom';
import ButtonControl from '../../components/authentication/button-control';
import BottomText from '../../components/authentication/bottom-text';
import SignupImage from '../../assets/images/signup.png';

const SignUpPage = () => {
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

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="container-lg d-lg-flex authentication-container h-100">
      <div className="input-container w-100 py-3">
        <TopText text="Sign up by entering information below"/>
        <form onSubmit={handleSubmit} className="">
          {/*{isSigningUp ? (*/}
          {/*  <div className="position-relative px-3 py-2 text-center">*/}
          {/*    <CircularProgress/>*/}
          {/*  </div>*/}
          {/*) : (*/}
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
            {/*{signUpError && (*/}
            {/*  <Typography component="p" className="text-danger pb-2 small">*/}
            {/*    {error.message}*/}
            {/*  </Typography>*/}
            {/*)}*/}
            <BottomText
              text1="Already have an account?"
              text2={
                <Link
                  className="text-decoration-none button-height"
                  to="/signin"
                >
                  Sign In
                </Link>
              }
            />
          </>
          {/*)}*/}
        </form>
      </div>
      <div className="container-fluid my-auto w-100 px-0">
        <img
          src={SignupImage}
          alt="Signup"
          className="w-100 d-none d-lg-flex"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
