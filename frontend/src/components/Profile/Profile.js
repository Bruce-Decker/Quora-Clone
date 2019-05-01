import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
           
        }
        
         
    }

    render() {
        return (
          <div>
            <Navbar
              Home={"nav_item_link selected"}
              Home_Color={
                "ui_icon ui_icon_color--red ui_icon_size--regular ui_icon_outline--filled"
              }
              Answer={"nav_item_link"}
              Answer_Color={
                "ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
              }
              Spaces={"nav_item_link"}
              Notifications={"nav_item_link"}
            />
          </div>
        )
    }


}


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(mapStateToProps)(Profile);
  
