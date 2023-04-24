import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from 'react-leaflet'
import { useState, useEffect } from 'react';
import axios from 'axios';
import L from 'leaflet';
import locationLogo from '../../assets/unnamed.png';
import '../../App.css';
import { LocationMarker } from './LocationMarker';
import { MapEvents } from './MapEvents';
import { SwithControl } from './SwitchControl';
import { WidgetsBox } from './WidgetsBox';
import { AddReviewControl } from './AddReviewControl';
import { Review } from '../Review/Review';
import reviewMarker from '../../assets/comment-dots-solid.svg'
import { LocateUserControl } from './LocateUserControl';


function Map() {
    // Encicla Stations  
    const [ stations, setStations ] = useState([]);
    const [ stationsLoaded , setStationsLoaded ] = useState(false);
    const [ showEstations, setShowStations ]  = useState(true)
    // Bike wayss
    const [ bikeWays, setBikeWays ] = useState([]);
    const [ bikewaysLoaded, setBikewaysLoaded ] = useState(false);
    const [ clickedBikeWay , setClickedBikeWay ] = useState(null)  
    const [ showBikeways, setShowBikeWays ] = useState(false)
    // Reviews
    const [ reviewMode, setReviewMode ] = useState(false)
    const [ reviewCoords, setReviewCoords ] = useState(null)
    const [ reviews, setReviews] = useState([])
    const [reviewsLoaded, setReviewsLoaded ] = useState(false)
    const [showReviews, setShowReviews ] = useState(false)

    // User ubication

    const [ userPosition, setUserPosition ] = useState(null) 
    

    useEffect(()=>{ 
      ( async () => {
        try{
          const { data } = await axios.get('https://webapp.metropol.gov.co/wsencicla/api/Disponibilidad/GetDisponibilidadMapas/')
          setStations(data);
          setStationsLoaded(true);
        }
        catch (error){
          console.log(error)
        }
      })();

      ( async () => {
        try{

          const response = await axios.get('https://bicimaps.herokuapp.com/api/bikeways/')
          if(response.status === 200){
            console.log(response.data)
            setBikeWays(response.data)
            setBikewaysLoaded(true)
          }

        }
        catch(error){

        }
      })();

      (async () => {
        try{

          const response = await axios.get('https://bicimaps.herokuapp.com/api/reviews/')
          if(response.status === 200){
            setReviews( response.data )
            setReviewsLoaded( true )
          }else{
            
          }
    
        }
        catch(error){
          console.log(error)
        }

      })()

    }, [])

    useEffect( () => {
      const mapContainer = document.querySelector('div.leaflet-container')
      reviewMode ? 
        mapContainer.style.cursor = 'crosshair' : 
        mapContainer.style.cursor = 'grab'
    }, [reviewMode] )

    // Style settings of the map

    const stationsIcon = new L.Icon({
      iconUrl: locationLogo,
      iconSize: [25, 25]
    });

    const reviewIcon = new L.Icon({
      iconUrl : reviewMarker,
      iconSize : [20, 20]
    })

    const defaultStyle = {
      color: "blue",
      weight: 4,
      opacity: 0.6,
    };
    const clickedStyle = {
      color: "red",
      weight: 7,
      opacity: 1,
    };

    // Handlers
  
    return (
      <>
        <MapContainer
            center = { [6.259770689579672, -75.57469561881551] } 
            zoom = { 14 } 
            scrollWheelZoom = { true }
        >
          <MapEvents reviewMode = {reviewMode} 
                     setReviewCoords = {setReviewCoords}
                     setUserPosition = {setUserPosition}
          />

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {
            userPosition ? 
              <LocationMarker userPosition = { userPosition } /> : null
          }

          {
            stationsLoaded && showEstations ? (
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
                    <div className={station.closed ? "open" : "closed" }>{station.closed ? <p>abierto</p> : <p>cerrado</p> }</div>
                  </Popup>
                </Marker>
              )
            } )): null
          }

          {
            bikewaysLoaded && showBikeways ? (
              bikeWays.map( (bikeway) => (
                <Polyline key={bikeway.way_id} 
                          positions={ bikeway.bike_way.coordinates } 
                          pathOptions={
                            !clickedBikeWay || clickedBikeWay !== bikeway.way_id ?
                            defaultStyle :
                            clickedStyle 
                          }
                          eventHandlers={{
                            click: function(e) {
                              setClickedBikeWay(bikeway.way_id)
                              e.target.bindPopup(
                                `<div><h2>${bikeway.name}</h2><p>Longitud: ${Math.floor(parseInt(bikeway.lenght))} m.</p></div>`
                              , { autoPan: false }).openPopup()
                            }
                          }}    
                          />
              ))
            ) : null
          }

          {
            reviewsLoaded && showReviews ? 
              reviews.map( (review) => (
                <Marker key={review.review_id} 
                        position={review.review_location.coordinates}
                        icon={reviewIcon}
                >
                  <Popup>
                    {review.review} - por: {review.user_id}
                  </Popup>

                </Marker >
            ) ) : null
          }
          {
            reviewCoords && 
              <Marker position={[reviewCoords?.map.lat, reviewCoords?.map.lng]}>
                <Review coordinates = { reviewCoords }
                        setReviewMode = { setReviewMode }
                        setReviewCoords = { setReviewCoords }
                        setReviews = { setReviews } 
                /> 
              </Marker>
          }

          <WidgetsBox>
            <SwithControl 
              name = {"Encicla"}
              show = {showEstations}
              onToggle = {setShowStations}
            />

            <SwithControl 
              name={"Ciclo rutas"}
              show = {showBikeways}
              onToggle = {setShowBikeWays}            
            />

            <SwithControl 
              name={"Reseñas"}
              show = {showReviews}
              onToggle = {setShowReviews}            
            />

            <AddReviewControl
              reviewMode = { reviewMode } 
              setReviewMode = { setReviewMode } 
            />

            <LocateUserControl  
              userPosition = {userPosition}
            />

          </WidgetsBox>
        </MapContainer>
      </>
    )
}

export { Map }