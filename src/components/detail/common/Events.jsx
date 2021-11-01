import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

const Events = ({ business }) => {
  return (
    <>
      <div className="bg-white mb-2 py-4 border-bottom ">
        <p className="fs-5 fw-bold">Events</p>
        {business.events.length > 0 ? (
          <div className="d-flex flex-wrap  overflow-hidden">
            <ImageList className="flex-nowrap w-100" cols={1.5}>
              {business.events.map(event =>
                event.photos.map((photo, index) => (
                  <ImageListItem key={index} className="grid-list-tile-respo">
                    <img src={photo} alt="Photos" />
                    <ImageListItemBar title={event.description} />
                  </ImageListItem>
                ))
              )}
            </ImageList>
          </div>
        ) : (
          <div className="text-center">No Events</div>
        )}
      </div>
      {/* <div className="event-list">
          <GridList className="event-grid-list" cols={1.5}>
            <GridListTile className="grid-list-tile-respo">
              <img src="../images/wow3.png" alt="" />
              <GridListTileBar title="All" />
            </GridListTile>

            <GridListTile className="grid-list-tile-respo">
              <img src="../images/event4.jpg" alt="" />
              <GridListTileBar title="Guest Chefs" />
            </GridListTile>

            <GridListTile className="grid-list-tile-respo">
              <img src="../images/event5.jpg" alt="" />
              <GridListTileBar title="Valentines and Single’s Day" />
            </GridListTile>
          </GridList>
        </div> */}
    </>
  );
};

export default Events;
