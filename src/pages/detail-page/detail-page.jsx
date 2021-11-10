import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import { Alert, Box } from '@mui/material';

import { GET_BUSINESS_DETAIL } from '../../apollo/queries/business-queries';

import Detail from '../../components/detail/detail';
import PreLoader from '../../components/preloader/preloader';
import NavBar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';

const DetailPage = props => {
  const id = props.match.params.id;
  //fetch id from url and useQuery
  const [getBusiness, { loading, data, error }] =
    useLazyQuery(GET_BUSINESS_DETAIL);

  useEffect(() => {
    getBusiness({ variables: { id: id } });
  }, [getBusiness, id]);

  return (
    <>
      <NavBar />
      {loading && <PreLoader />}
      {data && data.businessById && (
        <Detail key={data.businessById._id} business={data.businessById} />
      )}
      {error && (
        <Box width="100%">
          <Alert
            onClose={() => {}}
            severity="error"
            variant="filled"
            sx={{ width: '300px', margin: 'auto' }}
          >
            {error.message}
          </Alert>
        </Box>
      )}
      <Footer />
    </>
  );
};

export default DetailPage;
