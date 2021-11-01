import React, {useEffect} from 'react';

import {GET_EVENTS} from '../../apollo/queries/event-queries';
import {useLazyQuery} from '@apollo/client';
import Loading from '../../components/common/loading';
import {withRouter} from 'react-router';
import AllEvents from '../../components/all-events/all-events';
import {Link} from 'react-router-dom';
import {ArrowForwardIos} from '@mui/icons-material';

const EventsPage = ({sort, history}) => {
  var myDate = new Date();
  // var newDate = new Date(myDate.getTime() - (60 * 60 * 24 * 8 * 1000));

  const [getEvents, {loading, data, error}] = useLazyQuery(GET_EVENTS);

  useEffect(() => {
    getEvents({
      variables: {
        page: 1,
        perPage: 10,
        today: new Date().toISOString().split('T')[0],
      },
    });
  }, []);

  return (
    <div className="mt-5 px-0 px-md-3 container-md">
      <h3 className="mb-3 px-3">
        <Link to="/events" className="text-decoration-none text-dark">
          Events <ArrowForwardIos fontSize="small"/>
        </Link>
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

      <div
        className="d-flex event-item-container pb-3 pr-md-3"
        style={{overflowX: 'scroll'}}
      >
        {data && data.eventMany && data.eventMany.length > 0
          ? data.eventMany.map(event => (
            <div
              key={event._id}
              className="col-8 col-sm-5 col-md-4 col-lg-3 px-0 ml-3"
            >
              <Link to={`/`} className="text-decoration-none">
                <AllEvents event={event}/>
              </Link>
            </div>
          ))
          : !loading && <div className="container-md">No events found</div>}
        {error && <div>error: {error.message}</div>}
      </div>
    </div>
  );
};

export default withRouter(EventsPage);
