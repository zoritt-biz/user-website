import React, {useEffect} from 'react';
import {useLazyQuery} from '@apollo/client';
import {GET_BUSINESS_BY_FILTER} from '../../../apollo/queries/business-queries';
import './related-biz-style.css';
import {Alert, Box, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import PreLoader from '../../preloader/preloader';
import {useHistory} from "react-router";

const useStyles = makeStyles(theme => ({
  removeWidth: {
    '&::-webkit-scrollbar': {
      width: ' 0 !important',
    },
  },
}));

const RelatedBusiness = ({category}) => {
  const classes = useStyles();
  const history = useHistory();
  const [fetchRelated, {loading, data, error}] = useLazyQuery(
    GET_BUSINESS_BY_FILTER
  );

  useEffect(() => {
    fetchRelated({
      variables: {
        category: [category],
        distance: 0,
        query: [],
        openNow: false,
        lat: 0.0,
        lng: 0.0,
        page: 1,
        perPage: 15,
      },
    });
  }, []);

  return (
    <>
      {loading && <PreLoader/>}
      {/* Related Business mobile + web */}
      {data &&
      data.getBusinessesByFilter &&
      data.getBusinessesByFilter.items.length > 0 && (
        <Box bgColor="white" mb={2} py={4}>
          <Typography variant="h5" mb={3}>
            Related Businesses
          </Typography>

          <Box
            display="flex"
            overflow="scroll"
            className={classes.removeWidth}
          >
            {data &&
            data.getBusinessesByFilter &&
            data.getBusinessesByFilter.items.map(biz => (
              <Box
                mb={4}
                mr={2}
                px={0}
                className="col-5 col-md-3 col-lg-2"
                onClick={() => history.push(`/detail/${biz._id}`)}
              >
                <Box>
                  <Box position="relative" className="related-biz-cont">
                    <Box position="absolute" className="related-biz">
                      <img
                        src={biz.pictures[0]}
                        alt=""
                        className="related-biz-pic-back rounded"
                      />
                    </Box>
                    <Box position="absolute" className="related-biz">
                      <img
                        src={biz.pictures[0]}
                        alt=""
                        className="related-biz-pic"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box p={2}>
                  <Typography
                    sx={{
                      // fontSize: {xs: '16px', mb: '20px'},
                      mb: {xs: 2, mb: 0},
                    }}
                    // variant="h5"
                  >
                    {biz.businessName}
                  </Typography>
                  <Typography
                    mb={0}
                    sx={{
                      // fontSize: {md: 2},
                      opacity: {md: '0.7'},
                      mb: {md: '0 !important'},
                    }}
                    // variant="h5"
                  >
                    {biz.location}
                  </Typography>
                  <Typography
                    mb={0}
                    sx={{
                      // fontSize: {md: 2},
                      opacity: {md: '0.7'},
                      mb: {md: '0 !important'},
                    }}
                    // variant="h5"
                  >
                    {biz.phoneNumbers[0]}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
      {error && (
        <Box width="100%">
          <Alert
            onClose={() => {
            }}
            severity="error"
            variant="filled"
            sx={{width: '300px', margin: 'auto'}}
          >
            {error.message}
          </Alert>
        </Box>
      )}
    </>
  );
};

export default RelatedBusiness;
