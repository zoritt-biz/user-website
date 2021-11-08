import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_SPONSORED_BUSINESSES } from '../../apollo/queries/business-queries';
import Loading from '../../components/loading/loading';
import Sponsored from '../../components/sponsored/sponsored';
import { useHistory } from 'react-router-dom';
import { Alert, Box, Container, Typography, Grid } from '@mui/material';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';
import BackButton from '../../components/back-button/back-button';

const SponsoredPage = () => {
  const [getSponsor, { loading, data, error }] = useLazyQuery(
    GET_SPONSORED_BUSINESSES,
    { variables: { limit: 5 } }
  );

  const history = useHistory;

  useEffect(() => {
    getSponsor();
  }, [getSponsor]);

  return (
    <>
      <NavBar />
      <Box mt={5} pt={5}>
        <Container maxWidth="lg">
          <BackButton />
          <Typography
            variant="h5"
            mb={3}
            onClick={() => history.push('/sponsored')}
          >
            Sponsored Business
          </Typography>
          <Grid container spacing={2} display="flex">
            {loading &&
              Array(5)
                .fill()
                .map((_, index) => (
                  <Grid item key={index} xs={12} md={6} lg={4}>
                    <Loading rectHeight={200} avatar={true} />
                  </Grid>
                ))}
          </Grid>

          <Grid container spacing={2} display="flex">
            {data &&
              data.sponsoredMany &&
              data.sponsoredMany.length > 0 &&
              data.sponsoredMany.map(business => (
                <Grid item key={business._id} xs={12} md={6} lg={4}>
                  <Sponsored business={business} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>

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

export default SponsoredPage;
