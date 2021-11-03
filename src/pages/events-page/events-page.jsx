import React, {useEffect} from 'react';
import NavBar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import EventCard from '../../components/event-card/event-card';
import {useLazyQuery} from '@apollo/client';
import {GET_EVENTS} from '../../apollo/queries/event-queries';
import Loading from '../../components/loading/loading';

const EventsPage = () => {
  var myDate = new Date();
  var newDate = new Date(myDate.getTime() - 60 * 60 * 24 * 1000 * 1000);

  const [getEvents, {loading, data, error}] = useLazyQuery(GET_EVENTS, {
    variables: {
      page: 1,
      perPage: 10,
      // today: new Date().toISOString().split('T')[0],
      today: "2020-10-10",
    },
  });

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <>
      <NavBar/>
      <div className="container-md events-container">
        <h3 className="mb-3">Events</h3>
        <div className="row">
          {loading &&
          Array(5)
            .fill()
            .map((_, index) => (
              <div key={index} className="col-12 col-lg-6 mb-3 mb-xl-5">
                <Loading rectHeight={200} avatar={true}/>
              </div>
            ))}
          {data &&
          data.eventPagination &&
          (data.eventPagination.items.length > 0
            ? data.eventPagination.items.map(event => (
              <div
                key={event._id}
                className="col-12 col-md-6 col-lg-4 mb-3 mb-xl-5"
              >
                <EventCard event={event}/>
              </div>
            ))
            : !loading && (
            <div className="container-md">No recent event found</div>
          ))}
          {error && <div>error: {error.message}</div>}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default EventsPage;
