import React from 'react';
import Event from '../../components/event/Event';
import { Link } from 'react-router-dom';
import { Close } from '@material-ui/icons';

const EventPage = () => {
  return (
    <div className="event">
      <div className="d-flex justify-content-center align-items-center event-container">
        <Link to="/">
          <p className="event-logo  fs-2">ዞሪት</p>
        </Link>

        <Link to="/">
          <Close className="event-close fs-2" />
        </Link>

        <Event />
      </div>
    </div>
  );
};

export default EventPage;
