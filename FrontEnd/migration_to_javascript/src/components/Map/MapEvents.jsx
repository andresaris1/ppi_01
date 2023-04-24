import { useMap, useMapEvents} from 'react-leaflet'

function MapEvents({reviewMode, setReviewCoords, setUserPosition}){

    const mapInstance = useMap()

    const mapEvents = useMapEvents({ 
        locationfound(e) {
            setUserPosition(e.latlng)
            mapInstance.flyTo(e.latlng, 16)
          },
          
        click : (e) =>{
            console.log(e.originalEvent.target.tagName)
            if(reviewMode){
                if (e.originalEvent.target.tagName !== 'TEXTAREA' && 
                    e.originalEvent.target.tagName !== 'BUTTON'){ 
                    const coords = e.latlng
                    const centerCoords= mapInstance.getCenter()
                    const boxCoords = mapEvents.latLngToContainerPoint([centerCoords.lat, centerCoords.lng])
                    setReviewCoords({map : coords, box: boxCoords})
                    mapInstance.setView(coords)    
                }
                 
            }  
        }
    })
    return null
}

export { MapEvents }


// zoomend : () => {
//     console.log(mapEvents.getZoom())
//     setMapScale(mapEvents.getZoom())
// }