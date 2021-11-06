import React, {useEffect} from 'react';
import {useLazyQuery} from '@apollo/client';
import {Link} from 'react-router-dom';

import {ArrowForwardIos} from '@mui/icons-material';

import {GET_POSTS} from '../../apollo/queries/post-queries';

import Loading from '../loading/loading';
import SinglePost from './single-post';
import {Box, Container, Typography, useMediaQuery, useTheme,} from '@mui/material';
import appStyles from '../../app-styles';

const Posts = props => {
  const classes = appStyles();
  var myDate = new Date();
  var newDate = new Date(myDate.getTime() - 60 * 60 * 24 * 1000 * 1000);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [getPosts, {data, loading}] = useLazyQuery(GET_POSTS);

  useEffect(() => {
    getPosts({
      variables: {
        page: 1,
        perPage: 10,
        filterDate: newDate.toISOString().split('T')[0],
      },
    });
  }, []);

  return (
    <Box mt={2} pt={4} pb={2} bgcolor={'white'}>
      <Container maxWidth="lg">
        <Typography variant="h5" mb={3}>
          <Link to="/posts-scroll" className={classes.link}>
            What's new? <ArrowForwardIos fontSize="small"/>
          </Link>
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns={`${
            isMobile ? 'auto auto' : 'auto auto auto auto'
          }`}
          gap="10px"
        >
          {loading &&
          Array(isMobile ? 2 : 4)
            .fill()
            .map((_, index) => (
              <Box key={index}>
                <Loading rectHeight={250} avatar={false} line={false}/>
              </Box>
            ))}
        </Box>

        <Box
          display="flex"
          pb={2}
          className={classes.scrollbar}
          style={{overflowX: 'scroll'}}
        >
          {data &&
          data.postPagination &&
          data.postPagination.items &&
          data.postPagination.items.length > 0 &&
          data.postPagination?.items?.map(post => (
            <Box
              key={post._id}
              className="col-8 col-sm-5 col-md-4 col-lg-3 px-0 ml-3"
              style={{marginRight: '16px'}}
            >
              <SinglePost post={post}/>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Posts;
