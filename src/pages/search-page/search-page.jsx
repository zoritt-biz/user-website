import React, {useEffect, useState} from 'react';
import NavBar from '../../components/navbar/navBar';
import {useLazyQuery} from '@apollo/client';
import SearchResult from '../../components/search/search-result';
import {Link} from 'react-router-dom';
import PreLoader from '../../components/preloader/preloader';
import {GET_BUSINESS_BY_FILTER} from '../../apollo/queries/business-queries';
import SearchPaper from '../../components/home-page/search-bar/search-paper';
import {Alert, Box, Container, Typography} from '@mui/material';
import appStyles from '../../app-styles';

const SearchPage = props => {
  const classes = appStyles();
  const [
    searchByFilter,
    {loading: searchLoading, data: searchData, error: searchError},
  ] = useLazyQuery(GET_BUSINESS_BY_FILTER);
  const [show, setShow] = useState(false);

  const handleNavbar = () => {
    setShow(!show);
  };

  const hideNavbar = () => {
    setShow(false);
  };

  useEffect(() => {
    searchByFilter({
      variables: {
        category: ['Promotion & Advertising'],
        distance: 0,
        query: [],
        openNow: false,
        lat: 0,
        lng: 0,
        page: 1,
        perPage: 50,
      },
    });
  }, []);

  return (
    <Box height="100%">
      <NavBar show={show} handleNavbar={handleNavbar}/>
      {searchLoading && <PreLoader/>}
      {searchError && (
        <Box width="100%">
          <Alert
            onClose={() => {
            }}
            severity="error"
            variant="filled"
            sx={{width: '300px', margin: 'auto'}}
          >
            {searchError.message}
          </Alert>
        </Box>
      )}
      <Container maxWidth="lg" sx={{mt: '100px'}}>
        <SearchPaper name={props.match.params.name}/>
      </Container>

      {/*<Filter/>*/}
      <Box display="flex" justifyContent="center" sx={{mt: '60px'}}>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          All Results
        </Typography>
      </Box>

      {searchData && (
        <Box onClick={hideNavbar}>
          <Container maxWidth="lg">
            {/*<SideFilter/>*/}
            <Box
              pb={5}
              display="flex"
              justifyContent="center"
              sx={{mt: '60px'}}
            >
              {searchData &&
              searchData.getBusinessesByFilter &&
              searchData.getBusinessesByFilter.items?.map(res => (
                <Link to={`/detail/${res._id}`} className={classes.link}>
                  <SearchResult
                    key={res._id}
                    id={res._id}
                    image={res.pictures[0]}
                    title={res.businessName}
                    place={res.location}
                    phoneNumber={res.phoneNumbers[0]}
                    menu={res.description && res.description}
                  />
                </Link>
              ))}
              {searchData &&
              searchData.getBusinessesByFilter.items.length === 0 && (
                <>
                  <Box py={5} my={5}/>
                  <Box py={5} my={5}/>
                  <Box py={5} my={5}/>
                </>
              )}
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default SearchPage;
