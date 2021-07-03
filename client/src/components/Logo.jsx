import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'
import ftruck from '../ftruck.svg'
import itruck from '../icons-truck.gif'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',

})``

class Logo extends Component{
    render() {
        return (
            <Wrapper href='https://ha-so.github.io/Portfolio/'>
                <img src={itruck} width="50" height ="50" alt="https://ha-so.github.io/Portfolio/"/>
            </Wrapper>
        )
    }
}

export default Logo