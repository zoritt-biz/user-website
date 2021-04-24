import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Posts = ({ post }) => {
  return (
    <GridList className="w-100" cols={1.3}>
      <GridListTile className="w-100 p-0 h-auto">
        <Link to="/posts" className="text-decoration-none">
          <img
            src={post.photos && post.photos[0]}
            alt=""
            className="w-100 posts-images"
          />
        </Link>

        <GridListTileBar title={post.description} />
      </GridListTile>
    </GridList>
  );
};

export default Posts;
