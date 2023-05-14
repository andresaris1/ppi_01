import { Marker, Popup } from "react-leaflet";
import userIcon from "../../assets/person-biking-solid-anim.svg";

function LocationMarker({ userPosition }) {
  // Add icon user position on the map
  const userPositionIcon = new L.Icon({
    iconUrl: userIcon,
    iconSize: [30, 30],
  });

  // Return HTML marker on user position
  return userPosition === null ? null : (
    <Marker position={userPosition} icon={userPositionIcon}>
      <Popup>Tú estás acá!</Popup>
    </Marker>
  );
}

export { LocationMarker };
