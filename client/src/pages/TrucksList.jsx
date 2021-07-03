import React, { Component } from 'react'
//import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class TrucksList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Trucks: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllTrucks().then(Trucks => {
            this.setState({
                Trucks: Trucks.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { Trucks, isLoading } = this.state
        console.log('TCL: TrucksList -> render -> Trucks', Trucks)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Location',
                accessor: 'location',
                filterable: true,
            },
            {
                Header: 'Official Location',
                accessor: 'official_location',
                filterable: true,
            },
            {
                Header: 'Total Confirmed',
                accessor: 'total_confirmed',
                filterable: true,
            },
           /* {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },*/
        ]

        let showTable = true
        if (!Trucks.length) {
            showTable = false
        }

        return (
            <React.Fragment>
                      <div class="subheader">
            <p>All Listed Trucks</p>
          </div>
       
            <Wrapper>
     
                {showTable && (
                    <ReactTable
                        data={Trucks}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper> </React.Fragment>
        )
    }
}

export default TrucksList