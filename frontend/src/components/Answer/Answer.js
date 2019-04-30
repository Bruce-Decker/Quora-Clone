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

<div className="ContentWrapper">
<div id="__w2_w7g4ndOF13_content">
<div className="WriteMain">
<div className="grid_page">

<div className="layout_3col_center">
<div className="WriteMultifeed Multifeed PagedListFoo unified" data-clog-metadata="{&quot;feed_page_type&quot;: 10, &quot;feed_page_data&quot;: 0}" id="__w2_w7g4ndOF23_paged_list">
<div className="paged_list_wrapper" id="__w2_w7g4ndOF23_paged_list_wrapper">
<div id="wY9TcqzJ1">
<div className="Bundle TopQuestionsForYou SimpleToggle Toggle ExpandableBundle" id="__w2_wLBdjgVC2__truncated">
<div className="Bundle TopQuestionsForYou SimpleToggle Toggle ExpandableBundle" data-clog-metadata="{&quot;feed_bundle_hash&quot;: &quot;8685307334423563978&quot;}">
<div className="main_feed full_bundle">
<div className="sticky_bundle_wrapper" id="wLBdjgVC48">
   <div className="section_header" data-clog-metadata="{&quot;feed_bundle_hash&quot;: &quot;8685307334423563978&quot;}">
      <div className="icon_frame">
         <div className="ui_icon_badge u-relative u-flex-none u-flex u-flex-align--center u-flex-justify--center ui_icon_badge_size--tiny u-border-radius--3 ui_icon_badge_color--red">
            <span className="ui_icon ui_icon_color--white ui_icon_outline--filled ui_icon_type--shape u-flex-align-self--center" aria-hidden="true">
               <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="star" className="icon_svg-stroke icon_svg-fill" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinejoin="round">
                     <polygon id="Star" points="12 16.6175467 7.05572809 19.2169043 8 13.7113766 4 9.81234022 9.52786405 9.00909456 12 4 14.472136 9.00909456 20 9.81234022 16 13.7113766 16.9442719 19.2169043" />
                  </g>
               </svg>
            </span>
         </div>
      </div>
      <div className="header_text"><a className="header_text_main" href="/answer/top_questions">Questions For You</a>
      </div>


      
   </div>













   <div className="ui_story_card u-flex u-flex-column ui_story_card--bundled">
<div className="ui_story_card_header">
   <div className="EventHeader many_faces pass_color_to_child_links TopicQuestionAskedReason FeedReason">
      <div className="reason_main">
         <div className="reason_text_and_icon">
            Question added<span className="topic"><span className="bullet"> · </span></span>
            <div className="TopicListItem" id="__w2_wQSMbCjn10_topic_list_item">
               <div className="u-inline-block u-nowrap">
                  <div id="wQSMbCjn31">
                     <div className="hover_menu hidden white_bg show_nub" id="__w2_wQSMbCjn32_menu">
                        <div className="hover_menu_contents" id="__w2_wQSMbCjn32_menu_contents"> </div>
                     </div>
                     <a className="TopicNameLink HoverMenu topic_name" href="/topic/Movies" action_mousedown="TopicLinkClickthrough" id="__w2_wQSMbCjn32_link"><span className="name_text"><span id="wQSMbCjn36"><span className="TopicName TopicNameSpan" id="__w2_wQSMbCjn37_card">Movies</span></span></span></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="reason_overflow">
         <div className="u-absolute u-absolute--center u-zindex--2" id="__w2_wQSMbCjn11_close">
            <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="#" role="button" aria-label="Hide" id="__w2_wQSMbCjn34_button">
               <div className="ui_button_inner" id="__w2_wQSMbCjn34_inner">
                  <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                     <div id="__w2_wQSMbCjn34_icon">
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
<div id="wQSMbCjn4">
<span id="__w2_wQSMbCjn5_question_story">
   <div className="QuestionStory">
   <div id="wQSMbCjn13">
      <div className="story_title_container">
         <div className="pass_color_to_child_links">
            <div id="wQSMbCjn25"><a className="question_link" href="/unanswered/When-can-I-watch-Booksmart-online" target="_top" action_mousedown="QuestionLinkClickthrough" id="__w2_wQSMbCjn26_link"><span className="ui_content_title ui_content_title--default ui_content_title--medium"><span className="ui_qtext_rendered_qtext">When can I watch Booksmart online?</span></span></a></div>
         </div>
      </div>
      <div id="wQSMbCjn23" /></div>
      <div className="CantAnswerActionBar show_on_pass">
         <div className="MarkedAsCantAnswerMessage show_on_pass">
            <div className="title_text">You passed on this question</div>
            <div className="detail_text">Passing on questions helps us determine which questions are relevant to you.</div>
         </div>
         <span className="cant_answer_actions"><a className="undo_cant_answer" href="#" id="__w2_wQSMbCjn28_undo_cant_answer">Undo</a><span className="bullet"> · </span></span><span className="cant_answer_actions"><span id="wQSMbCjn29"><a className="Question Button Downvote TwoStateButton secondary_action" href="#" role="button" action_click="QuestionDownvote" action_target="{&quot;qid&quot;: 46704447, &quot;type&quot;: &quot;question&quot;}" id="__w2_wQSMbCjn30_button"><span className="button_text" id="__w2_wQSMbCjn30_text">Downvote</span></a></span></span>
      </div>
      <div id="wQSMbCjn16">
         <div className="ContentFooter QuestionFooter" id="__w2_wQSMbCjn17_content_footer"><a className="answer_count_prominent" href="/unanswered/When-can-I-watch-Booksmart-online">No answer yet</a><span className="bullet"> · </span><span className="question_timestamp">Last followed 1m ago</span></div>
      </div>
      <div id="wQSMbCjn18" />
         <div id="wQSMbCjn20" /></div>
