import React, { useEffect } from "react";
import {MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const icon = L.icon({
    iconUrl: "./placeholder.png.jpg",
    iconSize: [38, 38]
});

const position = [51.505, -0.09];



export default function Maps(props) {
  const { selectPosition } = props;
  const locationSelection =[selectPosition?.lat, selectPosition?.lon];

    return (
  <MapContainer 
  center={position} 
  zoom={8} 
  style={{ width: "100%", height: "100%" }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=ZIxY2rxQ9913zcCHNWl0"
    />
    {
        selectPosition && (
    <Marker position={locationSelection} icon= {icon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
        )
}
  </MapContainer>
    )
};
