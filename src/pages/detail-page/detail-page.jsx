import React, {useEffect} from 'react';
import {useLazyQuery} from '@apollo/client';

import {Backdrop, CircularProgress} from '@mui/material';
import {makeStyles} from '@mui/styles';

import {GET_BUSINESS_DETAIL} from '../../apollo/queries/business-queries';

import Detail from '../../components/detail/detail';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';

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

  useEffect(() => {
    getBusiness({variables: {id: id}});
  }, [getBusiness, id]);

  return (
    <>
      <NavBar/>
      {loading && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit"/>
        </Backdrop>
      )}

      {data && data.businessById && (
        <Detail key={data.businessById._id} business={data.businessById}/>
      )}

      {error && <div>error: {error}</div>}
      <Footer/>
    </>
  );
};

export default DetailPage;
