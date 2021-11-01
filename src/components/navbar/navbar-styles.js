import { makeStyles } from '@mui/styles';

const navbarStyles = makeStyles(theme => ({
  main: {
    color: theme.palette.mainColor.color,
  },
  logo: {
    width: '100%',
    cursor: 'pointer',
  },

  mobilelink: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    height: '44px',
  },

  mobileauthlink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '44px',
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    paddingLeft: '20px',
    fontSize: '20px',
    display: 'block',
    '&:hover': {
      color: theme.palette.mainColor.color,
    },
  },

  login: {
    backgroundColor: '#bb7900 !important',
    border: '1px solid #bb7900 !important',
    '&:hover': {
      backgroundColor: '#fff !important',
      color: theme.palette.secondary.main,
      border: '1px solid #bb7900 !important',
    },
  },
  signup: {
    border: '1px solid #bb7900 !important',
    '&:hover': {
      color: theme.palette.secondary.main,
      border: '1px solid #bb7900',
    },
  },
}));

export default navbarStyles;
