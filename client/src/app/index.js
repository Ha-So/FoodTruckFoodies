import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TrucksList, TrucksInsert, TrucksUpdate, Home, MapContainer } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
            <Route path="/Trucks/Home" exact component={Home} />
            <Route path="/Trucks/MapContainer" exact component={MapContainer} />
                <Route path="/Trucks/list" exact component={TrucksList} />
                <Route path="/Trucks/create" exact component={TrucksInsert} />
                <Route
                    path="/Trucks/update/:id"
                    exact
                    component={TrucksUpdate}
                />
            </Switch>
         
        </Router>
        
    )
}

export default App