</span>
<span className="hidden" id="__w2_wQSMbCjn5_question_story_editable" /></div></div>
<div className="ui_story_card_footer">
<div className="hide_on_cant_answer">
   <div id="wQSMbCjn6">
      <div className="icon_action_bar" id="__w2_wQSMbCjn7_action_bar">
         <div className="action_bar_inner u-flex">
            <div className="ItemComponent WriteAnswerPrimaryActionItem primary_item u-relative">
               <span id="wwvr8Yg88">
                  <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--blue ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon" href="#" role="button" action_target="{&quot;qid&quot;: 46704447, &quot;type&quot;: &quot;question&quot;}" id="__w2_wwvr8Yg815_button">
                     <div className="ui_button_inner" id="__w2_wwvr8Yg815_inner">
                        <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                           <div id="__w2_wwvr8Yg815_icon">
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
                        <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_wwvr8Yg815_label">Answer</span></div>
                     </div>
                  </a>
               </span>
            </div>
            <div className="ItemComponent CantAnswerActionItem primary_item u-relative">
               <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon" href="#" role="button" action_click="PassWritePage" id="__w2_wwvr8Yg811_button">
                  <div className="ui_button_inner" id="__w2_wwvr8Yg811_inner">
                     <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                        <div id="__w2_wwvr8Yg811_icon">
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
                     <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_wwvr8Yg811_label">Pass</span></div>
                  </div>
               </a>
            </div>
            <div className="ItemComponent FollowActionItem primary_item u-relative">
               <span id="wwvr8Yg812">
                  <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon" href="#" role="button" action_click="QuestionFollow" action_target="{&quot;qid&quot;: 46704447, &quot;type&quot;: &quot;question&quot;}" id="__w2_wwvr8Yg814_button">
                     <div className="ui_button_inner" id="__w2_wwvr8Yg814_inner">
                        <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                           <div id="__w2_wwvr8Yg814_icon">
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
                        <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_wwvr8Yg814_label">Follow</span><span className="ui_button_count" aria-hidden="true" id="__w2_wwvr8Yg814_count_wrapper"><span className="bullet"> · </span><span className="ui_button_count_inner" id="__w2_wwvr8Yg814_count">1</span></span></div>
                     </div>
                  </a>
               </span>
            </div>
            <div className="action_bar_inner_spacer u-margin-left--auto">&nbsp;</div>
            <div className="overflow action_item overflow_link u-relative u-pointer-events--auto">
               <div className="overflow_link" id="__w2_wQSMbCjn7_overflow_link">
                  <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="#" role="button" aria-label="More options" id="__w2_wwvr8Yg85_button">
                     <div className="ui_button_inner" id="__w2_wwvr8Yg85_inner">
                        <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                           <div id="__w2_wwvr8Yg85_icon">
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
            <div className="hover_menu hidden show_nub right_align fixed_menu_width no_body_attach" id="__w2_wQSMbCjn7_overflow_menu">
               <div className="hover_menu_contents lazy" id="__w2_wQSMbCjn7_overflow_menu_contents" /></div>
            </div>
            <div id="wwvr8Yg86">
               <div className="hidden answer_editor_wrapper" id="__w2_wwvr8Yg87_add_answer_editor_wrapper" /></div>
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
          </div>
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
  
  export default connect(mapStateToProps)(Answer);
  