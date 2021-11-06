import {makeStyles} from '@mui/styles';

const homePageStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: '#efefef',
  },

  buttonContainer: {
    borderBottom: '1px solid #e1e1e1',
  },
  button: {
    backgroundColor: `${theme.palette.mainColor.color} !important`,
    width: '250px',
    textTransform: 'capitalize !important',
    color: 'white !important',
    borderRadius: '5px',
  },
  link: {
    textDecoration: 'none',
  },
}));

export default homePageStyles;
