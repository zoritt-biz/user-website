import React from "react";
import {GoogleMap, Marker, withGoogleMap} from "react-google-maps";

const MyMapComponent = (props) => {
  return (
    <div className="d-block">
      <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={{lat: props.center.lat, lng: props.center.lng}}
        center={{lat: props.center.lat, lng: props.center.lng}}
        onClick={(ev) => {
          props.setCenter({lat: ev.latLng.lat(), lng: ev.latLng.lng()})
        }}
      >
        {props.isMarkerShown &&
        <Marker
          position={{lat: props.center.lat, lng: props.center.lng}}
          draggable={props.draggable}
          onDragEnd={(ev) => {
            props.setCenter({lat: ev.latLng.lat(), lng: ev.latLng.lng()})
          }}
        />
        }
      </GoogleMap>
    </div>);
}

export default withGoogleMap(MyMapComponent);