import { useMap, useMapEvents } from "react-leaflet";

function MapEvents({
  reviewMode,
  setReviewCoords,
  setUserPosition,
  setNearScale,
  nearScale,
}) {
  const mapInstance = useMap();

  // Event handlers for map events
  const mapEvents = useMapEvents({
    locationfound: (e) => {
      setUserPosition(e.latlng);
      mapInstance.flyTo(e.latlng, 16);
    },

    click: (e) => {
      console.log(e.originalEvent.target.tagName);
      if (reviewMode) {
        if (
          e.originalEvent.target.tagName !== "TEXTAREA" &&
          e.originalEvent.target.tagName !== "BUTTON"
        ) {
          const coords = e.latlng;
          const centerCoords = mapInstance.getCenter();
          const boxCoords = mapEvents.latLngToContainerPoint([
            centerCoords.lat,
            centerCoords.lng,
          ]);
          setReviewCoords({ map: coords, box: boxCoords });
          mapInstance.setView(coords);
        }
      }
    },

    zoomend: () => {
      if (mapEvents.getZoom() >= 15) {
        !nearScale && setNearScale(true);
      } else if (mapEvents.getZoom() < 15) {
        nearScale && setNearScale(false);
        console.log(nearScale);
      }
    },
  });

  return null;
}

export { MapEvents };
