import { useEffect } from "react";
import L from "leaflet";
import "leaflet-control-geocoder";
// Importar Leaflet control geocoder
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { useMap } from "react-leaflet";

const Geocoder = ({}) => {
  const mapInstance = useMap();
  useEffect(() => {
    L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        const latlng = e.gecode.center;
        L.Marker(latlng).addTo(mapInstance);
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(mapInstance);
  }, []);
  return null;
};

export { Geocoder };
