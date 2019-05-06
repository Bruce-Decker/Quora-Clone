import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Question.css";
import uuid from "uuid";
import rooturl from "../../utility/url";

class Question extends Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      showAnswers: false,
      topics: [],
      follower_count: 0,
      comment: "",
      upvote: 0,
      downvote: 0,
      bookmark: 0,
      flagVar: false
    };

    this.upvoteHandler = this.upvoteHandler.bind(this);
    this.downvoteHandler = this.downvoteHandler.bind(this);
    this.bookmarkHandler = this.bookmarkHandler.bind(this);
  }

  async componentDidMount() {
    console.log("email.......", this.props.auth.user.email);
    var response = await axios.get(
      rooturl + "/question/getQuestion/" + this.props.match.params.question_id
    );
    if (response.data) {
      this.setState({
        answers: response.data.answers,
        question: response.data.question,
        topics: response.data.topics,
        showAnswers: true,
        follower_count: response.data.followers.length
      });
    }

    //  if (response.data.followers) {
    //    this.setState({

    //       follower_count: response.data.followers.length
    //     });
    //  }
    console.log(response.data);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = (email, answer_id) => {
    var comment = this.state.comment;
    var data = {
      email,
      answer_id,
      comment,
      question_id: this.props.match.params.question_id
    };

    axios
      .post(rooturl + "/answer/comment", data)
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  upvoteHandler = opts => {
    console.log("aaaaa........", opts);
    var upvote = this.state.upvote;
    upvote = !upvote;
    axios
      .post(rooturl + "/answer/upvote", {
        answerid: opts.answer_id,
        email: opts.email,
        upvote: upvote
      })
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          this.setState({
            upvote: upvote
          });
        }
      });
  };

  downvoteHandler = opts => {
    var downvote = this.state.downvote;
    downvote = !downvote;
    axios
      .post(rooturl + "/answer/downvote", {
        answerid: opts.answer_id,
        email: opts.email,
        downvote: downvote
      })
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          this.setState({
            downvote: downvote
          });
        }
      });
  };

  bookmarkHandler = opts => {
    var bookmark = this.state.bookmark;
    bookmark = !bookmark;
    axios
      .post(rooturl + "/answer/bookmark", {
        answerid: opts.answer_id,
        email: opts.email,
        bookmark: bookmark
      })
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          this.setState({
            bookmark: bookmark
          });
        }
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onClick = (email, answer_id, question_id) => {

  //   var comment = this.state.comment;
  //   var data = {
  //     email,
  //     answer_id,
  //     question_id,
  //     comment
  //   };

  //   axios
  //     .post(rooturl + "/answer/comment", data)
  //     .then(res => {
  //       window.location.reload();
  //     })
  //     .catch(err => console.log(err));
  // };

  // async componentDidMount() {

  //     var response = await axios.get(rooturl + "/question/getQuestion/" + this.props.match.params.question_id);
  //     console.log(response.data)
  //     if (response.data) {
  //       this.setState({
  //         answers: response.data.answers,
  //         question: response.data.question,
  //         topics: response.data.topics,
  //         showAnswers: true,
  //         follower_count: response.data.followers.length
  //       });
  //     }
  //   }
  render() {
    var flagVar = false;
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

        {this.state.showAnswers ? (
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
                        <div className="header">
                          <div id="w6AYVNK725">
                            <div className="QuestionArea u-padding-bottom--xs">
                              <div id="w2cECm6L1" />
                              <div id="w2cECm6L3">
                                <div
                                  className="TopicList QuestionTopicHorizontalList"
                                  id="__w2_w2cECm6L4_topics_list"
                                >
                                  <div id="w2cECm6L12">
                                    <div
                                      className="TopicListItems2 QuestionTopicHorizontalListItems Toggle QuestionTopicListItems SimpleToggle"
                                      id="__w2_w2cECm6L13__truncated"
                                    >
                                      {this.state.topics.map(topic => (
                                        <span id="w0Ia0Toj3">
                                          <div
                                            className="TopicListItem QuestionTopicListItem topic_pill"
                                            id="__w2_w0Ia0Toj4_topic_list_item"
                                          >
                                            <div className="u-inline-block u-nowrap">
                                              <div id="w0Ia0Toj9">
                                                <div
                                                  className="hover_menu hidden white_bg show_nub"
                                                  id="__w2_w0Ia0Toj10_menu"
                                                >
                                                  <div
                                                    className="hover_menu_contents"
                                                    id="__w2_w0Ia0Toj10_menu_contents"
                                                  >
                                                    {" "}
                                                  </div>
                                                </div>
                                                <a
                                                  className="TopicNameLink HoverMenu topic_name"
                                                  href="/topic/History-of-Inventions"
                                                  action_mousedown="TopicLinkClickthrough"
                                                  id="__w2_w0Ia0Toj10_link"
                                                >
                                                  <span className="name_text">
                                                    <span id="w0Ia0Toj16">
                                                      <span
                                                        className="TopicName TopicNameSpan"
                                                        id="__w2_w0Ia0Toj17_card"
                                                      >
                                                        {topic}
                                                      </span>
                                                    </span>
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                      ))}
                                      <span id="w0Ia0Toj1">
                                        <div
                                          className="QuestionTopicEditButton edit_topics_link u-inline"
                                          alt="Edit Topics"
                                          id="__w2_w0Ia0Toj2_edit_link"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="w2cECm6L5">
                                <div className="question_text_edit">
                                  <div className="question_qtext">
                                    <div
                                      className="InlineEditor QuestionTextInlineEditor inline_editor_content"
                                      id="__w2_w2cECm6L14_inline_editor_content"
                                    >
                                      <span className="inline_editor_value">
                                        <h1>
                                          <span className="rendered_qtext">
                                            {this.state.question}
                                          </span>
                                        </h1>
                                      </span>
                                    </div>
                                    <div
                                      className="rteditor inline_editor_content hidden"
                                      id="__w2_w2cECm6L14_inline_editor_form"
                                    >
                                      <div className="inline_editor_form">
                                        <div
                                          className="editor_wrapper"
                                          id="__w2_w2cECm6L16_editor_outer"
                                        >
                                          <div
                                            className="Title QuestionTitle Editor edit_latex web"
                                            id="__w2_w2cECm6L16_editor"
                                          >
                                            <div
                                              data-group="js-editable"
                                              w2cid="w2cECm6L16"
                                              id="__w2_w2cECm6L16_doc"
                                            >
                                              <div
                                                className="doc"
                                                contentEditable="true"
                                                data-kind="doc"
                                                placeholder
                                              >
                                                <div
                                                  className="section"
                                                  data-type="plain"
                                                  data-dir="LTR"
                                                  data-indent={0}
                                                  data-kind="section"
                                                >
                                                  <div
                                                    className="span"
                                                    data-kind="span"
                                                  >
                                                    <div className="content">
                                                      Who first invented the
                                                      money? Who was the person
                                                      who invented or made it?
                                                      How much was he paid?
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="CharacterCounter fade_out"
                                              id="__w2_w2cECm6L17_counter_wrapper"
                                            >
                                              <div
                                                className="counter"
                                                id="__w2_w2cECm6L17_counter"
                                              >
                                                155
                                              </div>
                                            </div>
                                            <div
                                              className="hidden"
                                              id="__w2_w2cECm6L16_link_selector_wrapper"
                                            >
                                              <div
                                                className="LinkSelector Selector"
                                                tabIndex={-1}
                                                id="__w2_w2cECm6L18_wrapper"
                                              >
                                                <div className="link_selector_input">
                                                  <div className="selector_input_interaction">
                                                    <div
                                                      className="CharacterCounter fade_out"
                                                      id="__w2_w2cECm6L19_counter_wrapper"
                                                    >
                                                      <div
                                                        className="counter"
                                                        id="__w2_w2cECm6L19_counter"
                                                      >
                                                        250
                                                      </div>
                                                    </div>
                                                    <input
                                                      className="selector_input text"
                                                      type="text"
                                                      defaultValue
                                                      data-group="js-editable"
                                                      placeholder="Search"
                                                      w2cid="w2cECm6L18"
                                                      id="__w2_w2cECm6L18_input"
                                                    />
                                                    <div
                                                      className="selector_spinner hidden"
                                                      id="__w2_w2cECm6L18_spinner"
                                                    >
                                                      <div className="LoadingDots tiny">
                                                        <div className="dot first" />
                                                        <div className="dot second" />
                                                        <div className="dot third" />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="selector_results_container hidden"
                                                  id="__w2_w2cECm6L18_results_container"
                                                >
                                                  <div
                                                    className="selector_results_container_inner hidden"
                                                    id="__w2_w2cECm6L18_results"
                                                  />
                                                  <div id="__w2_w2cECm6L18_empty_input_prompt" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="form_buttons"
                                          id="__w2_w2cECm6L14_inline_editor_buttons"
                                        >
                                          <div className="inline_editor_buttons">
                                            <a
                                              className="inline_editor_button inline_editor_cancel_button"
                                              href="#"
                                              id="__w2_w2cECm6L14_inline_editor_cancel"
                                            >
                                              Cancel
                                            </a>
                                            <a
                                              className="submit_button"
                                              href="#"
                                              action_mousedown="InlineEditorAnswerAdd"
                                              id="__w2_w2cECm6L14_inline_editor_submit"
                                            >
                                              Update
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="w2cECm6L7" />
                              <div
                                className="form_buttons hidden shared_form"
                                id="__w2_w6AYVNK726_form_button_container"
                              >
                                <a
                                  className="submit_button"
                                  id="__w2_w6AYVNK726_question_update"
                                >
                                  Update
                                </a>
                                <a
                                  className="cancel_button"
                                  id="__w2_w6AYVNK726_question_cancel"
                                >
                                  Cancel
                                </a>
                              </div>
                              <div id="w2cECm6L9">
                                <div
                                  className="icon_action_bar"
                                  id="__w2_w2cECm6L10_action_bar"
                                >
                                  <div className="action_bar_inner u-flex">
                                    <div className="ItemComponent WriteAnswerPrimaryActionItem primary_item u-relative">
                                      <span id="wEimc2ML14">
                                        <a
                                          className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--blue ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon"
                                          href="#"
                                          role="button"
                                          action_target='{"qid": 31450631, "type": "question"}'
                                          id="__w2_wEimc2ML40_button"
                                        >
                                          <div
                                            className="ui_button_inner"
                                            id="__w2_wEimc2ML40_inner"
                                          >
                                            <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                              <div id="__w2_wEimc2ML40_icon">
                                                <span
                                                  className="ui_button_icon"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      id="answer"
                                                      transform="translate(2.500000, 3.500000)"
                                                      stroke="none"
                                                      strokeWidth="1.5"
                                                      fill="none"
                                                      fillRule="evenodd"
                                                    >
                                                      <g
                                                        id="pen"
                                                        transform="translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)"
                                                      >
                                                        <path
                                                          d="M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z"
                                                          id="pen_body"
                                                          className="icon_svg-stroke"
                                                          stroke="#666"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                        />
                                                        <polygon
                                                          id="pen_tip"
                                                          className="icon_svg-fill_as_stroke"
                                                          fill="#666"
                                                          transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) "
                                                          points="2 17.5 3.25 20 0.75 20"
                                                        />
                                                      </g>
                                                      <path
                                                        d="M12,16 L17,16 L17,11 M7,1 L2,1 L2,6"
                                                        id="bg"
                                                        className="icon_svg-stroke"
                                                        stroke="#666"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                      />
                                                    </g>
                                                  </svg>
                                                </span>
                                              </div>
                                            </div>
                                            <div className="ui_button_label_count_wrapper">
                                              <span
                                                className="ui_button_label"
                                                id="__w2_wEimc2ML40_label"
                                              >
                                                Answer
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      </span>
                                    </div>
                                    <div className="ItemComponent FollowActionItem primary_item u-relative">
                                      <span id="wEimc2ML16">
                                        <a
                                          className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon"
                                          href="#"
                                          role="button"
                                          action_click="QuestionFollow"
                                          action_target='{"qid": 31450631, "type": "question"}'
                                          id="__w2_wEimc2ML37_button"
                                        >
                                          <div
                                            className="ui_button_inner"
                                            id="__w2_wEimc2ML37_inner"
                                          >
                                            <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                              <div id="__w2_wEimc2ML37_icon">
                                                <span
                                                  className="ui_button_icon"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      stroke="none"
                                                      fill="none"
                                                      fillRule="evenodd"
                                                      strokeLinecap="round"
                                                    >
                                                      <g
                                                        id="follow"
                                                        className="icon_svg-stroke"
                                                        stroke="#666"
                                                        strokeWidth="1.5"
                                                      >
                                                        <path
                                                          d="M14.5,19 C14.5,13.3369229 11.1630771,10 5.5,10 M19.5,19 C19.5,10.1907689 14.3092311,5 5.5,5"
                                                          id="lines"
                                                        />
                                                        <circle
                                                          id="circle"
                                                          cx="7.5"
                                                          cy={17}
                                                          r={2}
                                                          className="icon_svg-fill"
                                                          fill="none"
                                                        />
                                                      </g>
                                                    </g>
                                                  </svg>
                                                </span>
                                              </div>
                                            </div>
                                            <div className="ui_button_label_count_wrapper">
                                              <span
                                                className="ui_button_label"
                                                id="__w2_wEimc2ML37_label"
                                              >
                                                Follow
                                              </span>
                                              <span
                                                className="ui_button_count"
                                                aria-hidden="true"
                                                id="__w2_wEimc2ML37_count_wrapper"
                                              >
                                                <span className="bullet">
                                                  {" "}
                                                  ·{" "}
                                                </span>
                                                <span
                                                  className="ui_button_count_inner"
                                                  id="__w2_wEimc2ML37_count"
                                                >
                                                  {this.state.follower_count}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      </span>
                                    </div>
                                    <div className="ItemComponent RequestPrimaryActionItem primary_item u-relative">
                                      <a
                                        className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon"
                                        href="#"
                                        role="button"
                                        id="__w2_wEimc2ML20_button"
                                      >
                                        <div
                                          className="ui_button_inner"
                                          id="__w2_wEimc2ML20_inner"
                                        >
                                          <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                            <div id="__w2_wEimc2ML20_icon">
                                              <span
                                                className="ui_button_icon"
                                                aria-hidden="true"
                                              >
                                                <svg
                                                  width="24px"
                                                  height="24px"
                                                  viewBox="0 0 24 24"
                                                  version="1.1"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                  <g
                                                    id="request"
                                                    className="icon_svg-stroke"
                                                    stroke="#666"
                                                    strokeWidth="1.5"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                  >
                                                    <g
                                                      transform="translate(10.000000, 5.000000)"
                                                      className="icon_svg-fill"
                                                      fill="none"
                                                    >
                                                      <path d="M10,15.5 C10,12.7385763 7.76142375,10.5 5,10.5 C2.23857625,10.5 0,12.7385763 0,15.5 M5,8 C7.209139,8 9,6.209139 9,4 C9,1.790861 7.209139,0 5,0 C2.790861,0 1,1.790861 1,4 C1,6.209139 2.790861,8 5,8 Z" />
                                                    </g>
                                                    <path
                                                      d="M6,10 L8.5,13 L6,16 M3,13.0244257 L8.49508293,13.0244257"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                    />
                                                  </g>
                                                </svg>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="ui_button_label_count_wrapper">
                                            <span
                                              className="ui_button_label"
                                              id="__w2_wEimc2ML20_label"
                                            >
                                              Request
                                            </span>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="u-relative">
                                        <div
                                          className="RequestActionCaret hidden"
                                          id="__w2_wEimc2ML19_caret"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="CommentsActionItem ItemComponent ActionItemComponent action_item secondary_item u-relative"
                                      id="__w2_wEimc2ML4_link"
                                    >
                                      <div id="wEimc2ML21">
                                        <a
                                          className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                          href="#"
                                          role="button"
                                          aria-label="Comments"
                                          id="__w2_wEimc2ML39_button"
                                        >
                                          <div
                                            className="ui_button_inner"
                                            id="__w2_wEimc2ML39_inner"
                                          >
                                            <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                              <div id="__w2_wEimc2ML39_icon">
                                                <span
                                                  className="ui_button_icon"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      id="comment"
                                                      className="icon_svg-stroke icon_svg-fill"
                                                      stroke="#666"
                                                      strokeWidth="1.5"
                                                      fill="none"
                                                      fillRule="evenodd"
                                                    >
                                                      <path d="M12.0711496,18.8605911 C16.1739904,18.8605911 19.5,15.7577921 19.5,11.9302955 C19.5,8.102799 16.1739904,5 12.0711496,5 C7.96830883,5 4.64229922,8.102799 4.64229922,11.9302955 C4.64229922,13.221057 5.02055525,14.429401 5.67929998,15.4641215 C5.99817082,15.9649865 4.1279592,18.5219189 4.56718515,18.9310749 C5.02745574,19.3598348 7.80252458,17.6358115 8.37002246,17.9406001 C9.45969688,18.5258363 10.7235179,18.8605911 12.0711496,18.8605911 Z" />
                                                    </g>
                                                  </svg>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="ItemComponent ActionItemComponent DownvoteActionItem action_item secondary_item u-relative">
                                      <span id="wEimc2ML23">
                                        <a
                                          className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                          href="#"
                                          role="button"
                                          aria-label="Downvote"
                                          action_click="QuestionDownvote"
                                          action_target='{"qid": 31450631, "type": "question"}'
                                          id="__w2_wEimc2ML36_button"
                                        >
                                          <div
                                            className="ui_button_inner"
                                            id="__w2_wEimc2ML36_inner"
                                          >
                                            <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                              <div id="__w2_wEimc2ML36_icon">
                                                <span
                                                  className="ui_button_icon"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      id="downvote"
                                                      className="icon_svg-stroke icon_svg-fill"
                                                      stroke="#666"
                                                      fill="none"
                                                      strokeWidth="1.5"
                                                      fillRule="evenodd"
                                                      strokeLinejoin="round"
                                                    >
                                                      <polygon
                                                        transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) "
                                                        points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"
                                                      />
                                                    </g>
                                                  </svg>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </span>
                                    </div>
                                    <div className="FacebookShareActionItem ActionItemComponent ItemComponent action_item secondary_item u-relative">
                                      <a
                                        className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                        href="#"
                                        role="button"
                                        aria-label="Share on Facebook"
                                        id="__w2_wEimc2ML27_button"
                                      >
                                        <div
                                          className="ui_button_inner"
                                          id="__w2_wEimc2ML27_inner"
                                        >
                                          <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                            <div id="__w2_wEimc2ML27_icon">
                                              <span
                                                className="ui_button_icon"
                                                aria-hidden="true"
                                              >
                                                <svg
                                                  width="24px"
                                                  height="24px"
                                                  viewBox="0 0 24 24"
                                                  version="1.1"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                  <g
                                                    className="icon_svg-fill_as_stroke"
                                                    stroke="none"
                                                    fill="#4267B2"
                                                    fillRule="evenodd"
                                                  >
                                                    <path d="M15.0352899,20 L15.0352899,13.8064419 L17.1142712,13.8064419 L17.4255221,11.3926592 L15.0352899,11.3926592 L15.0352899,9.85156554 C15.0352899,9.1527191 15.2293273,8.67649438 16.2315146,8.67649438 L17.5097169,8.67589513 L17.5097169,6.51703371 C17.2885933,6.48767041 16.5298816,6.42193258 15.647185,6.42193258 C13.8043086,6.42193258 12.5427056,7.54678652 12.5427056,9.61258427 L12.5427056,11.3926592 L10.4584509,11.3926592 L10.4584509,13.8064419 L12.5427056,13.8064419 L12.5427056,20 L4.88270262,20 C4.39509213,20 4.00000599,19.6047341 4.00000599,19.1173034 L4.00000599,4.88904869 C4.00000599,4.4014382 4.39509213,4.00629213 4.88270262,4.00629213 L19.1108974,4.00629213 C19.5983281,4.00629213 19.993594,4.4014382 19.993594,4.88904869 L19.993594,19.1173034 C19.993594,19.6047341 19.5983281,20 19.1108974,20 L15.0352899,20 Z" />
                                                  </g>
                                                </svg>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ItemComponent ActionItemComponent TwitterShareActionItem action_item secondary_item u-relative">
                                      <a
                                        className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                        href="#"
                                        role="button"
                                        aria-label="Share on Twitter"
                                        id="__w2_wEimc2ML30_button"
                                      >
                                        <div
                                          className="ui_button_inner"
                                          id="__w2_wEimc2ML30_inner"
                                        >
                                          <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                            <div id="__w2_wEimc2ML30_icon">
                                              <span
                                                className="ui_button_icon"
                                                aria-hidden="true"
                                              >
                                                <svg
                                                  width="24px"
                                                  height="24px"
                                                  viewBox="0 0 24 24"
                                                  version="1.1"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                  <g
                                                    className="icon_svg-fill_as_stroke"
                                                    stroke="none"
                                                    fill="#1DA1F2"
                                                    fillRule="nonzero"
                                                  >
                                                    <path d="M8.84616,19.3134989 C15.26128,19.3134989 18.77008,13.9986189 18.77008,9.38957894 C18.77008,9.23861894 18.77008,9.08833894 18.75988,8.93873894 C19.4424853,8.44499832 20.0317217,7.83365693 20.5,7.13333894 C19.8634378,7.41540415 19.1881639,7.60038242 18.49672,7.68209894 C19.2248259,7.24620674 19.769764,6.56062389 20.03012,5.75293894 C19.3454671,6.15920856 18.5964393,6.44552712 17.81536,6.59953894 C16.7342163,5.44992705 15.0162892,5.1685555 13.6248935,5.91320129 C12.2334978,6.65784709 11.514667,8.24332044 11.87148,9.78057894 C9.0670891,9.63998863 6.45424353,8.31539877 4.6832,6.13645894 C3.75746347,7.73013736 4.23031176,9.76892339 5.76304,10.7924189 C5.20798402,10.7759681 4.66502997,10.6262359 4.18,10.3558589 C4.18,10.3701389 4.18,10.3850989 4.18,10.4000589 C4.18045433,12.0603422 5.35079101,13.4903429 6.9782,13.8190989 C6.46471132,13.9591382 5.9259548,13.9796091 5.40332,13.8789389 C5.86024459,15.2997465 7.1696707,16.273072 8.66188,16.3010989 C7.42681983,17.2717527 5.90112047,17.7986818 4.33028,17.7970989 C4.05277443,17.7965662 3.77553876,17.779764 3.5,17.7467789 C5.09503245,18.770367 6.95094111,19.3133064 8.84616,19.3107789" />
                                                  </g>
                                                </svg>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="OverflowShareActionItem ActionItemComponent ItemComponent action_item secondary_item u-relative">
                                      <div
                                        className="hover_menu hidden hover_share_menu show_nub"
                                        id="__w2_wEimc2ML31_menu"
                                      >
                                        <div
                                          className="hover_menu_contents"
                                          id="__w2_wEimc2ML31_menu_contents"
                                        >
                                          {" "}
                                        </div>
                                      </div>
                                      <div
                                        className="_QuickShare QuestionQuickShare HoverMenu"
                                        role="button"
                                        id="__w2_wEimc2ML31_link"
                                      >
                                        <a
                                          className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                          href="#"
                                          role="button"
                                          aria-label="More sharing options"
                                          id="__w2_wEimc2ML34_button"
                                        >
                                          <div
                                            className="ui_button_inner"
                                            id="__w2_wEimc2ML34_inner"
                                          >
                                            <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                              <div id="__w2_wEimc2ML34_icon">
                                                <span
                                                  className="ui_button_icon"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      id="share"
                                                      className="icon_svg-stroke"
                                                      stroke="#666"
                                                      fill="none"
                                                      strokeWidth="1.5"
                                                      fillRule="evenodd"
                                                      strokeLinejoin="round"
                                                    >
                                                      <path
                                                        d="M12.0001053,2.99989467 L4.00010533,12.7776724 L9.33343867,12.7776724 C9.78266695,14.7041066 10.5048892,16.2782509 11.5001053,17.5001053 C12.4953215,18.7219597 13.9953215,19.8886264 16.0001053,21.0001053 C15.3415908,19.6668553 14.8428108,18.1668553 14.5037654,16.5001053 C14.16472,14.8333553 14.2190556,13.5925444 14.666772,12.7776724 L20.0001053,12.7776724 L12.0001053,2.99989467 Z"
                                                        transform="translate(12.000105, 12.000000) rotate(90.000000) translate(-12.000105, -12.000000) "
                                                      />
                                                    </g>
                                                  </svg>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="action_bar_inner_spacer u-margin-left--auto">
                                      &nbsp;
                                    </div>
                                    <div className="overflow action_item overflow_link u-relative u-pointer-events--auto">
                                      <div
                                        className="overflow_link"
                                        id="__w2_w2cECm6L10_overflow_link"
                                      >
                                        <a
                                          className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                          href="#"
                                          role="button"
                                          aria-label="More options"
                                          id="__w2_wEimc2ML10_button"
                                        >
                                          <div
                                            className="ui_button_inner"
                                            id="__w2_wEimc2ML10_inner"
                                          >
                                            <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                              <div id="__w2_wEimc2ML10_icon">
                                                <span
                                                  className="ui_button_icon"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      id="overflow"
                                                      className="icon_svg-stroke"
                                                      strokeWidth="1.5"
                                                      stroke="#666"
                                                      fill="none"
                                                      fillRule="evenodd"
                                                    >
                                                      <div class="label">
                                                        Bookmarks
                                                      </div>
                                                    </g>
                                                  </svg>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div
                                      className="hover_menu hidden show_nub right_align fixed_menu_width no_body_attach"
                                      id="__w2_w2cECm6L10_overflow_menu"
                                    >
                                      <div
                                        className="hover_menu_contents lazy"
                                        id="__w2_w2cECm6L10_overflow_menu_contents"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="action_bar_comments threaded_comments hidden"
                                    id="__w2_wEimc2ML11_wrapper"
                                  />
                                  <div id="wEimc2ML12">
                                    <div
                                      className="hidden answer_editor_wrapper"
                                      id="__w2_wEimc2ML13_add_answer_editor_wrapper"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="w6AYVNK727">
                          <div className="prompts_list">
                            <div id="w86ZXLZ52" />
                            <div id="w86ZXLZ54" />
                            <div id="w86ZXLZ56" />
                            <div id="w86ZXLZ58" />
                            <div id="w86ZXLZ510" />
                            <div id="w86ZXLZ512" />
                            <div id="w86ZXLZ516" />
                            <div id="w86ZXLZ518" />
                            <div id="w86ZXLZ520" />
                            <div id="w86ZXLZ522" />
                            <div id="w86ZXLZ524" />
                            <div id="w86ZXLZ526" />
                            <div id="w86ZXLZ529" />
                            <div id="w86ZXLZ531" />
                          </div>
                        </div>
                        <div
                          className="UnifiedAnswerPagedList PagedListFoo unified"
                          id="__w2_wiZEgLa49_paged_list"
                        >
                          <div
                            className="dtqiddhhblocgivavhcp"
                            id="__w2_wiZEgLa468_euvlwrfkkkemkajscgfw"
                          >
                            <div
                              className="bdwxubvhzryrxtvfzcdn xfpnurkcyvpsdmxpkucg hylbifiepyrdopjimdht"
                              style={{ display: "none !important" }}
                            >
                              <div
                                id="__w2_wiZEgLa469_pvwhvbzesvpcwjnocepu"
                                style={{ display: "none !important" }}
                              >
                                <div className="pqfjwetvetquhhkotdum">
                                  <div className="zgsbzxaqfhtajcuzjxah" />
                                </div>
                                <div
                                  className="copknanminfgwjvuiujs"
                                  style={{ display: "none !important" }}
                                >
                                  <div
                                    id="__w2_wiZEgLa475_mxemoajpxgmekxwulgzk"
                                    style={{ display: "none !important" }}
                                  />
                                  <div className="gnktaszjpavpfrtktwjh">
                                    <div id="wiZEgLa476">
                                      <div
                                        className="icon_action_bar"
                                        id="__w2_wiZEgLa477_action_bar"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="hbdfixaglfyecplgdypc hidden"
                                id="__w2_wiZEgLa469_ocuxsdsklhlkszjzbvho"
                              >
                                <div className="content_dismiss_title">
                                  You dismissed this ad.
                                </div>
                                <div className="content_dismiss_body">
                                  The feedback you provide will help us show you
                                  more relevant content in the future.
                                </div>
                                <a
                                  className="undo"
                                  id="__w2_wiZEgLa469_zhfsqkvyjqelspmrrwwe"
                                >
                                  Undo
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="wiZEgLa410">
                          <div
                            className="AnswerWikiArea hidden"
                            id="answer_wiki"
                          >
                            <h3>Answer Wiki</h3>
                            <div id="wiZEgLa416">
                              <div
                                className="AnswerWiki CreateAnswerWiki"
                                id="__w2_wiZEgLa417_wiki"
                              >
                                <div
                                  className="CreateAnswerWikiInlineEditor _WikiEditorCommon InlineEditor inline_editor_content hidden"
                                  id="__w2_wiZEgLa426_inline_editor_content"
                                >
                                  <span className="inline_editor_value">
                                    <span className="rendered_qtext" />
                                  </span>
                                </div>
                                <div
                                  className="rteditor inline_editor_content"
                                  id="__w2_wiZEgLa426_inline_editor_form"
                                >
                                  <div className="inline_editor_form">
                                    <div
                                      className="editor_wrapper"
                                      id="__w2_wiZEgLa427_editor_outer"
                                    >
                                      <div
                                        className="AnswerWikiEditor Editor edit_latex web"
                                        id="__w2_wiZEgLa427_editor"
                                      >
                                        <div
                                          data-group="js-editable"
                                          w2cid="wiZEgLa427"
                                          id="__w2_wiZEgLa427_doc"
                                        >
                                          <div
                                            className="doc empty"
                                            contentEditable="true"
                                            data-kind="doc"
                                            placeholder
                                          >
                                            <div
                                              className="section"
                                              data-type="plain"
                                              data-dir="LTR"
                                              data-indent={0}
                                              data-kind="section"
                                            >
                                              <div
                                                className="span"
                                                data-kind="span"
                                              >
                                                <div className="content">
                                                  <br />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="editor_toolbar"
                                          id="__w2_wiZEgLa428_toolbar"
                                          style={{
                                            position: "absolute",
                                            top: "0px",
                                            left: "0px"
                                          }}
                                        >
                                          <div
                                            className="scroller"
                                            id="__w2_wiZEgLa428_scroller"
                                            style={{ top: "-100%" }}
                                          >
                                            <div
                                              className="bar bar_link_state"
                                              id="__w2_wiZEgLa428_bar0"
                                            >
                                              <div className="left u-flex-auto u-margin-right--sm" />
                                              <div className="right" />
                                            </div>
                                            <div
                                              className="bar bar_regular_state"
                                              id="__w2_wiZEgLa428_bar1"
                                            >
                                              <div className="left u-flex-auto u-margin-right--sm">
                                                <div
                                                  className="modifier"
                                                  tooltip="Bold"
                                                  id="__w2_wiZEgLa428_bold"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="bold"
                                                          stroke="none"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M12.7794246,20 L6,20 L6,4 L12.6015693,4 C15.5309503,4 17.2781168,5.51905752 17.2781168,7.99168399 C17.2781168,9.68814969 16.0959024,11.1628552 14.5475153,11.4067914 L14.5475153,11.6063756 C16.5457716,11.7616078 18,13.3582814 18,15.4206514 C18,18.2259182 16.0017437,20 12.7794246,20 Z M9.15954664,6.56133056 L9.15954664,10.6306306 L11.5344377,10.6306306 C13.2397559,10.6306306 14.1708806,9.88773389 14.1708806,8.6015246 C14.1708806,7.32640333 13.3025283,6.56133056 11.7959895,6.56133056 L9.15954664,6.56133056 Z M9.15954664,17.4386694 L11.9738448,17.4386694 C13.7942459,17.4386694 14.7776809,16.6292446 14.7776809,15.1323631 C14.7776809,13.6687457 13.7628596,12.8925849 11.9006103,12.8925849 L9.15954664,12.8925849 L9.15954664,17.4386694 Z"
                                                            id="B"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="bold"
                                                          stroke="none"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M12.7794246,20 L6,20 L6,4 L12.6015693,4 C15.5309503,4 17.2781168,5.51905752 17.2781168,7.99168399 C17.2781168,9.68814969 16.0959024,11.1628552 14.5475153,11.4067914 L14.5475153,11.6063756 C16.5457716,11.7616078 18,13.3582814 18,15.4206514 C18,18.2259182 16.0017437,20 12.7794246,20 Z M9.15954664,6.56133056 L9.15954664,10.6306306 L11.5344377,10.6306306 C13.2397559,10.6306306 14.1708806,9.88773389 14.1708806,8.6015246 C14.1708806,7.32640333 13.3025283,6.56133056 11.7959895,6.56133056 L9.15954664,6.56133056 Z M9.15954664,17.4386694 L11.9738448,17.4386694 C13.7942459,17.4386694 14.7776809,16.6292446 14.7776809,15.1323631 C14.7776809,13.6687457 13.7628596,12.8925849 11.9006103,12.8925849 L9.15954664,12.8925849 L9.15954664,17.4386694 Z"
                                                            id="B"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  className="modifier"
                                                  tooltip="Italic"
                                                  id="__w2_wiZEgLa428_italic"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="italicize"
                                                          stroke="none"
                                                          strokeWidth={1}
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M13.9034335,6.71225071 L11.8218884,17.037037 C11.7646635,17.4321007 11.7360515,17.698005 11.7360515,17.8347578 C11.7360515,18.2450163 11.8648056,18.5223165 12.1223176,18.6666667 C12.3798296,18.8110169 12.8447749,18.8983854 13.5171674,18.9287749 L13.3240343,20 L6.5,20 L6.7360515,18.9287749 C7.50858755,18.8983854 8.06294539,18.7768292 8.39914163,18.5641026 C8.73533788,18.351376 8.96781052,17.9259291 9.09656652,17.2877493 L11.1781116,6.96296296 C11.2353365,6.56789926 11.2639485,6.30199499 11.2639485,6.16524217 C11.2639485,5.7549837 11.1351944,5.47768353 10.8776824,5.33333333 C10.6201704,5.18898313 10.1552251,5.10161459 9.48283262,5.07122507 L9.67596567,4 L16.5,4 L16.2639485,5.07122507 C15.4914124,5.10161459 14.9370546,5.22317083 14.6008584,5.43589744 C14.2646621,5.64862405 14.0321895,6.07407088 13.9034335,6.71225071 Z"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="italicize"
                                                          stroke="none"
                                                          strokeWidth={1}
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M13.9034335,6.71225071 L11.8218884,17.037037 C11.7646635,17.4321007 11.7360515,17.698005 11.7360515,17.8347578 C11.7360515,18.2450163 11.8648056,18.5223165 12.1223176,18.6666667 C12.3798296,18.8110169 12.8447749,18.8983854 13.5171674,18.9287749 L13.3240343,20 L6.5,20 L6.7360515,18.9287749 C7.50858755,18.8983854 8.06294539,18.7768292 8.39914163,18.5641026 C8.73533788,18.351376 8.96781052,17.9259291 9.09656652,17.2877493 L11.1781116,6.96296296 C11.2353365,6.56789926 11.2639485,6.30199499 11.2639485,6.16524217 C11.2639485,5.7549837 11.1351944,5.47768353 10.8776824,5.33333333 C10.6201704,5.18898313 10.1552251,5.10161459 9.48283262,5.07122507 L9.67596567,4 L16.5,4 L16.2639485,5.07122507 C15.4914124,5.10161459 14.9370546,5.22317083 14.6008584,5.43589744 C14.2646621,5.64862405 14.0321895,6.07407088 13.9034335,6.71225071 Z"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  className="modifier"
                                                  tooltip="Numbers"
                                                  id="__w2_wiZEgLa428_ordered_list"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="ordered_list"
                                                          stroke="none"
                                                          className="icon_svg-fill_as_stroke"
                                                          fill="#666666"
                                                          fillRule="evenodd"
                                                        >
                                                          <path d="M8.5 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 8 12v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V17a.5.5 0 0 1 .5-.5z" />
                                                          <g id="western_arabic_numbers">
                                                            <path
                                                              id={1}
                                                              d="M5.308 8.123h.738V4.6H5.31l-.911.627v.686l.864-.595h.044z"
                                                            />
                                                            <path
                                                              id={2}
                                                              d="M4 11.145v.012h.684v-.014c0-.325.234-.55.576-.55.322 0 .552.2.552.484 0 .23-.125.412-.62.896l-1.15 1.125v.515h2.541V13H5.04v-.043l.674-.643c.61-.573.818-.903.818-1.286 0-.606-.513-1.028-1.248-1.028C4.522 10 4 10.464 4 11.145z"
                                                            />
                                                            <path
                                                              id={3}
                                                              d="M4.908 17.585h.437c.396 0 .637.19.637.498 0 .3-.256.508-.625.508-.378 0-.63-.188-.651-.486H4c.032.664.564 1.099 1.35 1.099.803 0 1.384-.447 1.384-1.065 0-.464-.302-.786-.786-.84v-.044a.794.794 0 0 0 .65-.805c0-.554-.52-.95-1.243-.95-.77 0-1.265.42-1.29 1.086h.682c.02-.305.247-.498.588-.498.345 0 .564.181.564.464 0 .288-.227.484-.561.484h-.43v.549z"
                                                            />
                                                          </g>
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="ordered_list"
                                                          stroke="none"
                                                          className="icon_svg-fill_as_stroke"
                                                          fill="#666666"
                                                          fillRule="evenodd"
                                                        >
                                                          <path d="M8.5 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 8 12v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V17a.5.5 0 0 1 .5-.5z" />
                                                          <g id="western_arabic_numbers">
                                                            <path
                                                              id={1}
                                                              d="M5.308 8.123h.738V4.6H5.31l-.911.627v.686l.864-.595h.044z"
                                                            />
                                                            <path
                                                              id={2}
                                                              d="M4 11.145v.012h.684v-.014c0-.325.234-.55.576-.55.322 0 .552.2.552.484 0 .23-.125.412-.62.896l-1.15 1.125v.515h2.541V13H5.04v-.043l.674-.643c.61-.573.818-.903.818-1.286 0-.606-.513-1.028-1.248-1.028C4.522 10 4 10.464 4 11.145z"
                                                            />
                                                            <path
                                                              id={3}
                                                              d="M4.908 17.585h.437c.396 0 .637.19.637.498 0 .3-.256.508-.625.508-.378 0-.63-.188-.651-.486H4c.032.664.564 1.099 1.35 1.099.803 0 1.384-.447 1.384-1.065 0-.464-.302-.786-.786-.84v-.044a.794.794 0 0 0 .65-.805c0-.554-.52-.95-1.243-.95-.77 0-1.265.42-1.29 1.086h.682c.02-.305.247-.498.588-.498.345 0 .564.181.564.464 0 .288-.227.484-.561.484h-.43v.549z"
                                                            />
                                                          </g>
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  className="modifier"
                                                  tooltip="Bullets"
                                                  id="__w2_wiZEgLa428_unordered_list"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="unordered_list"
                                                          stroke="none"
                                                          className="icon_svg-fill_as_stroke"
                                                          fill="#666666"
                                                          fillRule="evenodd"
                                                        >
                                                          <path d="M8.5 5.75h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zM4.5 5.5h1A.5.5 0 0 1 6 6v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 4 7V6a.5.5 0 0 1 .5-.5zm0 5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 4 18v-1a.5.5 0 0 1 .5-.5z" />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="unordered_list"
                                                          stroke="none"
                                                          className="icon_svg-fill_as_stroke"
                                                          fill="#666666"
                                                          fillRule="evenodd"
                                                        >
                                                          <path d="M8.5 5.75h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zM4.5 5.5h1A.5.5 0 0 1 6 6v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 4 7V6a.5.5 0 0 1 .5-.5zm0 5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 4 18v-1a.5.5 0 0 1 .5-.5z" />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="right">
                                                <div
                                                  className="modifier"
                                                  tooltip="Video"
                                                  id="__w2_wiZEgLa428_video"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="record"
                                                          className="icon_svg-stroke"
                                                          strokeWidth="1.5"
                                                          stroke="#666"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path d="M4.25,5.25 L15.75,5.25 C16.3022847,5.25 16.75,5.69771525 16.75,6.25 L16.75,17.75 C16.75,18.3022847 16.3022847,18.75 15.75,18.75 L4.25,18.75 C3.69771525,18.75 3.25,18.3022847 3.25,17.75 L3.25,6.25 C3.25,5.69771525 3.69771525,5.25 4.25,5.25 Z M17.1952998,9.30174565 L19.6952998,7.63507898 C20.1548285,7.32872652 20.7756978,7.45290039 21.0820503,7.91242908 C21.191562,8.07669659 21.25,8.26970429 21.25,8.46712927 L21.25,15.5328707 C21.25,16.0851555 20.8022847,16.5328707 20.25,16.5328707 C20.052575,16.5328707 19.8595673,16.4744327 19.6952998,16.364921 L17.1952998,14.6982544 C16.9171011,14.5127886 16.75,14.2005572 16.75,13.8662041 L16.75,10.1337959 C16.75,9.79944275 16.9171011,9.48721142 17.1952998,9.30174565 Z" />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="record"
                                                          className="icon_svg-stroke"
                                                          strokeWidth="1.5"
                                                          stroke="#666"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path d="M4.25,5.25 L15.75,5.25 C16.3022847,5.25 16.75,5.69771525 16.75,6.25 L16.75,17.75 C16.75,18.3022847 16.3022847,18.75 15.75,18.75 L4.25,18.75 C3.69771525,18.75 3.25,18.3022847 3.25,17.75 L3.25,6.25 C3.25,5.69771525 3.69771525,5.25 4.25,5.25 Z M17.1952998,9.30174565 L19.6952998,7.63507898 C20.1548285,7.32872652 20.7756978,7.45290039 21.0820503,7.91242908 C21.191562,8.07669659 21.25,8.26970429 21.25,8.46712927 L21.25,15.5328707 C21.25,16.0851555 20.8022847,16.5328707 20.25,16.5328707 C20.052575,16.5328707 19.8595673,16.4744327 19.6952998,16.364921 L17.1952998,14.6982544 C16.9171011,14.5127886 16.75,14.2005572 16.75,13.8662041 L16.75,10.1337959 C16.75,9.79944275 16.9171011,9.48721142 17.1952998,9.30174565 Z" />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  className="modifier disabled"
                                                  tooltip="Photo"
                                                  id="__w2_wiZEgLa428_image"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <defs>
                                                          <path
                                                            d="M5,4.5 L5,18.5 L2,18.5 L2,4.5 L2,0.5 L18.5,0.5 L18.5,4.5 L5,4.5 Z"
                                                            id="path-1"
                                                          />
                                                        </defs>
                                                        <g
                                                          id="photos"
                                                          stroke="none"
                                                          className="icon_svg-fill_as_stroke"
                                                          fill="#666666"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M8,7 C7.72385763,7 7.5,7.22385763 7.5,7.5 L7.5,19.5 C7.5,19.7761424 7.72385763,20 8,20 L20,20 C20.2761424,20 20.5,19.7761424 20.5,19.5 L20.5,7.5 C20.5,7.22385763 20.2761424,7 20,7 L8,7 Z M8,5.75 L20,5.75 C20.9664983,5.75 21.75,6.53350169 21.75,7.5 L21.75,19.5 C21.75,20.4664983 20.9664983,21.25 20,21.25 L8,21.25 C7.03350169,21.25 6.25,20.4664983 6.25,19.5 L6.25,7.5 C6.25,6.53350169 7.03350169,5.75 8,5.75 Z"
                                                            id="front"
                                                            fillRule="nonzero"
                                                          />
                                                          <path
                                                            d="M17.5,9 C16.9477153,9 16.5,9.44771525 16.5,10 C16.5,10.5522847 16.9477153,11 17.5,11 C18.0522847,11 18.5,10.5522847 18.5,10 C18.5,9.44771525 18.0522847,9 17.5,9 Z M17.5,7.75 C18.7426407,7.75 19.75,8.75735931 19.75,10 C19.75,11.2426407 18.7426407,12.25 17.5,12.25 C16.2573593,12.25 15.25,11.2426407 15.25,10 C15.25,8.75735931 16.2573593,7.75 17.5,7.75 Z"
                                                            id="circle"
                                                            fillRule="nonzero"
                                                          />
                                                          <path
                                                            d="M7.51086426,16.3161398 L7.51086426,20 L20.5108643,20 L20.5108643,16.3176136 C18.7812561,15.3914799 17.7009263,14.9284131 17.2698749,14.9284131 C16.6232978,14.9284131 14.6635332,16.3168432 14.0133169,16.3176136 C13.3631007,16.318384 11.4041401,14.0184785 10.7610483,14.0183328 C10.3323204,14.0182356 9.24892571,14.7841713 7.51086426,16.3161398 Z M14.1853213,14.9636194 C14.3909978,14.869742 14.5911778,14.7666161 15.0527381,14.5208411 C16.3483964,13.8309185 16.6820249,13.6784131 17.2698749,13.6784131 C18.0022858,13.6784131 19.1439621,14.1677752 21.1009221,15.2156464 C21.507238,15.4332118 21.7608643,15.8567153 21.7608643,16.3176136 L21.7608643,20 C21.7608643,20.6903559 21.2012202,21.25 20.5108643,21.25 L7.51086426,21.25 C6.82050832,21.25 6.26086426,20.6903559 6.26086426,20 L6.26086426,16.3161398 C6.26086426,15.9572681 6.41510756,15.6157069 6.68432727,15.3784103 C8.74951432,13.5581055 9.86691258,12.7681301 10.7613316,12.7683328 C11.2843915,12.7684514 11.6719119,12.9778697 12.2043358,13.3817264 C12.4750916,13.5871015 12.693573,13.7738875 13.2112546,14.2307693 C13.6714166,14.6368818 13.8743813,14.8100294 14.0768016,14.9628622 C14.0910184,14.9735963 14.1047799,14.9838532 14.1180624,14.9936249 C14.1388732,14.9845124 14.1614435,14.9745179 14.1853213,14.9636194 Z"
                                                            id="land"
                                                            fillRule="nonzero"
                                                          />
                                                          <mask
                                                            id="mask-2"
                                                            fill="white"
                                                          >
                                                            <use xlinkHref="#path-1" />
                                                          </mask>
                                                          <g id="mask" />
                                                          <path
                                                            d="M4.5,3.5 C4.22385763,3.5 4,3.72385763 4,4 L4,16 C4,16.2761424 4.22385763,16.5 4.5,16.5 L16.5,16.5 C16.7761424,16.5 17,16.2761424 17,16 L17,4 C17,3.72385763 16.7761424,3.5 16.5,3.5 L4.5,3.5 Z M4.5,2.25 L16.5,2.25 C17.4664983,2.25 18.25,3.03350169 18.25,4 L18.25,16 C18.25,16.9664983 17.4664983,17.75 16.5,17.75 L4.5,17.75 C3.53350169,17.75 2.75,16.9664983 2.75,16 L2.75,4 C2.75,3.03350169 3.53350169,2.25 4.5,2.25 Z"
                                                            id="back"
                                                            fillRule="nonzero"
                                                            mask="url(#mask-2)"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <defs>
                                                          <path
                                                            d="M5,4.5 L5,18.5 L2,18.5 L2,4.5 L2,0.5 L18.5,0.5 L18.5,4.5 L5,4.5 Z"
                                                            id="path-1"
                                                          />
                                                        </defs>
                                                        <g
                                                          id="photos"
                                                          stroke="none"
                                                          className="icon_svg-fill_as_stroke"
                                                          fill="#666666"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M8,7 C7.72385763,7 7.5,7.22385763 7.5,7.5 L7.5,19.5 C7.5,19.7761424 7.72385763,20 8,20 L20,20 C20.2761424,20 20.5,19.7761424 20.5,19.5 L20.5,7.5 C20.5,7.22385763 20.2761424,7 20,7 L8,7 Z M8,5.75 L20,5.75 C20.9664983,5.75 21.75,6.53350169 21.75,7.5 L21.75,19.5 C21.75,20.4664983 20.9664983,21.25 20,21.25 L8,21.25 C7.03350169,21.25 6.25,20.4664983 6.25,19.5 L6.25,7.5 C6.25,6.53350169 7.03350169,5.75 8,5.75 Z"
                                                            id="front"
                                                            fillRule="nonzero"
                                                          />
                                                          <path
                                                            d="M17.5,8.25 C18.4664983,8.25 19.25,9.03350169 19.25,10 C19.25,10.9664983 18.4664983,11.75 17.5,11.75 C16.5335017,11.75 15.75,10.9664983 15.75,10 C15.75,9.03350169 16.5335017,8.25 17.5,8.25 Z"
                                                            id="circle"
                                                            fillRule="nonzero"
                                                          />
                                                          <path
                                                            d="M14.1853213,14.9636194 C14.3909978,14.869742 14.5911778,14.7666161 15.0527381,14.5208411 C16.3483964,13.8309185 16.6820249,13.6784131 17.2698749,13.6784131 C18.0022858,13.6784131 19.1439621,14.1677752 21.1009221,15.2156464 C21.507238,15.4332118 21.7608643,15.8567153 21.7608643,16.3176136 L21.7608643,20 C21.7608643,20.6903559 21.2012202,21.25 20.5108643,21.25 L7.51086426,21.25 C6.82050832,21.25 6.26086426,20.6903559 6.26086426,20 L6.26086426,16.3161398 C6.26086426,15.9572681 6.41510756,15.6157069 6.68432727,15.3784103 C8.74951432,13.5581055 9.86691258,12.7681301 10.7613316,12.7683328 C11.2843915,12.7684514 11.6719119,12.9778697 12.2043358,13.3817264 C12.4750916,13.5871015 12.693573,13.7738875 13.2112546,14.2307693 C13.6714166,14.6368818 13.8743813,14.8100294 14.0768016,14.9628622 C14.0910184,14.9735963 14.1047799,14.9838532 14.1180624,14.9936249 C14.1388732,14.9845124 14.1614435,14.9745179 14.1853213,14.9636194 Z"
                                                            id="land"
                                                            fillRule="nonzero"
                                                          />
                                                          <mask
                                                            id="mask-2"
                                                            fill="white"
                                                          >
                                                            <use xlinkHref="#path-1" />
                                                          </mask>
                                                          <g id="mask" />
                                                          <path
                                                            d="M4.5,3.5 C4.22385763,3.5 4,3.72385763 4,4 L4,16 C4,16.2761424 4.22385763,16.5 4.5,16.5 L16.5,16.5 C16.7761424,16.5 17,16.2761424 17,16 L17,4 C17,3.72385763 16.7761424,3.5 16.5,3.5 L4.5,3.5 Z M4.5,2.25 L16.5,2.25 C17.4664983,2.25 18.25,3.03350169 18.25,4 L18.25,16 C18.25,16.9664983 17.4664983,17.75 16.5,17.75 L4.5,17.75 C3.53350169,17.75 2.75,16.9664983 2.75,16 L2.75,4 C2.75,3.03350169 3.53350169,2.25 4.5,2.25 Z"
                                                            id="back"
                                                            fillRule="nonzero"
                                                            mask="url(#mask-2)"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  className="modifier"
                                                  tooltip="Link"
                                                  id="__w2_wiZEgLa428_link"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="link"
                                                          stroke="none"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M16.3159981,10.2408946 C16.3101813,10.2245297 16.3329471,10.1991842 16.3570167,10.1752357 C16.7245798,9.80922201 17.0946501,9.44560322 17.4596056,9.07699515 C18.8102118,7.71362426 18.3893947,5.42504114 16.6440469,4.63404055 C15.5918036,4.15716509 14.3652562,4.36861081 13.5456859,5.17916938 C12.4436988,6.2689281 11.3373992,7.3546954 10.252361,8.46091875 C9.48333689,9.24493434 9.25266976,10.1943945 9.58994522,11.2357572 C9.92712039,12.2770201 10.6769891,12.8939946 11.7548064,13.1095315 C11.9044391,13.1394672 12.0590864,13.1438578 12.2157395,13.160522 L12.2157395,14.5384615 C12.0549745,14.5280838 11.8955133,14.5257888 11.7382585,14.5063306 C10.6712726,14.3741146 9.7746795,13.9103111 9.07345143,13.0999521 C8.30272236,12.2092657 7.97006024,11.1681025 8.0793764,9.99651961 C8.17284673,8.99497137 8.59256062,8.1435007 9.30823045,7.43342625 C10.3924662,6.35753773 11.4703838,5.27556228 12.5579291,4.20306647 C13.4173146,3.35568701 14.4638413,2.95714326 15.6682246,3.00364336 C16.6975015,3.04345782 17.5992094,3.42244359 18.3464706,4.13171976 C19.2364445,4.97650479 19.675715,6.02205849 19.6488372,7.24333465 C19.6253693,8.31054183 19.2342381,9.24194077 18.4874784,10.0132836 C18.0222328,10.4940507 17.5407403,10.9592512 17.066268,11.4312372 C17.0509236,11.4464046 17.0333729,11.4594765 17.0346766,11.4583789 C16.7946825,11.0518523 16.5553905,10.6463235 16.3159981,10.2408946 Z M7.53165045,13.9379083 C7.2065543,14.2599938 6.88215943,14.5825781 6.5587664,14.9064597 C5.4790865,15.9878607 5.46716464,17.6933773 6.53111569,18.7877496 C7.58625058,19.8732415 9.35118708,19.8998824 10.4397833,18.8312531 C11.5520229,17.7395748 12.6614574,16.6447036 13.7501538,15.5299765 C14.5141548,14.7477118 14.737264,13.7975197 14.4015483,12.7614181 C14.0655321,11.7243188 13.318362,11.1101812 12.2463963,10.8905684 C12.202616,10.8815883 12.1581344,10.8767989 12.1094451,10.8692157 C12.1094451,10.0312049 12.1094451,9.57736389 12.1094451,9.5076927 C12.4927692,9.53851604 12.6201984,9.53827155 12.8832641,9.61878962 C14.522098,10.1203971 15.5310195,11.1966893 15.8566166,12.8558087 C16.1303185,14.2510137 15.7326893,15.4929586 14.7335572,16.5133949 C13.6432578,17.6266254 12.5327213,18.7202992 11.4224854,19.813973 C10.6971553,20.5285878 9.81543841,20.9146314 8.79747169,20.9889665 C6.71525336,21.1410291 4.81526921,19.7054139 4.4326676,17.665539 C4.16838296,16.2560657 4.53866197,15.0140211 5.5307813,13.9708352 C5.98932216,13.4887048 6.4720073,13.0296232 6.9438726,12.5601646 C6.95489281,12.5490892 7.41804212,13.3730613 7.72410337,13.7641936 C7.6592845,13.8224644 7.59266233,13.8774424 7.53165045,13.9379083 Z"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="link"
                                                          stroke="none"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M16.3159981,10.2408946 C16.3101813,10.2245297 16.3329471,10.1991842 16.3570167,10.1752357 C16.7245798,9.80922201 17.0946501,9.44560322 17.4596056,9.07699515 C18.8102118,7.71362426 18.3893947,5.42504114 16.6440469,4.63404055 C15.5918036,4.15716509 14.3652562,4.36861081 13.5456859,5.17916938 C12.4436988,6.2689281 11.3373992,7.3546954 10.252361,8.46091875 C9.48333689,9.24493434 9.25266976,10.1943945 9.58994522,11.2357572 C9.92712039,12.2770201 10.6769891,12.8939946 11.7548064,13.1095315 C11.9044391,13.1394672 12.0590864,13.1438578 12.2157395,13.160522 L12.2157395,14.5384615 C12.0549745,14.5280838 11.8955133,14.5257888 11.7382585,14.5063306 C10.6712726,14.3741146 9.7746795,13.9103111 9.07345143,13.0999521 C8.30272236,12.2092657 7.97006024,11.1681025 8.0793764,9.99651961 C8.17284673,8.99497137 8.59256062,8.1435007 9.30823045,7.43342625 C10.3924662,6.35753773 11.4703838,5.27556228 12.5579291,4.20306647 C13.4173146,3.35568701 14.4638413,2.95714326 15.6682246,3.00364336 C16.6975015,3.04345782 17.5992094,3.42244359 18.3464706,4.13171976 C19.2364445,4.97650479 19.675715,6.02205849 19.6488372,7.24333465 C19.6253693,8.31054183 19.2342381,9.24194077 18.4874784,10.0132836 C18.0222328,10.4940507 17.5407403,10.9592512 17.066268,11.4312372 C17.0509236,11.4464046 17.0333729,11.4594765 17.0346766,11.4583789 C16.7946825,11.0518523 16.5553905,10.6463235 16.3159981,10.2408946 Z M7.53165045,13.9379083 C7.2065543,14.2599938 6.88215943,14.5825781 6.5587664,14.9064597 C5.4790865,15.9878607 5.46716464,17.6933773 6.53111569,18.7877496 C7.58625058,19.8732415 9.35118708,19.8998824 10.4397833,18.8312531 C11.5520229,17.7395748 12.6614574,16.6447036 13.7501538,15.5299765 C14.5141548,14.7477118 14.737264,13.7975197 14.4015483,12.7614181 C14.0655321,11.7243188 13.318362,11.1101812 12.2463963,10.8905684 C12.202616,10.8815883 12.1581344,10.8767989 12.1094451,10.8692157 C12.1094451,10.0312049 12.1094451,9.57736389 12.1094451,9.5076927 C12.4927692,9.53851604 12.6201984,9.53827155 12.8832641,9.61878962 C14.522098,10.1203971 15.5310195,11.1966893 15.8566166,12.8558087 C16.1303185,14.2510137 15.7326893,15.4929586 14.7335572,16.5133949 C13.6432578,17.6266254 12.5327213,18.7202992 11.4224854,19.813973 C10.6971553,20.5285878 9.81543841,20.9146314 8.79747169,20.9889665 C6.71525336,21.1410291 4.81526921,19.7054139 4.4326676,17.665539 C4.16838296,16.2560657 4.53866197,15.0140211 5.5307813,13.9708352 C5.98932216,13.4887048 6.4720073,13.0296232 6.9438726,12.5601646 C6.95489281,12.5490892 7.41804212,13.3730613 7.72410337,13.7641936 C7.6592845,13.8224644 7.59266233,13.8774424 7.53165045,13.9379083 Z"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  className="modifier"
                                                  tooltip="Show more"
                                                  id="__w2_wiZEgLa428_overflow_show"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="overflow"
                                                          className="icon_svg-stroke"
                                                          strokeWidth="1.5"
                                                          stroke="#666"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z" />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="overflow"
                                                          className="icon_svg-stroke"
                                                          strokeWidth="1.5"
                                                          stroke="#666"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z" />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="bar bar_overflow_state"
                                              id="__w2_wiZEgLa428_bar2"
                                            >
                                              <div className="left u-flex-auto u-margin-right--sm">
                                                <div
                                                  className="modifier"
                                                  tooltip="Mention user, topic or question"
                                                  id="__w2_wiZEgLa428_mention"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="mention"
                                                          stroke="none"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M11.7457002,9.03954464 C10.2641278,9.03954464 9.39066339,10.1611744 9.39066339,12.0485321 C9.39066339,13.9251049 10.2751843,15.0683044 11.7235872,15.0683044 C13.2383292,15.0683044 14.2113022,13.8927501 14.2113022,12.0485321 C14.2113022,10.204314 13.2493857,9.03954464 11.7457002,9.03954464 Z M12.1326781,3 C17.3624079,3 21,6.25704014 21,10.9376872 C21,14.453565 19.3857494,16.6860395 16.8427518,16.6860395 C15.54914,16.6860395 14.5429975,15.9310965 14.4103194,14.8741762 L14.2334152,14.8741762 C13.7579853,15.9742361 12.7628993,16.5889754 11.4692875,16.5889754 C9.16953317,16.5889754 7.62162162,14.7447573 7.62162162,12.0053925 C7.62162162,9.38466147 9.2027027,7.55122828 11.4692875,7.55122828 C12.6302211,7.55122828 13.6253071,8.13361294 14.0565111,9.07189934 L14.2334152,9.07189934 L14.2334152,7.7561414 L15.9029484,7.7561414 L15.9029484,14.0868784 C15.9029484,14.8418214 16.3562654,15.2840024 17.1523342,15.2840024 C18.5454545,15.2840024 19.4410319,13.5692031 19.4410319,10.9161174 C19.4410319,7.02276812 16.4115479,4.35889754 11.9889435,4.35889754 C7.66584767,4.35889754 4.55896806,7.57279808 4.55896806,12.059317 C4.55896806,16.6644697 7.61056511,19.6303176 12.3427518,19.6303176 C13.8574939,19.6303176 15.3501229,19.4254044 16.046683,19.1126423 L16.046683,20.4715398 C15.0515971,20.8058718 13.7137592,21 12.3206388,21 C6.61547912,21 3,17.505692 3,11.9946075 C3,6.65608149 6.71498771,3 12.1326781,3 Z"
                                                            id="@"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="mention"
                                                          stroke="none"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M11.7457002,9.03954464 C10.2641278,9.03954464 9.39066339,10.1611744 9.39066339,12.0485321 C9.39066339,13.9251049 10.2751843,15.0683044 11.7235872,15.0683044 C13.2383292,15.0683044 14.2113022,13.8927501 14.2113022,12.0485321 C14.2113022,10.204314 13.2493857,9.03954464 11.7457002,9.03954464 Z M12.1326781,3 C17.3624079,3 21,6.25704014 21,10.9376872 C21,14.453565 19.3857494,16.6860395 16.8427518,16.6860395 C15.54914,16.6860395 14.5429975,15.9310965 14.4103194,14.8741762 L14.2334152,14.8741762 C13.7579853,15.9742361 12.7628993,16.5889754 11.4692875,16.5889754 C9.16953317,16.5889754 7.62162162,14.7447573 7.62162162,12.0053925 C7.62162162,9.38466147 9.2027027,7.55122828 11.4692875,7.55122828 C12.6302211,7.55122828 13.6253071,8.13361294 14.0565111,9.07189934 L14.2334152,9.07189934 L14.2334152,7.7561414 L15.9029484,7.7561414 L15.9029484,14.0868784 C15.9029484,14.8418214 16.3562654,15.2840024 17.1523342,15.2840024 C18.5454545,15.2840024 19.4410319,13.5692031 19.4410319,10.9161174 C19.4410319,7.02276812 16.4115479,4.35889754 11.9889435,4.35889754 C7.66584767,4.35889754 4.55896806,7.57279808 4.55896806,12.059317 C4.55896806,16.6644697 7.61056511,19.6303176 12.3427518,19.6303176 C13.8574939,19.6303176 15.3501229,19.4254044 16.046683,19.1126423 L16.046683,20.4715398 C15.0515971,20.8058718 13.7137592,21 12.3206388,21 C6.61547912,21 3,17.505692 3,11.9946075 C3,6.65608149 6.71498771,3 12.1326781,3 Z"
                                                            id="@"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  className="modifier"
                                                  tooltip="Code"
                                                  id="__w2_wiZEgLa428_code"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="code"
                                                          stroke="none"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M4.07487923,11.8836207 L4.07487923,11.7284483 C5.21497585,11.612069 5.80434783,10.8265086 5.80434783,9.42025862 L5.80434783,6.54956897 C5.80434783,4.98814655 6.45169082,4.3674569 8.06521739,4.3674569 L8.06521739,4.3674569 C8.3053412,4.3674569 8.5,4.17279809 8.5,3.93267429 L8.5,3.5 C8.5,3.22385763 8.27614237,3 8,3 L7.92028986,3 C5.40821256,3 4.21980676,4.07650862 4.21980676,6.3362069 L4.21980676,8.80926724 C4.21980676,10.3512931 3.78502415,10.875 2.5,10.875 L2.5,12.7273707 C3.78502415,12.7273707 4.21980676,13.2413793 4.21980676,14.7737069 L4.21980676,17.5765086 C4.21980676,19.8943966 5.4178744,21 7.92028986,21 L8,21 C8.27614237,21 8.5,20.7761424 8.5,20.5 L8.5,20.0673257 C8.5,19.8272019 8.3053412,19.6325431 8.06521739,19.6325431 C6.46135266,19.6325431 5.80434783,19.0021552 5.80434783,17.4601293 L5.80434783,14.2209052 C5.80434783,12.7855603 5.21497585,11.9903017 4.07487923,11.8836207 Z M19.9251208,11.8836207 C18.7850242,11.9903017 18.1956522,12.7855603 18.1956522,14.2209052 L18.1956522,17.4601293 C18.1956522,19.0021552 17.5386473,19.6325431 15.9347826,19.6325431 L15.9347826,19.6325431 C15.6946588,19.6325431 15.5,19.8272019 15.5,20.0673257 L15.5,20.5 C15.5,20.7761424 15.7238576,21 16,21 L16.0797101,21 C18.5821256,21 19.7801932,19.8943966 19.7801932,17.5765086 L19.7801932,14.7737069 C19.7801932,13.2413793 20.2149758,12.7273707 21.5,12.7273707 L21.5,10.875 C20.2149758,10.875 19.7801932,10.3512931 19.7801932,8.80926724 L19.7801932,6.3362069 C19.7801932,4.07650862 18.5917874,3 16.0797101,3 L16,3 C15.7238576,3 15.5,3.22385763 15.5,3.5 L15.5,3.93267429 C15.5,4.17279809 15.6946588,4.3674569 15.9347826,4.3674569 C17.5483092,4.3674569 18.1956522,4.98814655 18.1956522,6.54956897 L18.1956522,9.42025862 C18.1956522,10.8265086 18.7850242,11.612069 19.9251208,11.7284483 L19.9251208,11.8836207 Z"
                                                            id="{-}"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="code"
                                                          stroke="none"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M4.07487923,11.8836207 L4.07487923,11.7284483 C5.21497585,11.612069 5.80434783,10.8265086 5.80434783,9.42025862 L5.80434783,6.54956897 C5.80434783,4.98814655 6.45169082,4.3674569 8.06521739,4.3674569 L8.06521739,4.3674569 C8.3053412,4.3674569 8.5,4.17279809 8.5,3.93267429 L8.5,3.5 C8.5,3.22385763 8.27614237,3 8,3 L7.92028986,3 C5.40821256,3 4.21980676,4.07650862 4.21980676,6.3362069 L4.21980676,8.80926724 C4.21980676,10.3512931 3.78502415,10.875 2.5,10.875 L2.5,12.7273707 C3.78502415,12.7273707 4.21980676,13.2413793 4.21980676,14.7737069 L4.21980676,17.5765086 C4.21980676,19.8943966 5.4178744,21 7.92028986,21 L8,21 C8.27614237,21 8.5,20.7761424 8.5,20.5 L8.5,20.0673257 C8.5,19.8272019 8.3053412,19.6325431 8.06521739,19.6325431 C6.46135266,19.6325431 5.80434783,19.0021552 5.80434783,17.4601293 L5.80434783,14.2209052 C5.80434783,12.7855603 5.21497585,11.9903017 4.07487923,11.8836207 Z M19.9251208,11.8836207 C18.7850242,11.9903017 18.1956522,12.7855603 18.1956522,14.2209052 L18.1956522,17.4601293 C18.1956522,19.0021552 17.5386473,19.6325431 15.9347826,19.6325431 L15.9347826,19.6325431 C15.6946588,19.6325431 15.5,19.8272019 15.5,20.0673257 L15.5,20.5 C15.5,20.7761424 15.7238576,21 16,21 L16.0797101,21 C18.5821256,21 19.7801932,19.8943966 19.7801932,17.5765086 L19.7801932,14.7737069 C19.7801932,13.2413793 20.2149758,12.7273707 21.5,12.7273707 L21.5,10.875 C20.2149758,10.875 19.7801932,10.3512931 19.7801932,8.80926724 L19.7801932,6.3362069 C19.7801932,4.07650862 18.5917874,3 16.0797101,3 L16,3 C15.7238576,3 15.5,3.22385763 15.5,3.5 L15.5,3.93267429 C15.5,4.17279809 15.6946588,4.3674569 15.9347826,4.3674569 C17.5483092,4.3674569 18.1956522,4.98814655 18.1956522,6.54956897 L18.1956522,9.42025862 C18.1956522,10.8265086 18.7850242,11.612069 19.9251208,11.7284483 L19.9251208,11.8836207 Z"
                                                            id="{-}"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  className="modifier"
                                                  tooltip="Math"
                                                  id="__w2_wiZEgLa428_math"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="math"
                                                          stroke="none"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M10.8576518,12.1088948 L7.10908956,6.01148705 C7.10557206,6.00576548 7.10213373,5.99999561 7.09877556,5.99417909 C7.02047302,5.85855512 6.99066469,5.70824045 7.0039705,5.5633137 C7.00135029,5.5425781 7,5.52144674 7,5.5 L7,5 C7,4.72385763 7.22385763,4.5 7.5,4.5 L16.5,4.5 C16.7761424,4.5 17,4.72385763 17,5 L17,5.5 C17,5.77614237 16.7761424,6 16.5,6 L8.8621504,6 L12.3640464,11.6961807 C12.3675639,11.7019023 12.3710022,11.7076721 12.3743604,11.7134886 C12.4469777,11.8392655 12.4778871,11.9776772 12.4713798,12.1127089 C12.4764786,12.245478 12.4453922,12.3812376 12.3740519,12.5048027 C12.3706937,12.5106192 12.3672554,12.5163891 12.3637379,12.5221107 L8.90381111,18.1500244 L16.5,18.1500244 C16.7761424,18.1500244 17,18.373882 17,18.6500244 L17,19.1500244 C17,19.4261668 16.7761424,19.6500244 16.5,19.6500244 L7.5,19.6500244 C7.22385763,19.6500244 7,19.4261668 7,19.1500244 L7,18.6500244 C7,18.6386239 7.00038155,18.6273125 7.00113259,18.6161022 C6.99605476,18.4833675 7.02714362,18.347648 7.09846467,18.2241163 C7.10182284,18.2182998 7.10526116,18.2125299 7.10877867,18.2068083 L10.8576518,12.1088948 Z"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="math"
                                                          stroke="none"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M10.8576518,12.1088948 L7.10908956,6.01148705 C7.10557206,6.00576548 7.10213373,5.99999561 7.09877556,5.99417909 C7.02047302,5.85855512 6.99066469,5.70824045 7.0039705,5.5633137 C7.00135029,5.5425781 7,5.52144674 7,5.5 L7,5 C7,4.72385763 7.22385763,4.5 7.5,4.5 L16.5,4.5 C16.7761424,4.5 17,4.72385763 17,5 L17,5.5 C17,5.77614237 16.7761424,6 16.5,6 L8.8621504,6 L12.3640464,11.6961807 C12.3675639,11.7019023 12.3710022,11.7076721 12.3743604,11.7134886 C12.4469777,11.8392655 12.4778871,11.9776772 12.4713798,12.1127089 C12.4764786,12.245478 12.4453922,12.3812376 12.3740519,12.5048027 C12.3706937,12.5106192 12.3672554,12.5163891 12.3637379,12.5221107 L8.90381111,18.1500244 L16.5,18.1500244 C16.7761424,18.1500244 17,18.373882 17,18.6500244 L17,19.1500244 C17,19.4261668 16.7761424,19.6500244 16.5,19.6500244 L7.5,19.6500244 C7.22385763,19.6500244 7,19.4261668 7,19.1500244 L7,18.6500244 C7,18.6386239 7.00038155,18.6273125 7.00113259,18.6161022 C6.99605476,18.4833675 7.02714362,18.347648 7.09846467,18.2241163 C7.10182284,18.2182998 7.10526116,18.2125299 7.10877867,18.2068083 L10.8576518,12.1088948 Z"
                                                            className="icon_svg-fill_as_stroke"
                                                            fill="#666666"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="right">
                                                <div
                                                  className="modifier"
                                                  tooltip="Undo"
                                                  id="__w2_wiZEgLa428_undo"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="undo"
                                                          stroke="none"
                                                          className="icon_svg-fill_as_stroke"
                                                          fill="#666"
                                                          fillRule="evenodd"
                                                        >
                                                          <path d="M19.5,9.10000002 L19.5,20.6 C19.5,20.8761424 19.2761424,21.1 19,21.1 L18.5,21.1 C18.2238576,21.1 18,20.8761424 18,20.6 L18,9.60000002 L7,9.60000002 C6.72385763,9.60000002 6.5,9.3761424 6.5,9.10000002 L6.5,8.60000002 C6.5,8.32385765 6.72385763,8.10000002 7,8.10000002 L19,8.10000002 C19.2761424,8.10000002 19.5,8.32385765 19.5,8.60000002 L19.5,9.10000002 Z" />
                                                          <path
                                                            d="M6.49957932,8.85227498 L10.0647475,12.4174431 C10.2600096,12.6127053 10.2600096,12.9292878 10.0647475,13.1245499 L9.71119409,13.4781033 C9.51593194,13.6733655 9.19934945,13.6733655 9.00408731,13.4781033 L4.76144662,9.23546262 C4.65627527,9.13029127 4.60775091,8.98992399 4.61587354,8.85227498 C4.60775091,8.71462597 4.65627527,8.57425869 4.76144662,8.46908734 L9.00408731,4.22644665 C9.19934945,4.03118451 9.51593194,4.03118451 9.71119409,4.22644665 L10.0647475,4.58000004 C10.2600096,4.77526219 10.2600096,5.09184468 10.0647475,5.28710682 L6.49957932,8.85227498 Z"
                                                            id="arrow"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="undo"
                                                          stroke="none"
                                                          className="icon_svg-fill_as_stroke"
                                                          fill="#666"
                                                          fillRule="evenodd"
                                                        >
                                                          <path d="M19.5,9.10000002 L19.5,20.6 C19.5,20.8761424 19.2761424,21.1 19,21.1 L18.5,21.1 C18.2238576,21.1 18,20.8761424 18,20.6 L18,9.60000002 L7,9.60000002 C6.72385763,9.60000002 6.5,9.3761424 6.5,9.10000002 L6.5,8.60000002 C6.5,8.32385765 6.72385763,8.10000002 7,8.10000002 L19,8.10000002 C19.2761424,8.10000002 19.5,8.32385765 19.5,8.60000002 L19.5,9.10000002 Z" />
                                                          <path
                                                            d="M6.49957932,8.85227498 L10.0647475,12.4174431 C10.2600096,12.6127053 10.2600096,12.9292878 10.0647475,13.1245499 L9.71119409,13.4781033 C9.51593194,13.6733655 9.19934945,13.6733655 9.00408731,13.4781033 L4.76144662,9.23546262 C4.65627527,9.13029127 4.60775091,8.98992399 4.61587354,8.85227498 C4.60775091,8.71462597 4.65627527,8.57425869 4.76144662,8.46908734 L9.00408731,4.22644665 C9.19934945,4.03118451 9.51593194,4.03118451 9.71119409,4.22644665 L10.0647475,4.58000004 C10.2600096,4.77526219 10.2600096,5.09184468 10.0647475,5.28710682 L6.49957932,8.85227498 Z"
                                                            id="arrow"
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  className="modifier"
                                                  tooltip="Redo"
                                                  id="__w2_wiZEgLa428_redo"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          stroke="none"
                                                          className="icon_svg-fill_as_stroke"
                                                          fill="#666"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M17.5,9.10000002 L17.5,20.6 C17.5,20.8761424 17.2761424,21.1 17,21.1 L16.5,21.1 C16.2238576,21.1 16,20.8761424 16,20.6 L16,9.60000002 L5,9.60000002 C4.72385763,9.60000002 4.5,9.3761424 4.5,9.10000002 L4.5,8.60000002 C4.5,8.32385765 4.72385763,8.10000002 5,8.10000002 L17,8.10000002 C17.2761424,8.10000002 17.5,8.32385765 17.5,8.60000002 L17.5,9.10000002 Z"
                                                            id="Combined-Shape"
                                                            transform="translate(11.000000, 14.600000) scale(-1, 1) translate(-11.000000, -14.600000) "
                                                          />
                                                          <path
                                                            d="M15.6733852,8.85227498 L19.2385534,12.4174431 C19.4338155,12.6127053 19.4338155,12.9292878 19.2385534,13.1245499 L18.885,13.4781033 C18.6897378,13.6733655 18.3731554,13.6733655 18.1778932,13.4781033 L13.9352525,9.23546262 C13.8300812,9.13029127 13.7815568,8.98992399 13.7896794,8.85227498 C13.7815568,8.71462597 13.8300812,8.57425869 13.9352525,8.46908734 L18.1778932,4.22644665 C18.3731554,4.03118451 18.6897378,4.03118451 18.885,4.22644665 L19.2385534,4.58000004 C19.4338155,4.77526219 19.4338155,5.09184468 19.2385534,5.28710682 L15.6733852,8.85227498 Z"
                                                            transform="translate(16.586903, 8.852275) scale(-1, 1) translate(-16.586903, -8.852275) "
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          stroke="none"
                                                          className="icon_svg-fill_as_stroke"
                                                          fill="#666"
                                                          fillRule="evenodd"
                                                        >
                                                          <path
                                                            d="M17.5,9.10000002 L17.5,20.6 C17.5,20.8761424 17.2761424,21.1 17,21.1 L16.5,21.1 C16.2238576,21.1 16,20.8761424 16,20.6 L16,9.60000002 L5,9.60000002 C4.72385763,9.60000002 4.5,9.3761424 4.5,9.10000002 L4.5,8.60000002 C4.5,8.32385765 4.72385763,8.10000002 5,8.10000002 L17,8.10000002 C17.2761424,8.10000002 17.5,8.32385765 17.5,8.60000002 L17.5,9.10000002 Z"
                                                            id="Combined-Shape"
                                                            transform="translate(11.000000, 14.600000) scale(-1, 1) translate(-11.000000, -14.600000) "
                                                          />
                                                          <path
                                                            d="M15.6733852,8.85227498 L19.2385534,12.4174431 C19.4338155,12.6127053 19.4338155,12.9292878 19.2385534,13.1245499 L18.885,13.4781033 C18.6897378,13.6733655 18.3731554,13.6733655 18.1778932,13.4781033 L13.9352525,9.23546262 C13.8300812,9.13029127 13.7815568,8.98992399 13.7896794,8.85227498 C13.7815568,8.71462597 13.8300812,8.57425869 13.9352525,8.46908734 L18.1778932,4.22644665 C18.3731554,4.03118451 18.6897378,4.03118451 18.885,4.22644665 L19.2385534,4.58000004 C19.4338155,4.77526219 19.4338155,5.09184468 19.2385534,5.28710682 L15.6733852,8.85227498 Z"
                                                            transform="translate(16.586903, 8.852275) scale(-1, 1) translate(-16.586903, -8.852275) "
                                                          />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  className="modifier"
                                                  tooltip="Show less"
                                                  id="__w2_wiZEgLa428_overflow_hide"
                                                >
                                                  <span className="default_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="close"
                                                          className="icon_svg-stroke"
                                                          stroke="#666"
                                                          strokeWidth="1.5"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                          strokeLinecap="round"
                                                        >
                                                          <path d="M5.5,5.5 L18.5,18.5" />
                                                          <path d="M5.5,18.5 L18.5,5.5" />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                  <span className="active_icon">
                                                    <span
                                                      className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                      aria-hidden="true"
                                                    >
                                                      <svg
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                        <g
                                                          id="close"
                                                          className="icon_svg-stroke"
                                                          stroke="#666"
                                                          strokeWidth="1.5"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                          strokeLinecap="round"
                                                        >
                                                          <path d="M5.5,5.5 L18.5,18.5" />
                                                          <path d="M5.5,18.5 L18.5,5.5" />
                                                        </g>
                                                      </svg>
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="hidden"
                                            id="__w2_wiZEgLa428_storage"
                                          >
                                            <div
                                              className="u-inline-flex"
                                              id="__w2_wiZEgLa428_link_input_icon"
                                            >
                                              <span
                                                className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--default"
                                                aria-hidden="true"
                                              >
                                                <svg
                                                  width="24px"
                                                  height="24px"
                                                  viewBox="0 0 24 24"
                                                  version="1.1"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                  <g
                                                    id="link"
                                                    stroke="none"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                  >
                                                    <path
                                                      d="M16.3159981,10.2408946 C16.3101813,10.2245297 16.3329471,10.1991842 16.3570167,10.1752357 C16.7245798,9.80922201 17.0946501,9.44560322 17.4596056,9.07699515 C18.8102118,7.71362426 18.3893947,5.42504114 16.6440469,4.63404055 C15.5918036,4.15716509 14.3652562,4.36861081 13.5456859,5.17916938 C12.4436988,6.2689281 11.3373992,7.3546954 10.252361,8.46091875 C9.48333689,9.24493434 9.25266976,10.1943945 9.58994522,11.2357572 C9.92712039,12.2770201 10.6769891,12.8939946 11.7548064,13.1095315 C11.9044391,13.1394672 12.0590864,13.1438578 12.2157395,13.160522 L12.2157395,14.5384615 C12.0549745,14.5280838 11.8955133,14.5257888 11.7382585,14.5063306 C10.6712726,14.3741146 9.7746795,13.9103111 9.07345143,13.0999521 C8.30272236,12.2092657 7.97006024,11.1681025 8.0793764,9.99651961 C8.17284673,8.99497137 8.59256062,8.1435007 9.30823045,7.43342625 C10.3924662,6.35753773 11.4703838,5.27556228 12.5579291,4.20306647 C13.4173146,3.35568701 14.4638413,2.95714326 15.6682246,3.00364336 C16.6975015,3.04345782 17.5992094,3.42244359 18.3464706,4.13171976 C19.2364445,4.97650479 19.675715,6.02205849 19.6488372,7.24333465 C19.6253693,8.31054183 19.2342381,9.24194077 18.4874784,10.0132836 C18.0222328,10.4940507 17.5407403,10.9592512 17.066268,11.4312372 C17.0509236,11.4464046 17.0333729,11.4594765 17.0346766,11.4583789 C16.7946825,11.0518523 16.5553905,10.6463235 16.3159981,10.2408946 Z M7.53165045,13.9379083 C7.2065543,14.2599938 6.88215943,14.5825781 6.5587664,14.9064597 C5.4790865,15.9878607 5.46716464,17.6933773 6.53111569,18.7877496 C7.58625058,19.8732415 9.35118708,19.8998824 10.4397833,18.8312531 C11.5520229,17.7395748 12.6614574,16.6447036 13.7501538,15.5299765 C14.5141548,14.7477118 14.737264,13.7975197 14.4015483,12.7614181 C14.0655321,11.7243188 13.318362,11.1101812 12.2463963,10.8905684 C12.202616,10.8815883 12.1581344,10.8767989 12.1094451,10.8692157 C12.1094451,10.0312049 12.1094451,9.57736389 12.1094451,9.5076927 C12.4927692,9.53851604 12.6201984,9.53827155 12.8832641,9.61878962 C14.522098,10.1203971 15.5310195,11.1966893 15.8566166,12.8558087 C16.1303185,14.2510137 15.7326893,15.4929586 14.7335572,16.5133949 C13.6432578,17.6266254 12.5327213,18.7202992 11.4224854,19.813973 C10.6971553,20.5285878 9.81543841,20.9146314 8.79747169,20.9889665 C6.71525336,21.1410291 4.81526921,19.7054139 4.4326676,17.665539 C4.16838296,16.2560657 4.53866197,15.0140211 5.5307813,13.9708352 C5.98932216,13.4887048 6.4720073,13.0296232 6.9438726,12.5601646 C6.95489281,12.5490892 7.41804212,13.3730613 7.72410337,13.7641936 C7.6592845,13.8224644 7.59266233,13.8774424 7.53165045,13.9379083 Z"
                                                      className="icon_svg-fill_as_stroke"
                                                      fill="#666666"
                                                    />
                                                  </g>
                                                </svg>
                                              </span>
                                            </div>
                                            <input
                                              className="u-ltr u-text-align--left"
                                              type="url"
                                              formNoValidate="formnovalidate"
                                              data-group="js-editable"
                                              placeholder="Enter URL"
                                              w2cid="wiZEgLa428"
                                              id="__w2_wiZEgLa428_link_input"
                                            />
                                            <div
                                              className="cite"
                                              id="__w2_wiZEgLa428_cite"
                                            >
                                              <input
                                                type="checkbox"
                                                formNoValidate="formnovalidate"
                                                data-group="js-editable"
                                                w2cid="wiZEgLa428"
                                                id="__w2_wiZEgLa428_is_citation"
                                              />
                                              <label htmlFor="__w2_wiZEgLa428_is_citation">
                                                Footnote
                                              </label>
                                            </div>
                                            <button
                                              type="button"
                                              id="__w2_wiZEgLa428_link_save"
                                            >
                                              Add
                                            </button>
                                            <div
                                              className="modifier"
                                              tooltip="Quote"
                                              id="__w2_wiZEgLa428_quote"
                                            >
                                              <span className="default_icon">
                                                <span
                                                  className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      id="quote"
                                                      stroke="none"
                                                      className="icon_svg-fill_as_stroke"
                                                      fill="#666"
                                                      fillRule="evenodd"
                                                    >
                                                      <path
                                                        d="M10.2871465,9.58641803 C10.2901873,9.52328208 10.2917252,9.45975193 10.2917252,9.39586259 C10.2917252,7.24423709 8.54748808,5.5 6.39586259,5.5 C4.24423709,5.5 2.5,7.24423709 2.5,9.39586259 C2.5,11.5474881 4.24423709,13.2917252 6.39586259,13.2917252 C6.88026119,13.2917252 7.34401164,13.20332 7.7718597,13.0417638 C7.68272734,13.9167241 7.46959414,14.6848987 7.00636933,15.3013978 C5.96466609,16.6877852 4.62910247,17.3155779 3.59327148,17.5457534 C3.31584085,17.6074022 3.13809098,17.8001269 3.15285308,18.0802518 C3.1674893,18.3481768 3.40406057,18.4952977 3.66826144,18.4999094 C3.68045532,18.5001222 3.6923164,18.4999904 3.70452803,18.4991871 C4.99291217,18.4305328 6.5,17.5 8,16 C9.47213042,14.5278696 10.3128848,12.216491 10.2871465,9.58641803 Z M8.88388348,16.8838835 C7.13785973,18.6299072 5.39347429,19.6609614 3.78657891,19.7464913 C3.70591747,19.750275 3.70591747,19.750275 3.64644593,19.749719 C2.76126999,19.7342682 1.95828281,19.1290445 1.90458516,18.1460333 C1.85647066,17.2330146 2.46620565,16.5157126 3.32211872,16.3255173 C4.31358052,16.1052012 5.27646389,15.5228173 6.00703147,14.5505157 C3.35526014,14.3375828 1.25,12.1125776 1.25,9.39586259 C1.25,6.55388116 3.55388116,4.25 6.39586259,4.25 C9.23784402,4.25 11.5417252,6.55388116 11.5417252,9.39586259 C11.5417252,9.46698524 11.5402747,9.53797314 11.5373801,9.60879397 C11.5583072,12.5269844 10.6112615,15.1565054 8.88388348,16.8838835 Z"
                                                        fillRule="nonzero"
                                                      />
                                                      <path
                                                        d="M21.5371465,9.58641803 C21.5401873,9.52328208 21.5417252,9.45975193 21.5417252,9.39586259 C21.5417252,7.24423709 19.7974881,5.5 17.6458626,5.5 C15.4942371,5.5 13.75,7.24423709 13.75,9.39586259 C13.75,11.5474881 15.4942371,13.2917252 17.6458626,13.2917252 C18.1302612,13.2917252 18.5940116,13.20332 19.0218597,13.0417638 C18.9327273,13.9167241 18.7195941,14.6848987 18.2563693,15.3013978 C17.2146661,16.6877852 15.8791025,17.3155779 14.8432715,17.5457534 C14.5658409,17.6074022 14.388091,17.8001269 14.4028531,18.0802518 C14.4174893,18.3481768 14.6540606,18.4952977 14.9182614,18.4999094 C14.9304553,18.5001222 14.9423164,18.4999904 14.954528,18.4991871 C16.2429122,18.4305328 17.75,17.5 19.25,16 C20.7221304,14.5278696 21.5628848,12.216491 21.5371465,9.58641803 Z M20.1338835,16.8838835 C18.3878597,18.6299072 16.6434743,19.6609614 15.0365789,19.7464913 C14.9559175,19.750275 14.9559175,19.750275 14.8964459,19.749719 C14.01127,19.7342682 13.2082828,19.1290445 13.1545852,18.1460333 C13.1064707,17.2330146 13.7162056,16.5157126 14.5721187,16.3255173 C15.5635805,16.1052012 16.5264639,15.5228173 17.2570315,14.5505157 C14.6052601,14.3375828 12.5,12.1125776 12.5,9.39586259 C12.5,6.55388116 14.8038812,4.25 17.6458626,4.25 C20.487844,4.25 22.7917252,6.55388116 22.7917252,9.39586259 C22.7917252,9.46698524 22.7902747,9.53797314 22.7873801,9.60879397 C22.8083072,12.5269844 21.8612615,15.1565054 20.1338835,16.8838835 Z"
                                                        fillRule="nonzero"
                                                      />
                                                    </g>
                                                  </svg>
                                                </span>
                                              </span>
                                              <span className="active_icon">
                                                <span
                                                  className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      stroke="none"
                                                      className="icon_svg-fill_as_stroke"
                                                      fill="#666666"
                                                      fillRule="evenodd"
                                                    >
                                                      <path
                                                        d="M8.35355339,16.3535534 C6.72599111,17.9811157 5.13096926,18.9238855 3.73734838,18.9981088 C3.69419851,19.0001438 3.69419851,19.0001438 3.65953523,18.9998332 C3.13423696,18.9906641 2.68327366,18.6507662 2.65354591,18.1065644 C2.62568674,17.57791 2.97083595,17.1718709 3.48481037,17.0576589 C4.64402641,16.8000656 5.7637603,16.1228134 6.60663419,15.0010449 C6.86429856,14.6581232 7.04373736,14.2411325 7.15896292,13.7256468 C6.90892445,13.7694425 6.65383975,13.7917252 6.39586259,13.7917252 C3.96809472,13.7917252 2,11.8236305 2,9.39586259 C2,6.96809472 3.96809472,5 6.39586259,5 C8.82363046,5 10.7917252,6.96809472 10.7917252,9.39586259 C10.7917252,9.46265302 10.790232,9.52928412 10.7872534,9.59572171 C10.8109126,12.3309469 9.93345046,14.7736563 8.35355339,16.3535534 Z M19.6035534,16.3535534 C17.9759911,17.9811157 16.3809693,18.9238855 14.9873484,18.9981088 C14.9441985,19.0001438 14.9441985,19.0001438 14.9095352,18.9998332 C14.384237,18.9906641 13.9332737,18.6507662 13.9035459,18.1065644 C13.8756867,17.57791 14.220836,17.1718709 14.7348104,17.0576589 C15.8940264,16.8000656 17.0137603,16.1228134 17.8566342,15.0010449 C18.1142986,14.6581232 18.2937374,14.2411325 18.4089629,13.7256468 C18.1589244,13.7694425 17.9038397,13.7917252 17.6458626,13.7917252 C15.2180947,13.7917252 13.25,11.8236305 13.25,9.39586259 C13.25,6.96809472 15.2180947,5 17.6458626,5 C20.0736305,5 22.0417252,6.96809472 22.0417252,9.39586259 C22.0417252,9.46265302 22.040232,9.52928412 22.0372534,9.59572171 C22.0609126,12.3309469 21.1834505,14.7736563 19.6035534,16.3535534 Z"
                                                        id="quote"
                                                        fillRule="nonzero"
                                                      />
                                                    </g>
                                                  </svg>
                                                </span>
                                              </span>
                                            </div>
                                            <div
                                              className="modifier"
                                              tooltip="Indent"
                                              id="__w2_wiZEgLa428_indent"
                                            >
                                              <span className="default_icon">
                                                <span
                                                  className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      id="indent_left"
                                                      stroke="none"
                                                      fill="none"
                                                      fillRule="evenodd"
                                                    >
                                                      <path
                                                        d="M7.08890057,12.5 L5,12.5 C4.72385763,12.5 4.5,12.2761424 4.5,12 L4.5,11.5 C4.5,11.2238576 4.72385763,11 5,11 L7.08933372,11 L6.40900974,10.319676 C6.2137476,10.1244139 6.2137476,9.80783138 6.40900974,9.61256924 L6.76256313,9.25901585 C6.95782528,9.0637537 7.27440777,9.0637537 7.46966991,9.25901585 L9.59099026,11.3803362 C9.69266408,11.48201 9.74139591,11.6165778 9.73718576,11.7497834 C9.74139591,11.8829891 9.69266408,12.0175568 9.59099026,12.1192307 L7.46966991,14.240551 C7.27440777,14.4358131 6.95782528,14.4358131 6.76256313,14.240551 L6.40900974,13.8869976 C6.2137476,13.6917355 6.2137476,13.375153 6.40900974,13.1798908 L7.08890057,12.5 Z M5,5.49998636 L19,5.49998636 C19.2761424,5.49998636 19.5,5.72384398 19.5,5.99998636 L19.5,6.5 C19.5,6.77614237 19.2761424,7 19,7 L5,7 C4.72385763,7 4.5,6.77614237 4.5,6.5 L4.5,5.99998636 C4.5,5.72384398 4.72385763,5.49998636 5,5.49998636 Z M11,11 L19,11 C19.2761424,11 19.5,11.2238576 19.5,11.5 L19.5,12 C19.5,12.2761424 19.2761424,12.5 19,12.5 L11,12.5 C10.7238576,12.5 10.5,12.2761424 10.5,12 L10.5,11.5 C10.5,11.2238576 10.7238576,11 11,11 Z M5,16.5 L19,16.5 C19.2761424,16.5 19.5,16.7238576 19.5,17 L19.5,17.5 C19.5,17.7761424 19.2761424,18 19,18 L5,18 C4.72385763,18 4.5,17.7761424 4.5,17.5 L4.5,17 C4.5,16.7238576 4.72385763,16.5 5,16.5 Z"
                                                        className="icon_svg-fill_as_stroke"
                                                        fill="#666666"
                                                      />
                                                    </g>
                                                  </svg>
                                                </span>
                                              </span>
                                              <span className="active_icon">
                                                <span
                                                  className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      id="indent_left"
                                                      stroke="none"
                                                      fill="none"
                                                      fillRule="evenodd"
                                                    >
                                                      <path
                                                        d="M7.08890057,12.5 L5,12.5 C4.72385763,12.5 4.5,12.2761424 4.5,12 L4.5,11.5 C4.5,11.2238576 4.72385763,11 5,11 L7.08933372,11 L6.40900974,10.319676 C6.2137476,10.1244139 6.2137476,9.80783138 6.40900974,9.61256924 L6.76256313,9.25901585 C6.95782528,9.0637537 7.27440777,9.0637537 7.46966991,9.25901585 L9.59099026,11.3803362 C9.69266408,11.48201 9.74139591,11.6165778 9.73718576,11.7497834 C9.74139591,11.8829891 9.69266408,12.0175568 9.59099026,12.1192307 L7.46966991,14.240551 C7.27440777,14.4358131 6.95782528,14.4358131 6.76256313,14.240551 L6.40900974,13.8869976 C6.2137476,13.6917355 6.2137476,13.375153 6.40900974,13.1798908 L7.08890057,12.5 Z M5,5.49998636 L19,5.49998636 C19.2761424,5.49998636 19.5,5.72384398 19.5,5.99998636 L19.5,6.5 C19.5,6.77614237 19.2761424,7 19,7 L5,7 C4.72385763,7 4.5,6.77614237 4.5,6.5 L4.5,5.99998636 C4.5,5.72384398 4.72385763,5.49998636 5,5.49998636 Z M11,11 L19,11 C19.2761424,11 19.5,11.2238576 19.5,11.5 L19.5,12 C19.5,12.2761424 19.2761424,12.5 19,12.5 L11,12.5 C10.7238576,12.5 10.5,12.2761424 10.5,12 L10.5,11.5 C10.5,11.2238576 10.7238576,11 11,11 Z M5,16.5 L19,16.5 C19.2761424,16.5 19.5,16.7238576 19.5,17 L19.5,17.5 C19.5,17.7761424 19.2761424,18 19,18 L5,18 C4.72385763,18 4.5,17.7761424 4.5,17.5 L4.5,17 C4.5,16.7238576 4.72385763,16.5 5,16.5 Z"
                                                        className="icon_svg-fill_as_stroke"
                                                        fill="#666666"
                                                      />
                                                    </g>
                                                  </svg>
                                                </span>
                                              </span>
                                            </div>
                                            <div
                                              className="modifier"
                                              tooltip="Unindent"
                                              id="__w2_wiZEgLa428_deindent"
                                            >
                                              <span className="default_icon">
                                                <span
                                                  className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      id="indent_right"
                                                      stroke="none"
                                                      strokeWidth={1}
                                                      fill="none"
                                                      fillRule="evenodd"
                                                    >
                                                      <path
                                                        d="M7.08890057,12.5 L5,12.5 C4.72385763,12.5 4.5,12.2761424 4.5,12 L4.5,11.5 C4.5,11.2238576 4.72385763,11 5,11 L7.08933372,11 L6.40900974,10.319676 C6.2137476,10.1244139 6.2137476,9.80783138 6.40900974,9.61256924 L6.76256313,9.25901585 C6.95782528,9.0637537 7.27440777,9.0637537 7.46966991,9.25901585 L9.59099026,11.3803362 C9.69266408,11.48201 9.74139591,11.6165778 9.73718576,11.7497834 C9.74139591,11.8829891 9.69266408,12.0175568 9.59099026,12.1192307 L7.46966991,14.240551 C7.27440777,14.4358131 6.95782528,14.4358131 6.76256313,14.240551 L6.40900974,13.8869976 C6.2137476,13.6917355 6.2137476,13.375153 6.40900974,13.1798908 L7.08890057,12.5 Z M5,5.5 L19,5.5 C19.2761424,5.5 19.5,5.72385763 19.5,6 L19.5,6.5 C19.5,6.77614237 19.2761424,7 19,7 L5,7 C4.72385763,7 4.5,6.77614237 4.5,6.5 L4.5,6 C4.5,5.72385763 4.72385763,5.5 5,5.5 Z M11,11 L19,11 C19.2761424,11 19.5,11.2238576 19.5,11.5 L19.5,12 C19.5,12.2761424 19.2761424,12.5 19,12.5 L11,12.5 C10.7238576,12.5 10.5,12.2761424 10.5,12 L10.5,11.5 C10.5,11.2238576 10.7238576,11 11,11 Z M5,16.5 L19,16.5 C19.2761424,16.5 19.5,16.7238576 19.5,17 L19.5,17.5 C19.5,17.7761424 19.2761424,18 19,18 L5,18 C4.72385763,18 4.5,17.7761424 4.5,17.5 L4.5,17 C4.5,16.7238576 4.72385763,16.5 5,16.5 Z"
                                                        className="icon_svg-fill_as_stroke"
                                                        fill="#666666"
                                                        transform="translate(12.000000, 11.750000) scale(-1, 1) translate(-12.000000, -11.750000) "
                                                      />
                                                    </g>
                                                  </svg>
                                                </span>
                                              </span>
                                              <span className="active_icon">
                                                <span
                                                  className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled"
                                                  aria-hidden="true"
                                                >
                                                  <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                    <g
                                                      id="indent_right"
                                                      stroke="none"
                                                      strokeWidth={1}
                                                      fill="none"
                                                      fillRule="evenodd"
                                                    >
                                                      <path
                                                        d="M7.08890057,12.5 L5,12.5 C4.72385763,12.5 4.5,12.2761424 4.5,12 L4.5,11.5 C4.5,11.2238576 4.72385763,11 5,11 L7.08933372,11 L6.40900974,10.319676 C6.2137476,10.1244139 6.2137476,9.80783138 6.40900974,9.61256924 L6.76256313,9.25901585 C6.95782528,9.0637537 7.27440777,9.0637537 7.46966991,9.25901585 L9.59099026,11.3803362 C9.69266408,11.48201 9.74139591,11.6165778 9.73718576,11.7497834 C9.74139591,11.8829891 9.69266408,12.0175568 9.59099026,12.1192307 L7.46966991,14.240551 C7.27440777,14.4358131 6.95782528,14.4358131 6.76256313,14.240551 L6.40900974,13.8869976 C6.2137476,13.6917355 6.2137476,13.375153 6.40900974,13.1798908 L7.08890057,12.5 Z M5,5.5 L19,5.5 C19.2761424,5.5 19.5,5.72385763 19.5,6 L19.5,6.5 C19.5,6.77614237 19.2761424,7 19,7 L5,7 C4.72385763,7 4.5,6.77614237 4.5,6.5 L4.5,6 C4.5,5.72385763 4.72385763,5.5 5,5.5 Z M11,11 L19,11 C19.2761424,11 19.5,11.2238576 19.5,11.5 L19.5,12 C19.5,12.2761424 19.2761424,12.5 19,12.5 L11,12.5 C10.7238576,12.5 10.5,12.2761424 10.5,12 L10.5,11.5 C10.5,11.2238576 10.7238576,11 11,11 Z M5,16.5 L19,16.5 C19.2761424,16.5 19.5,16.7238576 19.5,17 L19.5,17.5 C19.5,17.7761424 19.2761424,18 19,18 L5,18 C4.72385763,18 4.5,17.7761424 4.5,17.5 L4.5,17 C4.5,16.7238576 4.72385763,16.5 5,16.5 Z"
                                                        className="icon_svg-fill_as_stroke"
                                                        fill="#666666"
                                                        transform="translate(12.000000, 11.750000) scale(-1, 1) translate(-12.000000, -11.750000) "
                                                      />
                                                    </g>
                                                  </svg>
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="tooltip"
                                          id="__w2_wiZEgLa428_tooltip"
                                        >
                                          <div id="__w2_wiZEgLa428_tooltip_text" />
                                        </div>
                                        <div
                                          className="hidden"
                                          id="__w2_wiZEgLa427_link_selector_wrapper"
                                        >
                                          <div
                                            className="LinkSelector Selector"
                                            tabIndex={-1}
                                            id="__w2_wiZEgLa429_wrapper"
                                          >
                                            <div className="link_selector_input">
                                              <div className="selector_input_interaction">
                                                <div
                                                  className="CharacterCounter fade_out"
                                                  id="__w2_wiZEgLa465_counter_wrapper"
                                                >
                                                  <div
                                                    className="counter"
                                                    id="__w2_wiZEgLa465_counter"
                                                  >
                                                    250
                                                  </div>
                                                </div>
                                                <input
                                                  className="selector_input text"
                                                  type="text"
                                                  defaultValue
                                                  data-group="js-editable"
                                                  placeholder="Search"
                                                  w2cid="wiZEgLa429"
                                                  id="__w2_wiZEgLa429_input"
                                                />
                                                <div
                                                  className="selector_spinner hidden"
                                                  id="__w2_wiZEgLa429_spinner"
                                                >
                                                  <div className="LoadingDots tiny">
                                                    <div className="dot first" />
                                                    <div className="dot second" />
                                                    <div className="dot third" />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="selector_results_container hidden"
                                              id="__w2_wiZEgLa429_results_container"
                                            >
                                              <div
                                                className="selector_results_container_inner hidden"
                                                id="__w2_wiZEgLa429_results"
                                              />
                                              <div id="__w2_wiZEgLa429_empty_input_prompt" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="form_buttons"
                                      id="__w2_wiZEgLa426_inline_editor_buttons"
                                    >
                                      <div className="inline_editor_buttons">
                                        <a
                                          className="inline_editor_button inline_editor_cancel_button"
                                          href="#"
                                          id="__w2_wiZEgLa426_inline_editor_cancel"
                                        >
                                          Cancel
                                        </a>
                                        <a
                                          className="submit_button"
                                          href="#"
                                          action_mousedown="InlineEditorAnswerAdd"
                                          id="__w2_wiZEgLa426_inline_editor_submit"
                                        >
                                          Submit
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="wiZEgLa412">
                          <div className="QuestionPageAnswerHeader">
                            <div className="answer_count">2 Answers</div>
                          </div>
                        </div>
                        <div id="wiZEgLa41">
                          <div
                            className="PagedListFoo UnifiedAnswerPagedList unified"
                            id="__w2_wiZEgLa42_paged_list"
                          >
                            <div
                              className="paged_list_wrapper"
                              id="__w2_wiZEgLa42_paged_list_wrapper"
                            >
                              <div className="pagedlist_item" id="wiZEgLa43">
                                <div
                                  data-clog-trigger="impression"
                                  data-clog-metadata='{"action_log_target": {"type": 4, "hash": "answer_ranking|890043703"}}'
                                  data-clog-event-type="ActionLogImpression"
                                  id="__w2_wzwmJKBZ4_actionable"
                                  data-clog-processed={1}
                                >
                                  <div id="wzwmJKBZ5">
                                    <div
                                      data-clog-trigger="impression"
                                      data-clog-metadata='{"object_view": {"view_tracking_key": "a-104359258", "view_tracking_hash": "c1a322bdf84ba45aeedf1ee577b45fad"}}'
                                      data-clog-event-type="ObjectView"
                                      data-clog-processed={1}
                                    >
                                      <div id="wzwmJKBZ8">
                                        <a name="answer_104359258" />

                                        {this.state.answers.map(answer => (
                                          <div
                                            className="Answer AnswerBase"
                                            data-clog-metadata="{}"
                                            id="__w2_wzwmJKBZ9_answer"
                                          >
                                            <div>
                                              <div id="wzwmJKBZ10">
                                                <div className="ContentHeader AnswerHeader">
                                                  <div className="ui_layout_photo_text u-flex ui_layout_size--small">
                                                    <div className="ui_layout_photo_wrapper u-flex-none">
                                                      <div className="ui_layout_photo u-relative">
                                                        <div
                                                          className="u-flex-inline"
                                                          id="wzwmJKBZ22"
                                                        >
                                                          <div
                                                            className="hover_menu hidden show_nub"
                                                            id="__w2_wzwmJKBZ36_menu"
                                                          >
                                                            <div
                                                              className="hover_menu_contents"
                                                              id="__w2_wzwmJKBZ36_menu_contents"
                                                            />
                                                          </div>
                                                          <span
                                                            className="photo_tooltip u-inline"
                                                            id="__w2_wzwmJKBZ36_link"
                                                          >
                                                            <a
                                                              className="u-flex-inline"
                                                              href="/profile/Brian-Lee-2"
                                                            >
                                                              <span className="ui_avatar u-flex-inline ui_avatar--large u-flex-none">
                                                                <img
                                                                  className="ui_avatar_photo ui_avatar--border-circular"
                                                                  src="https://qph.fs.quoracdn.net/main-thumb-135803-100-hfwmdtdhabdgeqjarswxljarsjkomepm.jpeg"
                                                                  alt="Brian Lee"
                                                                />
                                                              </span>
                                                            </a>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="ui_layout_text u-flex-auto u-width--100 u-flex-align-self--center">
                                                      <div className="u-flex u-flex-justify--between">
                                                        <div className="u-margin-right--sm u-width--100">
                                                          <div className="feed_item_answer_user">
                                                            <span id="wzwmJKBZ24">
                                                              <span id="wzwmJKBZ29">
                                                                <div
                                                                  className="hover_menu hidden white_bg show_nub"
                                                                  id="__w2_wzwmJKBZ30_menu"
                                                                >
                                                                  <div
                                                                    className="hover_menu_contents"
                                                                    id="__w2_wzwmJKBZ30_menu_contents"
                                                                  >
                                                                    {" "}
                                                                  </div>
                                                                </div>
                                                                <span id="__w2_wzwmJKBZ30_link">
                                                                  <a
                                                                    className="user"
                                                                    href="/profile/Brian-Lee-2"
                                                                    action_mousedown="UserLinkClickthrough"
                                                                    id="__w2_wzwmJKBZ30_name_link"
                                                                  >
                                                                    {
                                                                      answer.owner
                                                                    }
                                                                  </a>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </div>
                                                          <span className="credibility_wrapper">
                                                            <div className="AnswerCredibilityFacts CredibilityFacts pass_color_to_child_links">
                                                              <span id="wzwmJKBZ31">
                                                                <a
                                                                  className="answer_permalink"
                                                                  action_mousedown="AnswerPermalinkClickthrough"
                                                                  href="/Who-first-invented-the-money-Who-was-the-person-who-invented-or-made-it-How-much-was-he-paid/answer/Brian-Lee-2"
                                                                  id="__w2_wzwmJKBZ32_link"
                                                                >
                                                                  Answered Oct
                                                                  17, 2018
                                                                </a>
                                                              </span>
                                                            </div>
                                                          </span>
                                                        </div>
                                                        <div id="__w2_wzwmJKBZ12_follow_button_section">
                                                          <div className="u-relative icon_follow_button_wrapper">
                                                            <div
                                                              className="u-absolute u-absolute--center u-border-radius--ellipse u-padding-right--xs u-padding-left--xs icon_follow_button"
                                                              id="__w2_wzwmJKBZ12_follow_button"
                                                            >
                                                              <span id="wzwmJKBZ26">
                                                                <a
                                                                  className="ui_button u-nowrap ui_button--styled ui_button--PillStyle ui_button--PillStyle--light_blue ui_button--size_small u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                                  href="#"
                                                                  role="button"
                                                                  aria-label="Follow Brian"
                                                                  action_target='{"type": "user", "uid": 135803}'
                                                                  id="__w2_wzwmJKBZ40_button"
                                                                >
                                                                  <div
                                                                    className="ui_button_inner"
                                                                    id="__w2_wzwmJKBZ40_inner"
                                                                  >
                                                                    <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                                      <div id="__w2_wzwmJKBZ40_icon">
                                                                        <span
                                                                          className="ui_button_icon ui_button-unpressed_icon"
                                                                          aria-hidden="true"
                                                                        >
                                                                          <svg
                                                                            width={
                                                                              24
                                                                            }
                                                                            height={
                                                                              24
                                                                            }
                                                                            viewBox="0 0 24 24"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                          >
                                                                            <g
                                                                              className="icon_svg-stroke"
                                                                              stroke="#666"
                                                                              strokeWidth="1.5"
                                                                              fill="none"
                                                                              fillRule="evenodd"
                                                                            >
                                                                              <path d="M12 12.5A2.25 2.25 0 1 0 12 8a2.25 2.25 0 0 0 0 4.5zm3 4a3 3 0 1 0-6 0" />
                                                                              <path
                                                                                d="M13.5 19.5h-6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v6m-2.5 6h5M19.5 17v5"
                                                                                strokeLinecap="round"
                                                                              />
                                                                            </g>
                                                                          </svg>
                                                                        </span>
                                                                        <span
                                                                          className="ui_button_icon ui_button-pressed_icon"
                                                                          aria-hidden="true"
                                                                        >
                                                                          <svg
                                                                            width="24px"
                                                                            height="24px"
                                                                            viewBox="0 0 24 24"
                                                                            version="1.1"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                          >
                                                                            <g
                                                                              stroke="none"
                                                                              fill="none"
                                                                              fillRule="evenodd"
                                                                            >
                                                                              <path
                                                                                d="M10.7321831,12.9697305 C9.28500703,13.4895228 8.25,14.873892 8.25,16.5 L15.75,16.5 C15.75,14.873892 14.714993,13.4895228 13.2678169,12.9697305 C14.2910047,12.4919502 15,11.4537725 15,10.25 C15,8.59314575 13.6568542,7.25 12,7.25 C10.3431458,7.25 9,8.59314575 9,10.25 C9,11.4537725 9.70899528,12.4919502 10.7321831,12.9697305 Z M20.25,14.3388626 C19.9783814,14.4955 19.7318899,14.7061926 19.5273952,14.9688404 L17.7662908,17.2307581 C16.7898614,16.2559226 15.2080519,16.2564142 14.232233,17.232233 C13.4142783,18.0501878 13.2816074,19.2939234 13.8342204,20.25 L7.5,20.25 C5.42893219,20.25 3.75,18.5710678 3.75,16.5 L3.75,7.5 C3.75,5.42893219 5.42893219,3.75 7.5,3.75 L16.5,3.75 C18.5710678,3.75 20.25,5.42893219 20.25,7.5 L20.25,14.3388626 Z"
                                                                                className="icon_svg-fill_as_stroke"
                                                                                fill="#666"
                                                                                fillRule="nonzero"
                                                                              />
                                                                              <polyline
                                                                                className="icon_svg-stroke"
                                                                                stroke="#666"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                points="16 19 18 21 21.5 16.5046888"
                                                                              />
                                                                            </g>
                                                                          </svg>
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </a>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div id="__w2_wzwmJKBZ28_suggested_section" />
                                                </div>
                                              </div>
                                              <div id="__w2_wzwmJKBZ9_answer_content">
                                                <div id="wzwmJKBZ13">
                                                  <div
                                                    className="Expandable Toggle AnswerExpandable AnswerEditableExpandable SimpleToggle"
                                                    id="__w2_wzwmJKBZ14__truncated"
                                                  >
                                                    <div id="wBch4VPF4">
                                                      <div
                                                        className="inline_editor_content"
                                                        id="__w2_wBch4VPF5_content"
                                                      >
                                                        <span
                                                          className="inline_editor_value"
                                                          id="__w2_wBch4VPF5_answer_content"
                                                        >
                                                          <div
                                                            className="ExpandedContent ExpandedAnswer"
                                                            id="__w2_wBch4VPF7_expanded_content"
                                                          >
                                                            <div id="wBch4VPF9" />
                                                            <div className="u-serif-font-main--large">
                                                              <div className="ui_qtext_expanded">
                                                                <span className="ui_qtext_rendered_qtext">
                                                                  <div className="ui_qtext_image_outer" />
                                                                  {/* <p className="ui_qtext_para u-ltr u-text-align--start">{answer.answerContent}</p> */}
                                                                  {
                                                                    (flagVar =
                                                                      answer.owner ==
                                                                      this.props
                                                                        .auth
                                                                        .user
                                                                        .email
                                                                        ? true
                                                                        : false)
                                                                  }
                                                                  <div
                                                                    dangerouslySetInnerHTML={{
                                                                      __html:
                                                                        answer.answerContent
                                                                    }}
                                                                    contentEditable={
                                                                      flagVar
                                                                    }
                                                                  />
                                                                </span>
                                                              </div>
                                                            </div>
                                                            <div id="wBch4VPF13">
                                                              <div
                                                                className="ReadingContentFooter ContentFooter AnswerFooter"
                                                                id="__w2_wBch4VPF14_content_footer"
                                                              >
                                                                <span>
                                                                  664 views
                                                                </span>
                                                                <span id="wBch4VPF17" />
                                                                <span id="wBch4VPF19" />
                                                              </div>
                                                            </div>
                                                            <div id="__w2_wBch4VPF7_survey_wrapper" />
                                                            <div
                                                              className="hidden"
                                                              id="__w2_wBch4VPF16_highlight_menu"
                                                            />
                                                          </div>
                                                        </span>
                                                        <div
                                                          className="hidden"
                                                          id="__w2_wBch4VPF5_loading"
                                                        >
                                                          <span className="loading">
                                                            Loading…
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="hidden"
                                                        id="__w2_wBch4VPF5_editor"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <div id="wzwmJKBZ15">
                                                  <div
                                                    style={{
                                                      height: "0px",
                                                      margin: "0px",
                                                      padding: "0px",
                                                      clear: "both",
                                                      display: "block"
                                                    }}
                                                  />
                                                  <div
                                                    className="icon_action_bar with_metabar"
                                                    id="__w2_wzwmJKBZ16_action_bar"
                                                    style={{
                                                      position: "relative"
                                                    }}
                                                  >
                                                    <div id="wTzJejgH23">
                                                      <div className="ItemComponent Metabar AnswerMetabarPrependItem u-relative">
                                                        <div
                                                          className="prepend_item_inner pass_color_to_child_links"
                                                          id="__w2_wTzJejgH24_wrapper"
                                                        >
                                                          <div
                                                            className="prepend_item_content u-relative"
                                                            id="__w2_wTzJejgH24_content"
                                                          >
                                                            <span
                                                              className="meta_bar_pre_upvote_wrapper"
                                                              id="__w2_wTzJejgH24_pre_upvote_text"
                                                            >
                                                              <div id="wr8jPOSk45" />
                                                            </span>
                                                            <span
                                                              className="meta_bar_post_upvote_wrapper hidden"
                                                              id="__w2_wTzJejgH24_post_upvote_text"
                                                            >
                                                              <div id="wr8jPOSk47">
                                                                <div className="unstyled_social_bar">
                                                                  <div className="photos">
                                                                    <div className="ui_badge_group_wrapper">
                                                                      <span className="ui_avatar u-flex-inline ui_avatar--small u-flex-none">
                                                                        <img
                                                                          className="ui_avatar_photo ui_avatar--border-circular"
                                                                          src="https://qph.fs.quoracdn.net/main-thumb-782622776-50-izcdaymwbtomzguzorfwyoknxfqoqixc.jpeg"
                                                                        />
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                  <span className="reason_line">
                                                                    You upvoted
                                                                    this
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="action_bar_inner u-flex">
                                                      <span id="wTzJejgH25">
                                                        <a
                                                          className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--blue ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon u-tap-highlight--none ui_button--has_icon"
                                                          href="#"
                                                          role="button"
                                                          onClick={() => {
                                                            this.upvoteHandler({
                                                              email:
                                                                answer.owner,
                                                              answer_id:
                                                                answer.answer_id
                                                            });
                                                          }}
                                                          action_target='{"aid": 104359258, "type": "answer"}'
                                                          id="__w2_wFDFurfC8_button"
                                                        >
                                                          <div
                                                            className="ui_button_inner"
                                                            id="__w2_wFDFurfC8_inner"
                                                          >
                                                            <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                              <div
                                                                className="u-hardware-accelerated"
                                                                id="__w2_wFDFurfC8_icon"
                                                              >
                                                                <span
                                                                  className="ui_button_icon"
                                                                  aria-hidden="true"
                                                                >
                                                                  <svg
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                  >
                                                                    <g
                                                                      id="upvote"
                                                                      className="icon_svg-stroke icon_svg-fill"
                                                                      strokeWidth="1.5"
                                                                      stroke="#666"
                                                                      fill="none"
                                                                      fillRule="evenodd"
                                                                      strokeLinejoin="round"
                                                                    >
                                                                      <polygon points="12 4 3 15 9 15 9 20 15 20 15 15 21 15" />
                                                                    </g>
                                                                  </svg>
                                                                </span>
                                                              </div>
                                                            </div>
                                                            <div className="ui_button_label_count_wrapper">
                                                              <span
                                                                className="ui_button_label"
                                                                id="__w2_wFDFurfC8_label"
                                                              >
                                                                Upvote
                                                              </span>
                                                              <span
                                                                className="ui_button_count hidden ui_button_count--animated"
                                                                aria-hidden="true"
                                                                id="__w2_wFDFurfC8_count_wrapper"
                                                              >
                                                                <span className="bullet">
                                                                  {" "}
                                                                  ·{" "}
                                                                </span>
                                                                <span
                                                                  className="ui_button_stacked_counts"
                                                                  id="__w2_wFDFurfC8_count"
                                                                >
                                                                  <span className="ui_button_count_optimistic_count">
                                                                    0
                                                                  </span>
                                                                  <span className="ui_button_count_optimistic_count">
                                                                    1
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </a>
                                                      </span>
                                                      <div className="QuoraShareActionItem ItemComponent ActionItemComponent action_item u-relative">
                                                        <div id="wTzJejgH32">
                                                          <a
                                                            className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon"
                                                            href="#"
                                                            role="button"
                                                            id="__w2_wTzJejgH41_button"
                                                          >
                                                            <div
                                                              className="ui_button_inner"
                                                              id="__w2_wTzJejgH41_inner"
                                                            >
                                                              <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                                <div id="__w2_wTzJejgH41_icon">
                                                                  <span
                                                                    className="ui_button_icon"
                                                                    aria-hidden="true"
                                                                  >
                                                                    <svg
                                                                      width="24px"
                                                                      height="24px"
                                                                      viewBox="0 0 24 24"
                                                                      version="1.1"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    >
                                                                      <g
                                                                        id="sync"
                                                                        className="icon_svg-stroke"
                                                                        stroke="#666"
                                                                        strokeWidth="1.5"
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                        strokeLinecap="round"
                                                                      >
                                                                        <path
                                                                          d="M19.7477789,9.99927692 C18.8594418,6.54918939 15.7274185,4 12,4 C8.27166139,4 5.13901185,6.55044813 4.25156364,10.0018321 M4.25328626,14.0048552 C5.14305933,17.4528459 8.2740698,20 12,20 C15.7261126,20 18.8572473,17.4525964 19.7468444,14.0043488"
                                                                          id="circle"
                                                                        />
                                                                        <polyline
                                                                          id="arrow"
                                                                          transform="translate(4.742997, 8.742997) rotate(-20.000000) translate(-4.742997, -8.742997) "
                                                                          points="2.99299734 6.99299734 2.99299734 10.4929973 6.49299734 10.4929973"
                                                                        />
                                                                        <polyline
                                                                          id="arrow"
                                                                          transform="translate(19.242997, 15.242997) scale(-1, -1) rotate(-20.000000) translate(-19.242997, -15.242997) "
                                                                          points="17.4929973 13.4929973 17.4929973 16.9929973 20.9929973 16.9929973"
                                                                        />
                                                                      </g>
                                                                    </svg>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div className="ui_button_label_count_wrapper">
                                                                <span
                                                                  className="ui_button_label"
                                                                  id="__w2_wTzJejgH41_label"
                                                                >
                                                                  Share
                                                                </span>
                                                                <span
                                                                  className="ui_button_count hidden"
                                                                  aria-hidden="true"
                                                                  id="__w2_wTzJejgH41_count_wrapper"
                                                                >
                                                                  <span className="bullet">
                                                                    {" "}
                                                                    ·{" "}
                                                                  </span>
                                                                  <span
                                                                    className="ui_button_count_inner"
                                                                    id="__w2_wTzJejgH41_count"
                                                                  >
                                                                    0
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <div id="__w2_wTzJejgH33_quora_share_tooltip" />
                                                        </div>
                                                      </div>
                                                      <div className="ItemComponent ActionItemComponent DownvoteActionItem action_item secondary_item u-relative">
                                                        <span id="wTzJejgH34">
                                                          <a
                                                            className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                            href="#"
                                                            role="button"
                                                            aria-label="Downvote"
                                                            action_click="AnswerDownvote"
                                                            action_target='{"aid": 104359258, "type": "answer"}'
                                                            id="__w2_wTzJejgH43_button"
                                                          >
                                                            <div
                                                              className="ui_button_inner"
                                                              id="__w2_wTzJejgH43_inner"
                                                            >
                                                              <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                                <div id="__w2_wTzJejgH43_icon">
                                                                  <span
                                                                    className="ui_button_icon"
                                                                    aria-hidden="true"
                                                                  >
                                                                    <svg
                                                                      width="24px"
                                                                      height="24px"
                                                                      viewBox="0 0 24 24"
                                                                      version="1.1"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    >
                                                                      <g
                                                                        id="downvote"
                                                                        className="icon_svg-stroke icon_svg-fill"
                                                                        stroke="#666"
                                                                        fill="none"
                                                                        strokeWidth="1.5"
                                                                        fillRule="evenodd"
                                                                        strokeLinejoin="round"
                                                                        onClick={() => {
                                                                          this.downvoteHandler(
                                                                            {
                                                                              email:
                                                                                answer.owner,
                                                                              answer_id:
                                                                                answer.answer_id
                                                                            }
                                                                          );
                                                                        }}
                                                                      >
                                                                        <polygon
                                                                          transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) "
                                                                          points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"
                                                                        />
                                                                      </g>
                                                                    </svg>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </span>
                                                      </div>
                                                      <div className="OverflowShareActionItem ActionItemComponent ItemComponent action_item secondary_item u-relative">
                                                        <div id="wTzJejgH36">
                                                          <div
                                                            className="hover_menu hidden u-right--0 show_nub right_align"
                                                            id="__w2_wTzJejgH37_menu"
                                                          >
                                                            <div
                                                              className="hover_menu_contents"
                                                              id="__w2_wTzJejgH37_menu_contents"
                                                            >
                                                              {" "}
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="_QuickShare HoverMenu AnswerQuickShare"
                                                            role="button"
                                                            id="__w2_wTzJejgH37_link"
                                                          >
                                                            <a
                                                              className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                              href="#"
                                                              role="button"
                                                              aria-label="More sharing options"
                                                              id="__w2_wTzJejgH40_button"
                                                            >
                                                              <div
                                                                className="ui_button_inner"
                                                                id="__w2_wTzJejgH40_inner"
                                                              >
                                                                <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                                  <div id="__w2_wTzJejgH40_icon">
                                                                    <span
                                                                      className="ui_button_icon"
                                                                      aria-hidden="true"
                                                                    >
                                                                      <svg
                                                                        width="24px"
                                                                        height="24px"
                                                                        viewBox="0 0 24 24"
                                                                        version="1.1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                      >
                                                                        <g
                                                                          id="share"
                                                                          className="icon_svg-stroke"
                                                                          stroke="#666"
                                                                          fill="none"
                                                                          strokeWidth="1.5"
                                                                          fillRule="evenodd"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <path
                                                                            d="M12.0001053,2.99989467 L4.00010533,12.7776724 L9.33343867,12.7776724 C9.78266695,14.7041066 10.5048892,16.2782509 11.5001053,17.5001053 C12.4953215,18.7219597 13.9953215,19.8886264 16.0001053,21.0001053 C15.3415908,19.6668553 14.8428108,18.1668553 14.5037654,16.5001053 C14.16472,14.8333553 14.2190556,13.5925444 14.666772,12.7776724 L20.0001053,12.7776724 L12.0001053,2.99989467 Z"
                                                                            transform="translate(12.000105, 12.000000) rotate(90.000000) translate(-12.000105, -12.000000) "
                                                                          />
                                                                        </g>
                                                                      </svg>
                                                                    </span>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="action_bar_inner_spacer u-margin-left--auto">
                                                        &nbsp;
                                                      </div>
                                                      <div className="overflow action_item overflow_link u-relative u-pointer-events--auto">
                                                        <div
                                                          className="overflow_link"
                                                          id="__w2_wzwmJKBZ16_overflow_link"
                                                        >
                                                          <a
                                                            className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                            href="#"
                                                            role="button"
                                                            aria-label="More options"
                                                            id="__w2_wTzJejgH31_button"
                                                          >
                                                            <div
                                                              className="ui_button_inner"
                                                              id="__w2_wTzJejgH31_inner"
                                                            >
                                                              <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                                <div id="__w2_wTzJejgH31_icon">
                                                                  <span
                                                                    className="ui_button_icon"
                                                                    aria-hidden="true"
                                                                  />

                                                                  <button
                                                                    onClick={
                                                                      this
                                                                        .bookmarkHandler
                                                                    }
                                                                  >
                                                                    Bookmark
                                                                  </button>
                                                                  {console.log(
                                                                    "aaaa....",
                                                                    answer,
                                                                    this.props
                                                                      .auth.user
                                                                      .email
                                                                  )}
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="hover_menu hidden show_nub right_align fixed_menu_width no_body_attach"
                                                        id="__w2_wzwmJKBZ16_overflow_menu"
                                                      >
                                                        <div
                                                          className="hover_menu_contents lazy"
                                                          id="__w2_wzwmJKBZ16_overflow_menu_contents"
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div id="wzwmJKBZ20">
                                                  <div />
                                                </div>
                                                <div className="answer_auto_expanded_comments threaded_comments u-margin-top--md">
                                                  <div id="wzwmJKBZ33">
                                                    <div
                                                      className="expanded_wrapper"
                                                      id="__w2_wFDFurfC2_expanded_wrapper"
                                                    >
                                                      <div id="wR5L77UZ1">
                                                        <div
                                                          data-group="js-editable"
                                                          w2cid="w1SM6R3W27"
                                                        >
                                                          <div
                                                            className="doc empty"
                                                            data-kind="doc"
                                                            placeholder="Write your answer"
                                                          >
                                                            {/* <div className="section" data-type="plain" data-indent={0} data-kind="section" data-dir="LTR" id="editable" contentEditable="true">
                       
                       
                        

                        </div> */}
                                                            <textarea
                                                              id="one"
                                                              name="comment"
                                                              style={{
                                                                resize: "none",
                                                                backgroundColor:
                                                                  "rgba(0, 0, 0, 0)",
                                                                borderColor:
                                                                  "rgba(0, 0, 0, 0)"
                                                              }}
                                                              onChange={
                                                                this.onChange
                                                              }
                                                            />

                                                            <div className="content">
                                                              <br />
                                                            </div>
                                                            <div className="content">
                                                              <br />
                                                            </div>
                                                          </div>
                                                        </div>

                                                        <button
                                                          className="submit_button"
                                                          action_mousedown="InlineEditorAnswerAdd"
                                                          id="__w2_w1SM6R3W26_inline_editor_submit"
                                                          onClick={() =>
                                                            this.onClick(
                                                              this.props.auth
                                                                .user.email,
                                                              answer.answer_id,
                                                              answer.question_id
                                                            )
                                                          }
                                                        >
                                                          Comment
                                                        </button>

                                                        <div
                                                          className="TCommentUnit expanded_comments"
                                                          id="__w2_wR5L77UZ2_expanded_comments"
                                                        >
                                                          <div
                                                            className="comment_list"
                                                            id="__w2_wR5L77UZ5_container"
                                                          >
                                                            <div id="__w2_wR5L77UZ5_new_comment" />
                                                            <div id="__w2_wR5L77UZ5_added_comments" />
                                                          </div>
                                                          <div id="__w2_wR5L77UZ2_container_featured">
                                                            <div
                                                              className="TCommentListWrapper FeaturedTCommentListWrapper"
                                                              id="__w2_wR5L77UZ7_comment_list_wrapper"
                                                            >
                                                              <div
                                                                className="comment_list comment_list_level_0"
                                                                id="__w2_wR5L77UZ7_comment_list"
                                                              >
                                                                <div
                                                                  className="comment_wrapper last comment_to_append"
                                                                  id="__w2_wR5L77UZ12_comment"
                                                                >
                                                                  <div id="wR5L77UZ20">
                                                                    <div
                                                                      className="comment threaded_comment"
                                                                      id="__w2_wR5L77UZ21_comment_inner"
                                                                    >
                                                                      {answer.comments.map(
                                                                        comment => (
                                                                          <div className="comment_contents">
                                                                            <div>
                                                                              <div className="ui_layout_photo_text u-flex ui_layout_size--tiny">
                                                                                <div className="ui_layout_photo_wrapper u-flex-none">
                                                                                  <div className="ui_layout_photo u-relative">
                                                                                    <div
                                                                                      className="u-flex-inline"
                                                                                      id="wR5L77UZ27"
                                                                                    >
                                                                                      <a
                                                                                        className="u-flex-inline"
                                                                                        href="/profile/Bruce-Decker-12"
                                                                                      >
                                                                                        <span className="ui_avatar u-flex-inline ui_avatar--medium u-flex-none">
                                                                                          {/*                          
                         <img className="ui_avatar_photo ui_avatar--border-circular" src="https://qph.fs.quoracdn.net/main-thumb-782622776-100-izcdaymwbtomzguzorfwyoknxfqoqixc.jpeg" alt="Bruce Decker" />
                          */}
                                                                                        </span>
                                                                                      </a>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>

                                                                                <div className="ui_layout_text u-flex-auto u-width--100 u-flex-align-self--center">
                                                                                  <span className="author_name">
                                                                                    <span id="wR5L77UZ29">
                                                                                      <span id="__w2_wR5L77UZ30_link">
                                                                                        <p
                                                                                          className="user"
                                                                                          href="/profile/Bruce-Decker-12"
                                                                                          action_mousedown="UserLinkClickthrough"
                                                                                          id="__w2_wR5L77UZ30_name_link"
                                                                                        >
                                                                                          {
                                                                                            comment.name
                                                                                          }{" "}
                                                                                          {
                                                                                            comment.email
                                                                                          }
                                                                                        </p>
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>

                                                                                  <span className="comment_metadata">
                                                                                    <span id="wR5L77UZ31" />
                                                                                  </span>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div
                                                                              className="full_comment_text"
                                                                              id="__w2_wR5L77UZ21_full_comment_text"
                                                                            >
                                                                              <div
                                                                                className="TCommentTruncatedInlineEditor InlineEditor TCommentFullTextInlineEditor inline_editor_content"
                                                                                id="__w2_wR5L77UZ33_inline_editor_content"
                                                                              >
                                                                                <span className="inline_editor_value">
                                                                                  <div id="__w2_wR5L77UZ36_expanded">
                                                                                    <div className="ui_qtext_expanded">
                                                                                      <span className="ui_qtext_rendered_qtext">
                                                                                        <p className="ui_qtext_para u-ltr u-text-align--start">
                                                                                          {
                                                                                            comment.comment
                                                                                          }
                                                                                        </p>
                                                                                      </span>
                                                                                    </div>
                                                                                  </div>
                                                                                </span>
                                                                              </div>
                                                                              <div
                                                                                className="rteditor inline_editor_content threaded_inline_editor hidden"
                                                                                id="__w2_wR5L77UZ33_inline_editor_form"
                                                                              >
                                                                                <div className="inline_editor_form">
                                                                                  <div
                                                                                    className="editor_wrapper"
                                                                                    id="__w2_wR5L77UZ41_editor_outer"
                                                                                  >
                                                                                    <div
                                                                                      className="Comment Editor edit_latex web"
                                                                                      id="__w2_wR5L77UZ41_editor"
                                                                                    >
                                                                                      <div
                                                                                        data-group="js-editable"
                                                                                        w2cid="wR5L77UZ41"
                                                                                        id="__w2_wR5L77UZ41_doc"
                                                                                      >
                                                                                        <div
                                                                                          className="doc"
                                                                                          contentEditable="true"
                                                                                          data-kind="doc"
                                                                                          placeholder
                                                                                        >
                                                                                          <div
                                                                                            className="section"
                                                                                            data-type="plain"
                                                                                            data-dir="LTR"
                                                                                            data-indent={
                                                                                              0
                                                                                            }
                                                                                            data-kind="section"
                                                                                          >
                                                                                            <div
                                                                                              className="span"
                                                                                              data-kind="span"
                                                                                            >
                                                                                              <div className="content">
                                                                                                N/A
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                      <input
                                                                                        type="file"
                                                                                        accept=".jpg, .png, .jpeg, .gif, .bmp|images/*"
                                                                                        multiple
                                                                                        style={{
                                                                                          display:
                                                                                            "none"
                                                                                        }}
                                                                                        data-group="js-editable"
                                                                                        w2cid="wR5L77UZ41"
                                                                                        id="__w2_wR5L77UZ41_file"
                                                                                      />
                                                                                      <div
                                                                                        className="drop_zone hidden"
                                                                                        id="__w2_wR5L77UZ41_drop_zone"
                                                                                      />
                                                                                      <div
                                                                                        className="hidden"
                                                                                        id="__w2_wR5L77UZ41_link_selector_wrapper"
                                                                                      >
                                                                                        <div
                                                                                          className="Selector LinkSelector"
                                                                                          tabIndex={
                                                                                            -1
                                                                                          }
                                                                                          id="__w2_wR5L77UZ46_wrapper"
                                                                                        >
                                                                                          <div className="link_selector_input">
                                                                                            <div className="selector_input_interaction">
                                                                                              <div
                                                                                                className="CharacterCounter fade_out"
                                                                                                id="__w2_wR5L77UZ47_counter_wrapper"
                                                                                              >
                                                                                                <div
                                                                                                  className="counter"
                                                                                                  id="__w2_wR5L77UZ47_counter"
                                                                                                >
                                                                                                  250
                                                                                                </div>
                                                                                              </div>
                                                                                              <input
                                                                                                className="selector_input text"
                                                                                                type="text"
                                                                                                defaultValue
                                                                                                data-group="js-editable"
                                                                                                placeholder="Search"
                                                                                                w2cid="wR5L77UZ46"
                                                                                                id="__w2_wR5L77UZ46_input"
                                                                                              />
                                                                                              <div
                                                                                                className="selector_spinner hidden"
                                                                                                id="__w2_wR5L77UZ46_spinner"
                                                                                              >
                                                                                                <div className="LoadingDots tiny">
                                                                                                  <div className="dot first" />
                                                                                                  <div className="dot second" />
                                                                                                  <div className="dot third" />
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div
                                                                                            className="selector_results_container hidden"
                                                                                            id="__w2_wR5L77UZ46_results_container"
                                                                                          >
                                                                                            <div
                                                                                              className="selector_results_container_inner hidden"
                                                                                              id="__w2_wR5L77UZ46_results"
                                                                                            />
                                                                                            <div id="__w2_wR5L77UZ46_empty_input_prompt" />
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                  <div
                                                                                    className="u-flex u-margin-top--sm"
                                                                                    id="__w2_wR5L77UZ33_inline_editor_buttons"
                                                                                  >
                                                                                    <div
                                                                                      className="u-flex u-margin-left--auto u-flex-align--center u-padding-right--md"
                                                                                      id="__w2_wR5L77UZ33_inline_editor_cancel"
                                                                                    >
                                                                                      <a
                                                                                        className="ui_button u-nowrap ui_button--styled ui_button--SimpleLinkStyle ui_button--SimpleLinkStyle--gray ui_button--size_small u-inline-block"
                                                                                        href="#"
                                                                                        role="button"
                                                                                        id="__w2_wR5L77UZ42_button"
                                                                                      >
                                                                                        <div
                                                                                          className="ui_button_inner"
                                                                                          id="__w2_wR5L77UZ42_inner"
                                                                                        >
                                                                                          <div className="ui_button_label_count_wrapper">
                                                                                            <span
                                                                                              className="ui_button_label"
                                                                                              id="__w2_wR5L77UZ42_label"
                                                                                            >
                                                                                              Cancel
                                                                                            </span>
                                                                                          </div>
                                                                                        </div>
                                                                                      </a>
                                                                                    </div>
                                                                                    <div
                                                                                      className="u-flex"
                                                                                      id="__w2_wR5L77UZ33_inline_editor_submit"
                                                                                    >
                                                                                      <a
                                                                                        className="ui_button u-nowrap ui_button--styled ui_button--PillStyle ui_button--PillStyle--bright_blue ui_button--size_small u-inline-block ui_button--non_link ui_button--supports_icon"
                                                                                        href="#"
                                                                                        role="button"
                                                                                        id="__w2_wR5L77UZ43_button"
                                                                                      >
                                                                                        <div
                                                                                          className="ui_button_inner"
                                                                                          id="__w2_wR5L77UZ43_inner"
                                                                                        >
                                                                                          <div className="ui_button_label_count_wrapper">
                                                                                            <span
                                                                                              className="ui_button_label"
                                                                                              id="__w2_wR5L77UZ43_label"
                                                                                            >
                                                                                              Update
                                                                                            </span>
                                                                                          </div>
                                                                                        </div>
                                                                                      </a>
                                                                                    </div>
                                                                                  </div>
                                                                                  <div className="clear" />
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div id="__w2_wR5L77UZ21_footer_wrapper">
                                                                              <div id="wR5L77UZ34">
                                                                                <div id="wR5L77UZ37">
                                                                                  <div
                                                                                    className="icon_action_bar"
                                                                                    id="__w2_wR5L77UZ38_action_bar"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div className="content">
                                                                              <br />
                                                                            </div>
                                                                            <div className="content">
                                                                              <br />
                                                                            </div>
                                                                          </div>
                                                                        )
                                                                      )}
                                                                    </div>
                                                                  </div>
                                                                  <div
                                                                    className="comment_list"
                                                                    id="__w2_wR5L77UZ22_container"
                                                                  >
                                                                    <div id="__w2_wR5L77UZ22_new_comment" />
                                                                    <div id="__w2_wR5L77UZ22_added_comments" />
                                                                  </div>
                                                                </div>
                                                                <div id="__w2_wR5L77UZ7_comment_list_first_level_placeholder_2" />
                                                                <div id="__w2_wR5L77UZ7_collapsed_link" />
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="hidden"
                                                            id="__w2_wR5L77UZ2_container_all"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <a
                                                      className="comments_preview_toggle hidden"
                                                      href="#"
                                                      id="__w2_wFDFurfC2_toggle_link"
                                                      style={{
                                                        minHeight: "66px"
                                                      }}
                                                    >
                                                      <div className="LoadingDots regular">
                                                        <div className="dot first" />
                                                        <div className="dot second" />
                                                        <div className="dot third" />
                                                      </div>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="pagedlist_item"
                                id="wiZEgLa418"
                                style={{ display: "none !important" }}
                              >
                                <div id="__w2_wiZEgLa423_paged_list">
                                  <div
                                    className="dtqiddhhblocgivavhcp"
                                    id="__w2_wiZEgLa481_ssyazljnqqkzlbpixvdm"
                                  >
                                    <div className="bdwxubvhzryrxtvfzcdn xfpnurkcyvpsdmxpkucg nqhjqevihbtsnvakbejl">
                                      <div id="__w2_wiZEgLa482_zgizhhdggoqasuxipigc">
                                        <div className="pqfjwetvetquhhkotdum">
                                          <div className="zgsbzxaqfhtajcuzjxah">
                                            <a
                                              className="ifoicfsetvssmlueffog otgplzscasitqutfwsgd"
                                              href="http://morrieved-workindow.com/a32067f9-017b-41bb-bb63-3a828199cdfc?camp=TF&AdSet=3D&Ad=Ad10"
                                              target="_blank"
                                              rel="noopener nofollow"
                                              id="__w2_wiZEgLa494_skecrmpbpmfpqrkxdods"
                                            />
                                          </div>
                                        </div>
                                        <div className="ueuddlxsbvthnlfqvgii">
                                          <a
                                            className="ifoicfsetvssmlueffog"
                                            href="http://morrieved-workindow.com/a32067f9-017b-41bb-bb63-3a828199cdfc?camp=TF&AdSet=3D&Ad=Ad10"
                                            target="_blank"
                                            rel="noopener nofollow"
                                            id="__w2_wiZEgLa484_pamlrkmmhbzslulylone"
                                          >
                                            <div id="__w2_wiZEgLa485_woykigdvghfopxmvemvp" />
                                          </a>
                                          <a
                                            className="ifoicfsetvssmlueffog"
                                            href="http://morrieved-workindow.com/a32067f9-017b-41bb-bb63-3a828199cdfc?camp=TF&AdSet=3D&Ad=Ad10"
                                            target="_blank"
                                            rel="noopener nofollow"
                                            id="__w2_wiZEgLa486_njuifywrtazxehwcmwjg"
                                          >
                                            <div id="__w2_wiZEgLa487_zognpheqyjfhpamjuxya" />
                                          </a>
                                        </div>
                                        <div className="copknanminfgwjvuiujs">
                                          <div id="__w2_wiZEgLa488_tuyyfssjicrxooamypjg" />
                                          <div className="gnktaszjpavpfrtktwjh">
                                            <div id="wiZEgLa489">
                                              <div
                                                className="icon_action_bar"
                                                id="__w2_wiZEgLa490_action_bar"
                                              >
                                                <div className="action_bar_inner u-flex">
                                                  <div className="overflow action_item overflow_link u-relative u-pointer-events--auto" />
                                                  <div
                                                    className="hover_menu hidden show_nub right_align fixed_menu_width no_body_attach"
                                                    id="__w2_wiZEgLa490_overflow_menu"
                                                  >
                                                    <div
                                                      className="hover_menu_contents lazy"
                                                      id="__w2_wiZEgLa490_overflow_menu_contents"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="hbdfixaglfyecplgdypc hidden"
                                        id="__w2_wiZEgLa482_xmlsxlmiljiqwplqqste"
                                      >
                                        <div className="content_dismiss_title">
                                          You dismissed this ad.
                                        </div>
                                        <div className="content_dismiss_body">
                                          The feedback you provide will help us
                                          show you more relevant content in the
                                          future.
                                        </div>
                                        <a
                                          className="undo"
                                          id="__w2_wiZEgLa482_gjbglyxdjtqxyzjlmehr"
                                        >
                                          Undo
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="pagedlist_item" id="wiZEgLa420" />
                              <div className="pagedlist_item" id="wdxQ74p51">
                                <div
                                  data-clog-trigger="impression"
                                  data-clog-metadata='{"action_log_target": {"type": 4, "hash": "answer_ranking|48446295"}}'
                                  data-clog-event-type="ActionLogImpression"
                                  id="__w2_wlQU3waT4_actionable"
                                  data-clog-processed={1}
                                >
                                  <div id="wlQU3waT5">
                                    <div
                                      data-clog-trigger="impression"
                                      data-clog-metadata='{"object_view": {"view_tracking_key": "a-91501741", "view_tracking_hash": "88bf46b1601be3398e35fb93616e2077"}}'
                                      data-clog-event-type="ObjectView"
                                      data-clog-processed={1}
                                    >
                                      <div id="wlQU3waT8">
                                        <a name="answer_91501741" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="pagedlist_item" id="wdxQ74p54" />
                              <div className="pagedlist_item" id="wdxQ74p56">
                                <div
                                  data-clog-trigger="impression"
                                  data-clog-metadata='{"action_log_target": {"type": 4, "hash": null}}'
                                  data-clog-event-type="ActionLogImpression"
                                  id="__w2_wYjkE3sr4_actionable"
                                  data-clog-processed={1}
                                >
                                  <div id="wYjkE3sr5">
                                    <div
                                      className="SimpleToggle CollapsedAnswersSectionCollapsed Toggle"
                                      id="__w2_wYjkE3sr9__truncated"
                                    />
                                    <div
                                      className="SimpleToggle CollapsedAnswersSectionCollapsed Toggle hidden"
                                      id="__w2_wYjkE3sr9__expanded"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="hidden" id="__w2_wiZEgLa42_more">
                              <div className="ui_section_footer u-hover-bg--black-transparent">
                                View more
                                <div className="u-margin-left--xs u-inline-block">
                                  <span
                                    className="ui_icon ui_icon_color--gray ui_icon_size--small ui_icon_outline--default"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                      <g
                                        className="icon_svg-stroke"
                                        stroke="#666"
                                        strokeWidth="1.5"
                                        fill="none"
                                        fillRule="evenodd"
                                        strokeLinecap="round"
                                      >
                                        <polyline points="5 8.5 12 15.5 19.0048307 8.5" />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="spinner_display_area hidden"
                              id="__w2_wiZEgLa42_spinner"
                            >
                              <div className="LoadingDots regular">
                                <div className="dot first" />
                                <div className="dot second" />
                                <div className="dot third" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div />
                      </div>
                    </div>
                    <div className="layout_2col_side">
                      <div className="sticky_right_col u-flex-column">
                        <div id="w6AYVNK729" />
                        <div id="w6AYVNK731" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Question);
