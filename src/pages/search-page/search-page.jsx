import React, { useEffect } from 'react';
import NavBar from '../../components/navbar/navBar';
import { useLazyQuery } from '@apollo/client';
import SearchResult from '../../components/search/search-result';
import { Link } from 'react-router-dom';
import PreLoader from '../../components/preloader/preloader';
import { GET_BUSINESS_BY_FILTER } from '../../apollo/queries/business-queries';
import SearchPaper from '../../components/home-page/search-bar/search-paper';
import { Box } from '@mui/material';

const SearchPage = props => {
  const [
    searchByCat,
    { loading: searchLoading, data: searchData, error: searchError },
  ] = useLazyQuery(GET_BUSINESS_BY_FILTER);

  useEffect(() => {
    searchByCat({
      variables: {
        category: '',
        distance: 0,
        query: '',
        openNow: false,
        lat: 0.0,
        lng: 0.0,
        page: 1,
        perPage: 50,
      },
    });
  }, []);

  return (
    <div className="h-100">
      <NavBar />
      <Box className="container-md" sx={{ mt: '100px' }}>
        <SearchPaper name={props.match.params.name} />
      </Box>

      {/*<Filter/>*/}
      <p className="fs-3 fw-bold mt-5 search-all-result text-center">
        All Results
      </p>
      {searchLoading && (
        <div>
          <PreLoader />
        </div>
      )}

      {searchData && (
        <div className="container-md">
          {/*<SideFilter/>*/}
          <div className="row search-all-result pb-5">
            {searchData &&
              searchData.getBusinessesByFilter &&
              searchData.getBusinessesByFilter.items?.map(res => (
                <Link
                  to={`/detail/${res._id}`}
                  className="text-decoration-none text-dark"
                >
                  <SearchResult
                    key={res._id}
                    id={res._id}
                    image={res.pictures[0]}
                    title={res.businessName}
                    place={res.location}
                    phoneNumber={res.phoneNumber[0]}
                    menu={res.description && res.description}
                  />
                </Link>
              ))}
            {searchData && searchData.getBusinessesByFilter.items.length === 0 && (
              <>
                <div className="py-5 my-5" />
                <div className="py-5 my-5" />
                <div className="py-5 my-5" />
              </>
            )}
          </div>
        </div>
      )}

      {searchError && (
        <div className="container-md py-5 my-5">{searchError.message}</div>
      )}
    </div>
  );
};

export default SearchPage;
