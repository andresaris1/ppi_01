import { useMap} from 'react-leaflet'


function MapConfig(){
    const map = useMap()
    map.scrollWheelZoom.enable()
    return null
}

export { MapConfig }