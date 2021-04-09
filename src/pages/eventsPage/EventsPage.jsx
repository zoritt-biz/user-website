import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import Events from "../../components/events/Events";
import { useLazyQuery } from "@apollo/client";
import { GET_EVENTS } from "../../apollo/queries/event_queries";

const EventsPage = () => {
  const [getEvents, { loading, error, data }] = useLazyQuery(GET_EVENTS);

  useEffect(() => {
    getEvents();
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="mt-5 container-md">
        <h3 className="mb-3">All Events</h3>
        <div className="row">
          {/* Loading goes here */}
          {loading && "loading..."}
          {data &&
            data.eventMany &&
            (data.eventMany.length > 0 ? (
              data.eventMany.map((event) => (
                <div className="col-12 col-lg-6 mb-3 mb-xl-5">
                  <Events
                    key={event._id}
                    // event={event}
                    image1="../images/wow.jpg"
                    image2="../images/wow2.jpg"
                    image3="../images/wow3.png"
                    title="Wow Burger"
                    place="Arat kilo, Addis Ababa"
                    eventName="A charity auction can be a great way to give back to your
                community and attract people who otherwise may not have dined at
                your restaurant."
                  />
                </div>
              ))
            ) : (
              <div>No events {/* Edit this section too */} </div>
            ))}
          {/* error goes here */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
