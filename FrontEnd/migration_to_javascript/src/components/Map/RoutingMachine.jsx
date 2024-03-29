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

    // Routing control
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

      // Graphhopper routing machine
      router: new L.Routing.GraphHopper(GraphHopperAPIKEY, {
        urlParameters: {
          vehicle: "bike",
          locale: "es",

          // Put some priority to the route
          priority: [
            {
              if: "max_speed >= 50",
              multiply_by: "0.3",
            },
            {
              if: "bike_network == MISSING",
              multiply_by: "0.9",
            },
            {
              if: "surface == 'cobblestone'",
              multiply_by: "1.2",
            },
            {
              if: "surface == 'unpaved'",
              multiply_by: "1.3",
            },
            {
              if: "elevation_up >= 100",
              multiply_by: "0.8",
            },
            {
              if: "elevation_down >= 100",
              multiply_by: "1.2",
            },
            {
              if: "road_class == path",
              multiply_by: "1.2",
            },
          ],
        },
      }),
    }).addTo(mapInstance);

    return () => {
      mapInstance.removeControl(routingControl);
    };
  }, [mapInstance]);

  return null;
};

// Export RoutingMachine component
export { RoutingMachine };
