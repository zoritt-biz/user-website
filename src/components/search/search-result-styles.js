import { makeStyles } from '@mui/styles';

const searchResultStyles = makeStyles(theme => ({
  searchCard: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px !important',
    boxShadow: 'none !important',
    border: '1px solid #eeeeef',
    '&:hover': {
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1) !important',
    },
  },

  searchImageContainer: {
    height: '200px',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  searchContent: {
    flex: '1 0 auto',
    padding: ' 0 0 0 10px !important',
  },
  searchCardText: {
    opacity: '0.7',
  },
  searchDetail: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '73%',
    },
  },
}));

export default searchResultStyles;
