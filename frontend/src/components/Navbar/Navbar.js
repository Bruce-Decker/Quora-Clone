import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Navbar.css'

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }
    
    onClick = () => {
        this.setState({
            isHidden: !this.state.isHidden
          })
    }
    render() {

        return (
            <div>
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
   <div className="user_asks_header"><span className="user_action"><span className="IdentityNameWithPhoto NameWithPhoto"><span id="wdgZpkyi14"><span className="photo_tooltip PhotoSpan HoverMenu Photo IdentityPhoto" id="__w2_wdgZpkyi15_link"><a href="https://www.quora.com/profile/Bruce-Decker-12" id="__w2_wdgZpkyi18_link"><img className="profile_photo_img" src="./Home - Quora_files/main-thumb-782622776-50-izcdaymwbtomzguzorfwyoknxfqoqixc.jpeg" alt=" " height={50} width={50} /></a></span></span><span id="wdgZpkyi16"><span id="__w2_wdgZpkyi17_link"><a className="user" href="https://www.quora.com/profile/Bruce-Decker-12" action_mousedown="UserLinkClickthrough" id="__w2_wdgZpkyi17_name_link"></a></span></span></span> asked</span></div>
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
            <div className="user_asks_header"><span className="user_action"><span className="IdentityNameWithPhoto NameWithPhoto"><span id="wdgZpkyi30"><span className="photo_tooltip PhotoSpan HoverMenu Photo IdentityPhoto" id="__w2_wdgZpkyi31_link"><a href="https://www.quora.com/profile/Bruce-Decker-12" id="__w2_wdgZpkyi34_link"><img className="profile_photo_img" src="./Home - Quora_files/main-thumb-782622776-50-izcdaymwbtomzguzorfwyoknxfqoqixc.jpeg" alt="" height={50} width={50} /></a></span></span><span id="wdgZpkyi32"><span id="__w2_wdgZpkyi33_link"><a className="user" href="https://www.quora.com/profile/Bruce-Decker-12" action_mousedown="UserLinkClickthrough" id="__w2_wdgZpkyi33_name_link"></a></span></span></span> shared</span></div>
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
      <a className="nav_item_link selected" href="https://www.quora.com/" target id="__w2_wGp3JsZF2_link">
         <div className="u-margin-right--xs u-flex-inline">
            <span className="ui_icon ui_icon_color--red ui_icon_size--regular ui_icon_outline--filled" aria-hidden="true">
               <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
   <a className="nav_item_link" href="https://www.quora.com/answer" target id="__w2_wGp3JsZF4_link">
      <div className="u-margin-right--xs u-flex-inline">
         <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
      <a className="nav_item_link" href="https://www.quora.com/spaces" target id="__w2_wGp3JsZF6_link">
         <div className="u-margin-right--xs u-flex-inline">
            <span className="ui_icon ui_icon_color--gray ui_icon_size--regular ui_icon_outline--default" aria-hidden="true">
               <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
                  <form action="/login/logout_POST" target="_top" method="POST" id="__w2_wsnWwGwm6_logout_form"><input type="hidden" name="formkey" defaultValue="3a0d82d20c785c0597bd466055bf173d" /><input type="hidden" name="next" defaultValue="https://www.quora.com/topic/Mathematics" data-group="js-editable" w2cid="wsnWwGwm6" /><a className="logout" href="#" id="__w2_wsnWwGwm6_logout_link">Logout</a></form>
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
                                    <img className="profile_photo_img" src alt height={50} width={50} onClick = {this.onClick}/></span>
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


export default Navbar;