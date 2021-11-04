import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Close } from '@mui/icons-material';
import { useLazyQuery } from '@apollo/client';
import { makeStyles } from '@mui/styles';
import { Backdrop, CircularProgress, Box, Alert } from '@mui/material';
import Post from '../../components/post/post';
import { GET_POSTS } from '../../apollo/queries/post-queries';
import PreLoader from '../../components/preloader/preloader';
import appStyles from '../../app-styles';

// const useStyles = makeStyles(theme => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//   },
// }));

const PostPage = () => {
  const classes = appStyles();
  var myDate = new Date();
  var newDate = new Date(myDate.getTime() - 60 * 60 * 24 * 1000 * 1000);

  const [getPosts, { data, loading, error }] = useLazyQuery(GET_POSTS, {
    variables: {
      page: 1,
      perPage: 10,
      filterDate: newDate.toISOString().split('T')[0],
    },
  });

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {loading && <PreLoader />}
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

      <Box
        position="relative"
        height="100vh"
        width="100vw"
        bgcolor="#1a1a1a"
        overflow="hidden"
        // className="event"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Link to="/">
            <Box position="absolute" top="1%" left="3%">
              <h3 className={classes.mainColor}>ዞሪት</h3>
            </Box>
          </Link>

          <Link to="/">
            <Box position="absolute" top="1%" right="3%">
              <Close fontSize="medium" sx={{ color: 'white' }} />
            </Box>
          </Link>
          {data && data.postPagination && (
            <Post data={data.postPagination.items} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default PostPage;
