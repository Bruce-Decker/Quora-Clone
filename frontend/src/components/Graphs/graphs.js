import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { connect } from "react-redux";
import rooturl from "../../utility/url";
import { Chart } from "react-google-charts";

class Graphs extends Component {
  constructor() {
    super();
    this.state = {
      upvote: [],
      downvote: [],
      bookmark: [],
      answerViews: []
    };
  }

  async componentDidMount() {
    var response_upvote = await axios.get(rooturl + "/graph/upvote");
    console.log(response_upvote.data);

    if (response_upvote.data) {
      var data = response_upvote.data.map(function(obj) {
        return Object.keys(obj)
          .sort()
          .map(function(key) {
            return obj[key];
          });
      });
      data.unshift(["Answer", "Upvote count"]);
      console.log(data);
      this.setState({
        upvote: data
      });
    }
    var response_downvote = await axios.get(rooturl + "/graph/downvote");
    console.log(response_downvote.data);

    if (response_downvote.data) {
      let data_downvote = response_downvote.data.map(function(obj) {
        return Object.keys(obj)
          .sort()
          .map(function(key) {
            return obj[key];
          });
      });
      data_downvote.unshift(["Answer", "Downvote count"]);
      console.log(data_downvote);
      this.setState({
        downvote: data_downvote
      });
    }

    var response_bookmark = await axios.get(rooturl + "/graph/bookmark");
    console.log(response_bookmark.data);

    if (response_bookmark.data) {
      let data_bookmark = response_bookmark.data.map(function(obj) {
        return Object.keys(obj)
          .sort()
          .map(function(key) {
            return obj[key];
          });
      });
      data_bookmark.unshift(["Answer", "Bookmark count"]);
      console.log(data_bookmark);
      this.setState({
        bookmark: data_bookmark
      });
    }

    var response_answerViews = await axios.get(rooturl + "/graph/answerViews");
    console.log(response_answerViews.data);

    if (response_answerViews.data) {
      let data_answerViews = response_answerViews.data.map(function(obj) {
        return Object.keys(obj)
          .sort()
          .map(function(key) {
            return obj[key];
          });
      });
      data_answerViews.unshift(["Answer", "Answer Views count"]);
      console.log(data_answerViews);
      this.setState({
        answerViews: data_answerViews
      });
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

        <div>
          <div className="ContentWrapper">
            <div id="__w2_w6AYVNK716_content">
              <div
                className="NewGridQuestionPage QuestionMain cardified"
                id="__w2_w6AYVNK72_grid"
              >
                <div className="grid_page">
                  <div className="layout_2col_main">
                    <div className="question_main_col">
                      <div>
                        <Chart
                          width={"500px"}
                          height={"300px"}
                          chartType="BarChart"
                          loader={<div>Loading Chart</div>}
                          data={this.state.upvote}
                          options={{
                            title: "Top 10 upvotes",
                            chartArea: { width: "50%" },
                            hAxis: {
                              title: "Top 10 upvoted Answers",
                              minValue: 0
                            },
                            vAxis: {
                              title: "Answers"
                            }
                          }}
                          // For tests
                          rootProps={{ "data-testid": "1" }}
                        />
                      </div>

                      <Chart
                        width={"500px"}
                        height={"300px"}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.downvote}
                        options={{
                          title: "Top 10 downvotes",
                          chartArea: { width: "50%" },
                          hAxis: {
                            title: "Top 10 downvoted Answers",
                            minValue: 0
                          },
                          vAxis: {
                            title: "Answers"
                          }
                        }}
                        // For tests
                        rootProps={{ "data-testid": "1" }}
                      />

                      <Chart
                        width={"500px"}
                        height={"300px"}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.bookmark}
                        options={{
                          title: "Top 10 bookmarks",
                          chartArea: { width: "50%" },
                          hAxis: {
                            title: "Top 10 Bookmarked Answers",
                            minValue: 0
                          },
                          vAxis: {
                            title: "Answers"
                          }
                        }}
                        // For tests
                        rootProps={{ "data-testid": "1" }}
                      />

                      <Chart
                        width={"500px"}
                        height={"300px"}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.answerViews}
                        options={{
                          title: "Top 10 Answer with Most Views",
                          chartArea: { width: "50%" },
                          hAxis: {
                            title: "Top 10 Bookmarked Answers",
                            minValue: 0
                          },
                          vAxis: {
                            title: "Answers"
                          }
                        }}
                        // For tests
                        rootProps={{ "data-testid": "1" }}
                      />
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

export default connect(mapStateToProps)(Graphs);
