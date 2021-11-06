import React, {useEffect, useState} from 'react';
import {useLazyQuery} from '@apollo/client';

import {Alert, Box} from '@mui/material';
import {makeStyles} from '@mui/styles';

import {GET_BUSINESS_DETAIL} from '../../apollo/queries/business-queries';

import Detail from '../../components/detail/detail';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';
import PreLoader from '../../components/preloader/preloader';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const DetailPage = props => {
  const id = props.match.params.id;
  const classes = useStyles();
  //fetch id from url and useQuery
  const [getBusiness, {loading, data, error}] =
    useLazyQuery(GET_BUSINESS_DETAIL);
  const [show, setShow] = useState(false);

  const handleNavbar = () => {
    setShow(!show);
  };

  const hideNavbar = () => {
    setShow(false);
  };

  useEffect(() => {
    getBusiness({variables: {id: id}});
  }, [getBusiness, id]);

  return (
    <>
      <NavBar show={show} handleNavbar={handleNavbar}/>
      {loading && <PreLoader/>}
      {/* {loading && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )} */}
      {error && (
        <Box width="100%">
          <Alert
            onClose={() => {
            }}
            severity="error"
            variant="filled"
            sx={{width: '300px', margin: 'auto'}}
          >
            {error.message}
          </Alert>
        </Box>
      )}

      {data && data.businessById && (
        <div onClick={hideNavbar}>
          <Detail key={data.businessById._id} business={data.businessById}/>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default DetailPage;
