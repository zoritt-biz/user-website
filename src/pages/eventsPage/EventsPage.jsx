import React from "react";
import AllEvents from "../../components/events/AllEvents";
import Navbar from "../../components/navbar/navbar";
import Footer from '../../components/footer/Footer';

const EventsPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="w-100">
        <AllEvents />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default EventsPage;
