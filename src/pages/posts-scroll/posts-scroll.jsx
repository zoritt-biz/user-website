import React, {useEffect, useState} from 'react';
import NavBar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import {useLazyQuery} from '@apollo/client';
import Loading from '../../components/loading/loading';
import {GET_POSTS} from '../../apollo/queries/post-queries';
import SinglePost from './single-post';
import {Alert, Box, Container, Typography} from '@mui/material';
import Grid from "@mui/material/Grid";

const PostsScroll = () => {
  var myDate = new Date();
  var newDate = new Date(myDate.getTime() - 60 * 60 * 24 * 1000 * 1000);
  const [show, setShow] = useState(false);

  const [getPosts, {data, loading, error}] = useLazyQuery(GET_POSTS, {
    variables: {
      page: 1,
      perPage: 10,
      filterDate: newDate.toISOString().split('T')[0],
    },
  });

  const handleNavbar = () => {
    setShow(!show);
  };

  const hideNavbar = () => {
    setShow(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <NavBar show={show} handleNavbar={handleNavbar}/>
      <Box mt={5} pt={5}/>
      <Container maxWidth="lg" onClick={hideNavbar}>
        <Typography variant="h5" mb={3}>
          What's new?{' '}
        </Typography>
        <Box display="flex">
          {loading &&
          Array(5)
            .fill()
            .map((_, index) => (
              <Box key={index} className="col-12 col-lg-6 mb-3 mb-xl-5">
                <Loading rectHeight={200} avatar={true}/>
              </Box>
            ))}

          <Grid container spacing={2}>
            {data &&
            data.postPagination &&
            data.postPagination.items.length > 0 &&
            data.postPagination.items.map(post => (
              <Grid item key={post._id} xs={12} md={6} lg={4}>
                <SinglePost post={post}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

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
      <Footer/>
    </>
  );
};

export default PostsScroll;
