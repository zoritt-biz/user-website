import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import { Box } from '@mui/material';

const MyMapComponent = props => {
  return (
    <Box display="block">
      <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={{ lat: props.center.lat, lng: props.center.lng }}
        center={{ lat: props.center.lat, lng: props.center.lng }}
        onClick={ev => {
          props.setCenter({ lat: ev.latLng.lat(), lng: ev.latLng.lng() });
        }}
      >
        {props.isMarkerShown && (
          <Marker
            position={{ lat: props.center.lat, lng: props.center.lng }}
            draggable={props.draggable}
            onDragEnd={ev => {
              props.setCenter({ lat: ev.latLng.lat(), lng: ev.latLng.lng() });
            }}
          />
        )}
      </GoogleMap>
    </Box>
  );
};

export default withGoogleMap(MyMapComponent);
