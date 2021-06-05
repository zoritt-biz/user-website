import React, { useEffect } from 'react';
import Events from '../../components/homepage/Events';

import { GET_ALL_EVENTS } from '../../apollo/queries/event_queries';
import { useLazyQuery } from '@apollo/client';
import Loading from '../../components/common/Loading';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    paddingRight: 15,
  },
});

const EventsPage = ({ sort }) => {
  const classes = useStyle();
  const [getEvents, { loading, data, error }] = useLazyQuery(GET_ALL_EVENTS, {
    variables: { limit: 3, sort },
  });

  const count = [1, 2, 3];

  useEffect(() => {
    getEvents();
  }, [getEvents]);
  return (
    <div className="mt-5 container-md">
      <h3 className="mb-3">Events</h3>
      {/* <div className="scrolling-wrapper">
        <div
          className={`${window.innerWidth < 576 ? 'scrolling-item' : 'row'}`}
        > */}
      <div className="row">
        {loading &&
          count.map(index => (
            <div key={index} className="col-4">
              <Loading
                rectHeight={window.innerWidth < 576 ? 100 : 250}
                avatar={false}
                line={true}
              />
            </div>
          ))}
        <div
          className="d-flex event-item-container"
          style={{ overflowX: 'scroll' }}
        >
          {data && data.eventMany && data.eventMany.length > 0
            ? data.eventMany.map(event => (
                <div key={event._id} className={classes.root}>
                  <Events event={event} />
                </div>
              ))
            : !loading && <div className="container-md">No events found</div>}
        </div>

        {error && <div>error: {error}</div>}
      </div>
    </div>
  );
};

export default EventsPage;
