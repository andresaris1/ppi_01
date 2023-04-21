import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import axios from 'axios';
import L from 'leaflet';
import locationLogo from '../../assets/unnamed.png';
import '../../App.css';
import { LocationMarker } from './LocationMarker';
import { MapConfig } from './MapConfig';
import './style.css';

function Map(){

    const [stations, setStations] = useState([]);
    const [dataLoaded , setdataLoaded] = useState(false);
  
    // useEffect(()=>{ 
    //    ( async () => {
    //     try{
    //       const { data } = await axios.get('https://webapp.metropol.gov.co/wsencicla/api/Disponibilidad/GetDisponibilidadMapas/')
    //      setStations(data);
    //     setdataLoaded(true);
    //    }
    //    catch (error){
    //      console.log(error)
    //    }
    //    })();

    // }, [])

    const stationsIcon = new L.Icon({
      iconUrl: locationLogo,
      iconSize: [30, 30]
    });


    return (
      <>
        <MapContainer center={[6.259770689579672, -75.57469561881551]} zoom={13} scrollWheelZoom={false}>
          <MapConfig/>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            dataLoaded ? (
            stations.map( (station) => {
              const bikesPercentage = (station.bikes / station.capacity) * 100;
              return (
                <Marker key={station.id} position={[station.lat, station.lon]} icon={stationsIcon}>
                  <Popup
                    className="custom-popup"
                  >
                    <div className="popup-header">{station.name}</div>
                    <div className="capacity-and-bikes">
                      <div className="capacity">{`Puestos: ${station.capacity}`}</div>
                      <div className="bikes" style={{backgroundColor: bikesPercentage >= 75 ? "#4caf50" : bikesPercentage >= 25 ? "#ffc107" : "#f44336"}}>
                        {`Bicicletas: ${station.bikes}`}
                      </div>
                    </div>
                    <span className="type">{station.type}</span>
                    <div>{station.address}</div>
                    <div>{station.description}</div>
                    <div className={station.closed ? "closed" : "open"}>{station.closed ? <p>cerrado</p> : <p>abierto</p>}</div>
                  </Popup>
                </Marker>
              )
            } )): null
          }
        <LocationMarker/>
        </MapContainer>
      </>
    )
}

export { Map }
