import React, { useState } from 'react';
import TopText from '../../components/authentication/top-text';
import InputField from '../../components/authentication/input-field';
import ButtonControl from '../../components/authentication/button-control';
import BottomText from '../../components/authentication/bottom-text';
import SignInImage from '../../assets/images/signin.png';
import { Link } from 'react-router-dom';
import { Box, Container, Button } from '@mui/material';
import appStyles from '../../app-styles';

const SignInPage = () => {
  const classes = appStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
          padding: { xs: '24px', md: '0' },
          display: { xs: 'block', md: 'flex' },
          height: '100%',
        }}
      >
        <Box
          width="100%"
          my="auto"
          sx={{ display: { xs: 'none', lg: 'flex' } }}
          px={0}
        >
          <img
            src={SignInImage}
            alt="Log in"
            style={styles}
            // className="w-100 d-none d-lg-flex"
          />
        </Box>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="100%"
          // className="input-container"
        >
          <TopText text="Sign in by entering information below" />
          <form onSubmit={handleSubmit}>
            <>
              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
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
              </Box>
              <ButtonControl text="Sign In" />

              <BottomText
                text1="Don't have an account?"
                text2={
                  <Link
                    // className="text-decoration-none button-height"
                    to="/signup"
                  >
                    Create new one
                  </Link>
                }
              />
            </>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default SignInPage;
