import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_SPONSORED_BUSINESSES } from '../../apollo/queries/business-queries';
import Loading from '../loading/loading';
import { Link } from 'react-router-dom';
import Sponsored from '../sponsored/sponsored';
import { Box, Alert, Typography, Container } from '@mui/material';
import appStyles from '../../app-styles';

const SponsoredPosts = () => {
  const classes = appStyles();
  const [getSponsor, { loading, data, error }] = useLazyQuery(
    GET_SPONSORED_BUSINESSES
  );

  useEffect(() => {
    getSponsor({
      variables: {
        limit: 5,
      },
    });
  }, []);

  return (
    <>
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
      <Box mt={4} pt={4} pb={2} bgcolor={'white'}>
        <Container maxWidth="lg">
          <Typography variant="h5" mb={3}>
            {' '}
            Sponsored Business
          </Typography>
          <div className="row">
            {loading &&
              Array(4)
                .fill()
                .map((_, index) => (
                  <div key={index} className="col-12 col-md-6 mb-3">
                    <Loading rectHeight={300} text={true} />
                  </div>
                ))}

            {data &&
              data.sponsoredMany &&
              data.sponsoredMany.length > 0 &&
              data.sponsoredMany
                .sort(() => (Math.random() > 0.5 ? 1 : -1))
                .map(business => (
                  <div key={business._id} className="col-12 col-md-6 mb-xl-5">
                    <Link
                      to={`/detail/${business._id}`}
                      className={classes.link}
                    >
                      <Sponsored business={business} />
                    </Link>
                  </div>
                ))}
          </div>
        </Container>
      </Box>
    </>
  );
};

export default SponsoredPosts;
