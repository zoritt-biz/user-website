import React from 'react';
import {ImageList, ImageListItem} from '@mui/material';

const Photos = ({business}) => {
  return (
    <>
      {/* photos and videos mobile + web */}
      {/* <div className="bg-white mb-2 py-4 border-bottom">
        <p className="fs-5 fw-bold">Photos and Videos</p>
        {console.log(business.pictures, 'pic')}

        {business.pictures.length > 0 ? (
          business.pictures.map((picture, index) => (
            <div key={index} className="event-list">
              <GridList className="event-grid-list" cols={1.5}>
                <GridListTile className="grid-list-tile-respo">
                  <img src={picture} alt="" />
                  <GridListTileBar title="hello" />
                </GridListTile>
              </GridList>
            </div>
          ))
        ) : (
          <div className="text-center">No Photos</div>
        )} */}

      <div className="bg-white mb-2 py-4 border-bottom ">
        <p className="fs-5 fw-bold">Photos and Videos</p>
        {business.pictures.length > 0 ? (
          <div className="d-flex flex-wrap  overflow-hidden">
            <ImageList className="flex-nowrap w-100" cols={1.5}>
              {business.pictures.map((picture, index) => (
                <ImageListItem key={index} className="grid-list-tile-respo">
                  <img src={picture} alt="Photos"/>
                  {/* <GridListTileBar title={post.description} /> */}
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        ) : (
          <div className="text-center">No Photos</div>
        )}
      </div>
      {/* <div className="event-list">
          <GridList className="event-grid-list" cols={1.5}>
            <GridListTile className="grid-list-tile-respo">
              <img src="../images/event-drink.jpg" alt="" />
              <GridListTileBar title="Drink" />
            </GridListTile>

            <GridListTile className="grid-list-tile-respo">
              <img src="../images/event7.jpg" alt="" />
              <GridListTileBar title="Special Foods" />
            </GridListTile>

            <GridListTile className="grid-list-tile-respo">
              <img src="../images/event8.jpg" alt="" />
              <GridListTileBar title="Food Delivery" />
            </GridListTile>
          </GridList>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Photos;
