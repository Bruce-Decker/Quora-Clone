import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";



class Answer extends Component {
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
              Home_Color = {"ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"}
              Answer={"nav_item_link selected"}
              Answer_Color = {"ui_icon ui_icon_color--red ui_icon_size--regular ui_icon_outline--filled"}
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
  
  export default connect(mapStateToProps)(Answer);
  