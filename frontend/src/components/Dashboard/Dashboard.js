import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Dashboard.css'

class Dashboard extends Component {

    render() {

        return (
            <div>
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