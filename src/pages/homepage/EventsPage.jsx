import React, {useEffect} from 'react';
import Events from '../../components/homepage/Events';

import {GET_ALL_EVENTS} from '../../apollo/queries/event_queries';
import {useLazyQuery} from '@apollo/client';
import Loading from '../../components/common/Loading';
import {withRouter} from 'react-router';

const EventsPage = ({sort, history}) => {
  const [getEvents, {loading, data, error}] = useLazyQuery(GET_ALL_EVENTS, {
    variables: {limit: 3, sort},
  });

  useEffect(() => {
    getEvents();
  }, [getEvents]);
  return (
    <div className="mt-5 container-md">
      <h3 className="mb-3" onClick={() => history.push('/events')}>
        Events
      </h3>

      {/* <div className="scrolling-wrapper">
        <div
          className={`${window.innerWidth < 576 ? 'scrolling-item' : 'row'}`}
        > */}
      <div className="row">
        {loading &&
        Array(2)
          .fill()
          .map((_, index) => (
            <div key={index} className="col-6">
              <Loading
                rectHeight={window.innerWidth < 576 ? 200 : 250}
                avatar={false}
                line={true}
              />
            </div>
          ))}
        <div
          className="d-flex event-item-container container-md pb-3"
          style={{overflowX: 'scroll'}}
        >
          {data && data.eventMany && data.eventMany.length > 0
            ? data.eventMany.map(event => (
              <div key={event._id} className="homepage-events-container">
                <Events event={event}/>
              </div>
            ))
            : !loading && <div className="container-md">No events found</div>}
        </div>

        {error && <div>error: {error}</div>}
      </div>
    </div>
  );
};

export default withRouter(EventsPage);
