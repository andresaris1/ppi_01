import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const RoutingMachine = ({ map, waypoints, setWaypoints }) => {
  const mapInstance = useMap();

  useEffect(() => {
    //     L.Routing.control({
    //       waypoints: [
    //         L.latLng(4.624335, -74.063644),
    //         L.latLng(4.624335, -74.063645),
    //       ],
    //     }).addTo(mapInstance);
    //   }, []);
    //   return null;
    // };
    if (map) {
      const leafletElement = L.Routing.control({
        waypoints: waypoints,
        routeWhileDragging: true,
        // geocoder: L.Control.Geocoder.nominatim(),
        reverseWaypoints: true,
        showAlternatives: true,
        altLineOptions: {
          styles: [
            { color: "black", opacity: 0.15, weight: 9 },
            { color: "white", opacity: 0.8, weight: 6 },
            { color: "blue", opacity: 0.5, weight: 2 },
          ],
        },
      }).addTo(map);

      leafletElement.on("routeselected", (e) => {
        setWaypoints(e.route.waypoints);
      });

      return () => {
        mapInstance.removeControl(leafletElement);
      };
    }
  }, [map, mapInstance, waypoints, setWaypoints]);

  return null;
};

export { RoutingMachine };
