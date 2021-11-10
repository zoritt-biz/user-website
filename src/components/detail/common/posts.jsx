import React from 'react';
import { Box, Typography } from '@mui/material';
import SinglePost from '../../home-page/single-post';
import appStyles from '../../../app-styles';

const Posts = ({ business }) => {
  const classes = appStyles();
  return (
    <>
      <Box bgcolor="white" mb={2} py={4}>
        <Typography variant="h5" mb={3}>
          Posts
        </Typography>
        {business.posts.length > 0 ? (
          <Box
            display="flex"
            pb={2}
            className={classes.scrollbar}
            style={{ overflowX: 'scroll' }}
          >
            {business.posts.map(post => (
              <div
                key={post._id}
                className="col-8 col-sm-5 col-md-4 col-lg-3"
                style={{ marginRight: '16px' }}
              >
                <SinglePost post={post} />
              </div>
            ))}
          </Box>
        ) : (
          <Box textAlign="center">No Posts</Box>
        )}
      </Box>
    </>
  );
};

export default Posts;
