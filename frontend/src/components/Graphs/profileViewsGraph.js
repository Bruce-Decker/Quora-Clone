import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { connect } from "react-redux";
import rooturl from "../../utility/url";
import { Chart } from "react-google-charts";

class ProfileViewsGraph extends Component {
    constructor(props) {
      super(props);
      this.state = {
        profileDaysCount: []
      };
    }

    async componentDidMount() {
        var response_profileDays = await axios.get(rooturl + `/graph/profileViews?email=${this.props.auth.user.email}`);
        console.log(response_profileDays.data);
    
        if (response_profileDays.data) {
          this.setState({
            profileDaysCount: response_profileDays.data.count
          });
        }    
    }
    render() {
        return(
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
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.profileDaysCount}
                    options={{
                        title: "Profile Views for last 30 days",
                        hAxis: {
                        title: 'Days',
                        },
                        vAxis: {
                        title: 'Views',
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
  
export default connect(mapStateToProps)(ProfileViewsGraph);