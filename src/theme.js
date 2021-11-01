import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastColor: '#000',
    },
    mainColor: {
      color: '#bb7900',
    },
    secondary: {
      main: '#434E55',
    },
    appbar: {
      color: '#fff',
    },
    background: {
      dark: '#2d2d2d',
      black: '#121212',
      light: '#ffffff',
    },
    linkColor: '#000',
  },
  button: {
    color: '#bb7900',
  },
});

export default theme;
