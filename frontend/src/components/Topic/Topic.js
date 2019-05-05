import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import rooturl from "../../utility/url";


class Topic extends Component {
    constructor() {
        super();
        this.state = {
           
        }
        
         
    }

    render() {
        return (
          <div>
            <Navbar
              Home={"nav_item_link"}
              Answer={"nav_item_link"}
              Spaces={"nav_item_link"}
              Notifications={"nav_item_link"}
              home_icon = {"ui_icon ui_icon_color--blue ui_icon_size--small ui_icon_outline--default"}
              home_icon_default = {"ui_icon ui_icon_color--red ui_icon_size--regular ui_icon_outline--filled"}
            />

         </div>
        )
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
export default connect(mapStateToProps)(Topic);
  