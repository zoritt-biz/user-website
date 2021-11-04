import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_SPONSORED_BUSINESSES } from '../../apollo/queries/business-queries';
import Loading from '../../components/loading/loading';
import Footer from '../../components/footer/footer';
import Sponsored from '../../components/sponsored/sponsored';
import NavBar from '../../components/navbar/navBar';
import { useHistory } from 'react-router-dom';
import { Box, Alert, Typography, Container } from '@mui/material';

const SponsoredPage = () => {
  const [getSponsor, { loading, data, error }] = useLazyQuery(
    GET_SPONSORED_BUSINESSES,
    { variables: { limit: 5 } }
  );
  const [show, setShow] = useState(false);

  const handleNavbar = () => {
    setShow(!show);
  };

  const hideNavbar = () => {
    setShow(false);
  };
  const history = useHistory;

  useEffect(() => {
    getSponsor();
  }, [getSponsor]);

  return (
    <>
      <NavBar show={show} handleNavbar={handleNavbar} />
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
      <Box mt={5}>
        <Container maxWidth="lg" onClick={hideNavbar}>
          <Typography
            variant="h5"
            mb={3}
            onClick={() => history.push('/sponsored')}
          >
            Sponsored Business
          </Typography>
          <div className="row">
            {loading &&
              Array(5)
                .fill()
                .map((_, index) => (
                  <div key={index} className="col-12 col-lg-6 mb-3 mb-xl-5">
                    <Loading rectHeight={200} text={true} />
                  </div>
                ))}

            {data &&
              data.sponsoredMany &&
              data.sponsoredMany.length > 0 &&
              data.sponsoredMany.map(business => (
                <div
                  key={business._id}
                  className="col-12 col-lg-6 mb-3 mb-xl-5"
                >
                  <Sponsored business={business} />
                </div>
              ))}
          </div>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default SponsoredPage;
