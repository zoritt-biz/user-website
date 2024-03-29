import React, {useEffect} from 'react';
import {useLazyQuery} from '@apollo/client';
import {GET_SPONSORED_BUSINESSES} from '../../apollo/queries/business-queries';
import Loading from '../loading/loading';
import {Link} from 'react-router-dom';
import Sponsored from '../sponsored/sponsored';
import {Box, Container, Grid, Typography, useMediaQuery, useTheme,} from '@mui/material';
import appStyles from '../../app-styles';
import {ArrowForwardIos} from '@mui/icons-material';

const SponsoredPosts = () => {
  const classes = appStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [getSponsor, {loading, data}] = useLazyQuery(
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
    <Box mt={2} pt={4} pb={2} bgcolor={'white'}>
      <Container maxWidth="lg">
        <Typography variant="h5" mb={3}>
          <Link to="/sponsored" className={classes.link}>
            Sponsored Business <ArrowForwardIos fontSize="small"/>
          </Link>
        </Typography>

        {loading && (
          <Grid container spacing={2} display="flex">
            {Array(2)
              .fill(isMobile ? 1 : 2)
              .map((_, index) => (
                <Grid item key={index} xs={12} md={6}>
                  <Loading rectHeight={250} avatar={false} line={false}/>
                </Grid>
              ))}
          </Grid>
        )}

        <Grid container spacing={2}>
          {data &&
          data.sponsoredMany &&
          data.sponsoredMany.length > 0 &&
          data.sponsoredMany
            .sort(() => (Math.random() > 0.5 ? 1 : -1))
            .map(business => (
              <Grid item xs={12} sm={8} md={4} key={business._id}>
                <Sponsored business={business}/>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SponsoredPosts;
