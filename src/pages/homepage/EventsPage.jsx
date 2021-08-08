import React, {useEffect} from 'react';

import {GET_ALL_EVENTS} from '../../apollo/queries/event_queries';
import {useLazyQuery} from '@apollo/client';
import Loading from '../../components/common/Loading';
import {withRouter} from 'react-router';
import AllEvents from "../../components/all_events/AllEvents";

const EventsPage = ({sort, history}) => {
  var myDate = new Date();
  var newDate = new Date(myDate.getTime() - (60 * 60 * 24 * 8 * 1000));

  const [getEvents, {loading, data, error}] = useLazyQuery(GET_ALL_EVENTS, {
    variables: {
      "limit": 10,
      "filterDate": `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`,
      "now": new Date().toISOString().split("T")[0],
    },
  });

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <div className="mt-5 px-0 px-md-3 container-md">
      <h3 className="mb-3 px-3" onClick={() => history.push('/events')}>
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
      </div>

      {/*{error && <div>error: {error}</div>}*/}

      <div
        className="d-flex event-item-container pb-3 pr-md-3"
        style={{overflowX: 'scroll'}}
      >
        {data && data.eventMany && data.eventMany.length > 0
          ? data.eventMany.map(event => (
            <div key={event._id} className="col-8 col-sm-5 col-md-4 col-lg-3 px-0 ml-3">
              {/*<Link to={`/`} className="text-decoration-none">*/}
              <AllEvents event={event}/>
              {/*</Link>*/}
            </div>
          ))
          : !loading && <div className="container-md">No events found</div>}
      </div>
    </div>
  );
};

export default withRouter(EventsPage);
