import React, {useState} from 'react';
import TopText from '../../components/authentication/top-text';
import InputField from '../../components/authentication/input-field';
import {Link} from 'react-router-dom';
import ButtonControl from '../../components/authentication/button-control';
import BottomText from '../../components/authentication/bottom-text';
import SignupImage from '../../assets/images/signup.png';
import {Box, Container} from '@mui/material';
import appStyles from '../../app-styles';

const SignUpPage = () => {
  const classes = appStyles();
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

  const styles = {
    width: '100%',
  };

  return (
    <Box height="100%">
      <Container
        maxWidth="lg"
        sx={{
          padding: {xs: '24px', md: '0'},
          display: {xs: 'block', md: 'flex'},
        }}
      >
        <Box width="100%" display="flex" flexDirection="column">
          <TopText text="Sign up by entering information below"/>
          <form onSubmit={handleSubmit}>
            <>
              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                sx={{alignItems: {lg: 'center'}}}
              >
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
                <Box px={2} my={3}>
                  <span>
                    <span>By continuing you accept the </span>{' '}
                    <Link className={classes.link} to="/">
                      Term of service
                    </Link>
                    <span> and </span>{' '}
                    <Link className={classes.link} to="/">
                      Privacy Policy
                    </Link>
                  </span>
                </Box>
              </Box>
              <ButtonControl text="Sign Up"/>
              <BottomText
                text1="Already have an account?"
                text2={
                  <Link style={{textDecoration: 'none'}} to="/signin">
                    Sign In
                  </Link>
                }
              />
            </>
          </form>
        </Box>
        <Box
          my="auto"
          width="100%"
          sx={{display: {xs: 'none', lg: 'flex'}}}
          px={0}
          // className="container-fluid"
        >
          <img src={SignupImage} alt="Signup" style={styles}/>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUpPage;
