import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

class EditAnswer extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar
          Home={"nav_item_link"}
          Home_Color={
            "ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
          }
          Answer={"nav_item_link"}
          Answer_Color={
            "ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
          }
          Spaces={"nav_item_link"}
          Notifications={"nav_item_link"}
        />
      </div>
    );
  }
}

export default EditAnswer;
