import {makeStyles} from '@mui/styles';

const appStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: 'black !important',
  },

  scrollbar: {
    overflowX: 'scroll',
    ' &::-webkit-scrollbar': {
      width: '0 !important',
    },
  },

  boxWidth: {
    [theme.breakpoints.up('xs')]: {
      width: '200px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '250px',
    },
    [theme.breakpoints.up('md')]: {
      width: '300px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '350',
    },
  },

  mainColor: {
    color: `${theme.palette.mainColor.color} !important`,
  },
  goBack: {
    backgroundColor: '#fff',
    color: `${theme.palette.goBack.color}`,
    textTransform: 'capitalize',
    cursor: 'pointer',
    marginBottom: '5px',
  },
}));

export default appStyles;
