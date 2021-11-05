import { makeStyles } from '@mui/styles';

const searchResultStyles = makeStyles(theme => ({
  searchCard: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '15px !important',
    boxShadow: 'none !important',
    border: '1px solid #eeeeef',
    '&:hover': {
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1) !important',
    },
    [theme.breakpoints.up('xl')]: {
      width: '50%',
    },
  },

  searchImageContainer: {
    height: '200px',
    [theme.breakpoints.up('sm')]: {
      width: '250px',
    },
  },
  searchContent: {
    flex: '1 0 auto',
    paddingTop: '0 !important',
  },
  searchCardText: {
    opacity: '0.7',
  },
  searchDetail: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      width: '73%',
    },
  },
}));

export default searchResultStyles;
