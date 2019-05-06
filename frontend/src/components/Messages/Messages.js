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
      userID: this.props.auth.user.email,
      inbox: [],
      subInbox: [],
      authFlag: true,
      startIndex: 0,
      currentPage: 1,
      pagesPerPage: 3
    };
  }

  async componentDidMount() {
    await axios
      .get(rooturl + "/messages/getMessages/" + this.props.auth.user.email)
      .then(response => {
        //update the state with the response
        console.log(
          rooturl + "/messages/getMessages/" + this.props.auth.user.email
        );
        console.log("response", response);

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

  render() {
    let inboxList = null;

    inboxList = this.state.subInbox.map((ans, index) => {
      return (
        <tr key={index}>
          <td>{ans.sender_email}</td>
          <td>{ans.subject}</td>
          <td>{ans.message}</td>
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

        <div className="ContentWrapper">
          <div id="__w2_wsawratU13_content">
            <div className="UserContentMain">
              <div className="grid_page">
                <div className="layout_3col_left">
                  <div className="UserContentFilters">
                    <div className="UserContentFilter UserContentFilterContentType">
                      <h3>Messages</h3>
                      <ul id="__w2_wsawratU25_filter_links">
                        <li className="filter_option">
                          <Link
                            className="selected filter_option_link"
                            to={`/messages/${this.props.auth.user.email}`}
                          >
                            Inbox
                          </Link>
                        </li>

                        <li className="filter_option">
                          <Link
                            className=" filter_option_link"
                            to={{
                              pathname: "/content",
                              search: "?activityType=QuestionAsked"
                            }}
                          >
                            Sent
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="layout_3col_center">
                  <h3>Your Messages</h3>
                  <div className="user_content_list_section">
                    <div id="__w2_wsawratU18_list_wrapper">
                      <div
                        className="PagedList UserContentList"
                        id="wsawratU23"
                      >
                        {true ? (
                          <div>
                            {this.state.subInbox.map(question => (
                              <div className="pagedlist_item" id="wzr1YmKw2">
                                <div className="PagedListItem UserContentListItem">
                                  <span className="title">
                                    <span id="wzr1YmKw6">
                                      <Link
                                        className="question_link"
                                        to={`/question/${
                                          question.sender_email
                                        }`}
                                        target="_top"
                                        action_mousedown="QuestionLinkClickthrough"
                                        id="__w2_wzr1YmKw7_link"
                                      >
                                        <span className="ui_content_title unstyled_ui_title">
                                          <span className="ui_qtext_rendered_qtext">
                                            {question.message}
                                          </span>
                                        </span>
                                      </Link>
                                    </span>
                                  </span>
                                  <div className="metadata">
                                    {question.time}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : null}
                        <div id="wzr1YmKw4">
                          <div
                            className="PagedListMoreButton"
                            id="__w2_wzr1YmKw5_paged_list_more_button"
                          >
                            <div
                              className="pager_next"
                              id="__w2_wzr1YmKw5_loading"
                            >
                              <div className="__wn2_loading">
                                <span className="__wn2_loading_spinner" />
                              </div>
                            </div>
                            <div
                              className="pager_next action_button row hidden"
                              id="__w2_wzr1YmKw5_more"
                            >
                              More
                            </div>
                            <div
                              className="pager_sentinel"
                              id="__w2_wzr1YmKw5_sentinel"
                            />
                          </div>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
