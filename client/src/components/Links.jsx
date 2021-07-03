import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render(){
        return (
            <React.Fragment>
                <Link to="/trucks/home" className="navbar-brand">
                    Food Truck Foodies
                </Link>
                <Collapse>
                <List>
                      
                <Item>
        
        <Link to="/trucks/list" className="nav-link">
        Nearest Food Truck To Me
        </Link>
    </Item>
                
                <Item>
        
                        <Link to="/trucks/list" className="nav-link">
                        View All Food Trucks
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/trucks/create" className="nav-link">
                          I Found a Truck!
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/trucks/create" className="nav-link">
                            About
                        </Link>
                    </Item>
                </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links