import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import AllEvents from '../../components/all-events/all-events';
import { useLazyQuery } from '@apollo/client';
import { GET_EVENTS } from '../../apollo/queries/event-queries';
import Loading from '../../components/common/loading';

const EventsPage = () => {
  var myDate = new Date();
  var newDate = new Date(myDate.getTime() - 60 * 60 * 24 * 8 * 1000);

  const [getEvents, { loading, data, error }] = useLazyQuery(GET_EVENTS, {
    variables: {
      page: 1,
      perPage: 10,
      today: new Date().toISOString().split('T')[0],
    },
  });

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <>
      <Navbar />
      <div className="container-md events-container">
        <h3 className="mb-3">Events</h3>
        <div className="row">
          {loading &&
            Array(5)
              .fill()
              .map((_, index) => (
                <div key={index} className="col-12 col-lg-6 mb-3 mb-xl-5">
                  <Loading rectHeight={200} avatar={true} />
                </div>
              ))}
          {data &&
            data.eventMany &&
            (data.eventMany.length > 0
              ? data.eventMany.map(event => (
                  <div
                    key={event._id}
                    className="col-12 col-md-6 col-lg-4 mb-3 mb-xl-5"
                  >
                    <AllEvents event={event} />
                  </div>
                ))
              : !loading && (
                  <div className="container-md">No recent event found</div>
                ))}
          {error && <div>error: {error}</div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
