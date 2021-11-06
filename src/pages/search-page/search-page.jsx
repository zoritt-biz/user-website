import React, {useEffect} from 'react';
import {useLazyQuery} from '@apollo/client';
import SearchResult from '../../components/search/search-result';
import PreLoader from '../../components/preloader/preloader';
import {GET_BUSINESS_BY_FILTER} from '../../apollo/queries/business-queries';
import SearchPaper from '../../components/home-page/search-bar/search-paper';
import {Alert, Box, Container, Typography} from '@mui/material';
import appStyles from '../../app-styles';
import Grid from "@mui/material/Grid";
import {useLocation, useParams} from "react-router";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navBar";

const SearchPage = props => {
  const classes = appStyles();
  const params = useParams();
  const location = useLocation();

  const [
    searchByFilter,
    {loading: searchLoading, data: searchData, error: searchError},
  ] = useLazyQuery(GET_BUSINESS_BY_FILTER);

  useEffect(() => {
    let category = [];
    let query = [];
    if (location.pathname === `/search/${params.key}/${params.name}`) {
      if (params.key === "query") {
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
      <NavBar/>
      <Container maxWidth="lg" sx={{mt: '100px'}}>
        <SearchPaper name={props.match.params.name}/>
      </Container>

      {/*<Filter/>*/}

      {searchData && (
        <Box mt={2} px={3}>
          <Typography variant="h5" fontWeight="bold">
            Results
          </Typography>
        </Box>
      )}

      {searchLoading && <PreLoader/>}

      {searchData && (
        <Box>
          <Container maxWidth="lg">
            {/*<SideFilter/>*/}
            <Box
              pb={5}
              display="flex"
              justifyContent="center"
              sx={{mt: '60px'}}
            >
              <Grid container spacing={2}>
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
                    <Typography>
                      No Result found!
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
          </Container>
        </Box>
      )}

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
      <Footer/>
    </Box>
  );
};

export default SearchPage;
