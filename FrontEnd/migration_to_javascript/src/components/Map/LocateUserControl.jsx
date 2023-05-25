import { useState } from "react";
import { useMap } from "react-leaflet";

function LocateUserControl({ userPosition }) {
  const [position, setPosition] = useState(null);
  const mapInstance = useMap();

  // Handle the user's position
  const handleUserPosition = (e) => {
    if (userPosition) {
      // Fly to the user's position with a zoom level of 16
      mapInstance.flyTo(userPosition, 16);
      return;
    }
    // Locate the user's position
    mapInstance.locate();
  };

  // Return button to locate the user
  return <button onClick={handleUserPosition}>Mi posición</button>;
}

export { LocateUserControl };
