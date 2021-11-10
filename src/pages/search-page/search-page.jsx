import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import SearchResult from '../../components/search/search-result';
import PreLoader from '../../components/preloader/preloader';
import { GET_BUSINESS_BY_FILTER } from '../../apollo/queries/business-queries';
import SearchPaper from '../../components/home-page/search-bar/search-paper';
import { Alert, Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useLocation, useParams } from 'react-router';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import SearchModal from './search-modal';
import BackButton from '../../components/back-button/back-button';

const SearchPage = props => {
  const params = useParams();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = useState(true);

  function valuetext(value) {
    setSliderValue(value);
    return value;
  }

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const [
    searchByFilter,
    { loading: searchLoading, data: searchData, error: searchError },
  ] = useLazyQuery(GET_BUSINESS_BY_FILTER);

  useEffect(() => {
    let category = [];
    let query = [];
    if (location.pathname === `/search/${params.key}/${params.name}`) {
      if (params.key === 'query') {
        category = [];
        query = [params.name];
      } else {
        category = [params.name];
        query = [];
      }
      searchByFilter({
        variables: {
          category,
          distance: 0,
          query,
          openNow: false,
          lat: 0,
          lng: 0,
          page: 1,
          perPage: 90,
        },
      });
    }
  }, []);

  return (
    <Box>
      <NavBar />
      <Container maxWidth="lg" sx={{ mt: '100px' }}>
        <BackButton />
        <SearchPaper name={props.match.params.name} />
      </Container>

      {/*<Filter/>*/}

      {searchLoading && (
        <Box my={5} py={5}>
          <PreLoader />
        </Box>
        )}
      {searchData && (
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="end" p={2}>
              <Typography variant="h5" fontWeight="bold" mt={2} mr={1}>
                Results
              </Typography>
              <Typography variant="body1" fontStyle="italic" mt={2}>
                {params.name}
              </Typography>
            </Box>
            <FilterListOutlinedIcon
              onClick={handleOpen}
              sx={{ cursor: 'pointer' }}
            />
          </Box>
          <SearchModal
            open={open}
            checked={checked}
            sliderValue={sliderValue}
            valuetext={valuetext}
            handleClose={handleClose}
            handleChange={handleChange}
          />
        </Container>
      )}

      {searchData && searchData.getBusinessesByFilter?.items?.length !== 0 && (
        <Box>
          <Container maxWidth="lg">
            {/*<SideFilter/>*/}

            <Grid
              container
              spacing={2}
              pb={5}
              mt={5}
              display="flex"
              justifyContent="center"
            >
              {searchData &&
                searchData.getBusinessesByFilter &&
                searchData?.getBusinessesByFilter?.items?.map(res => (
                  <SearchResult
                    key={res._id}
                    id={res._id}
                    image={res.pictures[0]}
                    businessName={res.businessName}
                    location={res.location}
                    phoneNumber={res.phoneNumbers[0]}
                    description={res.description && res.description}
                  />
                ))}
            </Grid>
            {searchData &&
              searchData.getBusinessesByFilter?.items?.length === 0 && (
                <>
                  <Box py={5} display="flex" justifyContext="center">
                    <Typography>No Result found!</Typography>
                  </Box>
                </>
              )}
          </Container>
        </Box>
      )}

      {searchError && (
        <Box width="100%">
          <Alert
            onClose={() => {}}
            severity="error"
            variant="filled"
            sx={{ width: '300px', margin: 'auto' }}
          >
            {searchError.message}
          </Alert>
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default SearchPage;
