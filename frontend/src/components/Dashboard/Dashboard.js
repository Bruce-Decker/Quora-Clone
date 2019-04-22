import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'

class Dashboard extends Component {

    render() {

        return (
            <div>
                <Navbar Home= {"nav_item_link selected"} 
                        Answer = {"nav_item_link"} 
                        Spaces = {"nav_item_link"} 
                        Notifications = {"nav_item_link"}
                />
                <h1>Dashboard</h1>
            </div>
        )


    }

}


const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps)(Dashboard);