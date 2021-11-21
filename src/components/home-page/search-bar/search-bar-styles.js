import {makeStyles} from '@mui/styles';

const searchBarStyles = makeStyles(theme => ({
  searchContainer: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'center',
    height: '100%',
    background: '#00000030'
  },
  searchWrapper: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    margin: 'auto',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
  },
}));

export default searchBarStyles;
