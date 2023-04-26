import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { useMap } from "react-leaflet";

const RoutingMachine = ({}) => {
  const mapInstance = useMap();

  useEffect(() => {
    L.Routing.control({
      geocoder: L.Control.Geocoder.nominatim({
        geocodingQueryParams: {
          countrycodes: "co",
        },
      }),
    }).addTo(mapInstance);
  }, [mapInstance]);

  return null;
};

export { RoutingMachine };
