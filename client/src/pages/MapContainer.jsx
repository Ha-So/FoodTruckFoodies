


import React, { Component } from 'react'
import '../style/style.css'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%',
  };
  const containerStyle = {
    position: 'relative',  
    width: '50%',
    height: '50%'
  };
export class MapContainer extends Component {
    constructor(props) {
      super(props);
      console.log("Hello from mapcontainer");
      this.state = {
       state_lat: 0,
       state_lon: 0
                
      }
   
      
    }



  /*
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }*/
    fetchPlaces(mapProps, map) {
      const {google} = mapProps;
      const service = new google.maps.places.PlacesService(map);
      // ...
    }
  
    render() {

      return (

          <Map
            google={this.props.google}
            zoom={8}
            onReady={this.fetchPlaces}
            containerstyle={containerStyle}
            style={mapStyles}
            initialCenter={{ lat: 40, lng:-70}}
          >
           <Marker position={{ lat: 48.00, lng: -122.00}} />
          
          </Map>
  
      );
    }

    
  }

  export default GoogleApiWrapper({
    apiKey: 'API-KEY'
  })(MapContainer);
