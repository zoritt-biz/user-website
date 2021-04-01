import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const Photos = () => {
  return (
    <>
      {/* photos and videos */}
      <div className="bg-white mb-2 p-4 border-bottom">
        <p className="fs-5 fw-bold">Photos and Videos</p>

        <div className="event-list">
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
        </div>
      </div>
    </>
  );
};

export default Photos;
