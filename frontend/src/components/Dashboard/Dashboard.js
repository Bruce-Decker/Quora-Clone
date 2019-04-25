import React, { Component } from "react";
import { connect } from "react-redux";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import default_image from './default.png'

// var dashboard_questions
var dashboard_questions
var response
class Dashboard extends Component {
  
    constructor() {
        super();
        this.state = {
            topics: [],
            questions: [],
            showQuestions: false
        }
        
         
    }

    onClick = () => {
       alert("tsefsdfsdf")
    }

   async componentDidMount() {
        
        // var response = await axios.get('/topic/getUserTopic/' +  this.props.auth.user.email)
         dashboard_questions = await axios.get('/question/dashboard/?email=' + this.props.auth.user.email)
         response = await axios.get('/topic/getUserTopic/' +  this.props.auth.user.email)
        
         if (response.data.topics) {
            this.setState({
               topics: response.data.topics,
               showQuestions: true
            })
        } 
        console.log("w34fsdf")
        if (dashboard_questions.docs) {
         this.setState({
            //questions: dashboard_questions.data.docs,
            //showQuestions: true
         })
         console.log("w34fsdf")
         console.log(dashboard_questions.data.docs[0].question)
     } 
   }

     
     



  render() {
    return (
      <div>
        <Navbar
          Home={"nav_item_link selected"}
          Answer={"nav_item_link"}
          Spaces={"nav_item_link"}
          Notifications={"nav_item_link"}
        />

        <div id="__w2_w2OzgLAU3_body_blur" />
        <div id="__w2_w2OzgLAU3_full_body_blur" />
        <div className="desktop_site_header_offset">
          <div id="w2OzgLAU20" />
        </div>

        <div className="ContentWrapper">
          <div id="__w2_w2OzgLAU18_content">
            <div className="HomeMain FeedMain">
              <div className="grid_page">
                <div className="layout_3col_left" id="__w2_w2OzgLAU2_left_col">
                  <div
                    className="fixable_clone"
                    style={{ height: "488px", width: "142px", margin: "0px" }}
                  >
                    <div
                      id="__w2_w2OzgLAU2_left_col_inner"
                      className="fixable_fixed"
                      style={{ top: "83px", position: "fixed", width: "142px" }}
                    >
                      <div className="row section">
                        <div id="w2OzgLAU31">
                          <div id="w2OzgLAU33">
                            <div className="mweb_switcher" id="mweb_sub_header">
                              <ul className="switcher">
                                <li className="switcher_item switcher_item_with_image is_active">
                                  <Link className="link" to="/dashboard">
                                    <div className="switcher_item_image u-flex-none u-relative is_active">
                                      <div
                                        className="u-bg--square u-bg--center switcher_item_icon u-border-radius--2"
                                        style={{
                                          backgroundImage:
                                            "url(https://qsf2.c7.quoracdn.net/-3-images.icons.mobile_feed_switcher.feed_3x.png-26-94e21de5c18cba55.png)"
                                        }}
                                      />
                                    </div>
                                    <div className="label">Feed</div>
                                  </Link>
                                </li>

                                {this.state.topics.map(topic => (
                                  <li className="switcher_item switcher_item_with_image">
                                    <a
                                      className="link"
                                      href="/topic/Science and Technology.jpeg"
                                    >
                                      <div className="switcher_item_image u-flex-none u-relative">
                                        <div
                                          className="u-bg--square u-bg--center u-bg--cover u-border-radius--2"
                                          style={{
                                            backgroundImage:
                                              "url(./topic/Science and Technology.jpeg)"
                                          }}
                                        />
                                        <div className="u-absolute unread_dot u-border-radius--ellipse" />
                                      </div>
                                      <div className="label">{topic}</div>
                                    </a>
                                  </li>
                                ))}
                                {/* <li className="switcher_item switcher_item_with_image">
                <a className="link" href="/topic/Technological-Innovation">
                    <div className="switcher_item_image u-flex-none u-relative">
                    <div className="u-bg--square u-bg--center u-bg--cover u-border-radius--2" style={{backgroundImage: 'url(https://qph2.c7.quoracdn.net/main-thumb-t-226820-100-dxnaqebsiamigebllcqellmfhuvqtjzs.jpeg)'}} />
                    <div className="u-absolute unread_dot u-border-radius--ellipse" /></div>
                    <div className="label">Technological Innovation</div>
                </a>
            </li>
            <li className="switcher_item switcher_item_with_image">
                <a className="link" href="/topic/Tech-News-and-Journalism">
                    <div className="switcher_item_image u-flex-none u-relative">
                    <div className="u-bg--square u-bg--center u-bg--cover u-border-radius--2" style={{backgroundImage: 'url(https://qph2.c7.quoracdn.net/main-thumb-t-19293-100-dwvOEDzBr8zVXCxi30VD03rrlXAY0Aqq.jpeg)'}} />
                    <div className="u-absolute unread_dot u-border-radius--ellipse" /></div>
                    <div className="label">Tech News and Journalism</div>
                </a>
            </li>
            <li className="switcher_item switcher_item_with_image">
                <a className="link" href="/topic/Latest-Technology-1">
                    <div className="switcher_item_image u-flex-none u-relative">
                        <div className="u-bg--square u-bg--center u-bg--cover u-border-radius--2" style={{backgroundImage: 'url(https://qph2.c7.quoracdn.net/main-thumb-t-375821-100-QJDgmnrkAqU6tNC39GOzLqN7N7MbPPAd.jpeg)'}} />
                        <div className="u-absolute unread_dot u-border-radius--ellipse" /></div>
                        <div className="label">Latest Technology</div>
                </a>
            </li> */}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="layout_3col_center">
                  <div id="w2OzgLAU29" />
                  <div id="__w2_w2OzgLAU2_feed_main">
                    <div id="w2OzgLAU35" />
                    <div
                      className="PagedListFoo HomeMultifeed Multifeed unified"
                      data-clog-metadata='{"feed_page_type": 1, "feed_page_data": 0}'
                      id="__w2_w2OzgLAU9_paged_list"
                    >
                      <div
                        className="paged_list_wrapper"
                        id="__w2_w2OzgLAU9_paged_list_wrapper"
                      >
                        <div id="wnuFD7sM4">
                          <div
                            className="AnswerStoryBundle Bundle"
                            data-clog-metadata='{"feed_bundle_hash": "7193063593613012604"}'
                          >
                            <div className="main_feed singleton_bundle">
                              <div className="multifeed_bundle_story">
                                <div id="wOqAWcfd6">
                                  <div
                                    className="u-inherit"
                                    data-clog-metadata='{"feed_story_hash": "6665419943812055345"}'
                                  >
                                    <div
                                      className="feedback_wrapper hidden"
                                      id="__w2_wOqAWcfd8_question_feedback"
                                    />
                                    <div
                                      className="feedback_wrapper hidden"
                                      id="__w2_wOqAWcfd8_answer_feedback"
                                    />
                                    <div
                                      className="feedback_wrapper hidden"
                                      id="__w2_wOqAWcfd8_quora_share_feedback"
                                    />
                                    <div
                                      className="feedback_wrapper hidden negative_action"
                                      id="__w2_wOqAWcfd8_negative_feedback_options"
                                    />
                                    <div
                                      className="feedback_wrapper hidden negative_action"
                                      id="__w2_wOqAWcfd8_negative_feedback_message"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="wnuFD7sM10">
                          <div
                            className="ClickthroughBundle Bundle QuestionStoryBundle"
                            data-clog-metadata='{"feed_bundle_hash": "7017303820097396363"}'
                          >
                            <div className="main_feed full_bundle">
                              <div
                                className="sticky_bundle_wrapper"
                                id="wZZq9P0w9"
                              >
                                <div
                                  className="section_header"
                                  data-clog-metadata='{"feed_bundle_hash": "7017303820097396363"}'
                                >
                                  <div className="icon_frame">
                                    <div className="ui_icon_badge u-relative u-flex-none u-flex u-flex-align--center u-flex-justify--center ui_icon_badge_size--tiny u-border-radius--3 ui_icon_badge_color--red">
                                      <span
                                        className="ui_icon ui_icon_color--white ui_icon_outline--filled ui_icon_type--shape u-flex-align-self--center"
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
                                            strokeLinejoin="round"
                                          >
                                            <path d="M15.0037473,18.5 C15.0037473,16.7206263 15.0037473,15.8306263 15.0037473,15.83 C17.3666743,14.7057707 19,12.2909208 19,9.5 C19,5.63400675 15.8659932,2.5 12,2.5 C8.13400675,2.5 5,5.63400675 5,9.5 C5,12.2916985 6.63423594,14.7017006 8.99822794,15.8255267 C8.99822794,15.8255267 8.99822794,16.7170178 8.99822794,18.5 L15.0037473,18.5 Z M12,8 L10,11 L14,11 L12,14 M9.76460414,20.5003969 C10.3139024,21.1136855 11.1118833,21.4996031 12,21.4996031 C12.886481,21.4996031 13.6831579,21.1151057 14.2323583,20.5037832" />
                                          </g>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="header_text">
                                    <span className="header_text_main">
                                      Questions for You
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="multifeed_bundle_story">
                                <div id="wZZq9P0w11">
                                  <div
                                    className="u-inherit"
                                    data-clog-metadata='{"feed_story_hash": "9032887837270712613"}'
                                  >
                                    <div
                                      className="feedback_wrapper hidden"
                                      id="__w2_whIqsbBW17_question_feedback"
                                    />
                                    <div
                                      className="feedback_wrapper hidden negative_action"
                                      id="__w2_whIqsbBW17_negative_feedback_options"
                                    />
                                    <div
                                      className="feedback_wrapper hidden negative_action"
                                      id="__w2_whIqsbBW17_negative_feedback_message"
                                    />
                                    <div id="__w2_whIqsbBW17_item">



                   {this.state.showQuestions ? 
                   <div>
                                 {dashboard_questions.data.docs.map(question => 
                                      <div className="ui_story_card u-flex u-flex-column ui_story_card--bundled">
                                        <div className="ui_story_card_header">
                                          <div className="EventHeader many_faces pass_color_to_child_links FeedReason TopicQuestionAskedReason">
                                            <div className="reason_main">
                                              <div className="reason_text_and_icon">
                                                Question added
                                                <span className="topic">
                                                  <span className="bullet">
                                                    {" "}
                                                    {" "}
                                                  </span>
                                                </span>
                                                <div
                                                  className="TopicListItem"
                                                  id="__w2_whIqsbBW25_topic_list_item"
                                                >
                                                  <div className="u-inline-block u-white-space--nowrap">
                                                    <div id="whIqsbBW46">
                                                      <div
                                                        className="hover_menu hidden white_bg show_nub"
                                                        id="__w2_whIqsbBW47_menu"
                                                      >
                                                        <div
                                                          className="hover_menu_contents"
                                                          id="__w2_whIqsbBW47_menu_contents"
                                                        >
                                                          {" "}
                                                        </div>
                                                      </div>
                                                      <a
                                                        className="TopicNameLink HoverMenu topic_name"
                                                        href="/topic/Mathematics"
                                                        action_mousedown="TopicLinkClickthrough"
                                                        id="__w2_whIqsbBW47_link"
                                                      >
                                                        <span className="name_text">
                                                          <span id="whIqsbBW51">
                                                            <span
                                                              className="TopicNameSpan TopicName"
                                                              id="__w2_whIqsbBW52_card"
                                                            >
                                                            
                                                              {question.topics.map(topic => {
                                                                 return (
                                                                   <span>
                                                                · {topic}    {"  "}
                                                            
                                                                 </span>
                                                                 )
                                                              })}
                                                                
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="reason_overflow">
                                              <div
                                                className="u-absolute u-absolute--center u-zindex--2"
                                                id="__w2_whIqsbBW26_close"
                                              >
                                                <a
                                                  className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                  href="#"
                                                  role="button"
                                                  aria-label="Hide"
                                                  id="__w2_whIqsbBW49_button"
                                                >
                                                  <div
                                                    className="ui_button_inner"
                                                    id="__w2_whIqsbBW49_inner"
                                                    key = {question}
                                                  >
                                                    <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                      <div id="__w2_whIqsbBW49_icon">
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
                                                              id="small_close"
                                                              className="icon_svg-stroke"
                                                              fill="none"
                                                              fillRule="evenodd"
                                                              strokeLinecap="round"
                                                              stroke="#666666"
                                                              strokeWidth="1.5"
                                                            >
                                                              <path
                                                                d="M12,6 L12,18"
                                                                transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                                                              />
                                                              <path
                                                                d="M18,12 L6,12"
                                                                transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
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
                                        </div>
                                        <div className="ui_story_card_body">
                                          <div id="whIqsbBW19">
                                            <span id="__w2_whIqsbBW20_question_story">
                                              <div className="QuestionStory">
                                                <div id="whIqsbBW28">
                                                  <div className="story_title_container">
                                                    <div className="pass_color_to_child_links">
                                                      <div id="whIqsbBW40">
                                                        <a
                                                          className="question_link"
                                                          href="/What-is-the-square-root-of-40-41"
                                                          target="_top"
                                                          action_mousedown="QuestionLinkClickthrough"
                                                          id="__w2_whIqsbBW41_link"
                                                        >
                                                          <span className="ui_content_title ui_content_title--default ui_content_title--medium">
                                                            <span className="ui_qtext_rendered_qtext">
                                                             {question.question}
                                                            </span>
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div id="whIqsbBW38" />
                                                </div>
                                                <div className="CantAnswerActionBar show_on_pass">
                                                  <div className="MarkedAsCantAnswerMessage show_on_pass">
                                                    <div className="title_text">
                                                      You passed on this
                                                      question
                                                    </div>
                                                    <div className="detail_text">
                                                      Passing on questions helps
                                                      us determine which
                                                      questions are relevant to
                                                      you.
                                                    </div>
                                                  </div>
                                                  <span className="cant_answer_actions">
                                                    <a
                                                      className="undo_cant_answer"
                                                      href="#"
                                                      id="__w2_whIqsbBW43_undo_cant_answer"
                                                    >
                                                      Undo
                                                    </a>
                                                    <span className="bullet">
                                                      {" "}
                                                      ·{" "}
                                                    </span>
                                                  </span>
                                                  <span className="cant_answer_actions">
                                                    <span id="whIqsbBW44">
                                                      <a
                                                        className="Downvote Button Question TwoStateButton secondary_action"
                                                        href="#"
                                                        role="button"
                                                        action_click="QuestionDownvote"
                                                        action_target='{"qid": 46052564, "type": "question"}'
                                                        id="__w2_whIqsbBW45_button"
                                                      >
                                                        <span
                                                          className="button_text"
                                                          id="__w2_whIqsbBW45_text"
                                                        >
                                                          Downvote
                                                        </span>
                                                      </a>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div id="whIqsbBW31">
                                                  <div
                                                    className="ContentFooter QuestionFooter"
                                                    id="__w2_whIqsbBW32_content_footer"
                                                  >
                                                    <a
                                                      className="answer_count_prominent"
                                                      href="/What-is-the-square-root-of-40-41"
                                                    >
                                                    {question.answers.length} Answers
                                                    </a>
                                                    <span className="bullet">
                                                      {" "}
                                                      ·{" "}
                                                    </span>
                                                    <span className="question_timestamp">
                                                      Last followed 6h ago
                                                    </span>
                                                  </div>
                                                </div>
                                                <div id="whIqsbBW33" />
                                                <div id="whIqsbBW35" />
                                              </div>
                                            </span>
                                            <span
                                              className="hidden"
                                              id="__w2_whIqsbBW20_question_story_editable"
                                            />
                                          </div>
                                        </div>
                                        <div className="ui_story_card_footer">
                                          <div className="hide_on_cant_answer">
                                            <div id="whIqsbBW21">
                                              <div
                                                className="icon_action_bar"
                                                id="__w2_whIqsbBW22_action_bar"
                                              >
                                              
                                                <div className="action_bar_inner u-flex">
                                                  <div className="ItemComponent WriteAnswerPrimaryActionItem primary_item u-relative">
                                                    <span id="wLjahHEI11">
                                                      <a
                                                        className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--blue ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon"
                                                        href="#"
                                                        role="button"
                                                        action_target='{"qid": 46052564, "type": "question"}'
                                                        id="__w2_wLjahHEI28_button"
                                                      >
                                                        <div
                                                          className="ui_button_inner"
                                                          id="__w2_wLjahHEI28_inner"
                                                          key = {question._id}
                                                          onClick = {this.onClick}
                                                        >
                                                          <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                            <div id="__w2_wLjahHEI28_icon">
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
                                                              id="__w2_wLjahHEI28_label"
                                                            >
                                                              Answer
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </a>
                                                    </span>
                                                  </div>
                                                  
                                                  <div className="ItemComponent CantAnswerActionItem primary_item u-relative">
                                                    <a
                                                      className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon"
                                                      href="#"
                                                      role="button"
                                                      action_click="PassWritePage"
                                                      id="__w2_wLjahHEI14_button"
                                                    >
                                                      <div
                                                        className="ui_button_inner"
                                                        id="__w2_wLjahHEI14_inner"
                                                      >
                                                        <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                          <div id="__w2_wLjahHEI14_icon">
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
                                                                  id="cant_answer"
                                                                  stroke="none"
                                                                  fill="none"
                                                                  fillRule="evenodd"
                                                                >
                                                                  <g
                                                                    id="pen"
                                                                    transform="translate(11.485281, 12.485281) rotate(-315.000000) translate(-11.485281, -12.485281) translate(9.485281, 2.485281)"
                                                                  >
                                                                    <path
                                                                      d="M0,7.51471863 L2.22044605e-16,1.99994543 C8.67738547e-17,0.895375929 0.8954305,-5.45711382e-05 2,-5.45711382e-05 C3.1045695,-5.45711382e-05 4,0.895375929 4,1.99994543 L4,7.51471863 M4,12.5147186 L4,16 L2.00256278,20 L0,16 L0,12.5147186"
                                                                      id="Rectangle-5"
                                                                      className="icon_svg-stroke"
                                                                      stroke="#666"
                                                                      strokeWidth="1.5"
                                                                      strokeLinecap="square"
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
                                                                    d="M4.63603897,5.63603897 L18.5,19.5"
                                                                    id="Line"
                                                                    className="icon_svg-stroke"
                                                                    stroke="#666"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                  />
                                                                </g>
                                                              </svg>
                                                            </span>
                                                          </div>
                                                        </div>
                                                        <div className="ui_button_label_count_wrapper">
                                                          <span
                                                            className="ui_button_label"
                                                            id="__w2_wLjahHEI14_label"
                                                          >
                                                            Pass
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>
                                                  <div className="ItemComponent FollowActionItem primary_item u-relative">
                                                    <span id="wLjahHEI15">
                                                      <a
                                                        className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon"
                                                        href="#"
                                                        role="button"
                                                        action_click="QuestionFollow"
                                                        action_target='{"qid": 46052564, "type": "question"}'
                                                        id="__w2_wLjahHEI27_button"
                                                      >
                                                        <div
                                                          className="ui_button_inner"
                                                          id="__w2_wLjahHEI27_inner"
                                                        >
                                                          <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                            <div id="__w2_wLjahHEI27_icon">
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
                                                              id="__w2_wLjahHEI27_label"
                                                            >
                                                              Follow
                                                            </span>
                                                            <span
                                                              className="ui_button_count"
                                                              aria-hidden="true"
                                                              id="__w2_wLjahHEI27_count_wrapper"
                                                            >
                                                              <span className="bullet">
                                                                {" "}
                                                                ·{" "}
                                                              </span>
                                                              <span
                                                                className="ui_button_count_inner"
                                                                id="__w2_wLjahHEI27_count"
                                                              >
                                                                {question.followers.length}
                                                              </span>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </a>
                                                    </span>
                                                  </div>
                                                  <div className="ActionItemComponent ItemComponent FacebookShareActionItem action_item secondary_item u-relative">
                                                    <a
                                                      className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                      href="#"
                                                      role="button"
                                                      aria-label="Share on Facebook"
                                                      id="__w2_wLjahHEI19_button"
                                                    >
                                                      <div
                                                        className="ui_button_inner"
                                                        id="__w2_wLjahHEI19_inner"
                                                      >
                                                        <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                          <div id="__w2_wLjahHEI19_icon">
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
                                                  <div className="ActionItemComponent ItemComponent TwitterShareActionItem action_item secondary_item u-relative">
                                                    <a
                                                      className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                      href="#"
                                                      role="button"
                                                      aria-label="Share on Twitter"
                                                      id="__w2_wLjahHEI22_button"
                                                    >
                                                      <div
                                                        className="ui_button_inner"
                                                        id="__w2_wLjahHEI22_inner"
                                                      >
                                                        <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                          <div id="__w2_wLjahHEI22_icon">
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
                                                      id="__w2_wLjahHEI23_menu"
                                                    >
                                                      <div
                                                        className="hover_menu_contents"
                                                        id="__w2_wLjahHEI23_menu_contents"
                                                      >
                                                        {" "}
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="HoverMenu QuestionQuickShare _QuickShare"
                                                      role="button"
                                                      id="__w2_wLjahHEI23_link"
                                                    >
                                                      <a
                                                        className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                        href="#"
                                                        role="button"
                                                        aria-label="More sharing options"
                                                        id="__w2_wLjahHEI26_button"
                                                      >
                                                        <div
                                                          className="ui_button_inner"
                                                          id="__w2_wLjahHEI26_inner"
                                                        >
                                                          <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                            <div id="__w2_wLjahHEI26_icon">
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
                                                      id="__w2_whIqsbBW22_overflow_link"
                                                    >
                                                      <a
                                                        className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                        href="#"
                                                        role="button"
                                                        aria-label="More options"
                                                        id="__w2_wLjahHEI8_button"
                                                      >
                                                        <div
                                                          className="ui_button_inner"
                                                          id="__w2_wLjahHEI8_inner"
                                                        >
                                                          <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                            <div id="__w2_wLjahHEI8_icon">
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
                                                                    <path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z" />
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
                                                    id="__w2_whIqsbBW22_overflow_menu"
                                                  >
                                                    <div
                                                      className="hover_menu_contents lazy"
                                                      id="__w2_whIqsbBW22_overflow_menu_contents"
                                                    />
                                                  </div>
                                                </div>
                                                <div id="wLjahHEI9">
                                                  <div
                                                    className="hidden answer_editor_wrapper"
                                                    id="__w2_wLjahHEI10_add_answer_editor_wrapper"
                                                  />











<div className="AnswerEditorHeader">
   <div className="ui_layout_photo_text u-flex ui_layout_size--small">
      <div className="ui_layout_photo_wrapper u-flex-none">
         <div className="ui_layout_photo u-relative">
            <div className="u-flex-inline" id="w1SM6R3W21"><a className="u-flex-inline" href="/profile/Bruce-Decker-12"><span className="ui_avatar u-flex-inline ui_avatar--large u-flex-none"><img className="ui_avatar_photo ui_avatar--border-circular" src={default_image} alt="Bruce Decker" /></span></a></div>
         </div>
      </div>
      <div className="ui_layout_text u-flex-auto u-width--100 u-flex-align-self--center">
         <div className="answer_editor_header_inner">
            <span id="w1SM6R3W17"><span id="w1SM6R3W23"><span id="__w2_w1SM6R3W24_link"><a className="user" href="/profile/Bruce-Decker-12" action_mousedown="UserLinkClickthrough" id="__w2_w1SM6R3W24_name_link">{response.data.first_name} { } {response.data.last_name}</a></span></span></span>
            <div className="signature"><span className="sig_actions" id="__w2_w1SM6R3W9_sig_actions"><span className="sig_edit"><span id="w1SM6R3W19"><a className="CredentialModalLink ChooseCredentialModalLink" href="#" id="__w2_w1SM6R3W20_modal_link">Edit Credential</a></span></span></span></div>
         </div>
      </div>
   </div>
</div>
                                                  
                   








<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="bold" stroke="none" fill="none" fillRule="evenodd">
          <path d="M12.7794246,20 L6,20 L6,4 L12.6015693,4 C15.5309503,4 17.2781168,5.51905752 17.2781168,7.99168399 C17.2781168,9.68814969 16.0959024,11.1628552 14.5475153,11.4067914 L14.5475153,11.6063756 C16.5457716,11.7616078 18,13.3582814 18,15.4206514 C18,18.2259182 16.0017437,20 12.7794246,20 Z M9.15954664,6.56133056 L9.15954664,10.6306306 L11.5344377,10.6306306 C13.2397559,10.6306306 14.1708806,9.88773389 14.1708806,8.6015246 C14.1708806,7.32640333 13.3025283,6.56133056 11.7959895,6.56133056 L9.15954664,6.56133056 Z M9.15954664,17.4386694 L11.9738448,17.4386694 C13.7942459,17.4386694 14.7776809,16.6292446 14.7776809,15.1323631 C14.7776809,13.6687457 13.7628596,12.8925849 11.9006103,12.8925849 L9.15954664,12.8925849 L9.15954664,17.4386694 Z" id="B" className="icon_svg-fill_as_stroke" fill="#666666" />
        </g>
      </svg>

<span> { "   "  } </span>
<span> { "   "  } </span>

<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="italicize" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <path d="M13.9034335,6.71225071 L11.8218884,17.037037 C11.7646635,17.4321007 11.7360515,17.698005 11.7360515,17.8347578 C11.7360515,18.2450163 11.8648056,18.5223165 12.1223176,18.6666667 C12.3798296,18.8110169 12.8447749,18.8983854 13.5171674,18.9287749 L13.3240343,20 L6.5,20 L6.7360515,18.9287749 C7.50858755,18.8983854 8.06294539,18.7768292 8.39914163,18.5641026 C8.73533788,18.351376 8.96781052,17.9259291 9.09656652,17.2877493 L11.1781116,6.96296296 C11.2353365,6.56789926 11.2639485,6.30199499 11.2639485,6.16524217 C11.2639485,5.7549837 11.1351944,5.47768353 10.8776824,5.33333333 C10.6201704,5.18898313 10.1552251,5.10161459 9.48283262,5.07122507 L9.67596567,4 L16.5,4 L16.2639485,5.07122507 C15.4914124,5.10161459 14.9370546,5.22317083 14.6008584,5.43589744 C14.2646621,5.64862405 14.0321895,6.07407088 13.9034335,6.71225071 Z" className="icon_svg-fill_as_stroke" fill="#666666" />
        </g>
      </svg>

      <path d="M4.5,3.5 C4.22385763,3.5 4,3.72385763 4,4 L4,16 C4,16.2761424 4.22385763,16.5 4.5,16.5 L16.5,16.5 C16.7761424,16.5 17,16.2761424 17,16 L17,4 C17,3.72385763 16.7761424,3.5 16.5,3.5 L4.5,3.5 Z M4.5,2.25 L16.5,2.25 C17.4664983,2.25 18.25,3.03350169 18.25,4 L18.25,16 C18.25,16.9664983 17.4664983,17.75 16.5,17.75 L4.5,17.75 C3.53350169,17.75 2.75,16.9664983 2.75,16 L2.75,4 C2.75,3.03350169 3.53350169,2.25 4.5,2.25 Z" id="back" fillRule="nonzero" mask="url(#mask-2)" />

      <span> { "   "  } </span>
     <span> { "   "  } </span>
    

      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <path d="M5,4.5 L5,18.5 L2,18.5 L2,4.5 L2,0.5 L18.5,0.5 L18.5,4.5 L5,4.5 Z" id="path-1" />
        </defs>
        <g id="photos" stroke="none" className="icon_svg-fill_as_stroke" fill="#666666" fillRule="evenodd">
          <path d="M8,7 C7.72385763,7 7.5,7.22385763 7.5,7.5 L7.5,19.5 C7.5,19.7761424 7.72385763,20 8,20 L20,20 C20.2761424,20 20.5,19.7761424 20.5,19.5 L20.5,7.5 C20.5,7.22385763 20.2761424,7 20,7 L8,7 Z M8,5.75 L20,5.75 C20.9664983,5.75 21.75,6.53350169 21.75,7.5 L21.75,19.5 C21.75,20.4664983 20.9664983,21.25 20,21.25 L8,21.25 C7.03350169,21.25 6.25,20.4664983 6.25,19.5 L6.25,7.5 C6.25,6.53350169 7.03350169,5.75 8,5.75 Z" id="front" fillRule="nonzero" />
          <path d="M17.5,9 C16.9477153,9 16.5,9.44771525 16.5,10 C16.5,10.5522847 16.9477153,11 17.5,11 C18.0522847,11 18.5,10.5522847 18.5,10 C18.5,9.44771525 18.0522847,9 17.5,9 Z M17.5,7.75 C18.7426407,7.75 19.75,8.75735931 19.75,10 C19.75,11.2426407 18.7426407,12.25 17.5,12.25 C16.2573593,12.25 15.25,11.2426407 15.25,10 C15.25,8.75735931 16.2573593,7.75 17.5,7.75 Z" id="circle" fillRule="nonzero" />
          <path d="M7.51086426,16.3161398 L7.51086426,20 L20.5108643,20 L20.5108643,16.3176136 C18.7812561,15.3914799 17.7009263,14.9284131 17.2698749,14.9284131 C16.6232978,14.9284131 14.6635332,16.3168432 14.0133169,16.3176136 C13.3631007,16.318384 11.4041401,14.0184785 10.7610483,14.0183328 C10.3323204,14.0182356 9.24892571,14.7841713 7.51086426,16.3161398 Z M14.1853213,14.9636194 C14.3909978,14.869742 14.5911778,14.7666161 15.0527381,14.5208411 C16.3483964,13.8309185 16.6820249,13.6784131 17.2698749,13.6784131 C18.0022858,13.6784131 19.1439621,14.1677752 21.1009221,15.2156464 C21.507238,15.4332118 21.7608643,15.8567153 21.7608643,16.3176136 L21.7608643,20 C21.7608643,20.6903559 21.2012202,21.25 20.5108643,21.25 L7.51086426,21.25 C6.82050832,21.25 6.26086426,20.6903559 6.26086426,20 L6.26086426,16.3161398 C6.26086426,15.9572681 6.41510756,15.6157069 6.68432727,15.3784103 C8.74951432,13.5581055 9.86691258,12.7681301 10.7613316,12.7683328 C11.2843915,12.7684514 11.6719119,12.9778697 12.2043358,13.3817264 C12.4750916,13.5871015 12.693573,13.7738875 13.2112546,14.2307693 C13.6714166,14.6368818 13.8743813,14.8100294 14.0768016,14.9628622 C14.0910184,14.9735963 14.1047799,14.9838532 14.1180624,14.9936249 C14.1388732,14.9845124 14.1614435,14.9745179 14.1853213,14.9636194 Z" id="land" fillRule="nonzero" />
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <g id="mask" />
          <path d="M4.5,3.5 C4.22385763,3.5 4,3.72385763 4,4 L4,16 C4,16.2761424 4.22385763,16.5 4.5,16.5 L16.5,16.5 C16.7761424,16.5 17,16.2761424 17,16 L17,4 C17,3.72385763 16.7761424,3.5 16.5,3.5 L4.5,3.5 Z M4.5,2.25 L16.5,2.25 C17.4664983,2.25 18.25,3.03350169 18.25,4 L18.25,16 C18.25,16.9664983 17.4664983,17.75 16.5,17.75 L4.5,17.75 C3.53350169,17.75 2.75,16.9664983 2.75,16 L2.75,4 C2.75,3.03350169 3.53350169,2.25 4.5,2.25 Z" id="back" fillRule="nonzero" mask="url(#mask-2)" />
        </g>
      </svg>



      <span> { "   "  } </span>
      <span> { "   "  } </span>



<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="link" stroke="none" fill="none" fillRule="evenodd"><path d="M16.3159981,10.2408946 C16.3101813,10.2245297 16.3329471,10.1991842 16.3570167,10.1752357 C16.7245798,9.80922201 17.0946501,9.44560322 17.4596056,9.07699515 C18.8102118,7.71362426 18.3893947,5.42504114 16.6440469,4.63404055 C15.5918036,4.15716509 14.3652562,4.36861081 13.5456859,5.17916938 C12.4436988,6.2689281 11.3373992,7.3546954 10.252361,8.46091875 C9.48333689,9.24493434 9.25266976,10.1943945 9.58994522,11.2357572 C9.92712039,12.2770201 10.6769891,12.8939946 11.7548064,13.1095315 C11.9044391,13.1394672 12.0590864,13.1438578 12.2157395,13.160522 L12.2157395,14.5384615 C12.0549745,14.5280838 11.8955133,14.5257888 11.7382585,14.5063306 C10.6712726,14.3741146 9.7746795,13.9103111 9.07345143,13.0999521 C8.30272236,12.2092657 7.97006024,11.1681025 8.0793764,9.99651961 C8.17284673,8.99497137 8.59256062,8.1435007 9.30823045,7.43342625 C10.3924662,6.35753773 11.4703838,5.27556228 12.5579291,4.20306647 C13.4173146,3.35568701 14.4638413,2.95714326 15.6682246,3.00364336 C16.6975015,3.04345782 17.5992094,3.42244359 18.3464706,4.13171976 C19.2364445,4.97650479 19.675715,6.02205849 19.6488372,7.24333465 C19.6253693,8.31054183 19.2342381,9.24194077 18.4874784,10.0132836 C18.0222328,10.4940507 17.5407403,10.9592512 17.066268,11.4312372 C17.0509236,11.4464046 17.0333729,11.4594765 17.0346766,11.4583789 C16.7946825,11.0518523 16.5553905,10.6463235 16.3159981,10.2408946 Z M7.53165045,13.9379083 C7.2065543,14.2599938 6.88215943,14.5825781 6.5587664,14.9064597 C5.4790865,15.9878607 5.46716464,17.6933773 6.53111569,18.7877496 C7.58625058,19.8732415 9.35118708,19.8998824 10.4397833,18.8312531 C11.5520229,17.7395748 12.6614574,16.6447036 13.7501538,15.5299765 C14.5141548,14.7477118 14.737264,13.7975197 14.4015483,12.7614181 C14.0655321,11.7243188 13.318362,11.1101812 12.2463963,10.8905684 C12.202616,10.8815883 12.1581344,10.8767989 12.1094451,10.8692157 C12.1094451,10.0312049 12.1094451,9.57736389 12.1094451,9.5076927 C12.4927692,9.53851604 12.6201984,9.53827155 12.8832641,9.61878962 C14.522098,10.1203971 15.5310195,11.1966893 15.8566166,12.8558087 C16.1303185,14.2510137 15.7326893,15.4929586 14.7335572,16.5133949 C13.6432578,17.6266254 12.5327213,18.7202992 11.4224854,19.813973 C10.6971553,20.5285878 9.81543841,20.9146314 8.79747169,20.9889665 C6.71525336,21.1410291 4.81526921,19.7054139 4.4326676,17.665539 C4.16838296,16.2560657 4.53866197,15.0140211 5.5307813,13.9708352 C5.98932216,13.4887048 6.4720073,13.0296232 6.9438726,12.5601646 C6.95489281,12.5490892 7.41804212,13.3730613 7.72410337,13.7641936 C7.6592845,13.8224644 7.59266233,13.8774424 7.53165045,13.9379083 Z" className="icon_svg-fill_as_stroke" fill="#666666" /></g></svg>



<div>
<div data-group="js-editable" w2cid="w1SM6R3W27" id="__w2_w1SM6R3W27_doc">
<div className="doc empty" contentEditable="true" data-kind="doc" placeholder="Write your answer">
<div className="section" data-type="plain" data-indent={0} data-kind="section" data-dir="LTR">
<div className="content"><br /></div>
<div className="content"><br /></div>
<div className="content"><br /></div>
<div className="span active" data-kind="span"><div className="content"><br /></div></div></div></div></div>
</div>

<hr></hr>

<a className="submit_button" href="#" action_mousedown="InlineEditorAnswerAdd" id="__w2_w1SM6R3W26_inline_editor_submit">Submit</a>







                                                  
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                 )}
                                 </div>
                                 : null}







                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="multifeed_bundle_story">
                                <div id="wZZq9P0w14">
                                  <div
                                    className="u-inherit"
                                    data-clog-metadata='{"feed_story_hash": "6301928687870933827"}'
                                  >
                                    <div
                                      className="feedback_wrapper hidden"
                                      id="__w2_wMBpsM622_question_feedback"
                                    />
                                    <div
                                      className="feedback_wrapper hidden negative_action"
                                      id="__w2_wMBpsM622_negative_feedback_options"
                                    />
                                    <div
                                      className="feedback_wrapper hidden negative_action"
                                      id="__w2_wMBpsM622_negative_feedback_message"
                                    />
                                    <div id="__w2_wMBpsM622_item">






                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>











                        <div id="wnuFD7sM13">
                          <div
                            className="AnswerStoryBundle Bundle"
                            data-clog-metadata='{"feed_bundle_hash": "5604222101795743386"}'
                          >
                            <div className="main_feed singleton_bundle">
                              <div className="multifeed_bundle_story">
                                <div id="wIrMUyjy6">
                                  <div
                                    className="u-inherit"
                                    data-clog-metadata='{"feed_story_hash": "8794457905264421782"}'
                                  >
                                    <div
                                      className="feedback_wrapper hidden"
                                      id="__w2_wIrMUyjy8_question_feedback"
                                    />
                                    <div
                                      className="feedback_wrapper hidden"
                                      id="__w2_wIrMUyjy8_answer_feedback"
                                    />
                                    <div
                                      className="feedback_wrapper hidden"
                                      id="__w2_wIrMUyjy8_quora_share_feedback"
                                    />
                                    <div
                                      className="feedback_wrapper hidden negative_action"
                                      id="__w2_wIrMUyjy8_negative_feedback_options"
                                    />
                                    <div
                                      className="feedback_wrapper hidden negative_action"
                                      id="__w2_wIrMUyjy8_negative_feedback_message"
                                    />

                                    <div
                                      className="AnswerFeedStory FeedStory feed_item"
                                      id="__w2_wIrMUyjy8_item"
                                    >
                                      <div className="EventHeader many_faces pass_color_to_child_links FeedReason TopicAnswerWrittenReason">
                                        <div className="reason_main">
                                          <div className="reason_text_and_icon">
                                            Answer
                                            <span className="topic">
                                              <span className="bullet">
                                                {" "}
                                                ·{" "}
                                              </span>
                                            </span>
                                            <div
                                              className="TopicListItem"
                                              id="__w2_wIrMUyjy16_topic_list_item"
                                            >
                                              <div className="u-inline-block u-white-space--nowrap">
                                                <div id="wIrMUyjy20">
                                                  <div
                                                    className="hover_menu hidden white_bg show_nub"
                                                    id="__w2_wIrMUyjy21_menu"
                                                  >
                                                    <div
                                                      className="hover_menu_contents"
                                                      id="__w2_wIrMUyjy21_menu_contents"
                                                    />
                                                  </div>
                                                  <a
                                                    className="TopicNameLink HoverMenu topic_name"
                                                    href="/topic/Technology"
                                                    action_mousedown="TopicLinkClickthrough"
                                                    id="__w2_wIrMUyjy21_link"
                                                  >
                                                    <span className="name_text">
                                                      <span id="wIrMUyjy24">
                                                        <span
                                                          className="TopicNameSpan TopicName"
                                                          id="__w2_wIrMUyjy25_card"
                                                        >
                                                          Technology
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="reason_overflow">
                                          <div
                                            className="u-absolute u-absolute--center u-zindex--2"
                                            id="__w2_wIrMUyjy17_close"
                                          >
                                            <a
                                              className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                              href="#"
                                              role="button"
                                              aria-label="Hide"
                                              id="__w2_wIrMUyjy23_button"
                                            >
                                              <div
                                                className="ui_button_inner"
                                                id="__w2_wIrMUyjy23_inner"
                                              >
                                                <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                  <div id="__w2_wIrMUyjy23_icon">
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
                                                          id="small_close"
                                                          className="icon_svg-stroke"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                          strokeLinecap="round"
                                                          stroke="#666666"
                                                          strokeWidth="1.5"
                                                        >
                                                          <path
                                                            d="M12,6 L12,18"
                                                            transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                                                          />
                                                          <path
                                                            d="M18,12 L6,12"
                                                            transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
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
                                      <span id="__w2_wIrMUyjy11_answer_story">
                                        <div className="story_title_container">
                                          <div className="pass_color_to_child_links">
                                            <div id="wIrMUyjy31">
                                              <a
                                                className="question_link"
                                                href="/What-is-the-most-useless-key-on-a-QWERTY-keyboard"
                                                target="_top"
                                                action_mousedown="QuestionLinkClickthrough"
                                                id="__w2_wIrMUyjy32_link"
                                              >
                                                <span className="ui_content_title ui_content_title--default ui_content_title--medium">
                                                  <span className="ui_qtext_rendered_qtext">
                                                    What is the most useless key
                                                    on a QWERTY keyboard?
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <div id="wIrMUyjy27" />
                                        </div>
                                        <div
                                          className="Answer"
                                          id="__w2_wIrMUyjy19_answer"
                                        >
                                          <div
                                            className="inline_editor_content suggestions_editor_content"
                                            id="__w2_wIrMUyjy30_content"
                                          >
                                            <div id="wIrMUyjy33">
                                              <div
                                                className="feed_item_answer answer_text"
                                                id="__w2_wIrMUyjy37_content"
                                              >
                                                <div className="feed_item_answer_content answer_content">
                                                  <div className="answer_user answer_user_inline">
                                                    <div id="wIrMUyjy40">
                                                      <div className="ContentHeader AnswerHeader">
                                                        <div className="ui_layout_photo_text u-flex ui_layout_size--small">
                                                          <div className="ui_layout_photo_wrapper u-flex-none">
                                                            <div className="ui_layout_photo u-relative">
                                                              <div
                                                                className="u-flex-inline"
                                                                id="wIrMUyjy47"
                                                              >
                                                                <div
                                                                  className="hover_menu hidden show_nub"
                                                                  id="__w2_wIrMUyjy58_menu"
                                                                >
                                                                  <div
                                                                    className="hover_menu_contents"
                                                                    id="__w2_wIrMUyjy58_menu_contents"
                                                                  />
                                                                </div>
                                                                <span
                                                                  className="photo_tooltip u-flex-inline"
                                                                  id="__w2_wIrMUyjy58_link"
                                                                >
                                                                  <a
                                                                    className="u-flex-inline"
                                                                    href="/profile/David-Waldo"
                                                                  >
                                                                    <span className="ui_avatar u-flex-inline ui_avatar--large u-flex-none">
                                                                      <img
                                                                        className="ui_avatar_photo ui_avatar--border-circular"
                                                                        src="https://qph2.c7.quoracdn.net/main-thumb-61094682-50-rurmmktydhdidogtppqbmksjzngcbxuv.jpeg"
                                                                        alt="David Waldo"
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
                                                                  <span id="wIrMUyjy49">
                                                                    <span id="wIrMUyjy54">
                                                                      <div
                                                                        className="hover_menu hidden white_bg show_nub"
                                                                        id="__w2_wIrMUyjy55_menu"
                                                                      >
                                                                        <div
                                                                          className="hover_menu_contents"
                                                                          id="__w2_wIrMUyjy55_menu_contents"
                                                                        >
                                                                          {" "}
                                                                        </div>
                                                                      </div>
                                                                      <span id="__w2_wIrMUyjy55_link">
                                                                        <a
                                                                          className="user"
                                                                          href="/profile/David-Waldo"
                                                                          action_mousedown="UserLinkClickthrough"
                                                                          id="__w2_wIrMUyjy55_name_link"
                                                                        >
                                                                          David
                                                                          Waldo
                                                                        </a>
                                                                      </span>
                                                                    </span>
                                                                    <span className="NameCredential">
                                                                      ,
                                                                      Windows/network
                                                                      admin for
                                                                      &gt;10
                                                                      years
                                                                    </span>
                                                                  </span>
                                                                </div>
                                                                <span className="credibility_wrapper">
                                                                  <div className="AnswerCredibilityFacts CredibilityFacts pass_color_to_child_links">
                                                                    <span id="wIrMUyjy56">
                                                                      <a
                                                                        className="answer_permalink"
                                                                        action_mousedown="AnswerPermalinkClickthrough"
                                                                        href="/What-is-the-most-useless-key-on-a-QWERTY-keyboard/answer/David-Waldo"
                                                                        id="__w2_wIrMUyjy57_link"
                                                                      >
                                                                        Answered
                                                                        17h ago
                                                                      </a>
                                                                    </span>
                                                                  </div>
                                                                </span>
                                                              </div>
                                                              <div id="__w2_wIrMUyjy42_follow_button_section">
                                                                <div className="u-relative icon_follow_button_wrapper">
                                                                  <div
                                                                    className="u-absolute u-absolute--center u-border-radius--ellipse u-padding-right--xs u-padding-left--xs icon_follow_button fadeIn hidden"
                                                                    id="__w2_wIrMUyjy42_follow_button"
                                                                  >
                                                                    <span id="wIrMUyjy51">
                                                                      <a
                                                                        className="ui_button u-nowrap ui_button--styled ui_button--PillStyle ui_button--PillStyle--light_blue ui_button--size_small u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                                        href="#"
                                                                        role="button"
                                                                        aria-label="Follow David"
                                                                        action_target='{"type": "user", "uid": 61094682}'
                                                                        id="__w2_wIrMUyjy64_button"
                                                                      >
                                                                        <div
                                                                          className="ui_button_inner"
                                                                          id="__w2_wIrMUyjy64_inner"
                                                                        >
                                                                          <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                                            <div id="__w2_wIrMUyjy64_icon">
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
                                                        <div id="__w2_wIrMUyjy53_suggested_section" />
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="answer_body_preview">
                                                    <div
                                                      className="Expandable SimpleToggle Toggle AnswerInFeedExpandable AnswerExpandable"
                                                      id="__w2_wIrMUyjy44__truncated"
                                                    >
                                                      <div className="u-serif-font-main--regular">
                                                        <div className="ui_qtext_truncated ui_qtext_truncated_compact">
                                                          <div className="ui_layout_content_thumbnail u-flex">
                                                            <div className="ui_layout_content_wrapper u-relative u-flex-2 u-margin-right--sm">
                                                              <div className="ui_qtext_truncated_text">
                                                                <span className="ui_qtext_rendered_qtext">
                                                                  <p className="ui_qtext_para u-ltr u-text-align--start">
                                                                    First of
                                                                    all, Iâ€™m
                                                                    assuming
                                                                    youâ€™re
                                                                    referring
                                                                    not to the
                                                                    specific
                                                                    â€œQWERTYâ€
                                                                    layout but
                                                                    instead the
                                                                    fairly
                                                                    standard
                                                                    104-key US
                                                                    keyboard,
                                                                    like this:
                                                                  </p>
                                                                  <p className="ui_qtext_para u-ltr u-text-align--start">
                                                                    Which is the
                                                                    least
                                                                    useful?
                                                                    Letâ€™s
                                                                    narrow this
                                                                    down. Obv...
                                                                  </p>
                                                                </span>
                                                              </div>
                                                              <a
                                                                className="ui_qtext_more_link"
                                                                href="/What-is-the-most-useless-key-on-a-QWERTY-keyboard/answer/David-Waldo"
                                                                id="__w2_wIrMUyjy60_more"
                                                              >
                                                                <span>
                                                                  (more)
                                                                </span>
                                                              </a>
                                                              <span
                                                                className="hidden"
                                                                id="__w2_wIrMUyjy60_loading"
                                                              >
                                                                <span className="loading">
                                                                  Loadingâ€¦
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              className="ui_layout_thumbnail u-flex-auto short_width fixed_height u-bg--center u-bg--cover"
                                                              style={{
                                                                backgroundImage:
                                                                  "url(https://qph2.c7.quoracdn.net/main-qimg-cc8d0c7e330111cc996c120e6ef9f032)"
                                                              }}
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="Expandable SimpleToggle Toggle AnswerInFeedExpandable AnswerExpandable hidden"
                                                      id="__w2_wIrMUyjy44__expanded"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="hidden"
                                              id="__w2_wIrMUyjy30_loading"
                                            >
                                              <span className="loading">
                                                Loadingâ€¦
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            className="hidden"
                                            id="__w2_wIrMUyjy30_editor"
                                          />
                                        </div>
                                      </span>
                                      <span
                                        className="hidden"
                                        id="__w2_wIrMUyjy11_question_answer_story_editable"
                                      />
                                      <div
                                        className="Toggle ToggleAnswerFooterWrapper SimpleToggle"
                                        id="__w2_wIrMUyjy14__truncated"
                                      />
                                      <div
                                        className="Toggle ToggleAnswerFooterWrapper SimpleToggle hidden"
                                        id="__w2_wIrMUyjy14__expanded"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="wnuFD7sM16">
                          <div
                            className="Bundle"
                            data-clog-metadata='{"feed_bundle_hash": "5626514486867238018"}'
                          >
                            <div className="main_feed singleton_bundle">
                              <div className="multifeed_bundle_story">
                                <div id="w281EJmN6">
                                  <div
                                    className="u-inherit"
                                    data-clog-metadata='{"feed_story_hash": "7460863583399511853"}'
                                  >
                                    <div
                                      className="feedback_wrapper hidden"
                                      id="__w2_w281EJmN8_question_feedback"
                                    />
                                    <div
                                      className="FeedStory AnswerFeedStory feed_item"
                                      id="__w2_w281EJmN8_item"
                                    >
                                      <span>
                                        <div
                                          className="gtugbwwoamfmhktiyyjh"
                                          id="__w2_w281EJmN10_znfwjbinlomgtxwrsinq"
                                        >
                                          <div className="rbmacscdldvqygakhytb bnlgvcstcrcmutblkjhg yymlhbvgcnplhtwjufdt tdhdjsnqiwanaejwtuuu">
                                            <div id="__w2_w281EJmN11_oblutynpcryvlvxkjhzo">
                                              <div className="lykcyalyqnhwgocbioik" />
                                              <div className="ijipxydcyvcanecrhatt">
                                                <a
                                                  className="outpfeqgsskhjaexxyez veciwgamivtrbyohiznx"
                                                  href="https://wikibuy.com/blog/how-i-afford-to-travel-on-a-budget-aa9bd1f0871a?title=Here%27s+the+best+way+to+book+travel+on+a+budget"
                                                  target="_blank"
                                                  rel="noopener nofollow"
                                                  id="__w2_w281EJmN30_khjedabhmtkwxjkicbwu"
                                                >
                                                  <p className="nmhwocvnrmkppyprizpt">
                                                    s
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      WWrSW
                                                    </span>
                                                    p
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      npp
                                                    </span>
                                                    o
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      OAKn
                                                    </span>
                                                    n
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      fV
                                                    </span>
                                                    s
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      XD
                                                    </span>
                                                    o
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      pSU
                                                    </span>
                                                    r
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      gG
                                                    </span>
                                                    e
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      P
                                                    </span>
                                                    d
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      Qdj
                                                    </span>{" "}
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      A
                                                    </span>
                                                    b
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      FmXM
                                                    </span>
                                                    y
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      YvTyd
                                                    </span>{" "}
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      oEUuh
                                                    </span>
                                                    W
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      ejy
                                                    </span>
                                                    i
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      ymt
                                                    </span>
                                                    k
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      FXO
                                                    </span>
                                                    i
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      GcgCN
                                                    </span>
                                                    b
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      Jj
                                                    </span>
                                                    u
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      NV
                                                    </span>
                                                    y
                                                    <span
                                                      style={{
                                                        display: "none"
                                                      }}
                                                    >
                                                      k
                                                    </span>
                                                  </p>
                                                </a>
                                              </div>
                                              <div
                                                className="nyqekaobqrzmvsrvmmxc"
                                                id="__w2_w281EJmN13_close"
                                              >
                                                <a
                                                  className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                  href="#"
                                                  role="button"
                                                  aria-label="Close"
                                                  id="__w2_w281EJmN26_button"
                                                >
                                                  <div
                                                    className="ui_button_inner"
                                                    id="__w2_w281EJmN26_inner"
                                                  >
                                                    <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                      <div id="__w2_w281EJmN26_icon">
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
                                                              id="small_close"
                                                              className="icon_svg-stroke"
                                                              fill="none"
                                                              fillRule="evenodd"
                                                              strokeLinecap="round"
                                                              stroke="#666666"
                                                              strokeWidth="1.5"
                                                            >
                                                              <path
                                                                d="M12,6 L12,18"
                                                                transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                                                              />
                                                              <path
                                                                d="M18,12 L6,12"
                                                                transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                                                              />
                                                            </g>
                                                          </svg>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                              <div className="wekstnbjupluzdnqxaaj">
                                                <a
                                                  className="outpfeqgsskhjaexxyez"
                                                  href="https://wikibuy.com/blog/how-i-afford-to-travel-on-a-budget-aa9bd1f0871a?title=Here%27s+the+best+way+to+book+travel+on+a+budget"
                                                  target="_blank"
                                                  rel="noopener nofollow"
                                                  id="__w2_w281EJmN14_mnlzjqaenuldsuoawsbg"
                                                >
                                                  <div id="__w2_w281EJmN15_gevuojjckysjjfahljsq">
                                                    <div className="tkjovfchleqslawckoxb">
                                                      How to save money on
                                                      airfare â€” without using
                                                      a â€œcheapâ€ airline.
                                                    </div>
                                                  </div>
                                                </a>
                                                <div className="u-flex content_flex">
                                                  <div className="u-flex-2">
                                                    <div className="zpuqypjzzvrhoaannbpb">
                                                      <div className="htzsxkprybpcrgkmgkbc">
                                                        <div className="icon_frame">
                                                          <div id="__w2_w281EJmN16_szfgacohhbzlinjxdnhv">
                                                            <div
                                                              className="account_logo_img"
                                                              style={{
                                                                backgroundImage:
                                                                  'url("https://qph2.c7.quoracdn.net/main-qimg-727f0ae4ddbc6ada7c8043093b4658c3")'
                                                              }}
                                                            />
                                                          </div>
                                                        </div>
                                                        <div className="account_description">
                                                          <div>
                                                            <a
                                                              className="outpfeqgsskhjaexxyez veciwgamivtrbyohiznx"
                                                              href="https://wikibuy.com/blog/how-i-afford-to-travel-on-a-budget-aa9bd1f0871a?title=Here%27s+the+best+way+to+book+travel+on+a+budget"
                                                              target="_blank"
                                                              rel="noopener nofollow"
                                                              id="__w2_w281EJmN31_suhwmqgrgckhtnuqukic"
                                                            >
                                                              <p className="nmhwocvnrmkppyprizpt">
                                                                Wikibuy
                                                              </p>
                                                            </a>
                                                            <div className="teinrbcaokuiqeumpijf">
                                                              S
                                                              <span
                                                                style={{
                                                                  display:
                                                                    "none"
                                                                }}
                                                              >
                                                                Zl
                                                              </span>
                                                              p
                                                              <span
                                                                style={{
                                                                  display:
                                                                    "none"
                                                                }}
                                                              >
                                                                bKifX
                                                              </span>
                                                              o
                                                              <span
                                                                style={{
                                                                  display:
                                                                    "none"
                                                                }}
                                                              >
                                                                YES
                                                              </span>
                                                              n
                                                              <span
                                                                style={{
                                                                  display:
                                                                    "none"
                                                                }}
                                                              >
                                                                Ir
                                                              </span>
                                                              s
                                                              <span
                                                                style={{
                                                                  display:
                                                                    "none"
                                                                }}
                                                              >
                                                                Kw
                                                              </span>
                                                              o
                                                              <span
                                                                style={{
                                                                  display:
                                                                    "none"
                                                                }}
                                                              >
                                                                pRSCC
                                                              </span>
                                                              r
                                                              <span
                                                                style={{
                                                                  display:
                                                                    "none"
                                                                }}
                                                              >
                                                                lIlR
                                                              </span>
                                                              e
                                                              <span
                                                                style={{
                                                                  display:
                                                                    "none"
                                                                }}
                                                              >
                                                                E
                                                              </span>
                                                              d
                                                              <span
                                                                style={{
                                                                  display:
                                                                    "none"
                                                                }}
                                                              >
                                                                m
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="u-flex">
                                                      <div className="u-flex-2">
                                                        <a
                                                          className="outpfeqgsskhjaexxyez"
                                                          href="https://wikibuy.com/blog/how-i-afford-to-travel-on-a-budget-aa9bd1f0871a?title=Here%27s+the+best+way+to+book+travel+on+a+budget"
                                                          target="_blank"
                                                          rel="noopener nofollow"
                                                          id="__w2_w281EJmN18_pwdczifwpjhlikvgpyhu"
                                                        >
                                                          <div id="__w2_w281EJmN19_dddfghwrvgmqfaxabdgm">
                                                            <div className="wviirzktyglsssfquffi">
                                                              You should use
                                                              Wikibuy. It
                                                              automatically
                                                              applies discounts
                                                              when you book
                                                              plane tickets and
                                                              hotels.
                                                            </div>
                                                          </div>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="ieudvqyilfivrtnscwmr">
                                                    <div className="u-flex">
                                                      <div className="u-flex-2">
                                                        <a
                                                          className="outpfeqgsskhjaexxyez"
                                                          href="https://wikibuy.com/blog/how-i-afford-to-travel-on-a-budget-aa9bd1f0871a?title=Here%27s+the+best+way+to+book+travel+on+a+budget"
                                                          target="_blank"
                                                          rel="noopener nofollow"
                                                          id="__w2_w281EJmN20_dobemvtnckscefctnsvz"
                                                        >
                                                          <div id="__w2_w281EJmN21_hbqqnkzkcsofuekgtvpn">
                                                            <div className="u-flex-auto">
                                                              <div
                                                                className="xctgldfnrditxvdfwkyr"
                                                                style={{
                                                                  backgroundImage:
                                                                    'url("https://qph2.c7.quoracdn.net/main-qimg-8313b8c5eb1ae0fb50f5e184da645ef0")'
                                                                }}
                                                              />
                                                            </div>
                                                          </div>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div id="__w2_w281EJmN22_jxzxqzarsjucsyuckkmw">
                                                  <div className="czekpqkahlexgvrjrqkk">
                                                    <a
                                                      className="fzitnuyvntskzwiutwbx"
                                                      href="https://wikibuy.com/blog/how-i-afford-to-travel-on-a-budget-aa9bd1f0871a?title=Here%27s+the+best+way+to+book+travel+on+a+budget"
                                                      target="_blank"
                                                      rel="noopener nofollow"
                                                      id="__w2_w281EJmN29_ftpvvoxlmzstbmrqmvaz"
                                                    >
                                                      L
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        K
                                                      </span>
                                                      e
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        nEr
                                                      </span>
                                                      a
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        iKciW
                                                      </span>
                                                      r
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        f
                                                      </span>
                                                      n
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        sxRsR
                                                      </span>{" "}
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        gm
                                                      </span>
                                                      M
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        tsIWZ
                                                      </span>
                                                      o
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        rE
                                                      </span>
                                                      r
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        ze
                                                      </span>
                                                      e
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        Ith
                                                      </span>{" "}
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        yL
                                                      </span>
                                                      a
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        MxoMO
                                                      </span>
                                                      t
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        oWFwV
                                                      </span>{" "}
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        u
                                                      </span>
                                                      w
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        FKXTh
                                                      </span>
                                                      i
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        Wpn
                                                      </span>
                                                      k
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        G
                                                      </span>
                                                      i
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        jl
                                                      </span>
                                                      b
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        S
                                                      </span>
                                                      u
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        mR
                                                      </span>
                                                      y
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        DPN
                                                      </span>
                                                      .
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        FUd
                                                      </span>
                                                      c
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        cWAAi
                                                      </span>
                                                      o
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        Ar
                                                      </span>
                                                      m
                                                      <span
                                                        style={{
                                                          display: "none"
                                                        }}
                                                      >
                                                        pG
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                                <div className="aahfxnsufnalcvfkntfj">
                                                  <div id="w281EJmN23">
                                                    <div
                                                      className="icon_action_bar"
                                                      id="__w2_w281EJmN24_action_bar"
                                                    >
                                                      <div className="action_bar_inner u-flex">
                                                        <div className="action_bar_inner_spacer u-margin-left--auto">
                                                          &nbsp;
                                                        </div>
                                                        <div className="overflow action_item overflow_link u-relative u-pointer-events--auto">
                                                          <div
                                                            className="overflow_link"
                                                            id="__w2_w281EJmN24_overflow_link"
                                                          >
                                                            <a
                                                              className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only"
                                                              href="#"
                                                              role="button"
                                                              aria-label="More options"
                                                              id="__w2_w281EJmN28_button"
                                                            >
                                                              <div
                                                                className="ui_button_inner"
                                                                id="__w2_w281EJmN28_inner"
                                                              >
                                                                <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                                                                  <div id="__w2_w281EJmN28_icon">
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
                                                                          <path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z" />
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
                                                          id="__w2_w281EJmN24_overflow_menu"
                                                        >
                                                          <div
                                                            className="hover_menu_contents lazy"
                                                            id="__w2_w281EJmN24_overflow_menu_contents"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="ovppzrzxcbazfobxuggz hidden"
                                              id="__w2_w281EJmN11_yfsijadbxgrasmgopujm"
                                            >
                                              <div className="content_dismiss_title">
                                                You dismissed this ad.
                                              </div>
                                              <div className="content_dismiss_body">
                                                The feedback you provide will
                                                help us show you more relevant
                                                content in the future.
                                              </div>
                                              <a
                                                className="undo"
                                                id="__w2_w281EJmN11_zekqdfcprffhvpefgemo"
                                              >
                                                Undo
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden" id="__w2_w2OzgLAU9_more">
                        <div
                          className="pagedlist_item pagedlist_invisible"
                          id="wnuFD7sM19"
                        >
                          <div className="PagedListInvisibleItem FeedBottomIndicator">
                            You've reached the end of your feed.
                            <span
                              className="primary_button"
                              id="__w2_wnuFD7sM20_feed_bottom"
                            >
                              More Stories
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className="spinner_display_area"
                        id="__w2_w2OzgLAU9_spinner"
                      >
                        <div className="LoadingDots regular">
                          <div className="dot first" />
                          <div className="dot second" />
                          <div className="dot third" />
                        </div>
                      </div>
                    </div>
                    <div id="wnuFD7sM21" />
                  </div>
                </div>
                {/* <div className="layout_3col_right home_feed_right_col" id="__w2_w2OzgLAU2_right_col">
   <div className="fixable_clone" style={{height: '357px', width: '172px', margin: '0px'}}><div className="fixed_sidebar fixable_fixed" style={{top: '83px', position: 'fixed', width: '172px'}}>
   <div className="zapdos_sidebar_wrapper">
      <div id="whIqsbBW1">
         <div className="checklist_outer_box">
            <div>
               <div className="new_user_checklist">
                  <h2 className="title">Set Up Your Account</h2>
                  <div className="steps_container">
                     <div className="checklist_row">
                        <div id="whIqsbBW4">
                           <div className="check_wrapper complete">
                              <div className="check" /></div>
                              <div className="complete label" id="__w2_whIqsbBW5_checklist_step_1">Visit your feed</div>
                           </div>
                           <div style={{display: 'block', clear: 'both'}} />
                        </div>
                        <div className="checklist_row">
                           <div id="whIqsbBW6">
                              <div className="check_wrapper">
                                 <div className="check" /></div>
                                 <div className="label" id="__w2_whIqsbBW7_checklist_step_17"><a href="#" id="__w2_whIqsbBW7_step_link">Follow 9 more topics</a></div>
                              </div>
                              <div style={{display: 'block', clear: 'both'}} />
                           </div>
                           <div className="checklist_row">
                              <div id="whIqsbBW8">
                                 <div className="check_wrapper">
                                    <div className="check" /></div>
                                    <div className="label" id="__w2_whIqsbBW9_checklist_step_12">Upvote 5 more good answers</div>
                                 </div>
                                 <div style={{display: 'block', clear: 'both'}} />
                              </div>
                              <div className="checklist_row">
                                 <div id="whIqsbBW10">
                                    <div className="check_wrapper">
                                       <div className="check" /></div>
                                       <div className="label" id="__w2_whIqsbBW11_checklist_step_7">Ask your first question</div>
                                    </div>
                                    <div style={{display: 'block', clear: 'both'}} />
                                 </div>
                                 <div className="checklist_row">
                                    <div id="whIqsbBW12">
                                       <div className="check_wrapper">
                                          <div className="check" /></div>
                                          <div className="label" id="__w2_whIqsbBW13_checklist_step_16"><a href="/profile/Bruce-Decker-12" id="__w2_whIqsbBW13_step_link">Add 3 credentials</a></div>
                                       </div>
                                       <div style={{display: 'block', clear: 'both'}} />
                                    </div>
                                    <div className="checklist_row">
                                       <div id="whIqsbBW14">
                                          <div className="check_wrapper">
                                             <div className="check" /></div>
                                             <div className="label" id="__w2_whIqsbBW15_checklist_step_9"><a href="/answer" id="__w2_whIqsbBW15_step_link">Answer a question</a></div>
                                          </div>
                                          <div style={{display: 'block', clear: 'both'}} />
                                       </div>
                                    </div>
                                    <div style={{display: 'block', clear: 'both'}} />
                                 
                                   </div>
                                </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
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

export default connect(mapStateToProps)(Dashboard);
