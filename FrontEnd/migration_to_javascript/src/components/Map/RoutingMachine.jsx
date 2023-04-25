import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const RoutingMachine = ({}) => {
  const mapInstance = useMap();

  useEffect(() => {
    L.Routing.control({
      waypoints: [L.latLng(6.2624, -75.5782), L.latLng(6.2625, -75.578)],
      // geocoder: L.Control.Geocoder.nominatim(),
    }).addTo(mapInstance);
  }, []);
  return null;
};

export { RoutingMachine };
