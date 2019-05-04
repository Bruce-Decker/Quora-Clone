import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import rooturl from "../../utility/url";
import queryString from 'query-string'
import { createHashHistory } from 'history'


class Content extends Component {
    constructor() {
        super();
        this.state = {
           questionsAsked: [],
           showAskedList: false,
           activityType: '',
           order_direction: ''
        }
        
         
    }

    async componentWillReceiveProps(nextProps) {
       console.log(nextProps.location.search)
       console.log(this.props.location.search)
       console.log(nextProps.location.search !== this.props.location.search)

      var query
      var values = queryString.parse(nextProps.location.search)
       for (var key in values) {
         console.log(key)
         console.log(nextProps.location.search[key])
         if (key == "activityType") {
            query = "&" + key + "=" + values[key]
         }
      }   
      console.log("sdfsdfdsf " + query)

       localStorage.setItem("activityType", query);
       if (nextProps.location.search !== this.props.location.search) {
             window.location.reload()
       }

    }

   


    async componentDidMount() {
       if (localStorage.getItem("activityType") === undefined) {
         localStorage.setItem("activityType", "?activityType=all_types");
       }
      var response 
       var values = queryString.parse(this.props.location.search)
      //  console.log(values.activityType)
      //  console.log(values)
      var query
       for (var key in values) {
          console.log(key)
          console.log(values[key])
          query = "&" + key + "=" + values[key]
         // if (values.hasOwnProperty(key)) {
         //     console.log(key + " -> " + values[key]);
         // }
     }   
     console.log(query)
      
         response = await axios.get(
            rooturl + "/content?email=" + this.props.auth.user.email + query
         )
       
       if (response.data) {
         this.setState({
            questionsAsked: response.data,
            showAskedList: true
         })
       }
       console.log(response.data)
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
<div id="__w2_wsawratU13_content">
<div className="UserContentMain">
<div className="grid_page">
<div className="layout_3col_left">
<div className="UserContentFilters">
<div className="UserContentFilter UserContentFilterContentType">
   <h3>By Content Type</h3>
   <ul id="__w2_wsawratU25_filter_links">
      <li className="filter_option">
     
      <Link className="selected filter_option_link" to = {{ pathname: "/content", search: "?activityType=all_types" }}>All Types</Link></li>

      
   
   
      <li className="filter_option">

      <Link className=" filter_option_link" to =  {{ pathname: "/content", search: "?activityType=QuestionAsked" }} >Questions Asked</Link>
      
      
      </li>
     
      <li className="filter_option"><Link className=" filter_option_link" to =  {{ pathname: "/content", search: "?activityType=QuestionFollowed" }}>Questions Followed</Link></li>
      <li className="filter_option"><Link className=" filter_option_link" to =  {{ pathname: "/content", search: "?activityType=Answers" }}>Answers</Link></li>
      
   </ul>
</div>
<div className="UserContentFilterTopics UserContentFilter">
   <h3>By Topic</h3>
   <ul>
      <li className="filter_option"><a className="selected" href="#" id="__w2_wsawratU27_all_topics">All Topics</a></li>
      <li className="filter_option clearfix" id="__w2_wsawratU27_topic_selector_row">
         <div className="filter_to_topic">
            <div className="TopicSelector UserContentFilterTopicSelector Selector" tabIndex={-1} id="__w2_wsawratU32_wrapper">
               <div className="selector_input_interaction">
                  <input className="selector_input text" type="text" defaultValue data-lpignore="true" data-group="js-editable" placeholder="Search for a topic" w2cid="wsawratU32" id="__w2_wsawratU32_input" />
                  <div className="selector_spinner hidden" id="__w2_wsawratU32_spinner">
                     <div className="LoadingDots tiny">
                        <div className="dot first" />
                           <div className="dot second" />
                              <div className="dot third" /></div>
                           </div>
                        </div>
                        <div className="selector_results_container hidden" id="__w2_wsawratU32_results_container">
                           <div className="selector_results_container_inner hidden" id="__w2_wsawratU32_results" />
                              <div id="__w2_wsawratU32_empty_input_prompt" /></div>
                           </div>
                        </div>
      </li>
   </ul>
   </div>
   <div className="UserContentFilterTime UserContentFilter">
       <h3>By Year</h3>
       <ul id="__w2_wsawratU29_filter_links">
       <li className="filter_option2">
           <a className="selected filter_option_link" href="#" data-value="all_time">All Time</a></li>
           <li className="filter_option2">
            <a className=" filter_option_link" href="#" data-value={2019}>2019</a></li></ul></div>
            <div className="UserContentFilterSortOrder UserContentFilter"><h3>Sort Order</h3>
            <ul id="__w2_wsawratU31_filter_links">
                <li className="filter_option2">
                   <Link className="filter_option_link" to = {{ pathname: "/content", 
                   
                   
                   search: localStorage.getItem("activityType") + "&order=-1" 
                  
                  
                  
                  }} 
                   
                   >Newest First</Link>
                   </li>
                      <li className="filter_option">
                         <Link className=" filter_option_link" to = {{ pathname: "/content",

                        search: localStorage.getItem("activityType") + "&order=1" 
                        }}>Oldest First</Link>
                        </li>
                        
                        </ul></div>
                         
                         </div></div>
                        <div className="layout_3col_center">
                            <h3>Your Content</h3>
                                <div className="user_content_list_section">
                                   <div id="__w2_wsawratU18_list_wrapper">
                                      <div className="PagedList UserContentList" id="wsawratU23">
                 {this.state.showAskedList ?
                           <div>
                              {this.state.questionsAsked.map(question => (
                                         <div className="pagedlist_item" id="wzr1YmKw2">
                                            <div className="PagedListItem UserContentListItem">
                                            <span className="title">
                                            <span id="wzr1YmKw6">
                                            <a className="question_link" href="/unanswered/Trends-in-Silicon-Valley" target="_top" action_mousedown="QuestionLinkClickthrough" id="__w2_wzr1YmKw7_link">
                                            <span className="ui_content_title unstyled_ui_title">
                                            <span className="ui_qtext_rendered_qtext">{question.question}</span></span></a></span></span>
                                            <div className="metadata">{question.time}</div></div>  
                           </div>
                              )
                                        )}
                                        </div> : null}
                                            <div id="wzr1YmKw4">
                                            <div className="PagedListMoreButton" id="__w2_wzr1YmKw5_paged_list_more_button">
                                            <div className="pager_next" id="__w2_wzr1YmKw5_loading">
                                              <div className="__wn2_loading">
                                               <span className="__wn2_loading_spinner" /></div></div>
                                                 <div className="pager_next action_button row hidden" id="__w2_wzr1YmKw5_more">More</div>
                                                   <div className="pager_sentinel" id="__w2_wzr1YmKw5_sentinel" />
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
  
export default connect(mapStateToProps)(Content);
  