import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import rooturl from "../../utility/url";
import Pagination from "../Pagination/Pagination";

var topic_Response
class Topic extends Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            currentQuestions: [],
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
          questions: topic_Response.data,
          showTopicQuestions: true,
          currentQuestions: topic_Response.data.slice(0, 5)
        });
  
        
      }


    }

    onPageChanged = data => {
      console.log("Data " + JSON.stringify(data));
      const { questions } = this.state;
      const { currentPage, totalPages, pageLimit } = data;
  
      const offset = (currentPage - 1) * pageLimit;
      const currentQuestions = questions.slice(offset, offset + pageLimit);
  
      this.setState({ currentPage, currentQuestions, totalPages });
    };

    render() {

      const {
         questions,
         currentQuestions,
         currentPage,
         totalPages
       } = this.state;
       const totalQuestions = questions.length;

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
     {this.state.currentQuestions.map(question => 
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
               <div className="ContentFooter QuestionFooter" id="__w2_whIqsbBW32_content_footer"><a className="answer_count_prominent" href="/What-is-the-square-root-of-40-41">{question.answers.length} Answers</a><span className="bullet"> · </span><span className="question_timestamp">{question.postedDate}</span></div>
            </div>
            <div id="whIqsbBW33" />
               <div id="whIqsbBW35" /></div>
   </span>
   <span className="hidden" id="__w2_whIqsbBW20_question_story_editable" /></div></div>
   <div className="ui_story_card_footer">
   <div className="hide_on_cant_answer">
   <div id="whIqsbBW21">
   <div className="icon_action_bar" id="__w2_whIqsbBW22_action_bar">
   
   
   
   
   
   













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













   
   
   
   
   
   
   
   
   </div>
   <Pagination
                          totalRecords={totalQuestions}
                          pageLimit={5}
                          pageNeighbours={1}
                          onPageChanged={this.onPageChanged}
                        />
   
   
   
   </div>
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
  