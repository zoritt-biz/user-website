import {makeStyles} from '@mui/styles';

const navbarStyles = makeStyles(theme => ({
  main: {
    color: theme.palette.mainColor.color,
  },
  logo: {
    width: '100%',
    cursor: 'pointer',
  },

  mobileLink: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    height: '44px',
  },

  mobileAuthLink: {
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
    backgroundColor: `${theme.palette.mainColor.color} !important`,
    border: `1px solid ${theme.palette.mainColor.color} !important`,
    '&:hover': {
      backgroundColor: '#fff !important',
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.mainColor.color} !important`,
    },
  },
  signup: {
    border: `1px solid ${theme.palette.mainColor.color} !important`,
    '&:hover': {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.mainColor.color}`,
    },
  },
}));

export default navbarStyles;
