import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "lrm-graphhopper";

// Api keys
const GoogleMapsAPIKEY = import.meta.env.VITE_GOOGLE_MAPS_APIKEY;
const GraphHopperAPIKEY = import.meta.env.VITE_GRAPHOPPER_APIKEY;

// Routing machine component
const RoutingMachine = () => {
  const mapInstance = useMap();

  useEffect(() => {
    if (!mapInstance) return;

    const routingControl = L.Routing.control({
      profile: "cycling",
      language: "es",
      routeWhileDragging: true,
      geocoder: new L.Control.Geocoder.Google({
        geocodingQueryParams: {
          bounds: "7.14,-76.29|5.44,-74.78",
          key: GoogleMapsAPIKEY,
          components: "locality:Antioquia|administrative_area_level_1:CO",
          profile: "cycling",
          language: "es",
          defaultMarkGeocode: false,
        },
        suggestionMinLength: 3,
        suggest: true,
      }),
      router: new L.Routing.GraphHopper(GraphHopperAPIKEY, {
        urlParameters: {
          vehicle: "bike",
          locale: "es",
        },
      }),
    }).addTo(mapInstance);

    return () => {
      mapInstance.removeControl(routingControl);
    };
  }, [mapInstance]);

  return null;
};

export { RoutingMachine };
