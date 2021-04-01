import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const Events = () => {
  return (
    <>
      {/* events */}
      <div className="bg-white mb-2 p-4 border-bottom">
        <p className="fs-5 fw-bold">Events</p>

        <div className="event-list">
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
        </div>
      </div>
    </>
  );
};

export default Events;
