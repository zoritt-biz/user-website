import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_BUSINESS_DETAIL } from '../../apollo/queries/business_queries';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Detail from '../../components/detail/Detail';
import Footer from '../../components/footer/Footer';
//import GET_BUSINESS_BY_ID

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
  const [getBusiness, { loading, data, error }] = useLazyQuery(
    GET_BUSINESS_DETAIL
  );

  useEffect(() => {
    getBusiness({ variables: { id: id } });
  }, [getBusiness, id]);
  return (
    <>
      {loading && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      {data && data.businessById && (
        <Detail key={data.businessById._id} business={data.businessById} />
      )}

      {error && <div>error: {error}</div>}
      <Footer />
    </>
  );
};

export default DetailPage;
