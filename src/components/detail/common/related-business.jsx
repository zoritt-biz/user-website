import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_BUSINESS_BY_FILTER } from '../../../apollo/queries/business-queries';
import './related-biz-style.css';
import {
  Alert,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import PreLoader from '../../preloader/preloader';
import { useHistory } from 'react-router';
import appStyles from '../../../app-styles';

const RelatedBusiness = ({ category }) => {
  const appStyle = appStyles();
  const history = useHistory();
  const [fetchRelated, { loading, data, error }] = useLazyQuery(
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
      {loading && <PreLoader />}
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
              pb={2}
              className={appStyle.scrollbar}
              style={{ overflowX: 'scroll' }}
            >
              {data &&
                data.getBusinessesByFilter &&
                data.getBusinessesByFilter.items.map((biz, index) => (
                  <Box
                    key={index}
                    className="col-8 col-sm-5 col-md-4 col-lg-3"
                    style={{ marginRight: '16px' }}
                    onClick={() => history.push(`/detail/${biz._id}`)}
                    height="100%"
                  >
                    <Card>
                      <CardActionArea>
                        <Box
                          width="100%"
                          overflow="hidden"
                          position="relative"
                          className="all-event-cont"
                        >
                          <Box position="absolute" className="all-event">
                            <img
                              src={biz.pictures[0]}
                              alt="business_picture"
                              className="all-event-pic-back"
                            />
                          </Box>
                          <Box position="absolute" className="all-event">
                            <img
                              src={biz.pictures[0]}
                              alt="business_picture"
                              className="all-event-pic"
                            />
                          </Box>
                        </Box>
                        <CardContent>
                          <Typography variant="body1">
                            {biz.businessName}
                          </Typography>
                          <Typography variant="body2">
                            {biz.location}
                          </Typography>
                          <Typography variant="body2">
                            {biz.phoneNumbers[0]}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                ))}
            </Box>
          </Box>
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
    </>
  );
};

export default RelatedBusiness;
