import { useState } from "react"
import { useMap } from "react-leaflet"

function LocateUserControl( {userPosition} ){

    const [position, setPosition] = useState(null)
    const mapInstance = useMap()

    const handleUserPosition = (e) =>{

        if(userPosition){
            mapInstance.flyTo(userPosition, 16)
            return; 
        }
        mapInstance.locate();
    }

    return(
        <button onClick={ handleUserPosition }> 
            Mi posición 
        </button>
    )
}
export { LocateUserControl }