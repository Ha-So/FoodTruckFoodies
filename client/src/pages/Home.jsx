import React, { Component } from 'react'
import '../style/style.css'
import {  MapContainer } from '../pages'
import {  CarouselContainer } from './CarouselContainer'
import Button from 'react-bootstrap/Button';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
                    lat: -1,
                    lng: -2
                  
                        }
       
      }

      /*
getGeoLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude });
                this.setState({lon: position.coords.longitude });
            }
        )
    }
}*/
    render() {


        return (
            <React.Fragment>
                
   

   
            <div class="header">
            <h1>Food Truck Foodies</h1>
            <p>Find your favorite truck and help others find theirs.</p>
            
          </div>
          <div class="subsubheader">
              <div>
              < CarouselContainer/>
              </div>

              <div>
                  <p>
                  At Food Truck Foodies you can search for the current location of any food truck in our database. Locations are updated in realtime by users such as yourself.
                 <hr/> You can confirm and verify a location someone else has posted or post your own. So give it a click and never miss your favorite meal on wheels again.
                  </p>
            </div>
            <Button variant="primary" size="lg" block>
                Find the food truck closest to you!
            </Button>
          </div>
          </React.Fragment>
          
          
        )
    }
}

export default Home