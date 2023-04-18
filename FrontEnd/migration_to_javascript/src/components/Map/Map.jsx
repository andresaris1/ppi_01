import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Map(){

    const [stations, setStations] = useState([]);
    const [dataLoaded , setdataLoaded] = useState(false);
  
    useEffect(()=>{
      axios.get('https://webapp.metropol.gov.co/wsencicla/api/Disponibilidad/GetDisponibilidadMapas/')
      .then( (response ) => {
        const { data } = response;
        console.log(data) 
        setStations(data);
        setdataLoaded(true);
      } )
      .catch( (error) => {
        console.log(error);
      })
    }, [])
    const customIcon = new L.Icon({
      iconUrl: './assets/location-dot-solid.svg',
      iconSize: [30, 30],
    });

    return (
        <MapContainer center={[6.259770689579672, -75.57469561881551]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        dataLoaded ? (
        stations.map( (station) => {
          return (
            <Marker key={station.id} position={[station.lat, station.lon]}>
              <Popup>
                {station.name} - {station.bikes}
                
              </Popup>
            </Marker>
          )
        } )): null
      }
    </MapContainer>
    )
}

export { Map }