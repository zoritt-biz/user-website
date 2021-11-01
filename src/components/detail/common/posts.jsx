import React from 'react';
import {ImageList, ImageListItem, ImageListItemBar} from '@mui/material';

const Posts = ({business}) => {
  return (
    <>
      {/* <div className="bg-white mb-2 py-4 border-bottom">
        <p className="fs-5 fw-bold">Posts</p>

        {business.posts.length > 0 ? (
          business.posts.map(post =>
            post.photos.map((photo, index) => (
              <div key={index} className="event-list">
                <ImageList className="event-grid-list" cols={1.5}>
                  <ImageListItem className="grid-list-tile-respo">
                    <img src={photo} alt="" />
                    <ImageListItemBar title={post.description} />
                  </ImageListItem>
                </ImageList>
              </div>
            ))
          )
        ) : (
          <div className="text-center">No Posts</div>
        )}
      </div> */}

      <div className="bg-white mb-2 py-4 border-bottom ">
        <p className="fs-5 fw-bold">Posts</p>
        {business.posts.length > 0 ? (
          <div className="d-flex flex-wrap overflow-hidden">
            <ImageList className="flex-nowrap w-100" cols={1.5}>
              {business.posts.map(post =>
                post.photos.map((photo, index) => (
                  <ImageListItem key={index} className="grid-list-tile-respo">
                    <img src={photo} alt={post.description}/>
                    <ImageListItemBar title={post.description}/>
                  </ImageListItem>
                ))
              )}
            </ImageList>
          </div>
        ) : (
          <div className="text-center">No Posts</div>
        )}
      </div>
    </>
  );
};

export default Posts;
