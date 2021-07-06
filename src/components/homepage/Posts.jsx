import React from 'react';
// import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Posts = ({ post }) => {
  return (
    <>
      <div className="post-container mb-2">
        <Link to="/posts" className="text-decoration-none">
          <img
            src={post.photos && post.photos[0]}
            alt="Post"
            className="w-100 h-100 posts-image"
            // style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>
      {/* <p>{post.description}</p> */}
      <p className="posts-typography m-0 pb-2">{post.description}</p>
    </>
    // <GridList className="w-100" cols={1.3}>
    //   <GridListTile className="w-100 p-0 h-auto">
    //     <Link to="/posts" className="text-decoration-none">
    //       <img
    //         src={post.photos && post.photos[0]}
    //         alt=""
    //         className="w-100 posts-images"
    //       />
    //     </Link>

    //     <GridListTileBar title={post.description} />
    //   </GridListTile>
    // </GridList>
  );
};

export default Posts;
