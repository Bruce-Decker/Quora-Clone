import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import rooturl from "../../utility/url";

var topic_Response
class Topic extends Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            showTopicQuestions: false
        }
        
         
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.match.params.topic_name !== this.props.match.params.topic_name) {
          window.location.reload()
    }
  }


    async componentWillReceiveProps(nextProps) {
     
    
      if (nextProps.location.search !== this.props.location.search) {
        window.location.reload();
      }
    }

    async componentDidMount() {
      //alert(this.props.match.params.topic_name)
      topic_Response = await axios.get(
        rooturl + "/question/getTopicQuestions/?topic=" + this.props.match.params.topic_name
      );
     
      console.log(topic_Response.data)
      if (topic_Response.data.length > 0) {
        this.setState({
          //questions: dashboard_questions.data.docs,
          showTopicQuestions: true
        });
  
        
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
           <div className="ContentWrapper">
<div id="__w2_w2OzgLAU18_content">
<div className="HomeMain FeedMain">
<div className="grid_page">
<div className="layout_3col_left" id="__w2_w2OzgLAU2_left_col">
<div className="fixable_clone" style={{height: '488px', width: '142px', margin: '0px'}}>





{/* 
<div id="__w2_w2OzgLAU2_left_col_inner" className="fixable_fixed" style={{top: '83px', position: 'fixed', width: '142px'}}>
<div className="row section">
   <div id="w2OzgLAU31">
      <div id="w2OzgLAU33">
         <div className="mweb_switcher" id="mweb_sub_header">
            <ul className="switcher">
               <li className="switcher_item switcher_item_with_image is_active">
                  <a className="link" href="/dashboard">
                     <div className="switcher_item_image u-flex-none u-relative is_active"><div className="u-bg--square u-bg--center switcher_item_icon u-border-radius--2" style={{backgroundImage: 'url("https://qsf2.c7.quoracdn.net/-3-images.icons.mobile_feed_switcher.feed_3x.png-26-94e21de5c18cba55.png")'}} /></div>
                     <div className="label">Feed</div>
                  </a>
               </li>
               <li className="switcher_item switcher_item_with_image">
                  <a className="link" href="/topic/Sports.jpeg">
                     <div className="switcher_item_image u-flex-none u-relative">
                        <div className="u-bg--square u-bg--center u-bg--cover u-border-radius--2" style={{backgroundImage: 'url("/topic/Sports.jpeg")'}} />
                        <div className="u-absolute unread_dot u-border-radius--ellipse" /></div>
                        <div className="label">Sports</div>
                  </a>
               </li>
               <li className="switcher_item switcher_item_with_image">
               <a className="link" href="/topic/History.jpeg">
               <div className="switcher_item_image u-flex-none u-relative">
               <div className="u-bg--square u-bg--center u-bg--cover u-border-radius--2" style={{backgroundImage: 'url("/topic/History.jpeg")'}} />
               <div className="u-absolute unread_dot u-border-radius--ellipse" /></div>
               <div className="label">History</div></a></li>
               <li className="switcher_item switcher_item_with_image">
               <a className="link" href="/topic/Science%20and%20Technology.jpeg">
               <div className="switcher_item_image u-flex-none u-relative">
               <div className="u-bg--square u-bg--center u-bg--cover u-border-radius--2" style={{backgroundImage: 'url("/topic/Science_and_Technology.jpeg")'}} />
               <div className="u-absolute unread_dot u-border-radius--ellipse" /></div>
               
               
               
               <div className="label">Science and Technology</div>
               
               </a></li>
            </ul>
            </div></div></div>
         </div>
      </div> */}






   </div>
</div>
<div className="layout_3col_center">
<div id="w2OzgLAU29" />
<div id="__w2_w2OzgLAU2_feed_main">
<div id="w2OzgLAU35" />
<div className="PagedListFoo HomeMultifeed Multifeed unified" data-clog-metadata="{&quot;feed_page_type&quot;: 1, &quot;feed_page_data&quot;: 0}" id="__w2_w2OzgLAU9_paged_list">
<div className="paged_list_wrapper" id="__w2_w2OzgLAU9_paged_list_wrapper">
<div id="wnuFD7sM4">
<div className="AnswerStoryBundle Bundle" data-clog-metadata="{&quot;feed_bundle_hash&quot;: &quot;7193063593613012604&quot;}">
<div className="main_feed singleton_bundle">
<div className="multifeed_bundle_story">
<div id="wOqAWcfd6">
<div className="u-inherit" data-clog-metadata="{&quot;feed_story_hash&quot;: &quot;6665419943812055345&quot;}">
   <div className="feedback_wrapper hidden" id="__w2_wOqAWcfd8_question_feedback" />
      <div className="feedback_wrapper hidden" id="__w2_wOqAWcfd8_answer_feedback" />
         <div className="feedback_wrapper hidden" id="__w2_wOqAWcfd8_quora_share_feedback" />
            <div className="feedback_wrapper hidden negative_action" id="__w2_wOqAWcfd8_negative_feedback_options" />
               <div className="feedback_wrapper hidden negative_action" id="__w2_wOqAWcfd8_negative_feedback_message" /></div>
            </div>
         </div>
      </div>
   </div>
</div>
<div id="wnuFD7sM10">
<div className="ClickthroughBundle Bundle QuestionStoryBundle" data-clog-metadata="{&quot;feed_bundle_hash&quot;: &quot;7017303820097396363&quot;}">
<div className="main_feed full_bundle">
<div className="sticky_bundle_wrapper" id="wZZq9P0w9">
   <div className="section_header" data-clog-metadata="{&quot;feed_bundle_hash&quot;: &quot;7017303820097396363&quot;}">
      <div className="icon_frame">
         <div className="ui_icon_badge u-relative u-flex-none u-flex u-flex-align--center u-flex-justify--center ui_icon_badge_size--tiny u-border-radius--3 ui_icon_badge_color--red">
            <span className="ui_icon ui_icon_color--white ui_icon_outline--filled ui_icon_type--shape u-flex-align-self--center" aria-hidden="true">
               <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M15.0037473,18.5 C15.0037473,16.7206263 15.0037473,15.8306263 15.0037473,15.83 C17.3666743,14.7057707 19,12.2909208 19,9.5 C19,5.63400675 15.8659932,2.5 12,2.5 C8.13400675,2.5 5,5.63400675 5,9.5 C5,12.2916985 6.63423594,14.7017006 8.99822794,15.8255267 C8.99822794,15.8255267 8.99822794,16.7170178 8.99822794,18.5 L15.0037473,18.5 Z M12,8 L10,11 L14,11 L12,14 M9.76460414,20.5003969 C10.3139024,21.1136855 11.1118833,21.4996031 12,21.4996031 C12.886481,21.4996031 13.6831579,21.1151057 14.2323583,20.5037832" />
                  </g>
               </svg>
            </span>
         </div>
      </div>
      <div className="header_text"><span className="header_text_main">Questions for You</span></div>
   </div>
</div>
<div className="multifeed_bundle_story">
<div id="wZZq9P0w11">
<div className="u-inherit" data-clog-metadata="{&quot;feed_story_hash&quot;: &quot;9032887837270712613&quot;}">
<div className="feedback_wrapper hidden" id="__w2_whIqsbBW17_question_feedback" />
<div className="feedback_wrapper hidden negative_action" id="__w2_whIqsbBW17_negative_feedback_options" />
<div className="feedback_wrapper hidden negative_action" id="__w2_whIqsbBW17_negative_feedback_message" />
<div id="__w2_whIqsbBW17_item">
<div>











{this.state.showTopicQuestions ?
   
  <div>
     {topic_Response.data.map(question => 
<div className="ui_story_card u-flex u-flex-column ui_story_card--bundled">
<div className="ui_story_card_header">
   <div className="EventHeader many_faces pass_color_to_child_links FeedReason TopicQuestionAskedReason">
      <div className="reason_main">
         <div className="reason_text_and_icon">
            Question added<span className="topic"><span className="bullet"> </span></span>
            <div className="TopicListItem" id="__w2_whIqsbBW25_topic_list_item">
               <div className="u-inline-block u-white-space--nowrap">
                  <div id="whIqsbBW46">
                     <div className="hover_menu hidden white_bg show_nub" id="__w2_whIqsbBW47_menu">
                        <div className="hover_menu_contents" id="__w2_whIqsbBW47_menu_contents"> </div>
                     </div>
                     <a className="TopicNameLink HoverMenu topic_name" href="/topic/Mathematics" action_mousedown="TopicLinkClickthrough" id="__w2_whIqsbBW47_link">
                     <span className="name_text">
                     <span id="whIqsbBW51">
                     <span className="TopicNameSpan TopicName" id="__w2_whIqsbBW52_card">
                     {question.topics.map(
                                                                        topic => {
                                                                          return (
                                                                            <span>
                                                                              ·{" "}
                                                                              {
                                                                                topic
                                                                              }{" "}
                                                                              {
                                                                                "  "
                                                                              }
                                                                            </span>
                                                                          );
                                                                        }
                                                                      )}
                        </span>
                      </span></span></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="reason_overflow">
         <div className="u-absolute u-absolute--center u-zindex--2" id="__w2_whIqsbBW26_close">
            <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="#" role="button" aria-label="Hide" id="__w2_whIqsbBW49_button">
               <div className="ui_button_inner" id="__w2_whIqsbBW49_inner">
                  <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                     <div id="__w2_whIqsbBW49_icon">
                        <span className="ui_button_icon" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="small_close" className="icon_svg-stroke" fill="none" fillRule="evenodd" strokeLinecap="round" stroke="#666666" strokeWidth="1.5">
                                 <path d="M12,6 L12,18" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) " />
                                 <path d="M18,12 L6,12" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) " />
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
                  <div id="whIqsbBW40"><a className="question_link" target="_top" action_mousedown="QuestionLinkClickthrough" id="__w2_whIqsbBW41_link" href="/question/5"><span className="ui_content_title ui_content_title--default ui_content_title--medium"><span className="ui_qtext_rendered_qtext">{question.question}</span></span></a></div>
               </div>
            </div>
            <div id="whIqsbBW38" /></div>
            <div className="CantAnswerActionBar show_on_pass">
               <div className="MarkedAsCantAnswerMessage show_on_pass">
                  <div className="title_text">You passed on this question</div>
                  <div className="detail_text">Passing on questions helps us determine which questions are relevant to you.</div>
               </div>
               <span className="cant_answer_actions"><a className="undo_cant_answer" href="#" id="__w2_whIqsbBW43_undo_cant_answer">Undo</a><span className="bullet"> · </span></span><span className="cant_answer_actions"><span id="whIqsbBW44"><a className="Downvote Button Question TwoStateButton secondary_action" href="#" role="button" action_click="QuestionDownvote" action_target="{&quot;qid&quot;: 46052564, &quot;type&quot;: &quot;question&quot;}" id="__w2_whIqsbBW45_button"><span className="button_text" id="__w2_whIqsbBW45_text">Downvote</span></a></span></span>
            </div>
            <div id="whIqsbBW31">
               <div className="ContentFooter QuestionFooter" id="__w2_whIqsbBW32_content_footer"><a className="answer_count_prominent" href="/What-is-the-square-root-of-40-41">1 Answers</a><span className="bullet"> · </span><span className="question_timestamp">Last followed 6h ago</span></div>
            </div>
            <div id="whIqsbBW33" />
               <div id="whIqsbBW35" /></div>
   </span>
   <span className="hidden" id="__w2_whIqsbBW20_question_story_editable" /></div></div>
   <div className="ui_story_card_footer">
   <div className="hide_on_cant_answer">
   <div id="whIqsbBW21">
   <div className="icon_action_bar" id="__w2_whIqsbBW22_action_bar">
   <div className="action_bar_inner u-flex">
   <div className="ItemComponent WriteAnswerPrimaryActionItem primary_item u-relative">
   <span id="wLjahHEI11">
   <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--blue ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon" href="#" role="button" action_target="{&quot;qid&quot;: 46052564, &quot;type&quot;: &quot;question&quot;}" id="__w2_wLjahHEI28_button">
   <div className="ui_button_inner" id="__w2_wLjahHEI28_inner">
   <div className="ui_button_icon_wrapper u-relative u-flex-inline">
   <div id="__w2_wLjahHEI28_icon">
   <span className="ui_button_icon" aria-hidden="true">
   <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
   <g id="answer" transform="translate(2.500000, 3.500000)" stroke="none" strokeWidth="1.5" fill="none" fillRule="evenodd">
   <g id="pen" transform="translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)">
   <path d="M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z" id="pen_body" className="icon_svg-stroke" stroke="#666" strokeLinecap="round" strokeLinejoin="round" />
   <polygon id="pen_tip" className="icon_svg-fill_as_stroke" fill="#666" transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) " points="2 17.5 3.25 20 0.75 20" />
   </g>
   <path d="M12,16 L17,16 L17,11 M7,1 L2,1 L2,6" id="bg" className="icon_svg-stroke" stroke="#666" strokeLinecap="round" strokeLinejoin="round" />
   </g>
   </svg>
   </span>
   </div>
   </div>
   <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_wLjahHEI28_label">Answer</span></div>
   </div>
   </a>
   </span>
   </div>
   <div className="ItemComponent CantAnswerActionItem primary_item u-relative">
   <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon" href="#" role="button" action_click="PassWritePage" id="__w2_wLjahHEI14_button">
   <div className="ui_button_inner" id="__w2_wLjahHEI14_inner">
   <div className="ui_button_icon_wrapper u-relative u-flex-inline">
   <div id="__w2_wLjahHEI14_icon">
   <span className="ui_button_icon" aria-hidden="true">
   <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
   <g id="cant_answer" stroke="none" fill="none" fillRule="evenodd">
   <g id="pen" transform="translate(11.485281, 12.485281) rotate(-315.000000) translate(-11.485281, -12.485281) translate(9.485281, 2.485281)">
   <path d="M0,7.51471863 L2.22044605e-16,1.99994543 C8.67738547e-17,0.895375929 0.8954305,-5.45711382e-05 2,-5.45711382e-05 C3.1045695,-5.45711382e-05 4,0.895375929 4,1.99994543 L4,7.51471863 M4,12.5147186 L4,16 L2.00256278,20 L0,16 L0,12.5147186" id="Rectangle-5" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
   <polygon id="pen_tip" className="icon_svg-fill_as_stroke" fill="#666" transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) " points="2 17.5 3.25 20 0.75 20" />
   </g>
   <path d="M4.63603897,5.63603897 L18.5,19.5" id="Line" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
   </g>
   </svg>
   </span>
   </div>
   </div>
   <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_wLjahHEI14_label">Pass</span></div>
   </div>
   </a>
   </div>
   <div className="ItemComponent FollowActionItem primary_item u-relative">
   <span id="wLjahHEI15">
   <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon" href="#" role="button" action_click="QuestionFollow" action_target="{&quot;qid&quot;: 46052564, &quot;type&quot;: &quot;question&quot;}" id="__w2_wLjahHEI27_button">
   <div className="ui_button_inner" id="__w2_wLjahHEI27_inner">
   <div className="ui_button_icon_wrapper u-relative u-flex-inline">
   <div id="__w2_wLjahHEI27_icon">
   <span className="ui_button_icon" aria-hidden="true">
   <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
   <g stroke="none" fill="none" fillRule="evenodd" strokeLinecap="round">
   <g id="follow" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5">
   <path d="M14.5,19 C14.5,13.3369229 11.1630771,10 5.5,10 M19.5,19 C19.5,10.1907689 14.3092311,5 5.5,5" id="lines" />
   <circle id="circle" cx="7.5" cy={17} r={2} className="icon_svg-fill" fill="none" />
   </g>
   </g>
   </svg>
   </span>
   </div>
   </div>
   <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_wLjahHEI27_label">Follow</span><span className="ui_button_count" aria-hidden="true" id="__w2_wLjahHEI27_count_wrapper"><span className="bullet"> · </span><span className="ui_button_count_inner" id="__w2_wLjahHEI27_count">1</span></span></div>
   </div>
   </a>
   </span>
   </div>
   <div className="ActionItemComponent ItemComponent FacebookShareActionItem action_item secondary_item u-relative">
   <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="#" role="button" aria-label="Share on Facebook" id="__w2_wLjahHEI19_button">
   <div className="ui_button_inner" id="__w2_wLjahHEI19_inner">
   <div className="ui_button_icon_wrapper u-relative u-flex-inline">
   <div id="__w2_wLjahHEI19_icon">
   <span className="ui_button_icon" aria-hidden="true">
   <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
   <g className="icon_svg-fill_as_stroke" stroke="none" fill="#4267B2" fillRule="evenodd">
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
   <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="#" role="button" aria-label="Share on Twitter" id="__w2_wLjahHEI22_button">
   <div className="ui_button_inner" id="__w2_wLjahHEI22_inner">
   <div className="ui_button_icon_wrapper u-relative u-flex-inline">
   <div id="__w2_wLjahHEI22_icon">
   <span className="ui_button_icon" aria-hidden="true">
   <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
   <g className="icon_svg-fill_as_stroke" stroke="none" fill="#1DA1F2" fillRule="nonzero">
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
   <div className="hover_menu hidden hover_share_menu show_nub" id="__w2_wLjahHEI23_menu">
   <div className="hover_menu_contents" id="__w2_wLjahHEI23_menu_contents"> </div>
   </div>
   <div className="HoverMenu QuestionQuickShare _QuickShare" role="button" id="__w2_wLjahHEI23_link">
   <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="#" role="button" aria-label="More sharing options" id="__w2_wLjahHEI26_button">
   <div className="ui_button_inner" id="__w2_wLjahHEI26_inner">
   <div className="ui_button_icon_wrapper u-relative u-flex-inline">
   <div id="__w2_wLjahHEI26_icon">
   <span className="ui_button_icon" aria-hidden="true">
   <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
   <g id="share" className="icon_svg-stroke" stroke="#666" fill="none" strokeWidth="1.5" fillRule="evenodd" strokeLinejoin="round">
   <path d="M12.0001053,2.99989467 L4.00010533,12.7776724 L9.33343867,12.7776724 C9.78266695,14.7041066 10.5048892,16.2782509 11.5001053,17.5001053 C12.4953215,18.7219597 13.9953215,19.8886264 16.0001053,21.0001053 C15.3415908,19.6668553 14.8428108,18.1668553 14.5037654,16.5001053 C14.16472,14.8333553 14.2190556,13.5925444 14.666772,12.7776724 L20.0001053,12.7776724 L12.0001053,2.99989467 Z" transform="translate(12.000105, 12.000000) rotate(90.000000) translate(-12.000105, -12.000000) " />
   </g>
   </svg>
   </span>
   </div>
   </div>
   </div>
   </a>
   </div>
   </div>
   <div className="action_bar_inner_spacer u-margin-left--auto">&nbsp;</div>
   <div className="overflow action_item overflow_link u-relative u-pointer-events--auto">
   <div className="overflow_link" id="__w2_whIqsbBW22_overflow_link">
   <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="#" role="button" aria-label="More options" id="__w2_wLjahHEI8_button">
   <div className="ui_button_inner" id="__w2_wLjahHEI8_inner">
   <div className="ui_button_icon_wrapper u-relative u-flex-inline">
   <div id="__w2_wLjahHEI8_icon">
   <span className="ui_button_icon" aria-hidden="true">
   <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
   <g id="overflow" className="icon_svg-stroke" strokeWidth="1.5" stroke="#666" fill="none" fillRule="evenodd">
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
   <div className="hover_menu hidden show_nub right_align fixed_menu_width no_body_attach" id="__w2_whIqsbBW22_overflow_menu">
   <div className="hover_menu_contents lazy" id="__w2_whIqsbBW22_overflow_menu_contents" /></div>
   </div>
   <div id="wLjahHEI9">
   <div className="hidden answer_editor_wrapper" id="__w2_wLjahHEI10_add_answer_editor_wrapper" /></div>
   </div>
   </div>
   </div>
   </div>
   </div>
   )}
   </div>
  : null }













   
   
   
   
   
   
   
   
   </div></div>
   </div>
   </div>
