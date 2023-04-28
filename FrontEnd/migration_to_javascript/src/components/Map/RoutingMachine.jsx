import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { useMap } from "react-leaflet";

const RoutingMachine = () => {
  const mapInstance = useMap();

  useEffect(() => {
    if (!mapInstance) return;

    const routingControl = L.Routing.control({
      waypoints: [],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim({
        geocodingQueryParams: {
          countrycodes: "co",
          bounded: 1,
          viewbox: "-75.766,6.081,-75.329,6.452",
        },
      }),
      language: "es",
    }).addTo(mapInstance);

    return () => mapInstance.removeControl(routingControl);
  }, [mapInstance]);

  return null;
};

export { RoutingMachine };
