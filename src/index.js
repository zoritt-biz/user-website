import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import App from './app';
import { client } from './apollo/client';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
