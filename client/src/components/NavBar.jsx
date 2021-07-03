import React, { Component } from 'react'
import styled from 'styled-components'
import '../style/style.css'

import Logo from './Logo'
import Links from './Links'


const Container = styled.div.attrs({
    className: 'container',
    
})` max-width: 100;
margin: auto;
margin-top: 10px;
width: 50%;
padding: ${({ scrolled }) => scrolled ? '0.7rem' : '1rem'} 1rem;
transition: padding 300ms ease-in-out;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;`

const Nav = styled.nav.attrs({
className: 'navbar navbar-expand-lg navbar-light bg-white' ,
  
    
})`
position: fixed;
width: 50%;
z-index: 10;
background-color: white;
box-shadow: 0 0 15px;
`


class NavBar extends Component {
    render() {
        return (
            <Container >
                <Nav>
                    <Logo />
                    
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar