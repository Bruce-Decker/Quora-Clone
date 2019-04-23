import React, { Component } from 'react'

import './Navbar.css'
import { Link } from 'react-router-dom' 
import { connect } from 'react-redux';
import { logout  } from '../../actions/authActions'
import default_image from './default.png'

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  
    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = (node) => {
      this.wrapperRef = node;
    }

    handleClickOutside = (event) => {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
         this.setState({
            isHidden: true
          })
      }
    }
  

    LogoutButton = (e) => {
   
    
     
      this.props.logout();
      
    }
    
    onClick = () => {
        this.setState({
            isHidden: !this.state.isHidden
          })
    }
    render() {

        return (
            <div ref={this.setWrapperRef}>
<div style={{visibility: 'hidden', overflow: 'hidden', position: 'absolute', top: '0px', height: '1px', width: 'auto', padding: '0px', border: '0px', margin: '0px', textAlign: 'left', textIndent: '0px', textTransform: 'none', lineHeight: 'normal', letterSpacing: 'normal', wordSpacing: 'normal'}}>
<div id="MathJax_Hidden" /></div>
<div id="MathJax_Message" style={{display: 'none'}} />
<div id="__w2_modal_container_">
<div className="modal_overlay hidden" id="__w2_modal_overlay_">
   <div className="modal_wrapper normal" id="__w2_modal_wrapper_" /></div>
</div>
<div className="hidden modal_overlay">
<div className="modal_wrapper normal hidden" id="-4-1559277958">
<div className="Step AskQuestionStep Modal">
<div className="modal_header only_close_button">
   <div className="modal_close" id="__w2_wdgZpkyi1_close">
      <a className="ui_button u-nowrap ui_button--styled ui_button--FlatStyle ui_button--FlatStyle--gray ui_button--size_regular u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon ui_button--icon_only" href="https://www.quora.com/#" role="button" aria-label="Close" id="__w2_wdgZpkyi2_button">
         <div className="ui_button_inner" id="__w2_wdgZpkyi2_inner">
            <div className="ui_button_icon_wrapper u-relative u-flex-inline">
               <div id="__w2_wdgZpkyi2_icon">
                  <span className="ui_button_icon" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                     </svg>
                  </span>
               </div>
            </div>
         </div>
      </a>
   </div>
   <div className="tabs_header u-flex-inline u-flex-row">
      <div className="tab selected" id="__w2_wdgZpkyi1_question_tab">Add Question</div>
      <div className="tab" id="__w2_wdgZpkyi1_link_tab">Share Link</div>
   </div>
</div>
<div className="modal_content modal_content_tabs" id="__w2_wdgZpkyi1_content">
<div id="__w2_wdgZpkyi1_content_inner_question">
<div className="u-border-bottom u-margin-bottom--md u-padding-bottom--sm">
   <p className="u-sans-font-main--large u-font-weight--medium u-margin-bottom--xs">Tips on getting good answers quickly</p>
   <ul className="tip_list">
      <div className="u-margin-bottom--sm u-flex u-flex-align--center">
         <span className="ui_icon ui_icon_color--blue ui_icon_size--small ui_icon_outline--default" aria-hidden="true">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            </svg>
         </span>
         <span className="u-margin-left--sm">Double-check grammar and spelling</span>
      </div>
   </ul>
</div>
<div className="ask_modal_header">
   <div className="user_asks_header"><span className="user_action"><span className="IdentityNameWithPhoto NameWithPhoto"><span id="wdgZpkyi14"><span className="photo_tooltip PhotoSpan HoverMenu Photo IdentityPhoto" id="__w2_wdgZpkyi15_link"><a href="https://www.quora.com/profile/Bruce-Decker-12" id="__w2_wdgZpkyi18_link"><img className="profile_photo_img" src="default-image.png" alt=" " height={50} width={50} /></a></span></span><span id="wdgZpkyi16"><span id="__w2_wdgZpkyi17_link"><a className="user" href="https://www.quora.com/profile/Bruce-Decker-12" action_mousedown="UserLinkClickthrough" id="__w2_wdgZpkyi17_name_link"></a></span></span></span> asked</span></div>
   <div className="mini_distribution_switcher">
      <div className="u-relative button_area" id="__w2_wdgZpkyi7_pop_over_link">
         <span className="multi_state_button" id="__w2_wdgZpkyi7_button_0">
            <a className="ui_button u-nowrap ui_button--styled ui_button--PillStyle ui_button--PillStyle--gray ui_button--size_small u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon" href="https://www.quora.com/#" role="button" id="__w2_wdgZpkyi35_button">
               <div className="ui_button_inner" id="__w2_wdgZpkyi35_inner">
                  <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                     <div id="__w2_wdgZpkyi35_icon">
                        <span className="ui_button_icon" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_wdgZpkyi35_label">Public</span></div>
                  <span className="ui_button-chevron_suffix u-flex-inline ui_button-vertically_flippable_chevron" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                           <polyline points="5 8.5 12 15.5 19.0048307 8.5" />
                        </g>
                     </svg>
                  </span>
               </div>
            </a>
         </span>
         <span className="multi_state_button hidden" id="__w2_wdgZpkyi7_button_1">
            <a className="ui_button u-nowrap ui_button--styled ui_button--PillStyle ui_button--PillStyle--gray ui_button--size_small u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon" href="https://www.quora.com/#" role="button" id="__w2_wdgZpkyi36_button">
               <div className="ui_button_inner" id="__w2_wdgZpkyi36_inner">
                  <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                     <div id="__w2_wdgZpkyi36_icon">
                        <span className="ui_button_icon" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g stroke="none" fill="none" fillRule="evenodd" strokeDasharray="0,3" strokeLinecap="round">
                                 <g className="icon_svg-stroke" id="Group" transform="translate(6.000000, 4.000000)" stroke="#666666">
                                    <path d="M12,17 C12,13.6862915 9.3137085,11 6,11 C2.6862915,11 0,13.6862915 0,17" id="Shape" />
                                    <path d="M6,8 C8.209139,8 10,6.209139 10,4 C10,1.790861 8.209139,0 6,0 C3.790861,0 2,1.790861 2,4 C2,6.209139 3.790861,8 6,8 Z" id="Oval" />
                                 </g>
                              </g>
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_wdgZpkyi36_label">Anonymous</span></div>
                  <span className="ui_button-chevron_suffix u-flex-inline ui_button-vertically_flippable_chevron" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                           <polyline points="5 8.5 12 15.5 19.0048307 8.5" />
                        </g>
                     </svg>
                  </span>
               </div>
            </a>
         </span>
         <span className="multi_state_button hidden" id="__w2_wdgZpkyi7_button_2">
            <a className="ui_button u-nowrap ui_button--styled ui_button--PillStyle ui_button--PillStyle--gray ui_button--size_small u-inline-block ui_button--non_link ui_button--supports_icon ui_button--has_icon" href="https://www.quora.com/#" role="button" id="__w2_wdgZpkyi37_button">
               <div className="ui_button_inner" id="__w2_wdgZpkyi37_inner">
                  <div className="ui_button_icon_wrapper u-relative u-flex-inline">
                     <div id="__w2_wdgZpkyi37_icon">
                        <span className="ui_button_icon" aria-hidden="true">
                           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g stroke="none" fill="none" fillRule="evenodd">
                                 <g className="icon_svg-stroke" transform="translate(6.000000, 3.000000)" stroke="#666666" strokeWidth="1.5">
                                    <path d="M13,18 C13,14.6862915 10.0898509,12 6.5,12 C2.91014913,12 0,14.6862915 0,18" />
                                    <circle cx="6.5" cy={5} r="4.5" />
                                 </g>
                              </g>
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div className="ui_button_label_count_wrapper"><span className="ui_button_label" id="__w2_wdgZpkyi37_label">Limited</span></div>
                  <span className="ui_button-chevron_suffix u-flex-inline ui_button-vertically_flippable_chevron" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                           <polyline points="5 8.5 12 15.5 19.0048307 8.5" />
                        </g>
                     </svg>
                  </span>
               </div>
            </a>
         </span>
      </div>
      <div className="ui_popup use_new_menu ui_popup_menu hidden ui_popup--show_nub ui_popup_align--right" id="__w2_wdgZpkyi7_pop_over_menu">
         <div className="ui_menu_overflowmenu u-bg--white u-border-all u-padding-top--sm u-padding-bottom--sm" id="__w2_wdgZpkyi7_menu_contents">
            <div id="wdgZpkyi19">
               <a href="https://www.quora.com/#" id="__w2_wdgZpkyi20_pop_over_menu_item">
                  <span className="ui_menu_item_checkmark error" id="__w2_wdgZpkyi20_contents">
                     <div id="wdgZpkyi38">
                        <div className="ui_menu_item u-block u-padding-right--md u-text--gray-dark u-sans-font-main--small pass_color_to_child_links">
                           <div className="ui_menu_item_text u-inline-block no_icon">
                              <div className="ui_menu_item_label">Public</div>
                              <div className="ui_menu_item_sublabel u-text--gray-light u-line-height--1_3 u-font-size--11">Others will see your identity alongside this question on your profile and in their feeds.</div>
                           </div>
                        </div>
                     </div>
                  </span>
               </a>
            </div>
            <div id="wdgZpkyi21">
               <a href="https://www.quora.com/#" id="__w2_wdgZpkyi22_pop_over_menu_item">
                  <span id="__w2_wdgZpkyi22_contents">
                     <div id="wdgZpkyi40">
                        <div className="ui_menu_item u-block u-padding-right--md u-text--gray-dark u-sans-font-main--small pass_color_to_child_links">
                           <div className="ui_menu_item_text u-inline-block no_icon">
                              <div className="ui_menu_item_label">Anonymous</div>
                              <div className="ui_menu_item_sublabel u-text--gray-light u-line-height--1_3 u-font-size--11">Your identity will never be associated with this question.</div>
                           </div>
                        </div>
                     </div>
                  </span>
               </a>
            </div>
            <div id="wdgZpkyi23">
               <a href="https://www.quora.com/#" id="__w2_wdgZpkyi24_pop_over_menu_item">
                  <span id="__w2_wdgZpkyi24_contents">
                     <div id="wdgZpkyi42">
                        <div className="ui_menu_item u-block u-padding-right--md u-text--gray-dark u-sans-font-main--small pass_color_to_child_links">
                           <div className="ui_menu_item_text u-inline-block no_icon">
                              <div className="ui_menu_item_label">Limited</div>
                              <div className="ui_menu_item_sublabel u-text--gray-light u-line-height--1_3 u-font-size--11">Your identity will be shown but this question will not appear in your followers' feeds or your profile.</div>
                           </div>
                        </div>
                     </div>
                  </span>
               </a>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="TypersearchESDuplicateQuestionSelector AskQuestionSelector Selector" tabIndex={-1} id="__w2_wdgZpkyi8_wrapper">
<div className="selector_input_interaction">
<div className="CharacterCounter fade_out" id="__w2_wdgZpkyi25_counter_wrapper">
   <div className="counter" id="__w2_wdgZpkyi25_counter">250</div>
</div>
<textarea className="selector_input text" type="text" rows={1} title="Start your question with &quot;What&quot;, &quot;How&quot;, &quot;Why&quot;, etc." data-group="js-editable" placeholder="Start your question with &quot;What&quot;, &quot;How&quot;, &quot;Why&quot;, etc." w2cid="wdgZpkyi8" id="__w2_wdgZpkyi8_input" style={{overflowX: 'hidden', overflowWrap: 'break-word'}} defaultValue={""} />
<div className="selector_spinner hidden" id="__w2_wdgZpkyi8_spinner">
<div className="LoadingDots tiny">
   <div className="dot first" />
      <div className="dot second" />
         <div className="dot third" /></div>
      </div>
   </div>
   <div className="selector_results_container is_inline hidden" id="__w2_wdgZpkyi8_results_container">
      <div className="selector_results_container_inner hidden" id="__w2_wdgZpkyi8_results" />
         <div id="__w2_wdgZpkyi8_empty_input_prompt" /></div>
      </div>
      <div id="wdgZpkyi9">
         <div className="QuestionSourceEdit">
            <div className="source_editor" id="__w2_wdgZpkyi10_toolbar">
               <div className="bar bar_link_state u-flex u-flex-align--center">
                  <span className="ui_icon ui_icon_color--gray_light ui_icon_size--small ui_icon_outline--default" aria-hidden="true">
                     <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                     </svg>
                  </span>
                  <input className="u-flex-auto" type="url" defaultValue formNoValidate="formnovalidate" placeholder="Optional: include a link that gives context" data-group="js-editable" w2cid="wdgZpkyi10" id="__w2_wdgZpkyi10_link_input" />
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="hidden" id="__w2_wdgZpkyi1_content_inner_link">
      <div className="QuoraShareEditor">
         <div className="ask_modal_header">
            <div className="user_asks_header"><span className="user_action"><span className="IdentityNameWithPhoto NameWithPhoto"><span id="wdgZpkyi30"><span className="photo_tooltip PhotoSpan HoverMenu Photo IdentityPhoto" id="__w2_wdgZpkyi31_link"><a href="https://www.quora.com/profile/Bruce-Decker-12" id="__w2_wdgZpkyi34_link"><img className="profile_photo_img" src="default-image.png" alt="" height={50} width={50} /></a></span></span><span id="wdgZpkyi32"><span id="__w2_wdgZpkyi33_link"><a className="user" href="https://www.quora.com/profile/Bruce-Decker-12" action_mousedown="UserLinkClickthrough" id="__w2_wdgZpkyi33_name_link"></a></span></span></span> shared</span></div>
         </div>
         <div className="selector_input_interaction">
            <div cname="quora_share_editor" id="share_input"><textarea className="selector_input selector_input_link_comment" autofocus="True" name="description" rows={1} type="text" cname="quora_share_editor" data-group="js-editable" placeholder="Say something about this..." w2cid="wdgZpkyi12" id="__w2_wdgZpkyi12_share_comment" style={{overflowX: 'hidden', overflowWrap: 'break-word'}} defaultValue={""} /></div>
            <div className="CharacterCounter" id="__w2_wdgZpkyi29_counter_wrapper">
               <div className="counter" id="__w2_wdgZpkyi29_counter">250</div>
            </div>
         </div>
      </div>
      <div className="url_input_box u-flex u-flex-column u-margin-top--md" id="__w2_wdgZpkyi1_url_input_box">
         <div className="selector_input_interaction url_input u-flex u-flex-align--center" id="__w2_wdgZpkyi1_url_input">
            <span className="ui_icon ui_icon_color--gray ui_icon_size--small ui_icon_outline--default" aria-hidden="true">
               <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
               </svg>
            </span>
            <input className="input u-flex-auto" type="url" autofocus="True" defaultValue formNoValidate="formnovalidate" placeholder="Enter a link" data-group="js-editable" w2cid="wdgZpkyi1" id="__w2_wdgZpkyi1_share_link_url" />
         </div>
      </div>
      <div className="fake_preview hidden" id="__w2_wdgZpkyi1_fake_preview">
         <div className="close_wrapper u-flex u-flex-row-reverse">
            <div className="close_preview" id="__w2_wdgZpkyi1_close_preview">
               <div className="x" />
               </div>
            </div>
            <div id="__w2_wdgZpkyi1_link_preview" />
            </div>
            <div id="__w2_wdgZpkyi1_duplicate_tribe_share" />
            </div>
         </div>
         <div className="modal_footer" id="__w2_wdgZpkyi1_modal_footer">
            <div className="modal_actions">
               <span className="text_links">
               <a className="modal_cancel modal_action" href="https://www.quora.com/#" id="__w2_wdgZpkyi1_cancel">Cancel</a>
               <span id="__w2_wdgZpkyi1_submit_question_anon" /></span>
               <span id="__w2_wdgZpkyi1_submit_question">
               <a className="submit_button modal_action" href="https://www.quora.com/#" id="__w2_wdgZpkyi1_submit">Add Question</a>
               </span>
               <span className="hidden" id="__w2_wdgZpkyi1_submit_link_footer">
               <a className="submit_button modal_action" href="https://www.quora.com/#" id="__w2_wdgZpkyi1_submit_link">Share Link</a>
               </span>
            </div>
         </div>
      </div>
   </div>
</div>
<div>
<div className="SiteHeader LoggedInSiteHeader new_header" id="__w2_wlKOhcos14_header">
<div className="header_inner u-flex u-flex-row">
<div className="header_logo u-flex-none">
   <a href="https://www.quora.com/"><span>Quora</span></a>
</div>
<div className="header_contents u-flex u-flex-auto u-margin-left--sm">
<div className="header_nav" role="navigation" id="__w2_wlKOhcos14_nav">
<span id="wGp3JsZF1">

   <div className="SiteHeaderNavItem FeedNavItem HoverMenu">

      <a className= {this.props.Home} href="https://www.quora.com/" target id="__w2_wGp3JsZF2_link">
         <div className="u-margin-right--xs u-flex-inline">
            <span className="ui_icon ui_icon_color--red ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
               <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
               <g stroke="none" class="icon_svg-fill_as_stroke" fill="#666" fill-rule="nonzero">
        <path d="M2.4913634,2.04921404 C2.98092279,1.55513216 3.64670648,1.27576655 4.34511285,1.27256944 L21.6432503,1.27256944 C21.9884286,1.27256944 22.2682507,1.55239192 22.2682503,1.89757017 L22.2682226,20.0928469 C22.2714301,20.7904709 21.9965456,21.4606224 21.5043785,21.9550524 C21.0122114,22.4494823 20.3433278,22.7274379 19.6457031,22.7274306 L2.35674959,22.7274306 C2.01157134,22.7274306 1.73174919,22.4476081 1.73174959,22.1024298 L1.73177083,3.90562151 C1.72897519,3.21063504 2.00216491,2.54293169 2.4913634,2.04921404 Z M5.45178819,5.75945313 C5.13477579,5.75945313 4.87778646,6.01644246 4.87778646,6.33345486 C4.87778646,6.65046727 5.13477579,6.9074566 5.45178819,6.9074566 L11.5407986,6.9074566 C11.857811,6.9074566 12.1148003,6.65046727 12.1148003,6.33345486 C12.1148003,6.01644246 11.857811,5.75945313 11.5407986,5.75945313 L5.45178819,5.75945313 Z M5.45178819,9.60756076 C5.13477579,9.60756076 4.87778646,9.86455009 4.87778646,10.1815625 C4.87778646,10.4985749 5.13477579,10.7555642 5.45178819,10.7555642 L11.5407986,10.7555642 C11.857811,10.7555642 12.1148003,10.4985749 12.1148003,10.1815625 C12.1148003,9.86455009 11.857811,9.60756076 11.5407986,9.60756076 L5.45178819,9.60756076 Z M18.7686285,18.4425955 C19.0856409,18.4425955 19.3426302,18.1856062 19.3426302,17.8685938 C19.3426302,17.5515813 19.0856409,17.294592 18.7686285,17.294592 L5.45178819,17.294592 C5.13477579,17.294592 4.87778646,17.5515813 4.87778646,17.8685938 C4.87778646,18.1856062 5.13477579,18.4425955 5.45178819,18.4425955 L18.7686285,18.4425955 Z M18.7686285,14.5990799 C19.0856409,14.5990799 19.3426302,14.3420905 19.3426302,14.0250781 C19.3426302,13.7080657 19.0856409,13.4510764 18.7686285,13.4510764 L5.45178819,13.4510764 C5.13477579,13.4510764 4.87778646,13.7080657 4.87778646,14.0250781 C4.87778646,14.3420905 5.13477579,14.5990799 5.45178819,14.5990799 L18.7686285,14.5990799 Z M19.3472222,10.3927951 L19.3472222,5.90180556 C19.3472668,5.74715364 19.2849044,5.59902688 19.17426,5.49097576 C19.0636157,5.38292463 18.9140518,5.32409217 18.7594444,5.32780382 L14.2684549,5.32780382 C13.9514425,5.32780382 13.6944531,5.58479315 13.6944531,5.90180556 L13.6944531,10.3927951 C13.6944531,10.7098075 13.9514425,10.9667969 14.2684549,10.9667969 L18.7732205,10.9667969 C19.0902329,10.9667969 19.3472222,10.7098075 19.3472222,10.3927951 Z"></path>
    </g>
               </svg>
            </span>
         </div>
         <span className="expanded">Home</span>
         <span className="truncated">Home</span> 
      </a>
   </div>

</span>
<span id="wGp3JsZF3">
   <div className="SiteHeaderNavItem WriteNavItem HoverMenu">
   <a className={this.props.Answer} href="https://www.quora.com/answer" target id="__w2_wGp3JsZF4_link">
      <div className="u-margin-right--xs u-flex-inline">
         <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                
            <g stroke="none" class="icon_svg-fill_as_stroke" fill="#666" fill-rule="nonzero">
        <path d="M3.56993697,19.0927202 L4.90727984,20.430063 L6.32212519,19.8415186 L21.6540999,4.51430825 C22.0414488,4.12695944 22.1927257,3.56238623 22.0509462,3.0332579 C21.9091667,2.50412957 21.4958704,2.09083329 20.9667421,1.94905379 C20.4376281,1.80727812 19.8730711,1.95854305 19.4857232,2.34586864 L4.15848145,17.6778748 L3.56993697,19.0927202 Z M3.04166667,3.04166667 L3.04166667,13.4375 C3.04166667,13.782678 2.76184464,14.0625 2.41666667,14.0625 C2.0714887,14.0625 1.79166667,13.782678 1.79166667,13.4375 L1.79166667,2.41666667 C1.79166667,2.0714887 2.0714887,1.79166667 2.41666667,1.79166667 L12.4791667,1.79166667 C12.8243446,1.79166667 13.1041667,2.0714887 13.1041667,2.41666667 C13.1041667,2.76184464 12.8243446,3.04166667 12.4791667,3.04166667 L3.04166667,3.04166667 Z M20.9583333,20.9583333 L20.9583333,10.5625 C20.9583333,10.217322 21.2381554,9.9375 21.5833333,9.9375 C21.9285113,9.9375 22.2083333,10.217322 22.2083333,10.5625 L22.2083333,21.5833333 C22.2083333,21.9285113 21.9285113,22.2083333 21.5833333,22.2083333 L11.5208333,22.2083333 C11.1756554,22.2083333 10.8958333,21.9285113 10.8958333,21.5833333 C10.8958333,21.2381554 11.1756554,20.9583333 11.5208333,20.9583333 L20.9583333,20.9583333 Z M18.6017396,1.46208528 C19.3049382,0.758886609 20.3297725,0.484283075 21.2902659,0.741646501 C22.2507593,0.999009928 23.0009901,1.74924069 23.2583535,2.7097341 C23.5157169,3.67022752 23.2411134,4.69506179 22.5379147,5.39826041 L7.11833139,20.8130521 C7.06053277,20.8708327 6.99196292,20.9167166 6.91650427,20.9481057 L1.69837927,23.1187307 C1.18343214,23.3329374 0.667062601,22.8165679 0.881269257,22.3016207 L3.05189426,17.0834957 C3.08328339,17.0080371 3.12916726,16.9394672 3.18694792,16.8816686 L18.6017396,1.46208528 Z"></path>
    </g>
            </svg>
         </span>
      </div>
      <span className="expanded">Answer</span><span className="truncated">Answer</span> 
      <div id="wGp3JsZF19" />
   </a>
   </div>
</span>
<span id="wGp3JsZF5">
   <div className="SiteHeaderNavItem TribeFeedNavItem HoverMenu">
      <a className={this.props.Spaces} href="https://www.quora.com/spaces" target id="__w2_wGp3JsZF6_link">
         <div className="u-margin-right--xs u-flex-inline">
            <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
               <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
               <g stroke="none" class="icon_svg-fill_as_stroke" fill="#666" fill-rule="nonzero">
        <path d="M8.34138274,2.68449938 C8.4139274,2.92924151 8.41266315,3.18967341 8.34389684,3.41103916 C8.20752364,3.92243866 7.80459805,4.375 7.24,4.375 C6.86280158,4.375 6.55107974,4.16718544 6.18694715,3.80305285 C6.06820568,3.68431138 5.9465184,3.54910329 5.8223617,3.40011525 C5.76307392,3.32896992 5.70437379,3.25609389 5.64658001,3.18219914 C5.14716084,3.60642159 4.59810475,3.98561558 3.98281494,4.32590442 C3.35564226,4.59033527 2.69437313,4.7613396 2.02010189,4.8345319 C2.16388002,5.48018959 2.54065684,6.06743833 3.10472055,6.46785997 C4.04159534,7.13293547 5.29461019,7.14025388 6.23918974,6.48616728 C6.52297172,6.2896587 6.91232414,6.36040777 7.10883272,6.64418974 C7.3053413,6.92797172 7.23459223,7.31732414 6.95081026,7.51383272 C5.57373091,8.46740951 3.74699132,8.45674018 2.38114454,7.48714294 C1.01529777,6.5175457 0.402693118,4.7965556 0.848688319,3.18201402 C1.29468352,1.56747245 2.70381663,0.404959964 4.37369389,0.273940292 C6.04357115,0.14292062 7.6167678,1.07143754 8.3091113,2.59666431 C8.32221974,2.6255421 8.33294932,2.65489386 8.34138274,2.68449938 Z M20.4878034,8.03429234 C19.333131,8.40186164 18.0471552,8.22912331 17.0141897,7.51383272 C16.7304078,7.31732414 16.6596587,6.92797172 16.8561673,6.64418974 C17.0526759,6.36040777 17.4420283,6.2896587 17.7258103,6.48616728 C18.5410833,7.05071386 19.5861262,7.12254458 20.4593531,6.70400496 C21.1656032,6.24080478 21.3903212,5.30034864 20.9424018,4.53232821 C20.8901611,4.42915286 20.7367041,4.25664608 20.5050083,4.05336599 C20.339354,3.90802791 20.1406243,3.75213451 19.9163524,3.58988863 C19.6483257,3.39598913 19.3590267,3.20373946 19.0694869,3.02269845 C19.0508552,3.01104861 19.0326798,2.99972734 19.0149858,2.98874561 L17.0690367,4.27178899 C16.7638397,4.47301781 16.351842,4.37049687 16.1765445,4.04970246 L15.7376304,3.24648963 C15.6457486,3.1319184 15.5965395,2.98752304 15.6000196,2.839973 C15.5992989,2.74963046 15.6181522,2.65900957 15.6568098,2.57464475 C16.4378802,0.87006388 18.3027447,-0.0581820309 20.1336094,0.34629471 C21.3628559,0.617861274 22.3529111,1.44073725 22.8678985,2.51869753 C22.9690346,2.72942626 23.0525239,2.95109686 23.1163117,3.18201402 C23.2323273,3.60200058 23.2767113,4.02919012 23.2548388,4.44848303 L23.2530095,6.70015924 C23.2610896,6.8011601 23.2818445,6.96203704 23.3164382,7.12014661 C23.7519929,7.17543207 24.1000654,7.71578626 23.7258331,8.15522564 C23.6603223,8.23215129 23.5557983,8.33662214 23.4145393,8.44924232 C23.1757306,8.639635 22.9075672,8.78994369 22.6076614,8.8737925 C21.8466078,9.08657082 21.1026892,8.81577789 20.4878034,8.03429234 Z M8.18196091,5.66997353 C8.217776,4.75509384 8.74125748,3.8787954 9.51022096,3.24501525 C10.2085822,2.63798084 11.1206069,2.27037218 12.1184843,2.27000028 C12.1189895,2.27000011 12.1194947,2.27 12.12,2.27 C12.1205053,2.27 12.1210105,2.27000011 12.1215157,2.27000032 C13.1193931,2.27037218 14.0314178,2.63798084 14.729779,3.24501525 C15.4987425,3.8787954 16.022224,4.75509384 16.0580391,5.66997353 C16.0856852,5.85931673 16.1,6.05298667 16.1,6.25 C16.1,8.4480933 14.3180933,10.23 12.12,10.23 C9.9219067,10.23 8.14,8.4480933 8.14,6.25 C8.14,6.05298667 8.15431476,5.85931673 8.18196091,5.66997353 Z M9.39378481,6.395 C9.46915964,7.83532781 10.6609036,8.98 12.12,8.98 C13.5790964,8.98 14.7708404,7.83532781 14.8462152,6.395 L9.39378481,6.395 Z M21.915,22.375 L21.9150005,13.220809 C21.9132608,11.8767813 21.0091428,10.7014332 19.7105273,10.3550067 C18.4119117,10.0085802 17.0425015,10.5774282 16.3715513,11.7420051 C16.1992356,12.0410956 15.8170854,12.143867 15.5179949,11.9715513 C15.2189044,11.7992356 15.116133,11.4170854 15.2884487,11.1179949 C16.2417854,9.46327616 18.1875467,8.65501405 20.0327176,9.14724294 C21.8778885,9.63947184 23.1625275,11.309495 23.165,13.22 L23.165,23 C23.165,23.345178 22.885178,23.625 22.54,23.625 L17.27,23.625 C16.924822,23.625 16.645,23.345178 16.645,23 C16.645,22.654822 16.924822,22.375 17.27,22.375 L21.915,22.375 Z M14.905,22.375 L14.905,15.135 C14.905,13.4947143 13.5752857,12.165 11.935,12.165 C10.2947143,12.165 8.965,13.4947143 8.965,15.135 L8.965,22.375 L14.905,22.375 Z M7.715,23 L7.715,15.135 C7.715,12.8043584 9.60435836,10.915 11.935,10.915 C14.2656416,10.915 16.155,12.8043584 16.155,15.135 L16.155,23 C16.155,23.345178 15.875178,23.625 15.53,23.625 L8.34,23.625 C7.99482203,23.625 7.715,23.345178 7.715,23 Z M1.955,22.375 L6.6,22.375 C6.94517797,22.375 7.225,22.654822 7.225,23 C7.225,23.345178 6.94517797,23.625 6.6,23.625 L1.33,23.625 C0.984822031,23.625 0.705,23.345178 0.705,23 L0.705000524,13.219191 C0.707472514,11.309495 1.99211151,9.63947184 3.83728239,9.14724294 C5.68245328,8.65501405 7.62821457,9.46327616 8.58155129,11.1179949 C8.75386696,11.4170854 8.65109565,11.7992356 8.35200513,11.9715513 C8.05291461,12.143867 7.67076439,12.0410956 7.49844871,11.7420051 C6.82749846,10.5774282 5.45808827,10.0085802 4.15947274,10.3550067 C2.86085721,10.7014332 1.95673924,11.8767813 1.955,13.22 L1.955,22.375 Z"></path>
    </g>
               </svg>
            </span>
         </div>
         <span className="expanded">Spaces</span><span className="truncated">Spaces</span> 
      </a>
   </div>
</span>
<span id="wGp3JsZF7">
   <div className="NotifsNavItem SiteHeaderNavItem HoverMenu">
   <div className="hover_menu hidden hover_menu_header show_nub" id="__w2_wGp3JsZF8_menu">
      <div className="hover_menu_contents" id="__w2_wGp3JsZF8_menu_contents"> </div>
   </div>
   <a className="nav_item_link" href="https://www.quora.com/#" target id="__w2_wGp3JsZF8_link">
      <div className="u-margin-right--xs u-flex-inline">
         <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" class="icon_svg-fill_as_stroke" fill="#666" fill-rule="nonzero">
        <path d="M7.52623147,20.785 L2.79,20.785 C2.44482203,20.785 2.165,20.505178 2.165,20.16 L2.165,17.29 C2.165,17.0074029 2.35462776,16.759965 2.62750674,16.6864928 C3.53489668,16.4421796 4.29934428,15.8306216 4.7207945,15.0318719 C4.9275141,14.5760287 5.06975441,13.9060632 5.14652602,13.0874967 C5.22522536,12.2483761 5.22985909,11.3460973 5.1901543,10.5099262 C5.18132015,10.3238819 5.17258627,10.1897885 5.16500014,10.0695864 C5.16692674,7.15836438 6.9889796,4.66737849 9.56682756,3.68343601 C9.26674573,2.76136733 9.51351889,1.71491397 10.2655534,1.02510085 C11.2368263,0.134188561 12.7281737,0.134188561 13.6994466,1.02510085 C14.4567778,1.71977241 14.7017053,2.77612562 14.3917505,3.70290007 C16.9386536,4.70128291 18.7376316,7.18746315 18.7381538,10.1180033 C18.7329004,10.1862007 18.7247029,10.3170436 18.7164115,10.4987995 C18.678225,11.3358848 18.6837149,12.2411691 18.7623359,13.0834986 C18.8380419,13.8945969 18.9766156,14.5599136 19.17701,15.0156444 C19.6139373,15.8286861 20.3650186,16.4276075 21.2556099,16.6723406 C21.5269485,16.746904 21.715,16.9936028 21.715,17.275 L21.715,20.16 C21.715,20.505178 21.435178,20.785 21.09,20.785 L16.4737685,20.785 C15.6735053,22.5149427 13.9340364,23.6434187 12,23.6434187 C10.0659636,23.6434187 8.3264947,22.5149427 7.52623147,20.785 Z M8.95818095,20.785 C9.63220587,21.774741 10.7627679,22.3934187 12,22.3934187 C13.2372321,22.3934187 14.3677941,21.774741 15.041819,20.785 L8.95818095,20.785 Z M7.80361295,19.535 C7.89567224,19.5142961 7.98863461,19.5152554 8.07648752,19.535 L15.9235125,19.535 C16.0113654,19.5152554 16.1043278,19.5142961 16.1963871,19.535 L20.465,19.535 L20.465,17.7251708 C19.4384878,17.3236618 18.5834869,16.56595 18.0626714,15.5825032 L18.0448315,15.545994 C17.7730214,14.9405986 17.6061243,14.1465374 17.5177455,13.1996657 C17.4329279,12.2909471 17.4271114,11.3317998 17.4677101,10.4418358 C17.4766231,10.2464541 17.48563,10.1026919 17.4900001,10.0704219 C17.4882373,7.45898538 15.6944864,5.26158524 13.2709816,4.65215684 C12.8499185,4.55074042 12.4198492,4.49464202 12,4.485 L11.9107287,4.485 C11.4750185,4.50033889 11.0422154,4.56253715 10.6198006,4.67052602 C10.5799586,4.6807115 10.5397482,4.6868304 10.4996905,4.68906255 C8.1413814,5.34564207 6.41637567,7.50171255 6.41300955,10.0201592 C6.41963917,10.1030295 6.42924345,10.2504862 6.43874746,10.450638 C6.48100503,11.3405697 6.47608988,12.2976474 6.39106442,13.2042193 C6.30247091,14.1488351 6.13407121,14.9420139 5.84311826,15.5810072 C5.31946645,16.5763138 4.45411449,17.3415933 3.415,17.7424956 L3.415,19.535 L7.80361295,19.535 Z M10.7730327,3.3462836 C11.1317244,3.28076521 11.5003399,3.24303757 11.8765942,3.23543396 C11.8774166,3.23540611 11.8782389,3.23537841 11.8790613,3.23535084 L11.9,3.235 L12.0100562,3.23508091 C12.4123669,3.24155487 12.8061097,3.28266789 13.1884584,3.35561277 C13.3719335,2.87349632 13.2526354,2.31147152 12.8544926,1.94627004 C12.3612083,1.49379883 11.6037917,1.49379883 11.1105074,1.94627004 C10.71493,2.30911841 10.5946154,2.86626188 10.7730327,3.3462836 Z"></path>
    </g>
            </svg>
         </span>
      </div>
      <span className="expanded">Notifications</span>
      <span className="truncated">Notifs</span> 
      <div id="wGp3JsZF23" />
   </a>
   </div>
</span>
<div id="wGp3JsZF9" /></div>
<div className="right_contents u-flex u-flex-align--center">
<div className="ask_bar">
<div className="Selector WithServerCallMessageMixin LookupBarSelector TypersearchESDuplicateQuestionSelector" tabIndex={-1} id="__w2_wGp3JsZF12_wrapper">
<div className="selector_input_interaction">
<input className="selector_input text" type="text" data-lpignore="true" autofocus="True" data-group="js-editable" placeholder="Search Quora" w2cid="wGp3JsZF12" id="__w2_wGp3JsZF12_input" />
<div className="selector_spinner hidden" id="__w2_wGp3JsZF12_spinner">
<div className="LoadingDots tiny">
<div className="dot first" />
   <div className="dot second" />
      <div className="dot third" />
      </div>
   </div>
</div>
<div className="selector_results_container" id="__w2_wGp3JsZF12_results_container">
<div className="lookup_bar_results_wrapper fade_out" id="__w2_wGp3JsZF12_results_wrapper">
<div className="results_wrapper">
   <div className="hidden resistance_wrapper server_message" id="__w2_wGp3JsZF12_server_message">
      <div className="fixit_title" id="__w2_wGp3JsZF12_server_message_title" />
         <span className="fixit_note" id="__w2_wGp3JsZF12_server_message_note" />
      </div>
      <div className="interstitials_and_results">
         <div className="hidden ask_interstitial" id="__w2_wGp3JsZF12_ask_mode_interstitial">
            <p className="ask_interstitial_content">
               <strong className="ask_interstitial_title" id="__w2_wGp3JsZF12_interstitial_title" />
               <span id="__w2_wGp3JsZF12_interstitial_text" />
            </p>
         </div>
         <div className="results" id="__w2_wGp3JsZF12_results" /></div>
      </div>
   </div>
   <div id="__w2_wGp3JsZF12_empty_input_prompt" /></div>
</div>
<div className="details_wrapper hidden" id="__w2_wGp3JsZF12_details_wrapper">
   <div className="editor_wrapper" id="__w2_wGp3JsZF26_editor_outer">
      <div className="Editor AskBarDetails edit_latex web" id="__w2_wGp3JsZF26_editor">
         <div data-group="js-editable" w2cid="wGp3JsZF26" id="__w2_wGp3JsZF26_doc">
            <div className="doc empty" contentEditable="true" data-kind="doc" placeholder="Enter Question Details (Optional)">
               <div className="section" data-type="plain" data-dir="LTR" data-indent={0} data-kind="section">
                  <div className="span" data-kind="span">
                     <div className="content"><br /></div>
                  </div>
               </div>
            </div>
         </div>
         <input type="file" accept=".jpg, .png, .jpeg, .gif, .bmp|images/*" multiple style={{display: 'none'}} data-group="js-editable" w2cid="wGp3JsZF26" id="__w2_wGp3JsZF26_file" />
         <div className="drop_zone hidden" id="__w2_wGp3JsZF26_drop_zone" />
            <div className="CharacterCounter fade_out" id="__w2_wGp3JsZF35_counter_wrapper">
               <div className="counter" id="__w2_wGp3JsZF35_counter">1000</div>
            </div>
            <div className="hidden" id="__w2_wGp3JsZF26_link_selector_wrapper">
               <div className="Selector LinkSelector" tabIndex={-1} id="__w2_wGp3JsZF36_wrapper">
                  <div className="link_selector_input">
                     <div className="selector_input_interaction">
                        <div className="CharacterCounter fade_out" id="__w2_wGp3JsZF37_counter_wrapper">
                           <div className="counter" id="__w2_wGp3JsZF37_counter">250</div>
                        </div>
                        <input className="selector_input text" type="text" defaultValue data-group="js-editable" placeholder="Search" w2cid="wGp3JsZF36" id="__w2_wGp3JsZF36_input" />
                        <div className="selector_spinner hidden" id="__w2_wGp3JsZF36_spinner">
                           <div className="LoadingDots tiny">
                              <div className="dot first" />
                                 <div className="dot second" />
                                    <div className="dot third" /></div>
                                 </div>
                              </div>
                           </div>
                           <div className="selector_results_container hidden" id="__w2_wGp3JsZF36_results_container">
                              <div className="selector_results_container_inner hidden" id="__w2_wGp3JsZF36_results" />
                                 <div id="__w2_wGp3JsZF36_empty_input_prompt" /></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <span id="wGp3JsZF13">
                     <div className="SiteHeaderNavItem MoreNavItem HoverMenu">
                        <div className="hover_menu hidden hover_menu_header show_nub" id="__w2_wGp3JsZF14_menu">
                           <div className="hover_menu_contents" id="__w2_wGp3JsZF14_menu_contents"> </div>
                        </div>
                        



                     







                        {!this.state.isHidden ?

                        <div className="hover_menu hover_menu_header show_nub" id="__w2_wWwY9iOu14_menu">
   <div className="hover_menu_contents" id="__w2_wWwY9iOu14_menu_contents">
      <div id="wsnWwGwm1">
         <div className="MoreHoverMenuContents SiteHeaderHoverMenuContents">
            <h3 className="hover_menu_title" />
            <ul className="main_menu">
               <li><a className="hover_menu_item" href="/profile/Bruce-Decker-12">Profile</a></li>
               <li><a className="hover_menu_item" href="/profile/Bruce-Decker-12/blogs">Blogs</a></li>
               <li><a className="hover_menu_item" href="#" id="__w2_wsnWwGwm2_messages_modal">Messages</a></li>
               <li><a className="hover_menu_item" href="/content">Your Content</a></li>
               <li><a className="hover_menu_item" href="/stats">Stats</a></li>
               <li>
                  <a className="hover_menu_item" href="/ads/create_account?medium=create_ad&source=dropdown_menu" target="_blank" rel="noopener">
                     Create Ad
                     <span className="ui_icon ui_icon_color--gray_light ui_icon_size--small ui_icon_outline--default" aria-hidden="true">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                           <g id="external_link" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5" />
                              <path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5" />
                           </g>
                        </svg>
                     </span>
                  </a>
               </li>
               <li><a className="hover_menu_item" href="/settings">Settings</a></li>
            </ul>
            <ul className="LegalNavLinks">
               <li className="feedback"><a href="https://help.quora.com/hc/en">Help</a><span className="bullet"> · </span></li>
               <li><a href="/about">About</a><span className="bullet"> · </span><a href="/careers">Careers</a><span className="bullet"> · </span><a href="/about/tos">Terms</a><span className="bullet"> · </span></li>
               <li><a href="/about/privacy">Privacy</a><span className="bullet"> · </span><a href="/about/acceptable_use">Acceptable Use</a><span className="bullet"> · </span></li>
               <li><a href="/business?medium=businesses&source=dropdown_footer">Businesses</a><span className="bullet"> · </span><a href="/settings/languages">Languages</a><span className="bullet"> · </span></li>
               <li />
               <li className="logout">
                 <Link className = "logout" to = "/" onClick = {this.LogoutButton}> <i className="fas fa-sign-out-alt"></i> Logout </Link>
               </li>
            </ul>
         </div>
      </div>
   </div>
</div>


: null }
















                        <div className="nav_item_link"  target id="__w2_wGp3JsZF14_link">
                           <span className="expanded">
                              <span className="photo_wrapper">
                                 <div id="wGp3JsZF27">
                                 <span className="photo_tooltip IdentityPhoto Photo HoverMenu" id="__w2_wGp3JsZF28_link">
                                    <img className="profile_photo_img" src = {default_image}  height={150} width={150} onClick = {this.onClick}/></span>
                                 </div>
                              </span>
                           </span>
                           <span className="truncated">
                              <span className="photo_wrapper">
                                 <div id="wGp3JsZF29">
                                    <span className="photo_tooltip IdentityPhoto Photo HoverMenu" id="__w2_wGp3JsZF30_link">
                                    <img className="profile_photo_img" src alt height={50} width={50} /></span>
                                 </div>
                              </span>
                           </span>
                           <div id="wGp3JsZF31" />
                        </div>
                        </div>
                  </span>
                  </div>
                  <div className="ask_wrapper"><a className="AskQuestionButton LookupBarAskQuestionModalButton" href="https://www.quora.com/#" id="__w2_wGp3JsZF15_button">Add Question or Link</a></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
        )


    }

}

const mapStateToProps = (state) => ({
   auth: state.auth
})


export default connect(mapStateToProps, { logout })(Navbar);