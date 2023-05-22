import { useEffect } from "react";
import { useMap } from "react-leaflet";

// Importar librerias de Leaflet
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "lrm-graphhopper";

// Iniciar la RoutingMachine
const RoutingMachine = () => {
  // Inicializar el mapa
  const mapInstance = useMap();

  useEffect(() => {
    if (!mapInstance) return;

    // Crear el control de la RoutingMachine
    const routingControl = L.Routing.control({
      // Configuraciónes generales de la RoutingMachine
      profile: "cycling",
      language: "es",
      routeWhileDragging: true,
      showAlternatives: true,

      // Configuraciónes del geocoder de Google
      geocoder: new L.Control.Geocoder.Google({
        suggest: true,
        geocodingQueryParams: {
          // Limitar la búsqueda al Valle de Aburrá
          bounds: "6.0749, -75.7315;6.3565, -75.4443",
          key: "AIzaSyA9XJGPAUMvk-tiYLl-AyKfKmT_zCMmc20",
          component: "country:co",
          language: "es",
          profile: "cycling",
        },
        suggestMinLength: 3,
        defaultMarkGeocode: false,
      }),

      // Configuraciones del router de GraphHopper
      router: new L.Routing.GraphHopper(
        // API KEY de GraphHopper
        "deebe34a-a717-4450-aa2a-f6de3ec9b443",
        // Parámetros de la ruta
        {
          urlParameters: {
            vehicle: "bike",
            locale: "es",
          },
        }
      ),
      // geocoder: L.Control.Geocoder.nominatim({
      //   geocodingQueryParams: {
      //     countrycodes: "co",
      //   },
      // })

      // Agregar la RoutingMachine al mapa
    }).addTo(mapInstance);

    return () => {
      // Remover el control de la RoutingMachine (duplicado)
      mapInstance.removeControl(routingControl);
    };
  }, [mapInstance]);

  return null;
};

// Exportar la RoutingMachine
export { RoutingMachine };
