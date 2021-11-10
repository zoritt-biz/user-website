import { makeStyles } from '@mui/styles';

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
