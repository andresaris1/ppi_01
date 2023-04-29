import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from 'react-leaflet'
import { useState, useEffect } from 'react';
import L from 'leaflet';
import axios from 'axios';
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
import { Notice } from "../Notice/Notice";
import { StationPopup } from './StationPopup';
import { RoutingMachine } from './RoutingMachine';
import parkingMarker from '../../assets/bicycle-parking.png';


function Map( { appRef } ) {

    // Bike parking
    const [ parking, setParking ] = useState([]);
    const [ parkingLoaded , setParkingLoaded ] = useState(false);
    const [ showParking, setShowParking ]  = useState(false)
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
    const [ reviewsLoaded, setReviewsLoaded ] = useState( false )
    const [ showReviews, setShowReviews ] = useState( false )
    // Reviews - show notice box when a review is created
    const [ showNotice, setNotice ] = useState( {show : false, content : '', type : ''} )
    // User ubication
    const [ userPosition, setUserPosition ] = useState( null )
    // Handler user scale to show things 
    const [nearScale, setNearScale] = useState( false ) 
    // Modal  

    
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

      ( async () => {
        try{

          const response = await axios.get('https://bicimaps.herokuapp.com/api/bike-parking-list/')
          if(response.status === 200){
            console.log(response.data)
            setParking(response.data)
            setParkingLoaded(true)
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
    // Effect to handler the cursor icon when is review mode on
    useEffect( () => {
      const mapContainer = document.querySelector('div.leaflet-container')
      reviewMode ? 
        mapContainer.style.cursor = 'crosshair' : 
        mapContainer.style.cursor = 'grab'
      
      reviewMode && 
        setNotice( (prev) => {
            return {...prev, show:true, content:"Selecciona el lugar donde quieres hacer la reseña", type:'info'}
        } )
    }, [ reviewMode ] )

    // Style settings of the map
    const stationsIcon = new L.Icon({
      iconUrl: locationLogo,
      iconSize: [25, 25]
    });

    const stationsLabelSetter = (name, percentage) => {

      let colorClass = '';
      switch(true){
        case percentage <= 25: 
          colorClass = 'lowBikes'
          break;
        case percentage <= 75: 
          colorClass = 'mediumBikes'
          break;
        default: 
          colorClass = 'enoughBikes'
      }

      const stationsLabel = new L.divIcon({
        className : `stations_labels ${colorClass}`,
        html : `<span>${name}</span>`
      })
      return stationsLabel
    }
    

    const reviewIcon = new L.Icon({
      iconUrl : reviewMarker,
      iconSize : [20, 20]
    })
    const parkingIcon = new L.Icon({
      iconUrl : parkingMarker,
      iconSize : [30, 30]
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
          <MapEvents reviewMode = { reviewMode } 
                     setReviewCoords = { setReviewCoords }
                     setUserPosition = { setUserPosition }
                     setNearScale = { setNearScale }
                     nearScale = { nearScale } 
          />

          <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=X5b3jIXLMhNqludN1m6R"
          />
          {/* Routing Machine component */}
          <RoutingMachine/>

          {/* Show notice box to give info about user interactions */}
          { showNotice.show && 
              (<Notice content={showNotice.content} 
                                       type={showNotice.type}
                                       showHandler = {setNotice} 
              />) 
          }
          {/* Show position of the user in the map */}
          {
            userPosition ? 
              <LocationMarker userPosition = { userPosition } /> : 
              null
          }

          {
          parkingLoaded && 
            showParking ? (
              parking.features.map((parking) => {
                return (
                  <Marker
                  position={[parking.geometry.coordinates[1],parking.geometry.coordinates[0]]}
                  icon={parkingIcon}>
                  </Marker>
                )
            })):
            null
          }
          {
            stationsLoaded && 
              showEstations ? (
                stations.map( (station) => {
                  const bikesPercentage = (station.bikes / station.capacity) * 100;
                  return (
                    <Marker key={station.id} 
                            position={[station.lat, station.lon]} 
                            icon={ nearScale ? stationsLabelSetter(station.name, bikesPercentage) : stationsIcon }>
                      <Popup
                        className="custom-popup"
                      >
                        <StationPopup station = { station }
                                      bikesPercentage = { bikesPercentage}
                                      appRef = {appRef}
                        />
                      </Popup>
                    </Marker>
                  )
            })): 
            null
          }
          {
            bikewaysLoaded && showBikeways ? (
              bikeWays.map( ( bikeway ) => (
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
                        setReviewCreated = { setNotice } 
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
              name={"Biciparqueaderos"}
              show = {showParking}
              onToggle = {setShowParking}            
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