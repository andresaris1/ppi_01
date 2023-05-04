import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";


const RoutingMachine = () => {

  const mapInstance = useMap();

  useEffect(() => {

    if(!mapInstance) return;


    const routingControl = L.Routing.control({
      // waypoints: [L.latLng(6.164397460539476, -75.61191804045387), L.latLng(6.216164572769825, -75.58605337296397)],
      profile : 'bike',
      language: 'es',
      routeWhileDragging: true,
      geocoder : new L.Control.Geocoder.Google({
        geocodingQueryParams : {
          bounds : "7.1443,-76.2960;5.4411,-74.7855",
          key : "AIzaSyA9XJGPAUMvk-tiYLl-AyKfKmT_zCMmc20",
          components : "country:co"
        }
      }),
      // geocoder: L.Control.Geocoder.nominatim({
      //   geocodingQueryParams: {
      //     countrycodes: "co",
      //   },
      // })
    }).addTo(mapInstance);

  
    return () => {
      mapInstance.removeControl(routingControl)
    }

  }, [mapInstance])
  
  return null;
};

export { RoutingMachine };
