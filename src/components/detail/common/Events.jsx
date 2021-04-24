import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const Events = ({ business }) => {
  return (
    <>
      {/* events */}
      <div className="bg-white mb-2 p-4 border-bottom">
        <p className="fs-5 fw-bold">Events</p>

        {business.events.length > 0 ? (
          business.events.map(event => (
            <div className="event-list">
              <GridList className="event-grid-list" cols={1.5}>
                <GridListTile className="grid-list-tile-respo">
                  <img src={event.photos[0]} alt="" />
                  <GridListTileBar title={event.title} />
                </GridListTile>
              </GridList>
            </div>
          ))
        ) : (
          <div className="text-center">No Events</div>
        )}

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
      </div>
    </>
  );
};

export default Events;