</div>
<div className="multifeed_bundle_story">
<div id="wZZq9P0w14">
   <div className="u-inherit" data-clog-metadata="{&quot;feed_story_hash&quot;: &quot;6301928687870933827&quot;}">
      <div className="feedback_wrapper hidden" id="__w2_wMBpsM622_question_feedback" />
         <div className="feedback_wrapper hidden negative_action" id="__w2_wMBpsM622_negative_feedback_options" />
            <div className="feedback_wrapper hidden negative_action" id="__w2_wMBpsM622_negative_feedback_message" />
               <div id="__w2_wMBpsM622_item" /></div>
            </div>
         </div>
      </div>
   </div>
</div>
<div id="wnuFD7sM13">
   <div className="AnswerStoryBundle Bundle" data-clog-metadata="{&quot;feed_bundle_hash&quot;: &quot;5604222101795743386&quot;}">
      <div className="main_feed singleton_bundle">
         <div className="multifeed_bundle_story">
            <div id="wIrMUyjy6">
               <div className="u-inherit" data-clog-metadata="{&quot;feed_story_hash&quot;: &quot;8794457905264421782&quot;}">
                  <div className="feedback_wrapper hidden" id="__w2_wIrMUyjy8_question_feedback" />
                     <div className="feedback_wrapper hidden" id="__w2_wIrMUyjy8_answer_feedback" />
                        <div className="feedback_wrapper hidden" id="__w2_wIrMUyjy8_quora_share_feedback" />
                           <div className="feedback_wrapper hidden negative_action" id="__w2_wIrMUyjy8_negative_feedback_options" />
                              <div className="feedback_wrapper hidden negative_action" id="__w2_wIrMUyjy8_negative_feedback_message" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="wnuFD7sM16">
                  <div className="Bundle" data-clog-metadata="{&quot;feed_bundle_hash&quot;: &quot;5626514486867238018&quot;}">
                     <div className="main_feed singleton_bundle">
                        <div className="multifeed_bundle_story">
                           <div id="w281EJmN6">
                              <div className="u-inherit" data-clog-metadata="{&quot;feed_story_hash&quot;: &quot;7460863583399511853&quot;}">
                                 <div className="feedback_wrapper hidden" id="__w2_w281EJmN8_question_feedback" /></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="hidden" id="__w2_w2OzgLAU9_more">
                  <div className="pagedlist_item pagedlist_invisible" id="wnuFD7sM19">
                     <div className="PagedListInvisibleItem FeedBottomIndicator">You've reached the end of your feed.<span className="primary_button" id="__w2_wnuFD7sM20_feed_bottom">More Stories</span></div>
                  </div>
               </div>
               <div className="spinner_display_area" id="__w2_w2OzgLAU9_spinner" /></div>
               <div id="wnuFD7sM21" /></div>
            </div>
         </div>
      </div>
   </div>
</div>

         </div>
        )
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
export default connect(mapStateToProps)(Topic);
  