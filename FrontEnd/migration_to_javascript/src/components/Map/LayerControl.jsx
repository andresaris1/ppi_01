import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

const LayerControl = ({ layers, onLayerToggle }) => {
  const mapInstance = useMap();
  const APIKey = "4a3b40c79ef5b8cfcef33f8656a55b32";

  useEffect(() => {
    var clouds = L.OWM.clouds({ appId: APIKey });
    var baseLayers = {};
    var overlays = {
      "OpenWeatherMap Clouds": clouds,
    };
    L.control.layers(null, overlays).addTo(mapInstance);
  }, []);

  return null;
};

export { LayerControl };
