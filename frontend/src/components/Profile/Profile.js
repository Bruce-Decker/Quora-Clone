import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from 'react-modal';
import default_image from "./default.png";
import rooturl from "../../utility/url";
import queryString from 'query-string'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')


var response_follower
class Profile extends Component {
    constructor() {
        super();
        this.state = {
          open: false,
          modalIsOpen: false,
          questions: [],
          showList: false,
          activityType: '',
          order: '',
          followers_num: 0,
          showFollow: false
        }   

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        

    }

    openModal(e) {
      e.preventDefault()
      this.setState({modalIsOpen: true});
    }d
  
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      //this.subtitle.style.color = '#f00';
    }
  
    closeModal() {
      this.setState({modalIsOpen: false});
    }

    async componentWillReceiveProps(nextProps) {
      console.log(nextProps.location.search)
      console.log(this.props.location.search)
      console.log(nextProps.location.search !== this.props.location.search)

    
      if (nextProps.location.search !== this.props.location.search) {
            window.location.reload()
      }

   }

   

    async componentDidMount() {
       console.log("sdfsdf3324 " + this.props.location.search)


       var values = queryString.parse(this.props.location.search)
    
       var query
        for (var key in values) {
           console.log(key)
           console.log(values[key])
           query = "&" + key + "=" + values[key]
     
      }   
      console.log(query)

        var response = await axios.get(
           rooturl + "/content?email=" + this.props.match.params.email + query
        )

        response_follower = await axios.get(
           rooturl + "/follow/userFollowers?email=" + this.props.match.params.email
        )
        if (response_follower) {
           this.setState({
             showFollow: true
           })
        }
        console.log("q3wsffse")
        console.log(response_follower.data[0].followers.length)
      
      if (response.data) {
        this.setState({
           questions: response.data,
           showList: true
        })
      }
      console.log(response.data)
      console.log("11231092314 " + this.props.location.search)
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
           
<div className="ContentWrapper">
<div id="__w2_wYSVVNEt12_content">
<div className="UserMain UserCombinedMain UserPage BasePage">
<div id="wYSVVNEt20" />
<div className="grid_page">
<div className="profile_wrapper">
<div className="header">
<div id="wYSVVNEt22">
   <div className="ProfilePhoto">
      <div id="wYSVVNEt49">
         <div className="profile_photo" id="__w2_wYSVVNEt50_photo">
            <div id="wYSVVNEt58"><span className="photo_tooltip Photo IdentityPhoto HoverMenu" id="__w2_wYSVVNEt59_link"><img className="profile_photo_img" src={default_image} alt="Bruce Decker" height={200} width={200} /><span id="wYSVVNEt154" /></span></div>
            <div className="x_photo hidden" id="__w2_wYSVVNEt50_x_photo">
               <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_small u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="#" role="button" aria-label="Remove this photo" id="__w2_wYSVVNEt61_button">
                  <div className="ui_button_inner" id="__w2_wYSVVNEt61_inner">
                     <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                        <div id="__w2_wYSVVNEt61_icon">
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
            <div className="edit_profile_photo hidden" id="__w2_wYSVVNEt50_edit">
               <span id="__w2_wYSVVNEt62_open_edit_photo">
                  <a className="ui_button u-nowrap ui_button--styled ui_button--SimpleLinkStyle ui_button--SimpleLinkStyle--blue ui_button--size_small u-inline-block" href="#" role="button" id="__w2_wYSVVNEt64_button">
                     <div className="ui_button_inner" id="__w2_wYSVVNEt64_inner">
                        <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_wYSVVNEt64_label">Edit Photo</span></div>
                     </div>
                  </a>
               </span>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="header_content">
<div id="wYSVVNEt24">
   <div className="ProfileNameAndSig">
      <div id="wYSVVNEt51">
         <div className="NGProfileNameEditor">
            <div id="__w2_wYSVVNEt52_initial">
               <h1><span id="wYSVVNEt55">
                  <span id="__w2_wYSVVNEt56_link">
                     <span className="user">{this.props.match.params.CourseId}</span>
                  </span>
                  </span>
               </h1>
               <a className="edit_link" href="#" id="__w2_wYSVVNEt52_edit">Edit</a>
            </div>
            <div className="hidden" id="__w2_wYSVVNEt52_editor"><input type="text" defaultValue="Bruce Decker" data-group="js-editable" placeholder="Your Full Name" w2cid="wYSVVNEt52" id="__w2_wYSVVNEt52_name" /><a className="cancel_link" href="#" id="__w2_wYSVVNEt52_cancel">Cancel</a><a className="submit_button" href="#" id="__w2_wYSVVNEt52_update">Update</a></div>
         </div>
      </div>
      <div id="wYSVVNEt53">
         <div className="FreeformCredentialEditor"><span id="wYSVVNEt65" /><span id="wYSVVNEt67">
        </span></div>
      </div>
   </div>
   <button> Follow </button>
</div>
<div id="wYSVVNEt26">
<div className="ProfileDescriptionPreviewSection">
<div id="wYSVVNEt69">
<div className="ProfileDescription">
<div className="UserDescriptionInlineEditor InlineEditor inline_editor_content" id="__w2_wYSVVNEt110_inline_editor_content">
   <span className="inline_editor_value">
   <div id="__w2_wYSVVNEt111_expanded">
      <div className="ui_qtext_expanded"><span className="ui_qtext_rendered_qtext" /></div>
   </div>
   </span>
  
</div>
<div className="rteditor inline_editor_content hidden" id="__w2_wYSVVNEt110_inline_editor_form">
<div className="inline_editor_form">
<div className="editor_wrapper" id="__w2_wYSVVNEt112_editor_outer">
   <div className="Editor ProfileDescription edit_latex web" id="__w2_wYSVVNEt112_editor">
      <div data-group="js-editable" w2cid="wYSVVNEt112" id="__w2_wYSVVNEt112_doc">
         <div className="doc empty" contentEditable="true" data-kind="doc" placeholder>
            <div className="section" data-type="plain" data-dir="LTR" data-indent={0} data-kind="section">
               <div className="span" data-kind="span">
                  <div className="content"><br /></div>
               </div>
            </div>
         </div>
      </div>
      <div className="editor_toolbar" id="__w2_wYSVVNEt115_toolbar" style={{position: 'absolute', top: '0px', left: '0px'}}><div className="scroller" id="__w2_wYSVVNEt115_scroller" style={{top: '-100%'}}>
      <div className="bar bar_link_state" id="__w2_wYSVVNEt115_bar0">
         <div className="left u-flex-auto u-margin-right--sm" />
            <div className="right" /></div>
            <div className="bar bar_regular_state" id="__w2_wYSVVNEt115_bar1">
               <div className="left u-flex-auto u-margin-right--sm">
                  <div className="modifier" tooltip="Bold" id="__w2_wYSVVNEt115_bold">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="bold" stroke="none" fill="none" fillRule="evenodd">
                                 <path d="M12.7794246,20 L6,20 L6,4 L12.6015693,4 C15.5309503,4 17.2781168,5.51905752 17.2781168,7.99168399 C17.2781168,9.68814969 16.0959024,11.1628552 14.5475153,11.4067914 L14.5475153,11.6063756 C16.5457716,11.7616078 18,13.3582814 18,15.4206514 C18,18.2259182 16.0017437,20 12.7794246,20 Z M9.15954664,6.56133056 L9.15954664,10.6306306 L11.5344377,10.6306306 C13.2397559,10.6306306 14.1708806,9.88773389 14.1708806,8.6015246 C14.1708806,7.32640333 13.3025283,6.56133056 11.7959895,6.56133056 L9.15954664,6.56133056 Z M9.15954664,17.4386694 L11.9738448,17.4386694 C13.7942459,17.4386694 14.7776809,16.6292446 14.7776809,15.1323631 C14.7776809,13.6687457 13.7628596,12.8925849 11.9006103,12.8925849 L9.15954664,12.8925849 L9.15954664,17.4386694 Z" id="B" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="bold" stroke="none" fill="none" fillRule="evenodd">
                                 <path d="M12.7794246,20 L6,20 L6,4 L12.6015693,4 C15.5309503,4 17.2781168,5.51905752 17.2781168,7.99168399 C17.2781168,9.68814969 16.0959024,11.1628552 14.5475153,11.4067914 L14.5475153,11.6063756 C16.5457716,11.7616078 18,13.3582814 18,15.4206514 C18,18.2259182 16.0017437,20 12.7794246,20 Z M9.15954664,6.56133056 L9.15954664,10.6306306 L11.5344377,10.6306306 C13.2397559,10.6306306 14.1708806,9.88773389 14.1708806,8.6015246 C14.1708806,7.32640333 13.3025283,6.56133056 11.7959895,6.56133056 L9.15954664,6.56133056 Z M9.15954664,17.4386694 L11.9738448,17.4386694 C13.7942459,17.4386694 14.7776809,16.6292446 14.7776809,15.1323631 C14.7776809,13.6687457 13.7628596,12.8925849 11.9006103,12.8925849 L9.15954664,12.8925849 L9.15954664,17.4386694 Z" id="B" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
                  <div className="modifier" tooltip="Italic" id="__w2_wYSVVNEt115_italic">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="italicize" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                 <path d="M13.9034335,6.71225071 L11.8218884,17.037037 C11.7646635,17.4321007 11.7360515,17.698005 11.7360515,17.8347578 C11.7360515,18.2450163 11.8648056,18.5223165 12.1223176,18.6666667 C12.3798296,18.8110169 12.8447749,18.8983854 13.5171674,18.9287749 L13.3240343,20 L6.5,20 L6.7360515,18.9287749 C7.50858755,18.8983854 8.06294539,18.7768292 8.39914163,18.5641026 C8.73533788,18.351376 8.96781052,17.9259291 9.09656652,17.2877493 L11.1781116,6.96296296 C11.2353365,6.56789926 11.2639485,6.30199499 11.2639485,6.16524217 C11.2639485,5.7549837 11.1351944,5.47768353 10.8776824,5.33333333 C10.6201704,5.18898313 10.1552251,5.10161459 9.48283262,5.07122507 L9.67596567,4 L16.5,4 L16.2639485,5.07122507 C15.4914124,5.10161459 14.9370546,5.22317083 14.6008584,5.43589744 C14.2646621,5.64862405 14.0321895,6.07407088 13.9034335,6.71225071 Z" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="italicize" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                 <path d="M13.9034335,6.71225071 L11.8218884,17.037037 C11.7646635,17.4321007 11.7360515,17.698005 11.7360515,17.8347578 C11.7360515,18.2450163 11.8648056,18.5223165 12.1223176,18.6666667 C12.3798296,18.8110169 12.8447749,18.8983854 13.5171674,18.9287749 L13.3240343,20 L6.5,20 L6.7360515,18.9287749 C7.50858755,18.8983854 8.06294539,18.7768292 8.39914163,18.5641026 C8.73533788,18.351376 8.96781052,17.9259291 9.09656652,17.2877493 L11.1781116,6.96296296 C11.2353365,6.56789926 11.2639485,6.30199499 11.2639485,6.16524217 C11.2639485,5.7549837 11.1351944,5.47768353 10.8776824,5.33333333 C10.6201704,5.18898313 10.1552251,5.10161459 9.48283262,5.07122507 L9.67596567,4 L16.5,4 L16.2639485,5.07122507 C15.4914124,5.10161459 14.9370546,5.22317083 14.6008584,5.43589744 C14.2646621,5.64862405 14.0321895,6.07407088 13.9034335,6.71225071 Z" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
                  <div className="modifier" tooltip="Numbers" id="__w2_wYSVVNEt115_ordered_list">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="ordered_list" stroke="none" className="icon_svg-fill_as_stroke" fill="#666666" fillRule="evenodd">
                                 <path d="M8.5 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 8 12v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V17a.5.5 0 0 1 .5-.5z" />
                                 <g id="western_arabic_numbers">
                                    <path id={1} d="M5.308 8.123h.738V4.6H5.31l-.911.627v.686l.864-.595h.044z" />
                                    <path id={2} d="M4 11.145v.012h.684v-.014c0-.325.234-.55.576-.55.322 0 .552.2.552.484 0 .23-.125.412-.62.896l-1.15 1.125v.515h2.541V13H5.04v-.043l.674-.643c.61-.573.818-.903.818-1.286 0-.606-.513-1.028-1.248-1.028C4.522 10 4 10.464 4 11.145z" />
                                    <path id={3} d="M4.908 17.585h.437c.396 0 .637.19.637.498 0 .3-.256.508-.625.508-.378 0-.63-.188-.651-.486H4c.032.664.564 1.099 1.35 1.099.803 0 1.384-.447 1.384-1.065 0-.464-.302-.786-.786-.84v-.044a.794.794 0 0 0 .65-.805c0-.554-.52-.95-1.243-.95-.77 0-1.265.42-1.29 1.086h.682c.02-.305.247-.498.588-.498.345 0 .564.181.564.464 0 .288-.227.484-.561.484h-.43v.549z" />
                                 </g>
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="ordered_list" stroke="none" className="icon_svg-fill_as_stroke" fill="#666666" fillRule="evenodd">
                                 <path d="M8.5 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 8 12v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V17a.5.5 0 0 1 .5-.5z" />
                                 <g id="western_arabic_numbers">
                                    <path id={1} d="M5.308 8.123h.738V4.6H5.31l-.911.627v.686l.864-.595h.044z" />
                                    <path id={2} d="M4 11.145v.012h.684v-.014c0-.325.234-.55.576-.55.322 0 .552.2.552.484 0 .23-.125.412-.62.896l-1.15 1.125v.515h2.541V13H5.04v-.043l.674-.643c.61-.573.818-.903.818-1.286 0-.606-.513-1.028-1.248-1.028C4.522 10 4 10.464 4 11.145z" />
                                    <path id={3} d="M4.908 17.585h.437c.396 0 .637.19.637.498 0 .3-.256.508-.625.508-.378 0-.63-.188-.651-.486H4c.032.664.564 1.099 1.35 1.099.803 0 1.384-.447 1.384-1.065 0-.464-.302-.786-.786-.84v-.044a.794.794 0 0 0 .65-.805c0-.554-.52-.95-1.243-.95-.77 0-1.265.42-1.29 1.086h.682c.02-.305.247-.498.588-.498.345 0 .564.181.564.464 0 .288-.227.484-.561.484h-.43v.549z" />
                                 </g>
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
                  <div className="modifier" tooltip="Bullets" id="__w2_wYSVVNEt115_unordered_list">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="unordered_list" stroke="none" className="icon_svg-fill_as_stroke" fill="#666666" fillRule="evenodd">
                                 <path d="M8.5 5.75h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zM4.5 5.5h1A.5.5 0 0 1 6 6v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 4 7V6a.5.5 0 0 1 .5-.5zm0 5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 4 18v-1a.5.5 0 0 1 .5-.5z" />
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="unordered_list" stroke="none" className="icon_svg-fill_as_stroke" fill="#666666" fillRule="evenodd">
                                 <path d="M8.5 5.75h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zm0 5.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zM4.5 5.5h1A.5.5 0 0 1 6 6v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 4 7V6a.5.5 0 0 1 .5-.5zm0 5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 4 18v-1a.5.5 0 0 1 .5-.5z" />
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
               </div>
               <div className="right">
                  <div className="modifier" tooltip="Photo" id="__w2_wYSVVNEt115_image">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
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
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <defs>
                                 <path d="M5,4.5 L5,18.5 L2,18.5 L2,4.5 L2,0.5 L18.5,0.5 L18.5,4.5 L5,4.5 Z" id="path-1" />
                              </defs>
                              <g id="photos" stroke="none" className="icon_svg-fill_as_stroke" fill="#666666" fillRule="evenodd">
                                 <path d="M8,7 C7.72385763,7 7.5,7.22385763 7.5,7.5 L7.5,19.5 C7.5,19.7761424 7.72385763,20 8,20 L20,20 C20.2761424,20 20.5,19.7761424 20.5,19.5 L20.5,7.5 C20.5,7.22385763 20.2761424,7 20,7 L8,7 Z M8,5.75 L20,5.75 C20.9664983,5.75 21.75,6.53350169 21.75,7.5 L21.75,19.5 C21.75,20.4664983 20.9664983,21.25 20,21.25 L8,21.25 C7.03350169,21.25 6.25,20.4664983 6.25,19.5 L6.25,7.5 C6.25,6.53350169 7.03350169,5.75 8,5.75 Z" id="front" fillRule="nonzero" />
                                 <path d="M17.5,8.25 C18.4664983,8.25 19.25,9.03350169 19.25,10 C19.25,10.9664983 18.4664983,11.75 17.5,11.75 C16.5335017,11.75 15.75,10.9664983 15.75,10 C15.75,9.03350169 16.5335017,8.25 17.5,8.25 Z" id="circle" fillRule="nonzero" />
                                 <path d="M14.1853213,14.9636194 C14.3909978,14.869742 14.5911778,14.7666161 15.0527381,14.5208411 C16.3483964,13.8309185 16.6820249,13.6784131 17.2698749,13.6784131 C18.0022858,13.6784131 19.1439621,14.1677752 21.1009221,15.2156464 C21.507238,15.4332118 21.7608643,15.8567153 21.7608643,16.3176136 L21.7608643,20 C21.7608643,20.6903559 21.2012202,21.25 20.5108643,21.25 L7.51086426,21.25 C6.82050832,21.25 6.26086426,20.6903559 6.26086426,20 L6.26086426,16.3161398 C6.26086426,15.9572681 6.41510756,15.6157069 6.68432727,15.3784103 C8.74951432,13.5581055 9.86691258,12.7681301 10.7613316,12.7683328 C11.2843915,12.7684514 11.6719119,12.9778697 12.2043358,13.3817264 C12.4750916,13.5871015 12.693573,13.7738875 13.2112546,14.2307693 C13.6714166,14.6368818 13.8743813,14.8100294 14.0768016,14.9628622 C14.0910184,14.9735963 14.1047799,14.9838532 14.1180624,14.9936249 C14.1388732,14.9845124 14.1614435,14.9745179 14.1853213,14.9636194 Z" id="land" fillRule="nonzero" />
                                 <mask id="mask-2" fill="white">
                                    <use xlinkHref="#path-1" />
                                 </mask>
                                 <g id="mask" />
                                 <path d="M4.5,3.5 C4.22385763,3.5 4,3.72385763 4,4 L4,16 C4,16.2761424 4.22385763,16.5 4.5,16.5 L16.5,16.5 C16.7761424,16.5 17,16.2761424 17,16 L17,4 C17,3.72385763 16.7761424,3.5 16.5,3.5 L4.5,3.5 Z M4.5,2.25 L16.5,2.25 C17.4664983,2.25 18.25,3.03350169 18.25,4 L18.25,16 C18.25,16.9664983 17.4664983,17.75 16.5,17.75 L4.5,17.75 C3.53350169,17.75 2.75,16.9664983 2.75,16 L2.75,4 C2.75,3.03350169 3.53350169,2.25 4.5,2.25 Z" id="back" fillRule="nonzero" mask="url(#mask-2)" />
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
                  <div className="modifier" tooltip="Link" id="__w2_wYSVVNEt115_link">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="link" stroke="none" fill="none" fillRule="evenodd">
                                 <path d="M16.3159981,10.2408946 C16.3101813,10.2245297 16.3329471,10.1991842 16.3570167,10.1752357 C16.7245798,9.80922201 17.0946501,9.44560322 17.4596056,9.07699515 C18.8102118,7.71362426 18.3893947,5.42504114 16.6440469,4.63404055 C15.5918036,4.15716509 14.3652562,4.36861081 13.5456859,5.17916938 C12.4436988,6.2689281 11.3373992,7.3546954 10.252361,8.46091875 C9.48333689,9.24493434 9.25266976,10.1943945 9.58994522,11.2357572 C9.92712039,12.2770201 10.6769891,12.8939946 11.7548064,13.1095315 C11.9044391,13.1394672 12.0590864,13.1438578 12.2157395,13.160522 L12.2157395,14.5384615 C12.0549745,14.5280838 11.8955133,14.5257888 11.7382585,14.5063306 C10.6712726,14.3741146 9.7746795,13.9103111 9.07345143,13.0999521 C8.30272236,12.2092657 7.97006024,11.1681025 8.0793764,9.99651961 C8.17284673,8.99497137 8.59256062,8.1435007 9.30823045,7.43342625 C10.3924662,6.35753773 11.4703838,5.27556228 12.5579291,4.20306647 C13.4173146,3.35568701 14.4638413,2.95714326 15.6682246,3.00364336 C16.6975015,3.04345782 17.5992094,3.42244359 18.3464706,4.13171976 C19.2364445,4.97650479 19.675715,6.02205849 19.6488372,7.24333465 C19.6253693,8.31054183 19.2342381,9.24194077 18.4874784,10.0132836 C18.0222328,10.4940507 17.5407403,10.9592512 17.066268,11.4312372 C17.0509236,11.4464046 17.0333729,11.4594765 17.0346766,11.4583789 C16.7946825,11.0518523 16.5553905,10.6463235 16.3159981,10.2408946 Z M7.53165045,13.9379083 C7.2065543,14.2599938 6.88215943,14.5825781 6.5587664,14.9064597 C5.4790865,15.9878607 5.46716464,17.6933773 6.53111569,18.7877496 C7.58625058,19.8732415 9.35118708,19.8998824 10.4397833,18.8312531 C11.5520229,17.7395748 12.6614574,16.6447036 13.7501538,15.5299765 C14.5141548,14.7477118 14.737264,13.7975197 14.4015483,12.7614181 C14.0655321,11.7243188 13.318362,11.1101812 12.2463963,10.8905684 C12.202616,10.8815883 12.1581344,10.8767989 12.1094451,10.8692157 C12.1094451,10.0312049 12.1094451,9.57736389 12.1094451,9.5076927 C12.4927692,9.53851604 12.6201984,9.53827155 12.8832641,9.61878962 C14.522098,10.1203971 15.5310195,11.1966893 15.8566166,12.8558087 C16.1303185,14.2510137 15.7326893,15.4929586 14.7335572,16.5133949 C13.6432578,17.6266254 12.5327213,18.7202992 11.4224854,19.813973 C10.6971553,20.5285878 9.81543841,20.9146314 8.79747169,20.9889665 C6.71525336,21.1410291 4.81526921,19.7054139 4.4326676,17.665539 C4.16838296,16.2560657 4.53866197,15.0140211 5.5307813,13.9708352 C5.98932216,13.4887048 6.4720073,13.0296232 6.9438726,12.5601646 C6.95489281,12.5490892 7.41804212,13.3730613 7.72410337,13.7641936 C7.6592845,13.8224644 7.59266233,13.8774424 7.53165045,13.9379083 Z" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="link" stroke="none" fill="none" fillRule="evenodd">
                                 <path d="M16.3159981,10.2408946 C16.3101813,10.2245297 16.3329471,10.1991842 16.3570167,10.1752357 C16.7245798,9.80922201 17.0946501,9.44560322 17.4596056,9.07699515 C18.8102118,7.71362426 18.3893947,5.42504114 16.6440469,4.63404055 C15.5918036,4.15716509 14.3652562,4.36861081 13.5456859,5.17916938 C12.4436988,6.2689281 11.3373992,7.3546954 10.252361,8.46091875 C9.48333689,9.24493434 9.25266976,10.1943945 9.58994522,11.2357572 C9.92712039,12.2770201 10.6769891,12.8939946 11.7548064,13.1095315 C11.9044391,13.1394672 12.0590864,13.1438578 12.2157395,13.160522 L12.2157395,14.5384615 C12.0549745,14.5280838 11.8955133,14.5257888 11.7382585,14.5063306 C10.6712726,14.3741146 9.7746795,13.9103111 9.07345143,13.0999521 C8.30272236,12.2092657 7.97006024,11.1681025 8.0793764,9.99651961 C8.17284673,8.99497137 8.59256062,8.1435007 9.30823045,7.43342625 C10.3924662,6.35753773 11.4703838,5.27556228 12.5579291,4.20306647 C13.4173146,3.35568701 14.4638413,2.95714326 15.6682246,3.00364336 C16.6975015,3.04345782 17.5992094,3.42244359 18.3464706,4.13171976 C19.2364445,4.97650479 19.675715,6.02205849 19.6488372,7.24333465 C19.6253693,8.31054183 19.2342381,9.24194077 18.4874784,10.0132836 C18.0222328,10.4940507 17.5407403,10.9592512 17.066268,11.4312372 C17.0509236,11.4464046 17.0333729,11.4594765 17.0346766,11.4583789 C16.7946825,11.0518523 16.5553905,10.6463235 16.3159981,10.2408946 Z M7.53165045,13.9379083 C7.2065543,14.2599938 6.88215943,14.5825781 6.5587664,14.9064597 C5.4790865,15.9878607 5.46716464,17.6933773 6.53111569,18.7877496 C7.58625058,19.8732415 9.35118708,19.8998824 10.4397833,18.8312531 C11.5520229,17.7395748 12.6614574,16.6447036 13.7501538,15.5299765 C14.5141548,14.7477118 14.737264,13.7975197 14.4015483,12.7614181 C14.0655321,11.7243188 13.318362,11.1101812 12.2463963,10.8905684 C12.202616,10.8815883 12.1581344,10.8767989 12.1094451,10.8692157 C12.1094451,10.0312049 12.1094451,9.57736389 12.1094451,9.5076927 C12.4927692,9.53851604 12.6201984,9.53827155 12.8832641,9.61878962 C14.522098,10.1203971 15.5310195,11.1966893 15.8566166,12.8558087 C16.1303185,14.2510137 15.7326893,15.4929586 14.7335572,16.5133949 C13.6432578,17.6266254 12.5327213,18.7202992 11.4224854,19.813973 C10.6971553,20.5285878 9.81543841,20.9146314 8.79747169,20.9889665 C6.71525336,21.1410291 4.81526921,19.7054139 4.4326676,17.665539 C4.16838296,16.2560657 4.53866197,15.0140211 5.5307813,13.9708352 C5.98932216,13.4887048 6.4720073,13.0296232 6.9438726,12.5601646 C6.95489281,12.5490892 7.41804212,13.3730613 7.72410337,13.7641936 C7.6592845,13.8224644 7.59266233,13.8774424 7.53165045,13.9379083 Z" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
                  <div className="modifier" tooltip="Show more" id="__w2_wYSVVNEt115_overflow_show">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="overflow" className="icon_svg-stroke" strokeWidth="1.5" stroke="#666" fill="none" fillRule="evenodd">
                                 <path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z" />
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="overflow" className="icon_svg-stroke" strokeWidth="1.5" stroke="#666" fill="none" fillRule="evenodd">
                                 <path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z" />
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
               </div>
            </div>
            <div className="bar bar_overflow_state" id="__w2_wYSVVNEt115_bar2">
               <div className="left u-flex-auto u-margin-right--sm">
                  <div className="modifier" tooltip="Mention user, topic or question" id="__w2_wYSVVNEt115_mention">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="mention" stroke="none" fill="none" fillRule="evenodd">
                                 <path d="M11.7457002,9.03954464 C10.2641278,9.03954464 9.39066339,10.1611744 9.39066339,12.0485321 C9.39066339,13.9251049 10.2751843,15.0683044 11.7235872,15.0683044 C13.2383292,15.0683044 14.2113022,13.8927501 14.2113022,12.0485321 C14.2113022,10.204314 13.2493857,9.03954464 11.7457002,9.03954464 Z M12.1326781,3 C17.3624079,3 21,6.25704014 21,10.9376872 C21,14.453565 19.3857494,16.6860395 16.8427518,16.6860395 C15.54914,16.6860395 14.5429975,15.9310965 14.4103194,14.8741762 L14.2334152,14.8741762 C13.7579853,15.9742361 12.7628993,16.5889754 11.4692875,16.5889754 C9.16953317,16.5889754 7.62162162,14.7447573 7.62162162,12.0053925 C7.62162162,9.38466147 9.2027027,7.55122828 11.4692875,7.55122828 C12.6302211,7.55122828 13.6253071,8.13361294 14.0565111,9.07189934 L14.2334152,9.07189934 L14.2334152,7.7561414 L15.9029484,7.7561414 L15.9029484,14.0868784 C15.9029484,14.8418214 16.3562654,15.2840024 17.1523342,15.2840024 C18.5454545,15.2840024 19.4410319,13.5692031 19.4410319,10.9161174 C19.4410319,7.02276812 16.4115479,4.35889754 11.9889435,4.35889754 C7.66584767,4.35889754 4.55896806,7.57279808 4.55896806,12.059317 C4.55896806,16.6644697 7.61056511,19.6303176 12.3427518,19.6303176 C13.8574939,19.6303176 15.3501229,19.4254044 16.046683,19.1126423 L16.046683,20.4715398 C15.0515971,20.8058718 13.7137592,21 12.3206388,21 C6.61547912,21 3,17.505692 3,11.9946075 C3,6.65608149 6.71498771,3 12.1326781,3 Z" id="@" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="mention" stroke="none" fill="none" fillRule="evenodd">
                                 <path d="M11.7457002,9.03954464 C10.2641278,9.03954464 9.39066339,10.1611744 9.39066339,12.0485321 C9.39066339,13.9251049 10.2751843,15.0683044 11.7235872,15.0683044 C13.2383292,15.0683044 14.2113022,13.8927501 14.2113022,12.0485321 C14.2113022,10.204314 13.2493857,9.03954464 11.7457002,9.03954464 Z M12.1326781,3 C17.3624079,3 21,6.25704014 21,10.9376872 C21,14.453565 19.3857494,16.6860395 16.8427518,16.6860395 C15.54914,16.6860395 14.5429975,15.9310965 14.4103194,14.8741762 L14.2334152,14.8741762 C13.7579853,15.9742361 12.7628993,16.5889754 11.4692875,16.5889754 C9.16953317,16.5889754 7.62162162,14.7447573 7.62162162,12.0053925 C7.62162162,9.38466147 9.2027027,7.55122828 11.4692875,7.55122828 C12.6302211,7.55122828 13.6253071,8.13361294 14.0565111,9.07189934 L14.2334152,9.07189934 L14.2334152,7.7561414 L15.9029484,7.7561414 L15.9029484,14.0868784 C15.9029484,14.8418214 16.3562654,15.2840024 17.1523342,15.2840024 C18.5454545,15.2840024 19.4410319,13.5692031 19.4410319,10.9161174 C19.4410319,7.02276812 16.4115479,4.35889754 11.9889435,4.35889754 C7.66584767,4.35889754 4.55896806,7.57279808 4.55896806,12.059317 C4.55896806,16.6644697 7.61056511,19.6303176 12.3427518,19.6303176 C13.8574939,19.6303176 15.3501229,19.4254044 16.046683,19.1126423 L16.046683,20.4715398 C15.0515971,20.8058718 13.7137592,21 12.3206388,21 C6.61547912,21 3,17.505692 3,11.9946075 C3,6.65608149 6.71498771,3 12.1326781,3 Z" id="@" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
                  <div className="modifier" tooltip="Code" id="__w2_wYSVVNEt115_code">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="code" stroke="none" fill="none" fillRule="evenodd">
                                 <path d="M4.07487923,11.8836207 L4.07487923,11.7284483 C5.21497585,11.612069 5.80434783,10.8265086 5.80434783,9.42025862 L5.80434783,6.54956897 C5.80434783,4.98814655 6.45169082,4.3674569 8.06521739,4.3674569 L8.06521739,4.3674569 C8.3053412,4.3674569 8.5,4.17279809 8.5,3.93267429 L8.5,3.5 C8.5,3.22385763 8.27614237,3 8,3 L7.92028986,3 C5.40821256,3 4.21980676,4.07650862 4.21980676,6.3362069 L4.21980676,8.80926724 C4.21980676,10.3512931 3.78502415,10.875 2.5,10.875 L2.5,12.7273707 C3.78502415,12.7273707 4.21980676,13.2413793 4.21980676,14.7737069 L4.21980676,17.5765086 C4.21980676,19.8943966 5.4178744,21 7.92028986,21 L8,21 C8.27614237,21 8.5,20.7761424 8.5,20.5 L8.5,20.0673257 C8.5,19.8272019 8.3053412,19.6325431 8.06521739,19.6325431 C6.46135266,19.6325431 5.80434783,19.0021552 5.80434783,17.4601293 L5.80434783,14.2209052 C5.80434783,12.7855603 5.21497585,11.9903017 4.07487923,11.8836207 Z M19.9251208,11.8836207 C18.7850242,11.9903017 18.1956522,12.7855603 18.1956522,14.2209052 L18.1956522,17.4601293 C18.1956522,19.0021552 17.5386473,19.6325431 15.9347826,19.6325431 L15.9347826,19.6325431 C15.6946588,19.6325431 15.5,19.8272019 15.5,20.0673257 L15.5,20.5 C15.5,20.7761424 15.7238576,21 16,21 L16.0797101,21 C18.5821256,21 19.7801932,19.8943966 19.7801932,17.5765086 L19.7801932,14.7737069 C19.7801932,13.2413793 20.2149758,12.7273707 21.5,12.7273707 L21.5,10.875 C20.2149758,10.875 19.7801932,10.3512931 19.7801932,8.80926724 L19.7801932,6.3362069 C19.7801932,4.07650862 18.5917874,3 16.0797101,3 L16,3 C15.7238576,3 15.5,3.22385763 15.5,3.5 L15.5,3.93267429 C15.5,4.17279809 15.6946588,4.3674569 15.9347826,4.3674569 C17.5483092,4.3674569 18.1956522,4.98814655 18.1956522,6.54956897 L18.1956522,9.42025862 C18.1956522,10.8265086 18.7850242,11.612069 19.9251208,11.7284483 L19.9251208,11.8836207 Z" id="{-}" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="code" stroke="none" fill="none" fillRule="evenodd">
                                 <path d="M4.07487923,11.8836207 L4.07487923,11.7284483 C5.21497585,11.612069 5.80434783,10.8265086 5.80434783,9.42025862 L5.80434783,6.54956897 C5.80434783,4.98814655 6.45169082,4.3674569 8.06521739,4.3674569 L8.06521739,4.3674569 C8.3053412,4.3674569 8.5,4.17279809 8.5,3.93267429 L8.5,3.5 C8.5,3.22385763 8.27614237,3 8,3 L7.92028986,3 C5.40821256,3 4.21980676,4.07650862 4.21980676,6.3362069 L4.21980676,8.80926724 C4.21980676,10.3512931 3.78502415,10.875 2.5,10.875 L2.5,12.7273707 C3.78502415,12.7273707 4.21980676,13.2413793 4.21980676,14.7737069 L4.21980676,17.5765086 C4.21980676,19.8943966 5.4178744,21 7.92028986,21 L8,21 C8.27614237,21 8.5,20.7761424 8.5,20.5 L8.5,20.0673257 C8.5,19.8272019 8.3053412,19.6325431 8.06521739,19.6325431 C6.46135266,19.6325431 5.80434783,19.0021552 5.80434783,17.4601293 L5.80434783,14.2209052 C5.80434783,12.7855603 5.21497585,11.9903017 4.07487923,11.8836207 Z M19.9251208,11.8836207 C18.7850242,11.9903017 18.1956522,12.7855603 18.1956522,14.2209052 L18.1956522,17.4601293 C18.1956522,19.0021552 17.5386473,19.6325431 15.9347826,19.6325431 L15.9347826,19.6325431 C15.6946588,19.6325431 15.5,19.8272019 15.5,20.0673257 L15.5,20.5 C15.5,20.7761424 15.7238576,21 16,21 L16.0797101,21 C18.5821256,21 19.7801932,19.8943966 19.7801932,17.5765086 L19.7801932,14.7737069 C19.7801932,13.2413793 20.2149758,12.7273707 21.5,12.7273707 L21.5,10.875 C20.2149758,10.875 19.7801932,10.3512931 19.7801932,8.80926724 L19.7801932,6.3362069 C19.7801932,4.07650862 18.5917874,3 16.0797101,3 L16,3 C15.7238576,3 15.5,3.22385763 15.5,3.5 L15.5,3.93267429 C15.5,4.17279809 15.6946588,4.3674569 15.9347826,4.3674569 C17.5483092,4.3674569 18.1956522,4.98814655 18.1956522,6.54956897 L18.1956522,9.42025862 C18.1956522,10.8265086 18.7850242,11.612069 19.9251208,11.7284483 L19.9251208,11.8836207 Z" id="{-}" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
                  <div className="modifier" tooltip="Math" id="__w2_wYSVVNEt115_math">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="math" stroke="none" fill="none" fillRule="evenodd">
                                 <path d="M10.8576518,12.1088948 L7.10908956,6.01148705 C7.10557206,6.00576548 7.10213373,5.99999561 7.09877556,5.99417909 C7.02047302,5.85855512 6.99066469,5.70824045 7.0039705,5.5633137 C7.00135029,5.5425781 7,5.52144674 7,5.5 L7,5 C7,4.72385763 7.22385763,4.5 7.5,4.5 L16.5,4.5 C16.7761424,4.5 17,4.72385763 17,5 L17,5.5 C17,5.77614237 16.7761424,6 16.5,6 L8.8621504,6 L12.3640464,11.6961807 C12.3675639,11.7019023 12.3710022,11.7076721 12.3743604,11.7134886 C12.4469777,11.8392655 12.4778871,11.9776772 12.4713798,12.1127089 C12.4764786,12.245478 12.4453922,12.3812376 12.3740519,12.5048027 C12.3706937,12.5106192 12.3672554,12.5163891 12.3637379,12.5221107 L8.90381111,18.1500244 L16.5,18.1500244 C16.7761424,18.1500244 17,18.373882 17,18.6500244 L17,19.1500244 C17,19.4261668 16.7761424,19.6500244 16.5,19.6500244 L7.5,19.6500244 C7.22385763,19.6500244 7,19.4261668 7,19.1500244 L7,18.6500244 C7,18.6386239 7.00038155,18.6273125 7.00113259,18.6161022 C6.99605476,18.4833675 7.02714362,18.347648 7.09846467,18.2241163 C7.10182284,18.2182998 7.10526116,18.2125299 7.10877867,18.2068083 L10.8576518,12.1088948 Z" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="math" stroke="none" fill="none" fillRule="evenodd">
                                 <path d="M10.8576518,12.1088948 L7.10908956,6.01148705 C7.10557206,6.00576548 7.10213373,5.99999561 7.09877556,5.99417909 C7.02047302,5.85855512 6.99066469,5.70824045 7.0039705,5.5633137 C7.00135029,5.5425781 7,5.52144674 7,5.5 L7,5 C7,4.72385763 7.22385763,4.5 7.5,4.5 L16.5,4.5 C16.7761424,4.5 17,4.72385763 17,5 L17,5.5 C17,5.77614237 16.7761424,6 16.5,6 L8.8621504,6 L12.3640464,11.6961807 C12.3675639,11.7019023 12.3710022,11.7076721 12.3743604,11.7134886 C12.4469777,11.8392655 12.4778871,11.9776772 12.4713798,12.1127089 C12.4764786,12.245478 12.4453922,12.3812376 12.3740519,12.5048027 C12.3706937,12.5106192 12.3672554,12.5163891 12.3637379,12.5221107 L8.90381111,18.1500244 L16.5,18.1500244 C16.7761424,18.1500244 17,18.373882 17,18.6500244 L17,19.1500244 C17,19.4261668 16.7761424,19.6500244 16.5,19.6500244 L7.5,19.6500244 C7.22385763,19.6500244 7,19.4261668 7,19.1500244 L7,18.6500244 C7,18.6386239 7.00038155,18.6273125 7.00113259,18.6161022 C6.99605476,18.4833675 7.02714362,18.347648 7.09846467,18.2241163 C7.10182284,18.2182998 7.10526116,18.2125299 7.10877867,18.2068083 L10.8576518,12.1088948 Z" className="icon_svg-fill_as_stroke" fill="#666666" />
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
               </div>
               <div className="right">
                  <div className="modifier" tooltip="Undo" id="__w2_wYSVVNEt115_undo">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="undo" stroke="none" className="icon_svg-fill_as_stroke" fill="#666" fillRule="evenodd">
                                 <path d="M19.5,9.10000002 L19.5,20.6 C19.5,20.8761424 19.2761424,21.1 19,21.1 L18.5,21.1 C18.2238576,21.1 18,20.8761424 18,20.6 L18,9.60000002 L7,9.60000002 C6.72385763,9.60000002 6.5,9.3761424 6.5,9.10000002 L6.5,8.60000002 C6.5,8.32385765 6.72385763,8.10000002 7,8.10000002 L19,8.10000002 C19.2761424,8.10000002 19.5,8.32385765 19.5,8.60000002 L19.5,9.10000002 Z" />
                                 <path d="M6.49957932,8.85227498 L10.0647475,12.4174431 C10.2600096,12.6127053 10.2600096,12.9292878 10.0647475,13.1245499 L9.71119409,13.4781033 C9.51593194,13.6733655 9.19934945,13.6733655 9.00408731,13.4781033 L4.76144662,9.23546262 C4.65627527,9.13029127 4.60775091,8.98992399 4.61587354,8.85227498 C4.60775091,8.71462597 4.65627527,8.57425869 4.76144662,8.46908734 L9.00408731,4.22644665 C9.19934945,4.03118451 9.51593194,4.03118451 9.71119409,4.22644665 L10.0647475,4.58000004 C10.2600096,4.77526219 10.2600096,5.09184468 10.0647475,5.28710682 L6.49957932,8.85227498 Z" id="arrow" />
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="undo" stroke="none" className="icon_svg-fill_as_stroke" fill="#666" fillRule="evenodd">
                                 <path d="M19.5,9.10000002 L19.5,20.6 C19.5,20.8761424 19.2761424,21.1 19,21.1 L18.5,21.1 C18.2238576,21.1 18,20.8761424 18,20.6 L18,9.60000002 L7,9.60000002 C6.72385763,9.60000002 6.5,9.3761424 6.5,9.10000002 L6.5,8.60000002 C6.5,8.32385765 6.72385763,8.10000002 7,8.10000002 L19,8.10000002 C19.2761424,8.10000002 19.5,8.32385765 19.5,8.60000002 L19.5,9.10000002 Z" />
                                 <path d="M6.49957932,8.85227498 L10.0647475,12.4174431 C10.2600096,12.6127053 10.2600096,12.9292878 10.0647475,13.1245499 L9.71119409,13.4781033 C9.51593194,13.6733655 9.19934945,13.6733655 9.00408731,13.4781033 L4.76144662,9.23546262 C4.65627527,9.13029127 4.60775091,8.98992399 4.61587354,8.85227498 C4.60775091,8.71462597 4.65627527,8.57425869 4.76144662,8.46908734 L9.00408731,4.22644665 C9.19934945,4.03118451 9.51593194,4.03118451 9.71119409,4.22644665 L10.0647475,4.58000004 C10.2600096,4.77526219 10.2600096,5.09184468 10.0647475,5.28710682 L6.49957932,8.85227498 Z" id="arrow" />
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
                  <div className="modifier" tooltip="Redo" id="__w2_wYSVVNEt115_redo">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g stroke="none" className="icon_svg-fill_as_stroke" fill="#666" fillRule="evenodd">
                                 <path d="M17.5,9.10000002 L17.5,20.6 C17.5,20.8761424 17.2761424,21.1 17,21.1 L16.5,21.1 C16.2238576,21.1 16,20.8761424 16,20.6 L16,9.60000002 L5,9.60000002 C4.72385763,9.60000002 4.5,9.3761424 4.5,9.10000002 L4.5,8.60000002 C4.5,8.32385765 4.72385763,8.10000002 5,8.10000002 L17,8.10000002 C17.2761424,8.10000002 17.5,8.32385765 17.5,8.60000002 L17.5,9.10000002 Z" id="Combined-Shape" transform="translate(11.000000, 14.600000) scale(-1, 1) translate(-11.000000, -14.600000) " />
                                 <path d="M15.6733852,8.85227498 L19.2385534,12.4174431 C19.4338155,12.6127053 19.4338155,12.9292878 19.2385534,13.1245499 L18.885,13.4781033 C18.6897378,13.6733655 18.3731554,13.6733655 18.1778932,13.4781033 L13.9352525,9.23546262 C13.8300812,9.13029127 13.7815568,8.98992399 13.7896794,8.85227498 C13.7815568,8.71462597 13.8300812,8.57425869 13.9352525,8.46908734 L18.1778932,4.22644665 C18.3731554,4.03118451 18.6897378,4.03118451 18.885,4.22644665 L19.2385534,4.58000004 C19.4338155,4.77526219 19.4338155,5.09184468 19.2385534,5.28710682 L15.6733852,8.85227498 Z" transform="translate(16.586903, 8.852275) scale(-1, 1) translate(-16.586903, -8.852275) " />
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g stroke="none" className="icon_svg-fill_as_stroke" fill="#666" fillRule="evenodd">
                                 <path d="M17.5,9.10000002 L17.5,20.6 C17.5,20.8761424 17.2761424,21.1 17,21.1 L16.5,21.1 C16.2238576,21.1 16,20.8761424 16,20.6 L16,9.60000002 L5,9.60000002 C4.72385763,9.60000002 4.5,9.3761424 4.5,9.10000002 L4.5,8.60000002 C4.5,8.32385765 4.72385763,8.10000002 5,8.10000002 L17,8.10000002 C17.2761424,8.10000002 17.5,8.32385765 17.5,8.60000002 L17.5,9.10000002 Z" id="Combined-Shape" transform="translate(11.000000, 14.600000) scale(-1, 1) translate(-11.000000, -14.600000) " />
                                 <path d="M15.6733852,8.85227498 L19.2385534,12.4174431 C19.4338155,12.6127053 19.4338155,12.9292878 19.2385534,13.1245499 L18.885,13.4781033 C18.6897378,13.6733655 18.3731554,13.6733655 18.1778932,13.4781033 L13.9352525,9.23546262 C13.8300812,9.13029127 13.7815568,8.98992399 13.7896794,8.85227498 C13.7815568,8.71462597 13.8300812,8.57425869 13.9352525,8.46908734 L18.1778932,4.22644665 C18.3731554,4.03118451 18.6897378,4.03118451 18.885,4.22644665 L19.2385534,4.58000004 C19.4338155,4.77526219 19.4338155,5.09184468 19.2385534,5.28710682 L15.6733852,8.85227498 Z" transform="translate(16.586903, 8.852275) scale(-1, 1) translate(-16.586903, -8.852275) " />
                              </g>
                           </svg>
                        </span>
                     </span>
                  </div>
                  <div className="modifier" tooltip="Show less" id="__w2_wYSVVNEt115_overflow_hide">
                     <span className="default_icon">
                        <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="close" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                                 <path d="M5.5,5.5 L18.5,18.5" />
                                 <path d="M5.5,18.5 L18.5,5.5" />
                              </g>
                           </svg>
                        </span>
                     </span>
                     <span className="active_icon">
                        <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g id="close" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
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
         <div className="hidden" id="__w2_wYSVVNEt115_storage">
            <div className="u-inline-flex" id="__w2_wYSVVNEt115_link_input_icon">
               <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                     <g id="link" stroke="none" fill="none" fillRule="evenodd">
                        <path d="M16.3159981,10.2408946 C16.3101813,10.2245297 16.3329471,10.1991842 16.3570167,10.1752357 C16.7245798,9.80922201 17.0946501,9.44560322 17.4596056,9.07699515 C18.8102118,7.71362426 18.3893947,5.42504114 16.6440469,4.63404055 C15.5918036,4.15716509 14.3652562,4.36861081 13.5456859,5.17916938 C12.4436988,6.2689281 11.3373992,7.3546954 10.252361,8.46091875 C9.48333689,9.24493434 9.25266976,10.1943945 9.58994522,11.2357572 C9.92712039,12.2770201 10.6769891,12.8939946 11.7548064,13.1095315 C11.9044391,13.1394672 12.0590864,13.1438578 12.2157395,13.160522 L12.2157395,14.5384615 C12.0549745,14.5280838 11.8955133,14.5257888 11.7382585,14.5063306 C10.6712726,14.3741146 9.7746795,13.9103111 9.07345143,13.0999521 C8.30272236,12.2092657 7.97006024,11.1681025 8.0793764,9.99651961 C8.17284673,8.99497137 8.59256062,8.1435007 9.30823045,7.43342625 C10.3924662,6.35753773 11.4703838,5.27556228 12.5579291,4.20306647 C13.4173146,3.35568701 14.4638413,2.95714326 15.6682246,3.00364336 C16.6975015,3.04345782 17.5992094,3.42244359 18.3464706,4.13171976 C19.2364445,4.97650479 19.675715,6.02205849 19.6488372,7.24333465 C19.6253693,8.31054183 19.2342381,9.24194077 18.4874784,10.0132836 C18.0222328,10.4940507 17.5407403,10.9592512 17.066268,11.4312372 C17.0509236,11.4464046 17.0333729,11.4594765 17.0346766,11.4583789 C16.7946825,11.0518523 16.5553905,10.6463235 16.3159981,10.2408946 Z M7.53165045,13.9379083 C7.2065543,14.2599938 6.88215943,14.5825781 6.5587664,14.9064597 C5.4790865,15.9878607 5.46716464,17.6933773 6.53111569,18.7877496 C7.58625058,19.8732415 9.35118708,19.8998824 10.4397833,18.8312531 C11.5520229,17.7395748 12.6614574,16.6447036 13.7501538,15.5299765 C14.5141548,14.7477118 14.737264,13.7975197 14.4015483,12.7614181 C14.0655321,11.7243188 13.318362,11.1101812 12.2463963,10.8905684 C12.202616,10.8815883 12.1581344,10.8767989 12.1094451,10.8692157 C12.1094451,10.0312049 12.1094451,9.57736389 12.1094451,9.5076927 C12.4927692,9.53851604 12.6201984,9.53827155 12.8832641,9.61878962 C14.522098,10.1203971 15.5310195,11.1966893 15.8566166,12.8558087 C16.1303185,14.2510137 15.7326893,15.4929586 14.7335572,16.5133949 C13.6432578,17.6266254 12.5327213,18.7202992 11.4224854,19.813973 C10.6971553,20.5285878 9.81543841,20.9146314 8.79747169,20.9889665 C6.71525336,21.1410291 4.81526921,19.7054139 4.4326676,17.665539 C4.16838296,16.2560657 4.53866197,15.0140211 5.5307813,13.9708352 C5.98932216,13.4887048 6.4720073,13.0296232 6.9438726,12.5601646 C6.95489281,12.5490892 7.41804212,13.3730613 7.72410337,13.7641936 C7.6592845,13.8224644 7.59266233,13.8774424 7.53165045,13.9379083 Z" className="icon_svg-fill_as_stroke" fill="#666666" />
                     </g>
                  </svg>
               </span>
            </div>
            <input className="u-ltr u-text-align--left" type="url" formNoValidate="formnovalidate" data-group="js-editable" placeholder="Enter URL" w2cid="wYSVVNEt115" id="__w2_wYSVVNEt115_link_input" />
            <div className="cite" id="__w2_wYSVVNEt115_cite"><input type="checkbox" formNoValidate="formnovalidate" data-group="js-editable" w2cid="wYSVVNEt115" id="__w2_wYSVVNEt115_is_citation" /><label htmlFor="__w2_wYSVVNEt115_is_citation">Footnote</label></div>
            <button type="button" id="__w2_wYSVVNEt115_link_save">Add</button>
            <div className="modifier" tooltip="Quote" id="__w2_wYSVVNEt115_quote">
               <span className="default_icon">
                  <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="quote" stroke="none" className="icon_svg-fill_as_stroke" fill="#666" fillRule="evenodd">
                           <path d="M10.2871465,9.58641803 C10.2901873,9.52328208 10.2917252,9.45975193 10.2917252,9.39586259 C10.2917252,7.24423709 8.54748808,5.5 6.39586259,5.5 C4.24423709,5.5 2.5,7.24423709 2.5,9.39586259 C2.5,11.5474881 4.24423709,13.2917252 6.39586259,13.2917252 C6.88026119,13.2917252 7.34401164,13.20332 7.7718597,13.0417638 C7.68272734,13.9167241 7.46959414,14.6848987 7.00636933,15.3013978 C5.96466609,16.6877852 4.62910247,17.3155779 3.59327148,17.5457534 C3.31584085,17.6074022 3.13809098,17.8001269 3.15285308,18.0802518 C3.1674893,18.3481768 3.40406057,18.4952977 3.66826144,18.4999094 C3.68045532,18.5001222 3.6923164,18.4999904 3.70452803,18.4991871 C4.99291217,18.4305328 6.5,17.5 8,16 C9.47213042,14.5278696 10.3128848,12.216491 10.2871465,9.58641803 Z M8.88388348,16.8838835 C7.13785973,18.6299072 5.39347429,19.6609614 3.78657891,19.7464913 C3.70591747,19.750275 3.70591747,19.750275 3.64644593,19.749719 C2.76126999,19.7342682 1.95828281,19.1290445 1.90458516,18.1460333 C1.85647066,17.2330146 2.46620565,16.5157126 3.32211872,16.3255173 C4.31358052,16.1052012 5.27646389,15.5228173 6.00703147,14.5505157 C3.35526014,14.3375828 1.25,12.1125776 1.25,9.39586259 C1.25,6.55388116 3.55388116,4.25 6.39586259,4.25 C9.23784402,4.25 11.5417252,6.55388116 11.5417252,9.39586259 C11.5417252,9.46698524 11.5402747,9.53797314 11.5373801,9.60879397 C11.5583072,12.5269844 10.6112615,15.1565054 8.88388348,16.8838835 Z" fillRule="nonzero" />
                           <path d="M21.5371465,9.58641803 C21.5401873,9.52328208 21.5417252,9.45975193 21.5417252,9.39586259 C21.5417252,7.24423709 19.7974881,5.5 17.6458626,5.5 C15.4942371,5.5 13.75,7.24423709 13.75,9.39586259 C13.75,11.5474881 15.4942371,13.2917252 17.6458626,13.2917252 C18.1302612,13.2917252 18.5940116,13.20332 19.0218597,13.0417638 C18.9327273,13.9167241 18.7195941,14.6848987 18.2563693,15.3013978 C17.2146661,16.6877852 15.8791025,17.3155779 14.8432715,17.5457534 C14.5658409,17.6074022 14.388091,17.8001269 14.4028531,18.0802518 C14.4174893,18.3481768 14.6540606,18.4952977 14.9182614,18.4999094 C14.9304553,18.5001222 14.9423164,18.4999904 14.954528,18.4991871 C16.2429122,18.4305328 17.75,17.5 19.25,16 C20.7221304,14.5278696 21.5628848,12.216491 21.5371465,9.58641803 Z M20.1338835,16.8838835 C18.3878597,18.6299072 16.6434743,19.6609614 15.0365789,19.7464913 C14.9559175,19.750275 14.9559175,19.750275 14.8964459,19.749719 C14.01127,19.7342682 13.2082828,19.1290445 13.1545852,18.1460333 C13.1064707,17.2330146 13.7162056,16.5157126 14.5721187,16.3255173 C15.5635805,16.1052012 16.5264639,15.5228173 17.2570315,14.5505157 C14.6052601,14.3375828 12.5,12.1125776 12.5,9.39586259 C12.5,6.55388116 14.8038812,4.25 17.6458626,4.25 C20.487844,4.25 22.7917252,6.55388116 22.7917252,9.39586259 C22.7917252,9.46698524 22.7902747,9.53797314 22.7873801,9.60879397 C22.8083072,12.5269844 21.8612615,15.1565054 20.1338835,16.8838835 Z" fillRule="nonzero" />
                        </g>
                     </svg>
                  </span>
               </span>
               <span className="active_icon">
                  <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" className="icon_svg-fill_as_stroke" fill="#666666" fillRule="evenodd">
                           <path d="M8.35355339,16.3535534 C6.72599111,17.9811157 5.13096926,18.9238855 3.73734838,18.9981088 C3.69419851,19.0001438 3.69419851,19.0001438 3.65953523,18.9998332 C3.13423696,18.9906641 2.68327366,18.6507662 2.65354591,18.1065644 C2.62568674,17.57791 2.97083595,17.1718709 3.48481037,17.0576589 C4.64402641,16.8000656 5.7637603,16.1228134 6.60663419,15.0010449 C6.86429856,14.6581232 7.04373736,14.2411325 7.15896292,13.7256468 C6.90892445,13.7694425 6.65383975,13.7917252 6.39586259,13.7917252 C3.96809472,13.7917252 2,11.8236305 2,9.39586259 C2,6.96809472 3.96809472,5 6.39586259,5 C8.82363046,5 10.7917252,6.96809472 10.7917252,9.39586259 C10.7917252,9.46265302 10.790232,9.52928412 10.7872534,9.59572171 C10.8109126,12.3309469 9.93345046,14.7736563 8.35355339,16.3535534 Z M19.6035534,16.3535534 C17.9759911,17.9811157 16.3809693,18.9238855 14.9873484,18.9981088 C14.9441985,19.0001438 14.9441985,19.0001438 14.9095352,18.9998332 C14.384237,18.9906641 13.9332737,18.6507662 13.9035459,18.1065644 C13.8756867,17.57791 14.220836,17.1718709 14.7348104,17.0576589 C15.8940264,16.8000656 17.0137603,16.1228134 17.8566342,15.0010449 C18.1142986,14.6581232 18.2937374,14.2411325 18.4089629,13.7256468 C18.1589244,13.7694425 17.9038397,13.7917252 17.6458626,13.7917252 C15.2180947,13.7917252 13.25,11.8236305 13.25,9.39586259 C13.25,6.96809472 15.2180947,5 17.6458626,5 C20.0736305,5 22.0417252,6.96809472 22.0417252,9.39586259 C22.0417252,9.46265302 22.040232,9.52928412 22.0372534,9.59572171 C22.0609126,12.3309469 21.1834505,14.7736563 19.6035534,16.3535534 Z" id="quote" fillRule="nonzero" />
                        </g>
                     </svg>
                  </span>
               </span>
            </div>
            <div className="modifier" tooltip="Indent" id="__w2_wYSVVNEt115_indent">
               <span className="default_icon">
                  <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="indent_left" stroke="none" fill="none" fillRule="evenodd">
                           <path d="M7.08890057,12.5 L5,12.5 C4.72385763,12.5 4.5,12.2761424 4.5,12 L4.5,11.5 C4.5,11.2238576 4.72385763,11 5,11 L7.08933372,11 L6.40900974,10.319676 C6.2137476,10.1244139 6.2137476,9.80783138 6.40900974,9.61256924 L6.76256313,9.25901585 C6.95782528,9.0637537 7.27440777,9.0637537 7.46966991,9.25901585 L9.59099026,11.3803362 C9.69266408,11.48201 9.74139591,11.6165778 9.73718576,11.7497834 C9.74139591,11.8829891 9.69266408,12.0175568 9.59099026,12.1192307 L7.46966991,14.240551 C7.27440777,14.4358131 6.95782528,14.4358131 6.76256313,14.240551 L6.40900974,13.8869976 C6.2137476,13.6917355 6.2137476,13.375153 6.40900974,13.1798908 L7.08890057,12.5 Z M5,5.49998636 L19,5.49998636 C19.2761424,5.49998636 19.5,5.72384398 19.5,5.99998636 L19.5,6.5 C19.5,6.77614237 19.2761424,7 19,7 L5,7 C4.72385763,7 4.5,6.77614237 4.5,6.5 L4.5,5.99998636 C4.5,5.72384398 4.72385763,5.49998636 5,5.49998636 Z M11,11 L19,11 C19.2761424,11 19.5,11.2238576 19.5,11.5 L19.5,12 C19.5,12.2761424 19.2761424,12.5 19,12.5 L11,12.5 C10.7238576,12.5 10.5,12.2761424 10.5,12 L10.5,11.5 C10.5,11.2238576 10.7238576,11 11,11 Z M5,16.5 L19,16.5 C19.2761424,16.5 19.5,16.7238576 19.5,17 L19.5,17.5 C19.5,17.7761424 19.2761424,18 19,18 L5,18 C4.72385763,18 4.5,17.7761424 4.5,17.5 L4.5,17 C4.5,16.7238576 4.72385763,16.5 5,16.5 Z" className="icon_svg-fill_as_stroke" fill="#666666" />
                        </g>
                     </svg>
                  </span>
               </span>
               <span className="active_icon">
                  <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="indent_left" stroke="none" fill="none" fillRule="evenodd">
                           <path d="M7.08890057,12.5 L5,12.5 C4.72385763,12.5 4.5,12.2761424 4.5,12 L4.5,11.5 C4.5,11.2238576 4.72385763,11 5,11 L7.08933372,11 L6.40900974,10.319676 C6.2137476,10.1244139 6.2137476,9.80783138 6.40900974,9.61256924 L6.76256313,9.25901585 C6.95782528,9.0637537 7.27440777,9.0637537 7.46966991,9.25901585 L9.59099026,11.3803362 C9.69266408,11.48201 9.74139591,11.6165778 9.73718576,11.7497834 C9.74139591,11.8829891 9.69266408,12.0175568 9.59099026,12.1192307 L7.46966991,14.240551 C7.27440777,14.4358131 6.95782528,14.4358131 6.76256313,14.240551 L6.40900974,13.8869976 C6.2137476,13.6917355 6.2137476,13.375153 6.40900974,13.1798908 L7.08890057,12.5 Z M5,5.49998636 L19,5.49998636 C19.2761424,5.49998636 19.5,5.72384398 19.5,5.99998636 L19.5,6.5 C19.5,6.77614237 19.2761424,7 19,7 L5,7 C4.72385763,7 4.5,6.77614237 4.5,6.5 L4.5,5.99998636 C4.5,5.72384398 4.72385763,5.49998636 5,5.49998636 Z M11,11 L19,11 C19.2761424,11 19.5,11.2238576 19.5,11.5 L19.5,12 C19.5,12.2761424 19.2761424,12.5 19,12.5 L11,12.5 C10.7238576,12.5 10.5,12.2761424 10.5,12 L10.5,11.5 C10.5,11.2238576 10.7238576,11 11,11 Z M5,16.5 L19,16.5 C19.2761424,16.5 19.5,16.7238576 19.5,17 L19.5,17.5 C19.5,17.7761424 19.2761424,18 19,18 L5,18 C4.72385763,18 4.5,17.7761424 4.5,17.5 L4.5,17 C4.5,16.7238576 4.72385763,16.5 5,16.5 Z" className="icon_svg-fill_as_stroke" fill="#666666" />
                        </g>
                     </svg>
                  </span>
               </span>
            </div>
            <div className="modifier" tooltip="Unindent" id="__w2_wYSVVNEt115_deindent">
               <span className="default_icon">
                  <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="indent_right" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                           <path d="M7.08890057,12.5 L5,12.5 C4.72385763,12.5 4.5,12.2761424 4.5,12 L4.5,11.5 C4.5,11.2238576 4.72385763,11 5,11 L7.08933372,11 L6.40900974,10.319676 C6.2137476,10.1244139 6.2137476,9.80783138 6.40900974,9.61256924 L6.76256313,9.25901585 C6.95782528,9.0637537 7.27440777,9.0637537 7.46966991,9.25901585 L9.59099026,11.3803362 C9.69266408,11.48201 9.74139591,11.6165778 9.73718576,11.7497834 C9.74139591,11.8829891 9.69266408,12.0175568 9.59099026,12.1192307 L7.46966991,14.240551 C7.27440777,14.4358131 6.95782528,14.4358131 6.76256313,14.240551 L6.40900974,13.8869976 C6.2137476,13.6917355 6.2137476,13.375153 6.40900974,13.1798908 L7.08890057,12.5 Z M5,5.5 L19,5.5 C19.2761424,5.5 19.5,5.72385763 19.5,6 L19.5,6.5 C19.5,6.77614237 19.2761424,7 19,7 L5,7 C4.72385763,7 4.5,6.77614237 4.5,6.5 L4.5,6 C4.5,5.72385763 4.72385763,5.5 5,5.5 Z M11,11 L19,11 C19.2761424,11 19.5,11.2238576 19.5,11.5 L19.5,12 C19.5,12.2761424 19.2761424,12.5 19,12.5 L11,12.5 C10.7238576,12.5 10.5,12.2761424 10.5,12 L10.5,11.5 C10.5,11.2238576 10.7238576,11 11,11 Z M5,16.5 L19,16.5 C19.2761424,16.5 19.5,16.7238576 19.5,17 L19.5,17.5 C19.5,17.7761424 19.2761424,18 19,18 L5,18 C4.72385763,18 4.5,17.7761424 4.5,17.5 L4.5,17 C4.5,16.7238576 4.72385763,16.5 5,16.5 Z" className="icon_svg-fill_as_stroke" fill="#666666" transform="translate(12.000000, 11.750000) scale(-1, 1) translate(-12.000000, -11.750000) " />
                        </g>
                     </svg>
                  </span>
               </span>
               <span className="active_icon">
                  <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="indent_right" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                           <path d="M7.08890057,12.5 L5,12.5 C4.72385763,12.5 4.5,12.2761424 4.5,12 L4.5,11.5 C4.5,11.2238576 4.72385763,11 5,11 L7.08933372,11 L6.40900974,10.319676 C6.2137476,10.1244139 6.2137476,9.80783138 6.40900974,9.61256924 L6.76256313,9.25901585 C6.95782528,9.0637537 7.27440777,9.0637537 7.46966991,9.25901585 L9.59099026,11.3803362 C9.69266408,11.48201 9.74139591,11.6165778 9.73718576,11.7497834 C9.74139591,11.8829891 9.69266408,12.0175568 9.59099026,12.1192307 L7.46966991,14.240551 C7.27440777,14.4358131 6.95782528,14.4358131 6.76256313,14.240551 L6.40900974,13.8869976 C6.2137476,13.6917355 6.2137476,13.375153 6.40900974,13.1798908 L7.08890057,12.5 Z M5,5.5 L19,5.5 C19.2761424,5.5 19.5,5.72385763 19.5,6 L19.5,6.5 C19.5,6.77614237 19.2761424,7 19,7 L5,7 C4.72385763,7 4.5,6.77614237 4.5,6.5 L4.5,6 C4.5,5.72385763 4.72385763,5.5 5,5.5 Z M11,11 L19,11 C19.2761424,11 19.5,11.2238576 19.5,11.5 L19.5,12 C19.5,12.2761424 19.2761424,12.5 19,12.5 L11,12.5 C10.7238576,12.5 10.5,12.2761424 10.5,12 L10.5,11.5 C10.5,11.2238576 10.7238576,11 11,11 Z M5,16.5 L19,16.5 C19.2761424,16.5 19.5,16.7238576 19.5,17 L19.5,17.5 C19.5,17.7761424 19.2761424,18 19,18 L5,18 C4.72385763,18 4.5,17.7761424 4.5,17.5 L4.5,17 C4.5,16.7238576 4.72385763,16.5 5,16.5 Z" className="icon_svg-fill_as_stroke" fill="#666666" transform="translate(12.000000, 11.750000) scale(-1, 1) translate(-12.000000, -11.750000) " />
                        </g>
                     </svg>
                  </span>
               </span>
            </div>
            <div className="modifier" tooltip="Video" id="__w2_wYSVVNEt115_video">
               <span className="default_icon">
                  <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="record" className="icon_svg-stroke" strokeWidth="1.5" stroke="#666" fill="none" fillRule="evenodd">
                           <path d="M4.25,5.25 L15.75,5.25 C16.3022847,5.25 16.75,5.69771525 16.75,6.25 L16.75,17.75 C16.75,18.3022847 16.3022847,18.75 15.75,18.75 L4.25,18.75 C3.69771525,18.75 3.25,18.3022847 3.25,17.75 L3.25,6.25 C3.25,5.69771525 3.69771525,5.25 4.25,5.25 Z M17.1952998,9.30174565 L19.6952998,7.63507898 C20.1548285,7.32872652 20.7756978,7.45290039 21.0820503,7.91242908 C21.191562,8.07669659 21.25,8.26970429 21.25,8.46712927 L21.25,15.5328707 C21.25,16.0851555 20.8022847,16.5328707 20.25,16.5328707 C20.052575,16.5328707 19.8595673,16.4744327 19.6952998,16.364921 L17.1952998,14.6982544 C16.9171011,14.5127886 16.75,14.2005572 16.75,13.8662041 L16.75,10.1337959 C16.75,9.79944275 16.9171011,9.48721142 17.1952998,9.30174565 Z" />
                        </g>
                     </svg>
                  </span>
               </span>
               <span className="active_icon">
                  <span className="ui_icon ui_icon_color--blue ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="record" className="icon_svg-stroke" strokeWidth="1.5" stroke="#666" fill="none" fillRule="evenodd">
                           <path d="M4.25,5.25 L15.75,5.25 C16.3022847,5.25 16.75,5.69771525 16.75,6.25 L16.75,17.75 C16.75,18.3022847 16.3022847,18.75 15.75,18.75 L4.25,18.75 C3.69771525,18.75 3.25,18.3022847 3.25,17.75 L3.25,6.25 C3.25,5.69771525 3.69771525,5.25 4.25,5.25 Z M17.1952998,9.30174565 L19.6952998,7.63507898 C20.1548285,7.32872652 20.7756978,7.45290039 21.0820503,7.91242908 C21.191562,8.07669659 21.25,8.26970429 21.25,8.46712927 L21.25,15.5328707 C21.25,16.0851555 20.8022847,16.5328707 20.25,16.5328707 C20.052575,16.5328707 19.8595673,16.4744327 19.6952998,16.364921 L17.1952998,14.6982544 C16.9171011,14.5127886 16.75,14.2005572 16.75,13.8662041 L16.75,10.1337959 C16.75,9.79944275 16.9171011,9.48721142 17.1952998,9.30174565 Z" />
                        </g>
                     </svg>
                  </span>
               </span>
            </div>
         </div>
      </div>
      <input type="file" accept=".jpg, .png, .jpeg, .gif, .bmp|images/*" multiple style={{display: 'none'}} data-group="js-editable" w2cid="wYSVVNEt112" id="__w2_wYSVVNEt112_file" />
      <div className="drop_zone hidden" id="__w2_wYSVVNEt112_drop_zone" />
         <div className="hidden" id="__w2_wYSVVNEt112_link_selector_wrapper">
            <div className="Selector LinkSelector" tabIndex={-1} id="__w2_wYSVVNEt116_wrapper">
               <div className="link_selector_input">
                  <div className="selector_input_interaction">
                     <div className="CharacterCounter fade_out" id="__w2_wYSVVNEt152_counter_wrapper">
                        <div className="counter" id="__w2_wYSVVNEt152_counter">250</div>
                     </div>
                     <input className="selector_input text" type="text" defaultValue data-group="js-editable" placeholder="Search" w2cid="wYSVVNEt116" id="__w2_wYSVVNEt116_input" />
                     <div className="selector_spinner hidden" id="__w2_wYSVVNEt116_spinner">
                        <div className="LoadingDots tiny">
                           <div className="dot first" />
                              <div className="dot second" />
                                 <div className="dot third" /></div>
                              </div>
                           </div>
                        </div>
                        <div className="selector_results_container hidden" id="__w2_wYSVVNEt116_results_container">
                           <div className="selector_results_container_inner hidden" id="__w2_wYSVVNEt116_results" />
                              <div id="__w2_wYSVVNEt116_empty_input_prompt" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="form_buttons" id="__w2_wYSVVNEt110_inline_editor_buttons">
                     <div className="inline_editor_buttons"><a className="inline_editor_button inline_editor_cancel_button" href="#" id="__w2_wYSVVNEt110_inline_editor_cancel">Cancel</a><a className="submit_button" href="#" action_mousedown="InlineEditorAnswerAdd" id="__w2_wYSVVNEt110_inline_editor_submit">Update</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div id="wYSVVNEt28">
   <div className="icon_action_bar" id="__w2_wYSVVNEt29_action_bar">
      <div className="action_bar_inner u-flex">
         <div className="ItemComponent FollowPrimaryActionItem primary_item u-relative">
            <span id="wYSVVNEt157">
               <a className="ui_button disabled u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--blue ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon" href="#" role="button" action_target="{&quot;type&quot;: &quot;user&quot;, &quot;uid&quot;: 782622776}" id="__w2_wYSVVNEt159_button">
                  <div className="ui_button_inner" id="__w2_wYSVVNEt159_inner">
                     <div className="ui_button_label_count_wrapper">
                     {this.state.showFollow ? 
                     <span className="ui_button_label" id="__w2_wYSVVNEt159_label">{response_follower.data[0].followers.length} Followers</span>
                     
                     : null}

                     </div>
                  </div>
               </a>
            </span>
         </div>
         <div className="action_bar_inner_spacer u-margin-left--auto" /></div>
      </div>
   </div>
   <div id="__w2_wYSVVNEt30_suggested_section" /></div>
</div>





<div className="layout_3col_left" id="__w2_wIYwSz7m17_left_col">
<div id="__w2_wIYwSz7m17_left_col_inner">
   <div className="ProfileNavList NavList EditableList" id="__w2_wIYwSz7m32_wrapper">
      <h3 className="title">
         <div>Feeds</div>
      </h3>
      <ul>
         <div className="nav_item_selected">
            <div id="wIYwSz7m71">
               <li className="NavItem CombinedNavItem EditableListItem NavListItem not_removable">
               <Link to = {{ pathname: `/profile/` + this.props.match.params.email, search: "?activityType=all_types" }}>Profile</Link></li>
            </div>
         </div>
         <div>
            <div id="wIYwSz7m73">
               <li className="AnswersNavItem NavItem EditableListItem NavListItem not_removable">
                  <Link to = {{ pathname: `/profile/` + this.props.match.params.email, search: "?activityType=QuestionAnswered" }}>Answers<span className="list_count">2</span></Link>
               </li>
            </div>
         </div>
         <div>
            <div id="wIYwSz7m75">
               <li className="NavItem QuestionsNavItem EditableListItem NavListItem not_removable">
               <Link to = {{ pathname: `/profile/` + this.props.match.params.email, search: "?activityType=QuestionFollowed" }}>Questions<span className="list_count">1</span></Link></li>
            </div>
         </div>
         
       
        
        
         
      
      </ul>
      <div className="edit_mode_only" /></div>
   </div>
</div>












<div className="layout_3col_center">
<div id="wYSVVNEt33">
   <div className="CredentialsProgressBarWrapper">
      <div id="__w2_wYSVVNEt34_progress_wrapper">
         <div className="expanded u-zindex--200" id="__w2_wYSVVNEt34_expanded">
            <div className="card_inner">
               <div id="wYSVVNEt91">
                  <div className="CredentialsProgressBar PartnerProgressBar not_started" id="__w2_wYSVVNEt92_container">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>



<div className="list_header">
   <div id="wYSVVNEt35">Profile<span className="UserCombinedHeader switcher"><span className="current_item">Most Recent</span> / <a href="https://www.quora.com/profile/Bruce-Decker-12?sort=views">All-Time Views</a></span></div>
</div>






<div className="profile_feed_wrapper">
<div id="wYSVVNEt39" />
<div id="wYSVVNEt41">
<div className="UserCombinedProfileFeed PagedListFoo UserProfileFeed unified" id="__w2_wYSVVNEt42_paged_list">
<div className="paged_list_wrapper" id="__w2_wYSVVNEt42_paged_list_wrapper">
<div className="pagedlist_item" id="wpZ4kBSr1">









{ this.state.showList ?
<div>

{this.state.questions.map(question => (



<div className="AnswerListItem PagedListItem" data-clog-trigger="impression" data-clog-metadata="{&quot;object_view&quot;: {&quot;view_tracking_key&quot;: &quot;a-136667387&quot;, &quot;view_tracking_hash&quot;: &quot;bb7c85c5e171a9d0b96600e3c087a2b5&quot;}}" data-clog-event-type="ObjectView" data-clog-processed={1}>
<div className="feedback_wrapper hidden" id="__w2_wpZ4kBSr3_answer_feedback" />
<div className="inline_expand_item feed_item" id="__w2_wpZ4kBSr3_item">
<span id="__w2_wpZ4kBSr11_answer_story"><span id="__w2_wpZ4kBSr13_answer_story">
<div className="story_title_container">
<div className="pass_color_to_child_links">
   <div id="wpZ4kBSr65">
   <Link to = {`/question/${question.question_id}`}  className="question_link" target="_top" action_mousedown="QuestionLinkClickthrough" id="__w2_wpZ4kBSr66_link">
   <span className="ui_content_title ui_content_title--default ui_content_title--medium">
   <span className="ui_qtext_rendered_qtext">{question.question}</span></span>
   </Link>
   </div>
</div>
<div id="wpZ4kBSr48" /></div>


































</span><span className="hidden" id="__w2_wpZ4kBSr13_question_answer_story_editable" /></span>













<div id="__w2_wpZ4kBSr11_action_bar_truncated">
<div id="wpZ4kBSr20">
<div style={{height: '0px', margin: '0px', padding: '0px', clear: 'both', display: 'block'}} />
<div className="icon_action_bar with_metabar" id="__w2_wpZ4kBSr21_action_bar">
<div id="woEJoWe01">
<div className="Metabar AnswerMetabarPrependItem ItemComponent u-relative">
   <div className="prepend_item_inner pass_color_to_child_links should_show is_active" id="__w2_woEJoWe02_wrapper">
      <div className="prepend_item_content u-relative" id="__w2_woEJoWe02_content">
         <span className="meta_bar_pre_upvote_wrapper" id="__w2_woEJoWe02_pre_upvote_text">
            <div id="w2dPWtzQ1" />
         </span>
         <span className="meta_bar_post_upvote_wrapper hidden" id="__w2_woEJoWe02_post_upvote_text"><div id="w2dPWtzQ3"><div className="unstyled_social_bar"><div className="photos"><div className="ui_badge_group_wrapper"><span className="ui_avatar u-flex-inline ui_avatar--small u-flex-none">
         
         <img className="ui_avatar_photo ui_avatar--border-circular" src="https://qph.fs.quoracdn.net/main-thumb-782622776-50-izcdaymwbtomzguzorfwyoknxfqoqixc.jpeg" />
         </span></div></div><span className="reason_line">You upvoted this</span></div></div></span></div>
      </div>
   </div>
</div>


































      </div>
   </div>
</div>
<div className="hidden" id="__w2_wpZ4kBSr11_action_bar_expanded">
<div id="wpZ4kBSr22">
<div style={{height: '0px', margin: '0px', padding: '0px', clear: 'both', display: 'block'}} />
<div className="icon_action_bar with_metabar" id="__w2_wpZ4kBSr23_action_bar">
<div id="wbcNzjHA1">
<div className="Metabar AnswerMetabarPrependItem ItemComponent u-relative">
   <div className="prepend_item_inner pass_color_to_child_links should_show is_active" id="__w2_wbcNzjHA2_wrapper">
      <div className="prepend_item_content u-relative" id="__w2_wbcNzjHA2_content">
         <span className="meta_bar_pre_upvote_wrapper" id="__w2_wbcNzjHA2_pre_upvote_text">
            <div id="wET07O1N1" />
         </span>
         <span className="meta_bar_post_upvote_wrapper hidden" id="__w2_wbcNzjHA2_post_upvote_text"><div id="wET07O1N3"><div className="unstyled_social_bar"><div className="photos"><div className="ui_badge_group_wrapper"><span className="ui_avatar u-flex-inline ui_avatar--small u-flex-none">
         <img className="ui_avatar_photo ui_avatar--border-circular" src="https://qph.fs.quoracdn.net/main-thumb-782622776-50-izcdaymwbtomzguzorfwyoknxfqoqixc.jpeg" /></span></div></div>
         <span className="reason_line">You upvoted this</span></div></div></span></div>
      </div>
   </div>
</div>
<div className="action_bar_inner u-flex">
   <span id="wbcNzjHA3">
      <a className="ui_button disabled u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--blue ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon u-tap-highlight--none" href="#" role="button" action_target="{&quot;aid&quot;: 136667387, &quot;type&quot;: &quot;answer&quot;}" id="__w2_w7uQjR091_button">
         <div className="ui_button_inner" id="__w2_w7uQjR091_inner">
            <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_w7uQjR091_label">0 Upvotes</span></div>
         </div>
      </a>
   </span>
   <div className="QuoraShareActionItem ActionItemComponent ItemComponent action_item u-relative">
      <div id="wbcNzjHA9">
         <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon" href="#" role="button" id="__w2_wbcNzjHA16_button">
            <div className="ui_button_inner" id="__w2_wbcNzjHA16_inner">
               <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                  <div id="__w2_wbcNzjHA16_icon">
                     <span className="ui_button_icon" aria-hidden="true">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                           <g id="sync" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                              <path d="M19.7477789,9.99927692 C18.8594418,6.54918939 15.7274185,4 12,4 C8.27166139,4 5.13901185,6.55044813 4.25156364,10.0018321 M4.25328626,14.0048552 C5.14305933,17.4528459 8.2740698,20 12,20 C15.7261126,20 18.8572473,17.4525964 19.7468444,14.0043488" id="circle" />
                              <polyline id="arrow" transform="translate(4.742997, 8.742997) rotate(-20.000000) translate(-4.742997, -8.742997) " points="2.99299734 6.99299734 2.99299734 10.4929973 6.49299734 10.4929973" />
                              <polyline id="arrow" transform="translate(19.242997, 15.242997) scale(-1, -1) rotate(-20.000000) translate(-19.242997, -15.242997) " points="17.4929973 13.4929973 17.4929973 16.9929973 20.9929973 16.9929973" />
                           </g>
                        </svg>
                     </span>
                  </div>
               </div>
               <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_wbcNzjHA16_label">Share</span><span className="ui_button_count hidden" aria-hidden="true" id="__w2_wbcNzjHA16_count_wrapper"><span className="bullet"> · </span><span className="ui_button_count_inner" id="__w2_wbcNzjHA16_count">0</span></span></div>
            </div>
         </a>
         <div id="__w2_wbcNzjHA10_quora_share_tooltip" /></div>
      </div>
      <div className="OverflowShareActionItem ActionItemComponent ItemComponent action_item secondary_item u-relative">
         <div id="wbcNzjHA11">
            <div className="hover_menu hidden u-right--0 show_nub right_align" id="__w2_wbcNzjHA12_menu">
               <div className="hover_menu_contents" id="__w2_wbcNzjHA12_menu_contents"> </div>
            </div>
            <div className="_QuickShare HoverMenu AnswerQuickShare" role="button" id="__w2_wbcNzjHA12_link">
               <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="#" role="button" aria-label="More sharing options" id="__w2_wbcNzjHA15_button">
                  <div className="ui_button_inner" id="__w2_wbcNzjHA15_inner">
                     <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                        <div id="__w2_wbcNzjHA15_icon">
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
      </div>
      <div className="action_bar_inner_spacer u-margin-left--auto" />
         <div className="overflow action_item overflow_link u-relative u-pointer-events--auto">
            <div className="overflow_link" id="__w2_wpZ4kBSr23_overflow_link">
               <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="#" role="button" aria-label="More options" id="__w2_wbcNzjHA8_button">
                  <div className="ui_button_inner" id="__w2_wbcNzjHA8_inner">
                     <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                        <div id="__w2_wbcNzjHA8_icon">
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
         <div className="hover_menu hidden show_nub fixed_menu_width no_body_attach right_align" id="__w2_wpZ4kBSr23_overflow_menu">
            <div className="hover_menu_contents lazy" id="__w2_wpZ4kBSr23_overflow_menu_contents" /></div>
         </div>
      </div>
   </div>
</div>
<div id="wpZ4kBSr31">
<div /></div>















      </div>
   </div>
))}

   </div>
: null }















</div>
<div className="pagedlist_item" id="wpZ4kBSr4">
<div className="AnswerListItem PagedListItem" data-clog-trigger="impression" data-clog-metadata="{&quot;object_view&quot;: {&quot;view_tracking_key&quot;: &quot;a-136667002&quot;, &quot;view_tracking_hash&quot;: &quot;46ff26119999c7f1c752374224b086af&quot;}}" data-clog-event-type="ObjectView" data-clog-processed={1}>
<div className="feedback_wrapper hidden" id="__w2_wpZ4kBSr6_answer_feedback" />






















                  </div>
               </div>
            </div>
            <div className="hidden" id="__w2_wYSVVNEt42_more">
               <div className="ui_section_footer u-hover-bg--black-transparent">
                  View more
                  <div className="u-margin-left--xs u-inline-block">
                     <span className="ui_icon ui_icon_color--gray ui_icon_size--small ui_icon_outline--default" aria-hidden="true">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                           <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                              <polyline points="5 8.5 12 15.5 19.0048307 8.5" />
                           </g>
                        </svg>
                     </span>
                  </div>
               </div>
            </div>
            <div className="spinner_display_area hidden" id="__w2_wYSVVNEt42_spinner" />
               <div id="__w2_wYSVVNEt42_invisible_updater_wrapper">
                  <div id="wpZ4kBSr8" /></div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="layout_3col_right">
      <div id="wYSVVNEt43">
         <div className="AboutSection">
            <h3 className="title">
               Credentials &amp; Highlights
               <span id="woVa9VIC7">
                  <a className="EditCredentialsModalLink CredentialModalLink" href="#" id="__w2_woVa9VIC8_modal_link">
                     <div className="edit_icon" />
                  </a>
               </span>
            </h3>
            <div className="contents"><div id="woVa9VIC1"><div className="AddCredentialListItem AddWorkCredentialListItem AboutListItem"><span className="u-flex u-padding-bottom--sm"><div className="u-margin-right--sm"><span className="ui_icon ui_icon_color--blue_dark ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.5,11 L20.5,18 C20.5,18.5522847 20.0522847,19 19.5,19 L4.5,19 C3.94771525,19 3.5,18.5522847 3.5,18 L3.5,11 M10.40625,15 L5.625,15 C4.45139491,15 3.5,13.9766509 3.5,12.7142857 L3.5,7 L3.5,7 L20.5,7 L20.5,12.7142857 C20.5,13.9766509 19.5486051,15 18.375,15 L13.59375,15 M9,7 L9,6 C9,4.8954305 9.8954305,4 11,4 L11,4 L13,4 C14.1045695,4 15,4.8954305 15,6 L15,7 M11,13.5 L13,13.5 C13.2761424,13.5 13.5,13.7238576 13.5,14 L13.5,16 C13.5,16.2761424 13.2761424,16.5 13,16.5 L11,16.5 C10.7238576,16.5 10.5,16.2761424 10.5,16 L10.5,14 C10.5,13.7238576 10.7238576,13.5 11,13.5 Z" />
            </g>
            </svg></span></div><span className="body_text"><span className="main_text"><span id="woVa9VIC10">
            <Link className="EditCredentialModalLink CredentialModalLink" id="__w2_woVa9VIC11_modal_link" onClick={this.openModal}>Add employment credential</Link>
            
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

         
          <div className="CredentialsModal Modal EditCredentialsModal no_footer">
<div className="modal_header">
   <div className="modal_close" id="__w2_wS3v0b3P3_close">
      <Link className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="#" role="button" aria-label="Close" id="__w2_wS3v0b3P7_button" onClick = {this.closeModal}>
         <div className="ui_button_inner" id="__w2_wS3v0b3P7_inner">
            <div className="ui_button_icon_wrapper u-relative u-flex-inline">
               <div id="__w2_wS3v0b3P7_icon">
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
      </Link>
   </div>
   <div className="modal_title" id="__w2_wS3v0b3P3_modal_title">Edit credentials</div>
   <div className="modal_subtitle" id="__w2_wS3v0b3P3_modal_subtitle">Credentials also appear on answers you write.</div>
</div>
<div className="modal_content modal_body" id="__w2_wS3v0b3P3_content">
<div id="wS3v0b3P4">
<a className="AddCredentialDropdown hidden" href="#" id="__w2_wS3v0b3P5_add_link">
   <div className="u-absolute u-top--0 u-left--0 u-margin-left--md u-margin-top--md">
      <span className="ui_icon ui_icon_color--blue ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true">
         <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd">
               <path d="M12,7 L12,17" strokeLinecap="round" />
               <path d="M7,12 L17,12" strokeLinecap="round" />
               <circle cx={12} cy={12} r={9} />
            </g>
         </svg>
      </span>
   </div>
   Add a credential
</a>
<div className="hidden hover_menu hover_menu_credential show_nub" id="__w2_wS3v0b3P5_overflow_menu">
   <div className="hover_menu_contents">
      <ul className="menu_list_items unified_menu">
         <li className="menu_list_item">
            <a className="js_category_link u-flex u-flex-align--center" data-category={1}>
               <div className="u-margin-right--sm u-flex-inline">
                  <span className="ui_icon ui_icon_color--gray ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M20.5,11 L20.5,18 C20.5,18.5522847 20.0522847,19 19.5,19 L4.5,19 C3.94771525,19 3.5,18.5522847 3.5,18 L3.5,11 M10.40625,15 L5.625,15 C4.45139491,15 3.5,13.9766509 3.5,12.7142857 L3.5,7 L3.5,7 L20.5,7 L20.5,12.7142857 C20.5,13.9766509 19.5486051,15 18.375,15 L13.59375,15 M9,7 L9,6 C9,4.8954305 9.8954305,4 11,4 L11,4 L13,4 C14.1045695,4 15,4.8954305 15,6 L15,7 M11,13.5 L13,13.5 C13.2761424,13.5 13.5,13.7238576 13.5,14 L13.5,16 C13.5,16.2761424 13.2761424,16.5 13,16.5 L11,16.5 C10.7238576,16.5 10.5,16.2761424 10.5,16 L10.5,14 C10.5,13.7238576 10.7238576,13.5 11,13.5 Z" />
                        </g>
                     </svg>
                  </span>
               </div>
               Employment
            </a>
         </li>
         <li className="menu_list_item">
            <a className="js_category_link u-flex u-flex-align--center" data-category={2}>
               <div className="u-margin-right--sm u-flex-inline">
                  <span className="ui_icon ui_icon_color--gray ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M2.5,9.5 L12,5 L21.5,9.5 L12,14 L2.5,9.5 Z M20,10.5 L20,16.5 M6.5,12 C6.5,14 6.5,15 6.5,15 C6.5,16.5048582 9.00219538,18 12,18 C14.9978046,18 17.5,16.4986226 17.5,15 C17.5,15 17.5,14 17.5,12 M20,16.5 L18,20 L22,20 L20,16.5 Z" />
                        </g>
                     </svg>
                  </span>
               </div>
               Education
            </a>
         </li>
         <li className="menu_list_item">
            <a className="js_category_link u-flex u-flex-align--center" data-category={3}>
               <div className="u-margin-right--sm u-flex-inline">
                  <span className="ui_icon ui_icon_color--gray ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                           <path d="M12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 Z M12,20.73 C16.6375,16.5 19,12.9 19,10.2 C19,6.2235498 15.8659932,3 12,3 C8.13400675,3 5,6.2235498 5,10.2 C5,12.9 7.3625,16.41 12,20.73 L12,20.73 Z" />
                        </g>
                     </svg>
                  </span>
               </div>
               Location
            </a>
         </li>
         <li className="menu_list_item">
            <a className="js_category_link u-flex u-flex-align--center" data-category={4}>
               <div className="u-margin-right--sm u-flex-inline">
                  <span className="ui_icon ui_icon_color--gray ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M12,12.5 L12,4 L18,4 L16.5,6.25 L18,8.5 L12,8.5 L12,12.5 Z M19,20 L21,20 L17,13 L17,13 L15.8547683,15.0041556 M19,20 L21,20 L17,13 L17,13 L15.8547683,15.0041556 M8.14508587,15.0039003 L7,13 L7,13 L3,20 L5,20 M12,12 L6.5,21 L17.5,21 L12,12 Z" />
                        </g>
                     </svg>
                  </span>
               </div>
               Topic
            </a>
         </li>
         <li className="menu_list_item">
            <a className="js_category_link u-flex u-flex-align--center" data-category={6}>
               <div className="u-margin-right--sm u-flex-inline">
                  <span className="ui_icon ui_icon_color--gray ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,3 C9.05324814,5.04905013 7.2962301,8.41085624 7.2962301,12 C7.2962301,15.5891438 9.05324814,18.9509499 12,21 M12,21 C14.9467519,18.9509499 16.7037699,15.5891438 16.7037699,12 C16.7037699,8.41085624 14.9467519,5.04905013 12,3 M5.2725,6.024 C7.42043824,6.87696825 9.71140493,7.31225192 12.0225,7.3065 C14.2790699,7.30962174 16.5163927,6.89145909 18.6195,6.0735 M18.597,17.85 C14.3188274,16.1633341 9.56308618,16.1456667 5.2725,17.8005 M3,12 L21,12 M12,3 L12,21" />
                        </g>
                     </svg>
                  </span>
               </div>
               Language
            </a>
         </li>
      </ul>
   </div>
</div>
<div id="wS3v0b3P14">
<div className="credential_list_item is_add_form" id="__w2_wS3v0b3P15_wrapper_1">
<div className="edit_wrapper">
<div className="u-absolute u-top--0 u-left--0 u-margin-left--md u-margin-top--md">
   <span className="ui_icon ui_icon_color--gray ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
         <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.5,11 L20.5,18 C20.5,18.5522847 20.0522847,19 19.5,19 L4.5,19 C3.94771525,19 3.5,18.5522847 3.5,18 L3.5,11 M10.40625,15 L5.625,15 C4.45139491,15 3.5,13.9766509 3.5,12.7142857 L3.5,7 L3.5,7 L20.5,7 L20.5,12.7142857 C20.5,13.9766509 19.5486051,15 18.375,15 L13.59375,15 M9,7 L9,6 C9,4.8954305 9.8954305,4 11,4 L11,4 L13,4 C14.1045695,4 15,4.8954305 15,6 L15,7 M11,13.5 L13,13.5 C13.2761424,13.5 13.5,13.7238576 13.5,14 L13.5,16 C13.5,16.2761424 13.2761424,16.5 13,16.5 L11,16.5 C10.7238576,16.5 10.5,16.2761424 10.5,16 L10.5,14 C10.5,13.7238576 10.7238576,13.5 11,13.5 Z" />
         </g>
      </svg>
   </span>
</div>

<div id="wS3v0b3P17">



















<form className="Form AddCredentialsFormWork AddCredentialsForm" method="post" id="__w2_wS3v0b3P18_form">

   <div className="FormField FormFieldInput with_label with_character_counter">
      <div className="error_tooltip hidden" id="__w2_wS3v0b3P32_error_tooltip">Please fill out this field.</div>
      <label className="input_label" htmlFor="__w2_wS3v0b3P32_position" id="__w2_wS3v0b3P32_label">First Name</label>
      <input className="text input_field" type="text"  required="False" maxLength={50} data-group="js-editable" w2cid="wS3v0b3P32" id="__w2_wS3v0b3P32_position" />
      <div className="CharacterCounter fade_out" id="__w2_wS3v0b3P37_counter_wrapper">
         <div className="counter" id="__w2_wS3v0b3P37_counter">50</div>
      </div>
   </div>


   <div className="FormField FormFieldInput with_label with_character_counter">
      <div className="error_tooltip hidden" id="__w2_wS3v0b3P32_error_tooltip">Please fill out this field.</div>
      <label className="input_label" htmlFor="__w2_wS3v0b3P32_position" id="__w2_wS3v0b3P32_label">Last Name</label>
      <input className="text input_field" type="text"  required="False" maxLength={50} data-group="js-editable" w2cid="wS3v0b3P32" id="__w2_wS3v0b3P32_position" />
      <div className="CharacterCounter fade_out" id="__w2_wS3v0b3P37_counter_wrapper">
         <div className="counter" id="__w2_wS3v0b3P37_counter">50</div>
      </div>
   </div>

   <div className="FormField FormFieldInput with_label with_character_counter">
      <div className="error_tooltip hidden" id="__w2_wS3v0b3P32_error_tooltip">Please fill out this field.</div>
      <label className="input_label" htmlFor="__w2_wS3v0b3P32_position" id="__w2_wS3v0b3P32_label">City</label>
      <input className="text input_field" type="text"  required="False" maxLength={50} data-group="js-editable" w2cid="wS3v0b3P32" id="__w2_wS3v0b3P32_position" />
      <div className="CharacterCounter fade_out" id="__w2_wS3v0b3P37_counter_wrapper">
         <div className="counter" id="__w2_wS3v0b3P37_counter">50</div>
      </div>
   </div>

   <div className="FormField FormFieldInput with_label with_character_counter">
      <div className="error_tooltip hidden" id="__w2_wS3v0b3P32_error_tooltip">Please fill out this field.</div>
      <label className="input_label" htmlFor="__w2_wS3v0b3P32_position" id="__w2_wS3v0b3P32_label">State</label>
      <input className="text input_field" type="text"  required="False" maxLength={50} data-group="js-editable" w2cid="wS3v0b3P32" id="__w2_wS3v0b3P32_position" />
      <div className="CharacterCounter fade_out" id="__w2_wS3v0b3P37_counter_wrapper">
         <div className="counter" id="__w2_wS3v0b3P37_counter">50</div>
      </div>
   </div>

   <div className="FormField FormFieldInput with_label with_character_counter">
      <div className="error_tooltip hidden" id="__w2_wS3v0b3P32_error_tooltip">Please fill out this field.</div>
      <label className="input_label" htmlFor="__w2_wS3v0b3P32_position" id="__w2_wS3v0b3P32_label">Zip Code</label>
      <input className="text input_field" type="text"  required="False" maxLength={50} data-group="js-editable" w2cid="wS3v0b3P32" id="__w2_wS3v0b3P32_position" />
      <div className="CharacterCounter fade_out" id="__w2_wS3v0b3P37_counter_wrapper">
         <div className="counter" id="__w2_wS3v0b3P37_counter">50</div>
      </div>
   </div>

   <div className="FormField FormFieldInput with_label with_character_counter">
      <div className="error_tooltip hidden" id="__w2_wS3v0b3P32_error_tooltip">Please fill out this field.</div>
      <label className="input_label" htmlFor="__w2_wS3v0b3P32_position" id="__w2_wS3v0b3P32_label">Upload an image  </label>
      <input type="file" name="filename" id="fileToUpload"  onChange = {this.handleFile}/>
      
      <div className="CharacterCounter fade_out" id="__w2_wS3v0b3P37_counter_wrapper">
         <div className="counter" id="__w2_wS3v0b3P37_counter">50</div>
      </div>
   </div>

   <div className="FormField FormFieldInput with_label with_character_counter">
      <div className="error_tooltip hidden" id="__w2_wS3v0b3P32_error_tooltip">Please fill out this field.</div>
      <label className="input_label" htmlFor="__w2_wS3v0b3P32_position" id="__w2_wS3v0b3P32_label">Education</label>
      <input className="text input_field" type="text"  required="False" maxLength={50} data-group="js-editable" w2cid="wS3v0b3P32" id="__w2_wS3v0b3P32_position" />
      <div className="CharacterCounter fade_out" id="__w2_wS3v0b3P37_counter_wrapper">
         <div className="counter" id="__w2_wS3v0b3P37_counter">50</div>
      </div>
   </div>

   <div className="FormField FormFieldInput with_label with_character_counter">
      <div className="error_tooltip hidden" id="__w2_wS3v0b3P32_error_tooltip">Please fill out this field.</div>
      <label className="input_label" htmlFor="__w2_wS3v0b3P32_position" id="__w2_wS3v0b3P32_label">Career Information</label>
      <input className="text input_field" type="text"  required="False" maxLength={50} data-group="js-editable" w2cid="wS3v0b3P32" id="__w2_wS3v0b3P32_position" />
      <div className="CharacterCounter fade_out" id="__w2_wS3v0b3P37_counter_wrapper">
         <div className="counter" id="__w2_wS3v0b3P37_counter">50</div>
      </div>
   </div>

   <div className="FormField FormFieldInput with_label with_character_counter">
      <div className="error_tooltip hidden" id="__w2_wS3v0b3P32_error_tooltip">Please fill out this field.</div>
      <label className="input_label" htmlFor="__w2_wS3v0b3P32_position" id="__w2_wS3v0b3P32_label">Description</label>
      <textarea className="text input_field" type="text"  required="False" maxLength={50} data-group="js-editable" w2cid="wS3v0b3P32" id="__w2_wS3v0b3P32_position" />
      <div className="CharacterCounter fade_out" id="__w2_wS3v0b3P37_counter_wrapper">
         <div className="counter" id="__w2_wS3v0b3P37_counter">50</div>
      </div>
   </div>

   <div className="FormField FormFieldInput with_label with_character_counter">
      <div className="error_tooltip hidden" id="__w2_wS3v0b3P32_error_tooltip">Please fill out this field.</div>
      <label className="input_label" htmlFor="__w2_wS3v0b3P32_position" id="__w2_wS3v0b3P32_label">Profile Credential</label>
      <input className="text input_field" type="text"  required="False" maxLength={50} data-group="js-editable" w2cid="wS3v0b3P32" id="__w2_wS3v0b3P32_position" />
      <div className="CharacterCounter fade_out" id="__w2_wS3v0b3P37_counter_wrapper">
         <div className="counter" id="__w2_wS3v0b3P37_counter">50</div>
      </div>
   </div>





  

            <div className="form_action_bar clearfix">
              <input className="submit_button form_submit_button" type="submit" defaultValue="Save" data-group="js-editable" w2cid="wS3v0b3P18" id="__w2_wS3v0b3P18_submit" />
              <Link className="toggle_link" onClick={this.closeModal}>Cancel</Link>
            </div>
</form>


























</div></div></div>
<div className="credential_list_item is_add_form hidden" id="__w2_wS3v0b3P15_wrapper_2">
<div className="edit_wrapper">
<div className="u-absolute u-top--0 u-left--0 u-margin-left--md u-margin-top--md">
   <span className="ui_icon ui_icon_color--gray ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
         <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5,9.5 L12,5 L21.5,9.5 L12,14 L2.5,9.5 Z M20,10.5 L20,16.5 M6.5,12 C6.5,14 6.5,15 6.5,15 C6.5,16.5048582 9.00219538,18 12,18 C14.9978046,18 17.5,16.4986226 17.5,15 C17.5,15 17.5,14 17.5,12 M20,16.5 L18,20 L22,20 L20,16.5 Z" />
         </g>
      </svg>
   </span>
</div>
<div className="title">Add education credential</div>
<div id="wS3v0b3P20">
<form className="AddCredentialsForm Form AddCredentialsFormSchool" method="post" id="__w2_wS3v0b3P21_form">
   <div className="FormField FormFieldTopicSelector with_label">
   <div className="error_tooltip hidden" id="__w2_wS3v0b3P42_error_tooltip">Please fill out this field.</div>
   <label className="input_label" htmlFor="__w2_wS3v0b3P42_school" id="__w2_wS3v0b3P42_label">School</label>
   <span id="__w2_wS3v0b3P42_selector">
      <div className="Selector TopicSelector TopicSelectorForFormField AddTopicSelector" tabIndex={-1} id="__w2_wS3v0b3P47_wrapper">
      <div className="selector_input_interaction">
      <input className="selector_input text" type="text" defaultValue data-lpignore="true" data-group="js-editable" placeholder="New York University" w2cid="wS3v0b3P47" id="__w2_wS3v0b3P47_input" />
      <div className="selector_spinner hidden" id="__w2_wS3v0b3P47_spinner">
      <div className="LoadingDots tiny">
      <div className="dot first" />
         <div className="dot second" />
            <div className="dot third" /></div>
         </div>
      </div>
      <div className="selector_results_container is_inline hidden" id="__w2_wS3v0b3P47_results_container">
      <div className="selector_results_container_inner hidden" id="__w2_wS3v0b3P47_results" />
         <div id="__w2_wS3v0b3P47_empty_input_prompt" /></div>
      </div>
   </span>
   <div className="topic_selection hidden" id="__w2_wS3v0b3P42_school" />
      <input className="hidden" type="number" data-group="js-editable" w2cid="wS3v0b3P42" id="__w2_wS3v0b3P42_value" />
      <div className="remove_link hidden" id="__w2_wS3v0b3P42_remove_topic">
         <span className="ui_icon ui_icon_color--gray ui_icon_size--xsmall ui_icon_outline--default" aria-hidden="true">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
               <g id="close" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                  <path d="M5.5,5.5 L18.5,18.5" />
                  <path d="M5.5,18.5 L18.5,5.5" />
               </g>
            </svg>
         </span>
      </div>
   </div>
   <div className="FormField FormFieldTopicSelector with_label">
   <div className="error_tooltip hidden" id="__w2_wS3v0b3P43_error_tooltip">Please fill out this field.</div>
   <label className="input_label" htmlFor="__w2_wS3v0b3P43_concentration" id="__w2_wS3v0b3P43_label">Concentration</label>
   <span id="__w2_wS3v0b3P43_selector">
      <div className="Selector TopicSelector TopicSelectorForFormField AddTopicSelector" tabIndex={-1} id="__w2_wS3v0b3P51_wrapper">
      <div className="selector_input_interaction">
      <input className="selector_input text" type="text" defaultValue data-lpignore="true" data-group="js-editable" placeholder="Theater" w2cid="wS3v0b3P51" id="__w2_wS3v0b3P51_input" />
      <div className="selector_spinner hidden" id="__w2_wS3v0b3P51_spinner">
      <div className="LoadingDots tiny">
      <div className="dot first" />
         <div className="dot second" />
            <div className="dot third" /></div>
         </div>
      </div>
      <div className="selector_results_container is_inline hidden" id="__w2_wS3v0b3P51_results_container">
      <div className="selector_results_container_inner hidden" id="__w2_wS3v0b3P51_results" />
         <div id="__w2_wS3v0b3P51_empty_input_prompt" /></div>
      </div>
   </span>
   <div className="topic_selection hidden" id="__w2_wS3v0b3P43_concentration" />
      <input className="hidden" type="number" data-group="js-editable" w2cid="wS3v0b3P43" id="__w2_wS3v0b3P43_value" />
      <div className="remove_link hidden" id="__w2_wS3v0b3P43_remove_topic">
         <span className="ui_icon ui_icon_color--gray ui_icon_size--xsmall ui_icon_outline--default" aria-hidden="true">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
               <g id="close" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                  <path d="M5.5,5.5 L18.5,18.5" />
                  <path d="M5.5,18.5 L18.5,5.5" />
               </g>
            </svg>
         </span>
      </div>
   </div>
   <div className="FormField FormFieldTopicSelector with_label">
   <div className="error_tooltip hidden" id="__w2_wS3v0b3P44_error_tooltip">Please fill out this field.</div>
   <label className="input_label" htmlFor="__w2_wS3v0b3P44_second_concentration" id="__w2_wS3v0b3P44_label">Secondary Concentration</label>
   <span id="__w2_wS3v0b3P44_selector">
      <div className="Selector TopicSelector TopicSelectorForFormField AddTopicSelector" tabIndex={-1} id="__w2_wS3v0b3P55_wrapper">
      <div className="selector_input_interaction">
      <input className="selector_input text" type="text" defaultValue data-lpignore="true" data-group="js-editable" placeholder="Dance" w2cid="wS3v0b3P55" id="__w2_wS3v0b3P55_input" />
      <div className="selector_spinner hidden" id="__w2_wS3v0b3P55_spinner">
         <div className="LoadingDots tiny">
            <div className="dot first" />
               <div className="dot second" />
                  <div className="dot third" /></div>
               </div>
            </div>
            <div className="selector_results_container is_inline hidden" id="__w2_wS3v0b3P55_results_container">
               <div className="selector_results_container_inner hidden" id="__w2_wS3v0b3P55_results" />
                  <div id="__w2_wS3v0b3P55_empty_input_prompt" /></div>
               </div>
   </span>
   <div className="topic_selection hidden" id="__w2_wS3v0b3P44_second_concentration" /><input className="hidden" type="number" data-group="js-editable" w2cid="wS3v0b3P44" id="__w2_wS3v0b3P44_value" /><div className="remove_link hidden" id="__w2_wS3v0b3P44_remove_topic"><span className="ui_icon ui_icon_color--gray ui_icon_size--xsmall ui_icon_outline--default" aria-hidden="true"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
   <g id="close" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
   <path d="M5.5,5.5 L18.5,18.5" />
   <path d="M5.5,18.5 L18.5,5.5" />
   </g>
   </svg></span></div></div><div className="FormField FormFieldInput with_label is_degree with_character_counter"><div className="error_tooltip hidden" id="__w2_wS3v0b3P45_error_tooltip">Please fill out this field.</div><label className="input_label" htmlFor="__w2_wS3v0b3P45_degree" id="__w2_wS3v0b3P45_label">Degree Type</label><input className="text input_field" type="text" placeholder="M.F.A." required="False" maxLength={25} data-group="js-editable" w2cid="wS3v0b3P45" id="__w2_wS3v0b3P45_degree" /><div className="CharacterCounter fade_out" id="__w2_wS3v0b3P59_counter_wrapper"><div className="counter" id="__w2_wS3v0b3P59_counter">25</div></div></div><div className="FormField FormFieldSelect with_label"><div className="error_tooltip hidden" id="__w2_wS3v0b3P46_error_tooltip">Please fill out this field.</div><label className="input_label" htmlFor="__w2_wS3v0b3P46_end_year" id="__w2_wS3v0b3P46_label">Graduation Year</label><select className="input_select" required="False" id="__w2_wS3v0b3P46_end_year"><option value selected="selected" /><option value={2025}>2025</option><option value={2024}>2024</option><option value={2023}>2023</option><option value={2022}>2022</option><option value={2021}>2021</option><option value={2020}>2020</option><option value={2019}>2019</option><option value={2018}>2018</option><option value={2017}>2017</option><option value={2016}>2016</option><option value={2015}>2015</option><option value={2014}>2014</option><option value={2013}>2013</option><option value={2012}>2012</option><option value={2011}>2011</option><option value={2010}>2010</option><option value={2009}>2009</option><option value={2008}>2008</option><option value={2007}>2007</option><option value={2006}>2006</option><option value={2005}>2005</option><option value={2004}>2004</option><option value={2003}>2003</option><option value={2002}>2002</option><option value={2001}>2001</option><option value={2000}>2000</option><option value={1999}>1999</option><option value={1998}>1998</option><option value={1997}>1997</option><option value={1996}>1996</option><option value={1995}>1995</option><option value={1994}>1994</option><option value={1993}>1993</option><option value={1992}>1992</option><option value={1991}>1991</option><option value={1990}>1990</option><option value={1989}>1989</option><option value={1988}>1988</option><option value={1987}>1987</option><option value={1986}>1986</option><option value={1985}>1985</option><option value={1984}>1984</option><option value={1983}>1983</option><option value={1982}>1982</option><option value={1981}>1981</option><option value={1980}>1980</option><option value={1979}>1979</option><option value={1978}>1978</option><option value={1977}>1977</option><option value={1976}>1976</option><option value={1975}>1975</option><option value={1974}>1974</option><option value={1973}>1973</option><option value={1972}>1972</option><option value={1971}>1971</option><option value={1970}>1970</option><option value={1969}>1969</option><option value={1968}>1968</option><option value={1967}>1967</option><option value={1966}>1966</option><option value={1965}>1965</option><option value={1964}>1964</option><option value={1963}>1963</option><option value={1962}>1962</option><option value={1961}>1961</option><option value={1960}>1960</option><option value={1959}>1959</option><option value={1958}>1958</option><option value={1957}>1957</option><option value={1956}>1956</option><option value={1955}>1955</option><option value={1954}>1954</option><option value={1953}>1953</option><option value={1952}>1952</option><option value={1951}>1951</option><option value={1950}>1950</option><option value={1949}>1949</option><option value={1948}>1948</option><option value={1947}>1947</option><option value={1946}>1946</option><option value={1945}>1945</option><option value={1944}>1944</option><option value={1943}>1943</option><option value={1942}>1942</option><option value={1941}>1941</option><option value={1940}>1940</option><option value={1939}>1939</option><option value={1938}>1938</option><option value={1937}>1937</option><option value={1936}>1936</option><option value={1935}>1935</option><option value={1934}>1934</option><option value={1933}>1933</option><option value={1932}>1932</option><option value={1931}>1931</option><option value={1930}>1930</option><option value={1929}>1929</option><option value={1928}>1928</option><option value={1927}>1927</option><option value={1926}>1926</option><option value={1925}>1925</option><option value={1924}>1924</option><option value={1923}>1923</option><option value={1922}>1922</option><option value={1921}>1921</option><option value={1920}>1920</option><option value={1919}>1919</option><option value={1918}>1918</option><option value={1917}>1917</option><option value={1916}>1916</option><option value={1915}>1915</option><option value={1914}>1914</option><option value={1913}>1913</option><option value={1912}>1912</option><option value={1911}>1911</option><option value={1910}>1910</option><option value={1909}>1909</option><option value={1908}>1908</option><option value={1907}>1907</option><option value={1906}>1906</option><option value={1905}>1905</option><option value={1904}>1904</option><option value={1903}>1903</option><option value={1902}>1902</option><option value={1901}>1901</option><option value={1900}>1900</option></select></div><div className="form_action_bar clearfix"><input className="submit_button form_submit_button" type="submit" defaultValue="Save" data-group="js-editable" w2cid="wS3v0b3P21" id="__w2_wS3v0b3P21_submit" /><a className="toggle_link" href="#">Cancel</a></div>
</form>
</div></div></div>
<div className="credential_list_item is_add_form hidden" id="__w2_wS3v0b3P15_wrapper_3">
<div className="edit_wrapper">
<div className="u-absolute u-top--0 u-left--0 u-margin-left--md u-margin-top--md">
   <span className="ui_icon ui_icon_color--gray ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
         <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
            <path d="M12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 Z M12,20.73 C16.6375,16.5 19,12.9 19,10.2 C19,6.2235498 15.8659932,3 12,3 C8.13400675,3 5,6.2235498 5,10.2 C5,12.9 7.3625,16.41 12,20.73 L12,20.73 Z" />
         </g>
      </svg>
   </span>
</div>
<div className="title">Add a location credential</div>
<div id="wS3v0b3P23">
<form className="Form AddCredentialsFormLocation AddCredentialsForm" method="post" id="__w2_wS3v0b3P24_form">
   <div className="FormField FormFieldTopicSelector with_label">
   <div className="error_tooltip hidden" id="__w2_wS3v0b3P76_error_tooltip">Please fill out this field.</div>
   <label className="input_label" htmlFor="__w2_wS3v0b3P76_location" id="__w2_wS3v0b3P76_label">Location (required)</label>
   <span id="__w2_wS3v0b3P76_selector">
      <div className="Selector TopicSelector TopicSelectorForFormField AddTopicSelector" tabIndex={-1} id="__w2_wS3v0b3P80_wrapper">
      <div className="selector_input_interaction">
      <input className="selector_input text" type="text" defaultValue data-lpignore="true" data-group="js-editable" placeholder="Mountain View, CA" w2cid="wS3v0b3P80" id="__w2_wS3v0b3P80_input" />
      <div className="selector_spinner hidden" id="__w2_wS3v0b3P80_spinner">
         <div className="LoadingDots tiny">
            <div className="dot first" />
               <div className="dot second" />
                  <div className="dot third" /></div>
               </div>
            </div>
            <div className="selector_results_container is_inline hidden" id="__w2_wS3v0b3P80_results_container">
               <div className="selector_results_container_inner hidden" id="__w2_wS3v0b3P80_results" />
                  <div id="__w2_wS3v0b3P80_empty_input_prompt" /></div>
               </div>
   </span>
   <div className="topic_selection hidden" id="__w2_wS3v0b3P76_location" /><input className="hidden" type="number" data-group="js-editable" w2cid="wS3v0b3P76" id="__w2_wS3v0b3P76_value" /><div className="remove_link hidden" id="__w2_wS3v0b3P76_remove_topic"><span className="ui_icon ui_icon_color--gray ui_icon_size--xsmall ui_icon_outline--default" aria-hidden="true"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
   <g id="close" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
   <path d="M5.5,5.5 L18.5,18.5" />
   <path d="M5.5,18.5 L18.5,5.5" />
   </g>
   </svg></span></div></div><div className="FormField FormFieldSelect with_label"><div className="error_tooltip hidden" id="__w2_wS3v0b3P77_error_tooltip">Please fill out this field.</div><label className="input_label" htmlFor="__w2_wS3v0b3P77_start_year" id="__w2_wS3v0b3P77_label">Start Year</label><select className="input_select" required="False" id="__w2_wS3v0b3P77_start_year"><option value selected="selected" /><option value={2019}>2019</option><option value={2018}>2018</option><option value={2017}>2017</option><option value={2016}>2016</option><option value={2015}>2015</option><option value={2014}>2014</option><option value={2013}>2013</option><option value={2012}>2012</option><option value={2011}>2011</option><option value={2010}>2010</option><option value={2009}>2009</option><option value={2008}>2008</option><option value={2007}>2007</option><option value={2006}>2006</option><option value={2005}>2005</option><option value={2004}>2004</option><option value={2003}>2003</option><option value={2002}>2002</option><option value={2001}>2001</option><option value={2000}>2000</option><option value={1999}>1999</option><option value={1998}>1998</option><option value={1997}>1997</option><option value={1996}>1996</option><option value={1995}>1995</option><option value={1994}>1994</option><option value={1993}>1993</option><option value={1992}>1992</option><option value={1991}>1991</option><option value={1990}>1990</option><option value={1989}>1989</option><option value={1988}>1988</option><option value={1987}>1987</option><option value={1986}>1986</option><option value={1985}>1985</option><option value={1984}>1984</option><option value={1983}>1983</option><option value={1982}>1982</option><option value={1981}>1981</option><option value={1980}>1980</option><option value={1979}>1979</option><option value={1978}>1978</option><option value={1977}>1977</option><option value={1976}>1976</option><option value={1975}>1975</option><option value={1974}>1974</option><option value={1973}>1973</option><option value={1972}>1972</option><option value={1971}>1971</option><option value={1970}>1970</option><option value={1969}>1969</option><option value={1968}>1968</option><option value={1967}>1967</option><option value={1966}>1966</option><option value={1965}>1965</option><option value={1964}>1964</option><option value={1963}>1963</option><option value={1962}>1962</option><option value={1961}>1961</option><option value={1960}>1960</option><option value={1959}>1959</option><option value={1958}>1958</option><option value={1957}>1957</option><option value={1956}>1956</option><option value={1955}>1955</option><option value={1954}>1954</option><option value={1953}>1953</option><option value={1952}>1952</option><option value={1951}>1951</option><option value={1950}>1950</option><option value={1949}>1949</option><option value={1948}>1948</option><option value={1947}>1947</option><option value={1946}>1946</option><option value={1945}>1945</option><option value={1944}>1944</option><option value={1943}>1943</option><option value={1942}>1942</option><option value={1941}>1941</option><option value={1940}>1940</option><option value={1939}>1939</option><option value={1938}>1938</option><option value={1937}>1937</option><option value={1936}>1936</option><option value={1935}>1935</option><option value={1934}>1934</option><option value={1933}>1933</option><option value={1932}>1932</option><option value={1931}>1931</option><option value={1930}>1930</option><option value={1929}>1929</option><option value={1928}>1928</option><option value={1927}>1927</option><option value={1926}>1926</option><option value={1925}>1925</option><option value={1924}>1924</option><option value={1923}>1923</option><option value={1922}>1922</option><option value={1921}>1921</option><option value={1920}>1920</option><option value={1919}>1919</option><option value={1918}>1918</option><option value={1917}>1917</option><option value={1916}>1916</option><option value={1915}>1915</option><option value={1914}>1914</option><option value={1913}>1913</option><option value={1912}>1912</option><option value={1911}>1911</option><option value={1910}>1910</option><option value={1909}>1909</option><option value={1908}>1908</option><option value={1907}>1907</option><option value={1906}>1906</option><option value={1905}>1905</option><option value={1904}>1904</option><option value={1903}>1903</option><option value={1902}>1902</option><option value={1901}>1901</option><option value={1900}>1900</option></select></div><div className="FormField FormFieldSelect with_label"><div className="error_tooltip hidden" id="__w2_wS3v0b3P78_error_tooltip">Please fill out this field.</div><label className="input_label" htmlFor="__w2_wS3v0b3P78_end_year" id="__w2_wS3v0b3P78_label">End Year</label><select className="input_select" required="False" id="__w2_wS3v0b3P78_end_year"><option value selected="selected" /><option value={2019}>2019</option><option value={2018}>2018</option><option value={2017}>2017</option><option value={2016}>2016</option><option value={2015}>2015</option><option value={2014}>2014</option><option value={2013}>2013</option><option value={2012}>2012</option><option value={2011}>2011</option><option value={2010}>2010</option><option value={2009}>2009</option><option value={2008}>2008</option><option value={2007}>2007</option><option value={2006}>2006</option><option value={2005}>2005</option><option value={2004}>2004</option><option value={2003}>2003</option><option value={2002}>2002</option><option value={2001}>2001</option><option value={2000}>2000</option><option value={1999}>1999</option><option value={1998}>1998</option><option value={1997}>1997</option><option value={1996}>1996</option><option value={1995}>1995</option><option value={1994}>1994</option><option value={1993}>1993</option><option value={1992}>1992</option><option value={1991}>1991</option><option value={1990}>1990</option><option value={1989}>1989</option><option value={1988}>1988</option><option value={1987}>1987</option><option value={1986}>1986</option><option value={1985}>1985</option><option value={1984}>1984</option><option value={1983}>1983</option><option value={1982}>1982</option><option value={1981}>1981</option><option value={1980}>1980</option><option value={1979}>1979</option><option value={1978}>1978</option><option value={1977}>1977</option><option value={1976}>1976</option><option value={1975}>1975</option><option value={1974}>1974</option><option value={1973}>1973</option><option value={1972}>1972</option><option value={1971}>1971</option><option value={1970}>1970</option><option value={1969}>1969</option><option value={1968}>1968</option><option value={1967}>1967</option><option value={1966}>1966</option><option value={1965}>1965</option><option value={1964}>1964</option><option value={1963}>1963</option><option value={1962}>1962</option><option value={1961}>1961</option><option value={1960}>1960</option><option value={1959}>1959</option><option value={1958}>1958</option><option value={1957}>1957</option><option value={1956}>1956</option><option value={1955}>1955</option><option value={1954}>1954</option><option value={1953}>1953</option><option value={1952}>1952</option><option value={1951}>1951</option><option value={1950}>1950</option><option value={1949}>1949</option><option value={1948}>1948</option><option value={1947}>1947</option><option value={1946}>1946</option><option value={1945}>1945</option><option value={1944}>1944</option><option value={1943}>1943</option><option value={1942}>1942</option><option value={1941}>1941</option><option value={1940}>1940</option><option value={1939}>1939</option><option value={1938}>1938</option><option value={1937}>1937</option><option value={1936}>1936</option><option value={1935}>1935</option><option value={1934}>1934</option><option value={1933}>1933</option><option value={1932}>1932</option><option value={1931}>1931</option><option value={1930}>1930</option><option value={1929}>1929</option><option value={1928}>1928</option><option value={1927}>1927</option><option value={1926}>1926</option><option value={1925}>1925</option><option value={1924}>1924</option><option value={1923}>1923</option><option value={1922}>1922</option><option value={1921}>1921</option><option value={1920}>1920</option><option value={1919}>1919</option><option value={1918}>1918</option><option value={1917}>1917</option><option value={1916}>1916</option><option value={1915}>1915</option><option value={1914}>1914</option><option value={1913}>1913</option><option value={1912}>1912</option><option value={1911}>1911</option><option value={1910}>1910</option><option value={1909}>1909</option><option value={1908}>1908</option><option value={1907}>1907</option><option value={1906}>1906</option><option value={1905}>1905</option><option value={1904}>1904</option><option value={1903}>1903</option><option value={1902}>1902</option><option value={1901}>1901</option><option value={1900}>1900</option></select></div><div className="FormFieldButton FormFieldCheckbox FormField with_label" id="__w2_wS3v0b3P79_wrapper"><div className="error_tooltip hidden" id="__w2_wS3v0b3P79_error_tooltip">Please fill out this field.</div><label className="input_label" htmlFor="__w2_wS3v0b3P79_current" id="__w2_wS3v0b3P79_label">I currently live here</label><input className="input_checkbox" type="checkbox" data-group="js-editable" w2cid="wS3v0b3P79" id="__w2_wS3v0b3P79_current" /></div><div className="form_action_bar clearfix"><input className="submit_button form_submit_button" type="submit" defaultValue="Save" data-group="js-editable" w2cid="wS3v0b3P24" id="__w2_wS3v0b3P24_submit" /><a className="toggle_link" href="#">Cancel</a></div>
</form>
</div></div></div>
<div className="credential_list_item is_add_form hidden" id="__w2_wS3v0b3P15_wrapper_4">
<div className="edit_wrapper">
<div className="u-absolute u-top--0 u-left--0 u-margin-left--md u-margin-top--md">
   <span className="ui_icon ui_icon_color--gray ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
         <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12,12.5 L12,4 L18,4 L16.5,6.25 L18,8.5 L12,8.5 L12,12.5 Z M19,20 L21,20 L17,13 L17,13 L15.8547683,15.0041556 M19,20 L21,20 L17,13 L17,13 L15.8547683,15.0041556 M8.14508587,15.0039003 L7,13 L7,13 L3,20 L5,20 M12,12 L6.5,21 L17.5,21 L12,12 Z" />
         </g>
      </svg>
   </span>
</div>
<div className="title">Add topic credential</div>
<div className="u-padding-top--sm u-padding-bottom--xs">
   <div className="u-bg--gray-ultralight u-border-radius--4 u-border-all u-font-size--13 u-padding-all--md">
      <p className="u-margin-bottom--sm u-font-weight--medium">Good credentials are: </p>
      <ul className="tip_list">
         <div className="u-margin-bottom--sm u-flex u-flex-align--center">
            <span className="ui_icon ui_icon_color--blue ui_icon_size--small ui_icon_outline--default" aria-hidden="true">
               <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                     <path className="icon_svg-stroke" d="M12,3 C16.971,3 21,7.029 21,12 C21,16.971 16.971,21 12,21 C7.029,21 3,16.971 3,12 C3,7.029 7.029,3 12,3 Z M8,12.6290909 L10.9090909,15.5381818 L16,9" stroke="#666666" strokeWidth="1.5" />
                  </g>
               </svg>
            </span>
            <span className="u-margin-left--sm">Short and specific</span>
         </div>
         <div className="u-margin-bottom--sm u-flex u-flex-align--center">
            <span className="ui_icon ui_icon_color--blue ui_icon_size--small ui_icon_outline--default" aria-hidden="true">
               <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                     <path className="icon_svg-stroke" d="M12,3 C16.971,3 21,7.029 21,12 C21,16.971 16.971,21 12,21 C7.029,21 3,16.971 3,12 C3,7.029 7.029,3 12,3 Z M8,12.6290909 L10.9090909,15.5381818 L16,9" stroke="#666666" strokeWidth="1.5" />
                  </g>
               </svg>
            </span>
            <span className="u-margin-left--sm">Helpful, and aren't jokes</span>
         </div>
         <div className="u-margin-bottom--sm u-flex u-flex-align--center">
            <span className="ui_icon ui_icon_color--blue ui_icon_size--small ui_icon_outline--default" aria-hidden="true">
               <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                     <path className="icon_svg-stroke" d="M12,3 C16.971,3 21,7.029 21,12 C21,16.971 16.971,21 12,21 C7.029,21 3,16.971 3,12 C3,7.029 7.029,3 12,3 Z M8,12.6290909 L10.9090909,15.5381818 L16,9" stroke="#666666" strokeWidth="1.5" />
                  </g>
               </svg>
            </span>
            <span className="u-margin-left--sm">Have correct grammar and spelling</span>
         </div>
      </ul>
   </div>
</div>
<div id="wS3v0b3P27">
<form className="AddCredentialsFormLifeExperience Form AddCredentialsForm" method="post" id="__w2_wS3v0b3P28_form">
   <div className="FormField FormFieldTopicSelector with_label">
   <div className="error_tooltip hidden" id="__w2_wS3v0b3P63_error_tooltip">Please fill out this field.</div>
   <label className="input_label" htmlFor="__w2_wS3v0b3P63_topic" id="__w2_wS3v0b3P63_label">Select a topic</label>
   <span id="__w2_wS3v0b3P63_selector">
      <div className="Selector TopicSelector TopicSelectorForFormField AddTopicSelector" tabIndex={-1} id="__w2_wS3v0b3P66_wrapper">
      <div className="selector_input_interaction">
      <input className="selector_input text" type="text" defaultValue data-lpignore="true" data-group="js-editable" placeholder="Visiting and Travel" w2cid="wS3v0b3P66" id="__w2_wS3v0b3P66_input" />
      <div className="selector_spinner hidden" id="__w2_wS3v0b3P66_spinner">
         <div className="LoadingDots tiny">
            <div className="dot first" />
               <div className="dot second" />
                  <div className="dot third" /></div>
               </div>
            </div>
            <div className="selector_results_container is_inline hidden" id="__w2_wS3v0b3P66_results_container">
               <div className="selector_results_container_inner hidden" id="__w2_wS3v0b3P66_results" />
                  <div id="__w2_wS3v0b3P66_empty_input_prompt" /></div>
               </div>
   </span>
   <div className="topic_selection hidden" id="__w2_wS3v0b3P63_topic" /><input className="hidden" type="number" data-group="js-editable" w2cid="wS3v0b3P63" id="__w2_wS3v0b3P63_value" /><div className="remove_link hidden" id="__w2_wS3v0b3P63_remove_topic"><span className="ui_icon ui_icon_color--gray ui_icon_size--xsmall ui_icon_outline--default" aria-hidden="true"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
   <g id="close" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
   <path d="M5.5,5.5 L18.5,18.5" />
   <path d="M5.5,18.5 L18.5,5.5" />
   </g>
   </svg></span></div></div><div className="FormField FormFieldInput with_label with_character_counter"><div className="error_tooltip hidden" id="__w2_wS3v0b3P64_error_tooltip">Please fill out this field.</div><label className="input_label" htmlFor="__w2_wS3v0b3P64_experience" id="__w2_wS3v0b3P64_label">Describe an experience</label><input className="text input_field" type="text" placeholder="travel blogger" required="True" maxLength={60} data-group="js-editable" w2cid="wS3v0b3P64" id="__w2_wS3v0b3P64_experience" /><div className="CharacterCounter fade_out" id="__w2_wS3v0b3P70_counter_wrapper"><div className="counter" id="__w2_wS3v0b3P70_counter">60</div></div></div><div className="LifeExperienceExamples" id="__w2_wS3v0b3P65_wrapper">More examples: <span id="__w2_wS3v0b3P65_example" className="animate_out">drove across the United States</span></div><div className="form_action_bar clearfix"><input className="submit_button form_submit_button" type="submit" defaultValue="Save" data-group="js-editable" w2cid="wS3v0b3P28" id="__w2_wS3v0b3P28_submit" /><a className="toggle_link" href="#">Cancel</a></div>
</form>
</div></div></div>
<div className="credential_list_item is_add_form hidden" id="__w2_wS3v0b3P15_wrapper_6">
<div className="edit_wrapper">
<div className="u-absolute u-top--0 u-left--0 u-margin-left--md u-margin-top--md">
   <span className="ui_icon ui_icon_color--gray ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
         <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,3 C9.05324814,5.04905013 7.2962301,8.41085624 7.2962301,12 C7.2962301,15.5891438 9.05324814,18.9509499 12,21 M12,21 C14.9467519,18.9509499 16.7037699,15.5891438 16.7037699,12 C16.7037699,8.41085624 14.9467519,5.04905013 12,3 M5.2725,6.024 C7.42043824,6.87696825 9.71140493,7.31225192 12.0225,7.3065 C14.2790699,7.30962174 16.5163927,6.89145909 18.6195,6.0735 M18.597,17.85 C14.3188274,16.1633341 9.56308618,16.1456667 5.2725,17.8005 M3,12 L21,12 M12,3 L12,21" />
         </g>
      </svg>
   </span>
</div>
<div className="title">Add language credential</div>
<div id="wS3v0b3P30">
<form className="AddCredentialsFormLanguage Form AddCredentialsForm" method="post" id="__w2_wS3v0b3P31_form">
   <div className="FormField FormFieldTopicSelector FormFieldLanguageSelector">
      <div className="error_tooltip hidden" id="__w2_wS3v0b3P71_error_tooltip">Please fill out this field.</div>
      <span id="__w2_wS3v0b3P71_selector">
         <div className="Selector LanguageSelector TopicSelectorForFormField" tabIndex={-1} id="__w2_wS3v0b3P72_wrapper">
            <div className="selector_input_interaction">
               <input className="selector_input text" type="text" defaultValue data-lpignore="true" data-group="js-editable" placeholder="Search for a language" w2cid="wS3v0b3P72" id="__w2_wS3v0b3P72_input" />
               <div className="selector_spinner hidden" id="__w2_wS3v0b3P72_spinner">
                  <div className="LoadingDots tiny">
                     <div className="dot first" />
                        <div className="dot second" />
                           <div className="dot third" /></div>
                        </div>
                     </div>
                     <div className="selector_results_container is_inline hidden" id="__w2_wS3v0b3P72_results_container">
                        <div className="selector_results_container_inner hidden" id="__w2_wS3v0b3P72_results" />
                           <div id="__w2_wS3v0b3P72_empty_input_prompt" /></div>
                        </div>
      </span>
      <div className="topic_selection hidden" id="__w2_wS3v0b3P71_language_tid" /><input className="hidden" type="number" data-group="js-editable" w2cid="wS3v0b3P71" id="__w2_wS3v0b3P71_value" /><div className="remove_link hidden" id="__w2_wS3v0b3P71_remove_topic"><span className="ui_icon ui_icon_color--gray ui_icon_size--xsmall ui_icon_outline--default" aria-hidden="true"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="close" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
      <path d="M5.5,5.5 L18.5,18.5" />
      <path d="M5.5,18.5 L18.5,5.5" />
      </g>
      </svg></span></div></div><div className="join_explanation">Adding a language credential will add you to Quora in that language, when supported. </div><div className="form_action_bar clearfix"><input className="submit_button form_submit_button" type="submit" defaultValue="Save" data-group="js-editable" w2cid="wS3v0b3P31" id="__w2_wS3v0b3P31_submit" /><a className="toggle_link" href="#">Cancel</a></div>
</form>
</div></div></div></div></div><div className="list_wrapper hidden" id="__w2_wS3v0b3P3_wrapper"><div className="PagedListFoo CredentialsList EditCredentialsList unified" id="__w2_wS3v0b3P6_paged_list"><div className="paged_list_wrapper" id="__w2_wS3v0b3P6_paged_list_wrapper"><div className="u-height--100 u-width--100" id="wS3v0b3P84"><div className="ui_empty--wrapper-stretch u-bg--gray"><div className="ui_empty u-text-align--center u-text--gray u-padding-all--lg ui_empty--fit-stretch"><img className="ui_empty--svg-illustration u-margin-top--lg u-margin-bottom--sm" src="/static/images/ui/illustrations/empty_states/dormant.png" /><div className="u-sans-font-main--large u-font-weight--bold u-margin-bottom--sm">No Credentials</div>
<div className="u-sans-font-main--regular u-margin-bottom--lg">Add credentials to let others know what topics you know about.</div></div></div></div></div><div className="hidden" id="__w2_wS3v0b3P6_more"><div className="ui_section_footer u-hover-bg--black-transparent">View more<div className="u-margin-left--xs u-inline-block"><span className="ui_icon ui_icon_color--gray ui_icon_size--small ui_icon_outline--default" aria-hidden="true"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
<polyline points="5 8.5 12 15.5 19.0048307 8.5" />
</g>
</svg></span></div></div></div><div className="spinner_display_area hidden" id="__w2_wS3v0b3P6_spinner" /></div></div></div></div>
        </Modal>
            




            
            </span>
            </span></span></span></div></div><div id="woVa9VIC3"><div className="AddCredentialListItem AboutListItem AddSchoolCredentialListItem"><span className="u-flex u-padding-bottom--sm"><div className="u-margin-right--sm"><span className="ui_icon ui_icon_color--blue_dark ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5,9.5 L12,5 L21.5,9.5 L12,14 L2.5,9.5 Z M20,10.5 L20,16.5 M6.5,12 C6.5,14 6.5,15 6.5,15 C6.5,16.5048582 9.00219538,18 12,18 C14.9978046,18 17.5,16.4986226 17.5,15 C17.5,15 17.5,14 17.5,12 M20,16.5 L18,20 L22,20 L20,16.5 Z" />
            </g>
            </svg></span></div><span className="body_text"><span className="main_text"><span id="woVa9VIC13"><a className="EditCredentialModalLink CredentialModalLink" href="#" id="__w2_woVa9VIC14_modal_link">Add education credential</a></span></span></span></span></div></div><div id="woVa9VIC5"><div className="AddCredentialListItem AddLocationCredentialListItem AboutListItem"><span className="u-flex u-padding-bottom--sm"><div className="u-margin-right--sm"><span className="ui_icon ui_icon_color--blue_dark ui_icon_size--small_medium ui_icon_outline--default" aria-hidden="true"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
            <path d="M12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 Z M12,20.73 C16.6375,16.5 19,12.9 19,10.2 C19,6.2235498 15.8659932,3 12,3 C8.13400675,3 5,6.2235498 5,10.2 C5,12.9 7.3625,16.41 12,20.73 L12,20.73 Z" />
            </g>
            </svg></span></div><span className="body_text"><span className="main_text"><span id="woVa9VIC16"><a className="EditCredentialModalLink CredentialModalLink" href="#" id="__w2_woVa9VIC17_modal_link">Add a location credential</a></span></span></span></span></div></div></div></div>
         </div>
         <div id="wYSVVNEt45" />
            <div id="wYSVVNEt47">
               <div className="ProfileExperienceList EditableList" id="__w2_wYSVVNEt48_wrapper">
                  <h3 className="title">
                     <div>
                        <div className="title_with_link">
                           Knows About
                           <a href="#" id="__w2_wYSVVNEt48_modal_link_title">
                              <div className="edit_icon" />
                           </a>
                           </div>
                        </div>
                  </h3>
                  <a className="add_experience_cta" href="#" id="__w2_wYSVVNEt48_modal_link"><div className="add_icon_wrapper"><div className="ui_icon_badge u-relative u-flex-none u-flex u-flex-align--center u-flex-justify--center ui_icon_badge_size--fluid u-border-radius--ellipse ui_icon_badge_color--blue"><span className="ui_icon ui_icon_color--white ui_icon_outline--filled ui_icon_type--shape u-flex-align-self--center" aria-hidden="true"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                  <path d="M4.5,12 L19.5,12" />
                  <path d="M12,4.5 L12,19.5" />
                  </g>
                  </svg></span></div></div>What topics do you know about?</a></div>
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
  
  export default connect(mapStateToProps)(Profile);
  
