import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import rooturl from "../../utility/url";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.match.params.id,
      topic: "",
      body: "",
      inbox: [],
      subInbox: [],
      receiver_username: "",
      authFlag: true,
      startIndex: 0,
      currentPage: 1,
      pagesPerPage: 3
    };
  }

  async componentDidMount() {
    await axios
      .get(
        rooturl +
          "/messages/getMessages?receiver_email=" +
          this.props.auth.user.email
      )
      .then(response => {
        //update the state with the response data

        var firstInbox = response.data.filter(message => {
          var index = response.data.indexOf(message);
          return index >= 0 && index < 3;
        });
        this.setState({
          inbox: response.data,
          subInbox: firstInbox
        });

        console.log("inbox:", this.state.inbox);
      });
  }

  handleStateUpdate = () => {
    console.log("inside updateState up");
    axios
      .get(
        rooturl +
          "/messages/getMessages?receiver_email=" +
          this.props.auth.user.email
      )
      .then(response => {
        //update the state with the response data
        var firstInbox = response.data.filter(message => {
          var index = response.data.indexOf(message);
          return index >= 0 && index < 3;
        });
        this.setState({
          inbox: response.data,
          subInbox: firstInbox
        });
        console.log("inbox:", this.state.inbox);
      });
  };

  usernameChangeHandler = e => {
    this.setState({
      receiver_username: e.target.value
    });
  };

  topicChangeHandler = e => {
    this.setState({
      topic: e.target.value
    });
  };
  //password change handler to update state variable with the text entered by the user
  bodyChangeHandler = e => {
    this.setState({
      body: e.target.value
    });
  };

  handlegotoMessage = messageID => {
    this.setState({
      selectedMessage: messageID
    });
  };

  handlePagination = event => {
    var target = event.target;
    var id = target.id;
    var flag = true;
    if (id == "prev") {
      console.log("SI", this.state.startIndex);
      if (this.state.startIndex > 0) {
        var startIndex = this.state.startIndex - this.state.pagesPerPage;
      } else {
        flag = false;
      }
    } else {
      var startIndex = this.state.startIndex + this.state.pagesPerPage;
      if (startIndex > this.state.inbox.length) {
        flag = false;
      }
    }

    if (flag === true) {
      var endIndex = startIndex + this.state.pagesPerPage - 1;
      var inbox = this.state.inbox;
      var subInbox = this.state.inbox.filter(message => {
        var index = inbox.indexOf(message);
        return index >= startIndex && index <= endIndex;
      });
      console.log("startindex: ", startIndex);
      console.log("endindex: ", endIndex);
      this.setState({
        subInbox: subInbox,
        startIndex: startIndex
      });
    }
  };

  submit = e => {
    e.preventDefault();
    const data = {
      userID: this.state.userID,
      topic: this.state.topic,
      body: this.state.body,
      receiver_username: this.state.receiver_username
    };

    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios
      .post("http://" + rooturl + ":3001/sendMessage", data)
      .then(response => {
        console.log("Status Code in frontend : ", response.status);
        if (response.status === 200) {
          this.handleStateUpdate();
          this.setState({
            authFlag: true
          });
        } else {
          this.setState({
            authFlag: false
          });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({
            authFlag: false,
            topic: "",
            body: "",
            receiver_username: ""
          });
          console.log("Error message catch1:", err);
        }
      });
  };

  render() {
    let inboxList = null;

    inboxList = this.state.subInbox.map((ans, index) => {
      return (
        <tr key={index}>
          <td>{ans.sender_name}</td>
          <td>{ans.topic}</td>
          <td>{ans.body}</td>
          <button onClick={() => this.handlegotoMessage(ans._id.str)}>
            check
          </button>
        </tr>
      );
    });

    return (
      <div>
        <Navbar
          Home={"nav_item_link"}
          Answer={"nav_item_link"}
          Spaces={"nav_item_link"}
          Notifications={"nav_item_link"}
          home_icon={
            "ui_icon ui_icon_color--blue ui_icon_size--small ui_icon_outline--default"
          }
          home_icon_default={
            "ui_icon ui_icon_color--red ui_icon_size--regular ui_icon_outline--filled"
          }
        />
        <div class="container">
          <h2>Inbox for user {this.state.userID}</h2>
          <table class="table">
            <thead>
              <tr>
                <th>From</th>
                <th>Topic</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {/*Display the Tbale row based on data recieved*/}
              {inboxList}
            </tbody>
            <div className="pagination-container center-content">
              <span className="col-lg-2 col-md-3 col-sm-12 col-xs-12 pad-bot-10">
                <button
                  className="btn btn-primary btn-lg"
                  id="prev"
                  onClick={this.handlePagination}
                >
                  Prev
                </button>
              </span>
              <span className="col-lg-2 col-md-3 col-sm-12 col-xs-12 pad-bot-10">
                <button
                  className="btn btn-primary btn-lg"
                  id="next"
                  onClick={this.handlePagination}
                >
                  Next
                </button>
              </span>
            </div>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Messages);
