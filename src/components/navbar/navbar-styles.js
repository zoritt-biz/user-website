import {makeStyles} from '@mui/styles';

const navbarStyles = makeStyles(theme => ({
  main: {
    color: theme.palette.secondary.main,
  },
  logo: {
    width: '100%',
    cursor: 'pointer',
  },
  authLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontSize: '20px',
    display: 'block',
  },

  mobileLink: {
    textDecoration: 'none',
    color: theme.palette.nav.color,
    display: 'flex',
    alignItems: 'center',
    height: '44px',
  },
  businessDesktop: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    color: theme.palette.primary.main,
    backgroundColor: `${theme.palette.mainColor.color} !important`,
    border: `1px solid ${theme.palette.mainColor.color} !important`,
    paddingLeft: '20px',
    display: 'block',
    '&:hover': {
      color: `${theme.palette.nav.color} !important`,
      border: `1px solid ${theme.palette.mainColor.color} !important`,
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.nav.color,
    paddingLeft: '20px',
    fontSize: '20px',
    display: 'block',
    '&:hover': {
      color: `${theme.palette.mainColor.color} !important`,
    },
  },

  business: {
    textTransform: 'capitalize',
    backgroundColor: `${theme.palette.mainColor.color} !important`,
    border: `1px solid ${theme.palette.mainColor.color} !important`,
    '&:hover': {
      backgroundColor: '#fff !important',
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.mainColor.color} !important`,
    },
  },
}));

export default navbarStyles;
