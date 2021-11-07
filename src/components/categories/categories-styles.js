import { makeStyles } from '@mui/styles';

const categoriesStyle = makeStyles(theme => ({
  categoriesCard: {
    border: 'none !important',
    height: '155px !important',
    borderRadius: '15px !important',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
  },
  searchWrapper: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    margin: 'auto',
  },
  cardIcon: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '16px',
    fontSize: '60px',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
  },
}));

export default categoriesStyle;
