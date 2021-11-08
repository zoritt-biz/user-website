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
    backgroundColor: `${theme.palette.nav.color} `,
    color: '#fff',
    textTransform: 'capitalize',
    border: `1px solid ${theme.palette.nav.color}`,
    '&:hover': {
      border: `1px solid ${theme.palette.nav.color}`,
      backgroundColor: '#fff',
      color: `${theme.palette.nav.color}`,
    },
  },

  allItem: {
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  allItemCont: {
    '&::after': {
      content: '',
      display: 'block',
      paddingBottom: '60%',
    },
  },

  allItemPic: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },

  allItemPicBack: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    filter: 'blur(1px)',
    // -webkit-filter: blur(2px)
  },
}));

export default appStyles;
