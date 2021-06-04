import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import AllEvents from '../../components/all_events/AllEvents';
import { useLazyQuery } from '@apollo/client';
import { GET_ALL_EVENTS } from '../../apollo/queries/event_queries';
import Loading from '../../components/common/Loading';

const EventsPage = () => {
  const [getEvents, { loading, error, data }] = useLazyQuery(GET_ALL_EVENTS);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  let count = [1, 2, 3, 4, 5];

  return (
    <>
      <Navbar />
      <div className="container-md events-container">
        <h3 className="mb-3">All Events</h3>
        <div className="row">
          {loading &&
            count.map(index => (
              <div key={index} className="col-12 col-lg-6 mb-3 mb-xl-5">
                <Loading rectHeight={200} avatar={true} />
              </div>
            ))}
          {data &&
            data.eventMany &&
            (data.eventMany.length > 0
              ? data.eventMany.map(event => (
                  <div key={event._id} className="col-12 col-lg-6 mb-3 mb-xl-5">
                    <AllEvents event={event} />
                  </div>
                ))
              : !loading && (
                  <div className="container-md">No Events found</div>
                ))}
          {error && <div>error: {error}</div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
