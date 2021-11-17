import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastColor: '#000',
    },
    mainColor: {
      color: '#ffa500',
    },
    secondary: {
      main: '#ffa500',
    },
    nav: {
      color: '#434E55',
    },
    goBack: {
      // color: '#5C636A',
      color: 'grey',
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
    color: '#ffa500',
  },
  typography: {
    button: {
      textTransform: "none"
    },
    // fontFamily: "Segoe UI",
    fontFamily: "Helvetica",
  },
});

export default theme;
