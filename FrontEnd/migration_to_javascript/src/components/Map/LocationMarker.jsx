import { useState } from "react"
import { useMapEvents, Marker, Popup  } from "react-leaflet"
import userIcon from '../../assets/person-biking-solid-anim.svg'

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const userPositionIcon = new L.Icon({
        iconUrl: userIcon,
        iconSize: [30, 30]
      });

    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position} icon={userPositionIcon}>
        <Popup>Tú estás acá!</Popup>
      </Marker>
    )
}

export { LocationMarker };