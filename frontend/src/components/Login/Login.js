import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'

import './Login.css'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    onChange = (e) => {

        this.setState({[e.target.name]: e.target.value})
        //console.log(this.state.email)
        console.log(this.state.password)
    }

   
    render() {

      

        return (
            <div className = "web_page logged_out lang_en q_ltr logged_out_page_big_signup">
            <div id="__w2_modal_container_"><div className="modal_overlay hidden" id="__w2_modal_overlay_">
            <div className="modal_wrapper normal" id="__w2_modal_wrapper_" />
            </div>
            </div>
            <div className="ContentWrapper">
            <div id="__w2_wlw57v6U7_content">
            <div className="bg_container">
            <div className="bg_image" />
            </div>
            <div className="BaseSignupForm HomePageSignupForm continue_with_text">
            <div className="NetworkLogo">
            <a className="logo hidden" href="https://www.quora.com/">
            <span>Quora</span>
            </a>
            </div>
            <h2 className="NetworkLogoTagline tagline">A place to share knowledge and better understand the world</h2>
            <div className="container" id="__w2_wlw57v6U8_actionable">
            <div className="content_inner">
            <div className="signup_login">
            <div className="signup">
            <div id="__w2_wlw57v6U8_initial_signup_column">
            <div className="connect_buttons_row">
            <div><span data-clog-trigger="impression" data-clog-metadata="{&quot;action_log_target&quot;: {&quot;type&quot;: 43, &quot;hash&quot;: &quot;googleConnectButton|911sfjyAdgAMUheK3uC2MA==_1554443907605983&quot;}}" data-clog-event-type="ActionLogImpression" id="__w2_wlw57v6U14_actionable" data-clog-processed={1}><a className="google_button submit_button" href="https://www.quora.com/#" tabIndex={5} action_mousedown="SignupGoogleClick" action_stop_propagation="True" id="__w2_wlw57v6U14_google_connect_button"><span className="google_button_text">Continue with Google</span></a></span></div>
            <div><span data-clog-trigger="impression" data-clog-metadata="{&quot;action_log_target&quot;: {&quot;type&quot;: 43, &quot;hash&quot;: &quot;facebookConnectButton|911sfjyAdgAMUheK3uC2MA==_1554443907605983&quot;}}" data-clog-event-type="ActionLogImpression" id="__w2_wlw57v6U15_actionable" data-clog-processed={1}><a className="facebook_button submit_button" href="https://www.quora.com/#" tabIndex={6} action_mousedown="SignupFacebookClick" action_stop_propagation="True" id="__w2_wlw57v6U15_facebook_connect_button"><span className="facebook_button_text">Continue with Facebook</span></a></span></div></div><div id="__w2_wlw57v6U8_connect_explanation"><a className="signup_email_link" href="https://www.quora.com/#" tabIndex={8} id="__w2_wlw57v6U8_continue_with_email">Continue With Email</a><span className="tos_disclaimer">. <span className="light_gray TosDisclaimer">By signing up you indicate that you have read and agree to Quora's <a className="tos_link" href="https://www.quora.com/about/tos" nav_style="modal_present" target="_blank" rel="noopener">Terms of Service</a> and <a className="tos_link" href="https://www.quora.com/about/privacy" nav_style="modal_present" target="_blank" rel="noopener">Privacy Policy</a>.</span></span></div></div><div className="hidden" id="__w2_wlw57v6U8_toggled_signup_column"><h2>Sign Up</h2>
            <form method="post" id="__w2_wlw57v6U8_home_page_email_signup_form">
                <div className="w2_5"><div className="row">
                     <div className="EmailSignupForm"><div className="stacked_form e_col p1" id="__w2_wlw57v6U12_email_signup_form">
                       <div className="first_last_group">
                          <div className="form_row half">
                              <label>First Name</label>
                              <div className="input_wrapper">
                                 <input className="text" type="text" name="first_name" autoCapitalize="words" autoCorrect="off" defaultValue tabIndex={9} data-group="js-editable" w2cid="wlw57v6U12" id="__w2_wlw57v6U12_first_name" />
                              </div>
                              <div id="__w2_wlw57v6U23_validator">
                                 <div className="hidden invalid input_validation_error_text" id="__w2_wlw57v6U23_invalid_message" />
                                     <span className="hidden input_valid valid input_status" />
                                       <span className="hidden input_invalid invalid input_status" />
                                       <div className="hidden">Checking...</div>
                                       </div>
                                </div>
                        <div className="form_row half last_name">
                                   <label>Last Name</label>
                                      <div className="input_wrapper">
                                            <input className="text" type="text" name="last_name" autoCapitalize="words" autoCorrect="off" defaultValue tabIndex={9} data-group="js-editable" w2cid="wlw57v6U12" id="__w2_wlw57v6U12_last_name" />
                                             </div>
                                <div id="__w2_wlw57v6U24_validator">
                                      <div className="hidden invalid input_validation_error_text" id="__w2_wlw57v6U24_invalid_message" />
                                            <span className="hidden input_valid valid input_status" />
                                                  <span className="hidden input_invalid invalid input_status" />
                                                      <div className="hidden">Checking...</div>
                                      </div>
                                </div>
                                </div>
                                <div className="form_row">
                                     <label>Email</label>
                                     <div className="input_wrapper">
                                          <input className="text" type="text" name="email" tabIndex={10} data-group="js-editable" w2cid="wlw57v6U12" id="__w2_wlw57v6U12_email" /></div>
                                               <div id="__w2_wlw57v6U25_validator">
                                                    <div className="hidden invalid input_validation_error_text" id="__w2_wlw57v6U25_invalid_message" />
                                                        <span className="hidden input_valid valid input_status" />
                                                        <span className="hidden input_invalid invalid input_status" />
                                                    <div className="hidden">Checking...</div>
                                                    </div>
                                                    </div>
                                                    <div className="form_row"><label>Password</label>
                                                    <div className="input_wrapper">
                                                       <input className="text" type="password" name="password" tabIndex={11} data-group="js-editable" w2cid="wlw57v6U12" id="__w2_wlw57v6U12_password" /></div>
                                                           <div id="__w2_wlw57v6U26_validator"><div className="hidden invalid input_validation_error_text" id="__w2_wlw57v6U26_invalid_message" />
                                                               <span className="hidden input_valid valid input_status" />
                                                               <span className="hidden input_invalid invalid input_status" />
                                                               <div className="hidden">Checking...
                                                               </div>
                                                               </div>
                                                               </div>
                                                               <div className="form_row">
                                                                   <div className="captcha_container">
                                                                        <div className="CaptchaInput">
                                                                             <div className="hidden" id="__w2_wlw57v6U28_captcha_loading">
                                                                                  <div className="LoadingDots regular">
                                                                                       <div className="dot first" />
                                                                                            <div className="dot second" />
                                                                                                <div className="dot third" /></div>
                                                                                            </div>
                                                                        <div id="__w2_wlw57v6U28_captcha_area">
                                                                              <div id="__w2_wlw57v6U28_captcha">
                                                                                  <div style={{width: '304px', height: '78px'}}><div>
                                                                                        <iframe src="./Quora - A place to share knowledge and better understand the world_files/anchor.html" width={304} height={78} role="presentation" name="a-xz1rl2s1kwcy" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" />
                                                                                        </div>
                                                                                        <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}} defaultValue={""} />
                                                                                        </div>
                                                                                        </div>
                                                                                        </div>
                                                                                    <span id="__w2_wlw57v6U28_captcha_validation_text" />
                                                                                    </div>
                                                                                    </div>
                                                                                    </div>
                                                                                    </div>
                                                                                    </div>
                                                                                    <div className="row small">
                                                                                         <span className="light_gray TosDisclaimer">By clicking "Sign Up" you indicate that you have read and agree to Quora's 
                                                                                               <a className="tos_link" href="https://www.quora.com/about/tos" nav_style="modal_present" target="_blank" rel="noopener">Terms of Service</a> and 
                                                                                                  <a className="tos_link" href="https://www.quora.com/about/privacy" nav_style="modal_present" target="_blank" rel="noopener">Privacy Policy</a>.</span></div></div></div>
                                                                                                         <div className="hidden input_validation_error_text" id="__w2_wlw57v6U8_email_password_leak_error" /><div className="row"><div className="form_buttons" id="__w2_wlw57v6U8_create_account">
                                                                                                            <span className="light"><a className="cancel" href="https://www.quora.com/#" id="__w2_wlw57v6U8_cancel">Cancel</a>
                                                                                                              <input className="submit_button submit_button_disabled left" type="submit" defaultValue="Sign Up" disabled tabIndex={12} data-group="js-editable" w2cid="wlw57v6U8" id="__w2_wlw57v6U8_submit" />
                                                                                                            </span></div></div></form></div></div><div className="login">
                                                                                                                 <div id="wlw57v6U17">
                                                                                                                      <div className="LoggedOutHomeLogin InlineLogin" id="__w2_wlw57v6U18_logged_out_header_login">
                                                                                                                          <div className="regular_login">
                                                                                                                             <form className="inline_login_form" method="POST" id="__w2_wlw57v6U18_login_form">
                                                                                                                                  <div className="title login_title">Login</div>
                                                                                                                                  <div className="form_inputs">
                                                                                                                                       <div className="form_column">
                                                                                                                                           <input className="text header_login_text_box ignore_interaction" type="text" name="email" tabIndex={1} data-group="js-editable" placeholder="Email" w2cid="wlw57v6U18" id="__w2_wlw57v6U18_email" value = {this.state.email} onChange = {this.onChange}/></div>
                                                                                                                                                 <div className="form_column">
                                                                                                                                                     <input className="text header_login_text_box ignore_interaction" type="password" name="password" tabIndex={2} data-group="js-editable" placeholder="Password" w2cid="wlw57v6U18" id="__w2_wlw57v6U18_password" value = {this.state.password} onChange = {this.onChange}/></div>
                                                                                                                                                         <div className="form_column">
                                                                                                                                                             <span className="login_options">
                                                                                                                                                                 <a className="forgot_password" href="https://www.quora.com/#" id="__w2_wlw57v6U18_forgot_password_link">Forgot Password?</a>
                                                                                                                                                            </span>
                                                                                                  <input className="submit_button submit_button_disabled ignore_interaction" name = "email" type="submit" tabIndex={4} data-group="js-editable" w2cid="wlw57v6U18" id="__w2_wlw57v6U18_submit_button" value = "Login" onChange = {this.onChange}/>
                                                                                                       </div>
                                                                                                <div id="__w2_wlw57v6U18_errors">
                                                                                                     <div className="hidden input_validation_error_text" id="__w2_wlw57v6U18_email_not_confirmed_error">Please confirm your email address. 
                                                                                                          <a href="https://www.quora.com/#" id="__w2_wlw57v6U18_resend_confirmation">Resend Confirmation Link</a>
                                                                                                     </div>
                                                                                                <div className="hidden input_validation_error_text" id="__w2_wlw57v6U18_email_not_found_error">No account found for this email. Retry, or 
                                                                                                       <a href="https://www.quora.com/" id="__w2_wlw57v6U18_email_not_found_signup_link">Sign up for Quora.</a>
                                                                                                       </div>
                                                                                                       <div className="hidden input_validation_error_text" id="__w2_wlw57v6U18_incorrect_password_error">Incorrect password. 
                                                                                                            <a href="https://www.quora.com/#" id="__w2_wlw57v6U18_reset_password_link">Reset Password</a>
                                                                                                            </div>
                                                                                                     <div className="hidden input_validation_error_text" id="__w2_wlw57v6U18_email_password_leak_error" />
                                                                                                          </div>
                                                                                                        </div>
                                                                                    </form>
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        <div className="HomepageSignupNetworkRedirectLink" id="__w2_wlw57v6U20_link">New: 
                                                               <a className="new_network" href="https://nl.quora.com/" data-nid={13}>Dutch</a>,
                                                               <a className="new_network" href="https://da.quora.com/" data-nid={14}>Danish</a>, 
                                                               <a className="new_network" href="https://fi.quora.com/" data-nid={15}>Finnish</a>, 
                                                               <a className="new_network" href="https://no.quora.com/" data-nid={16}>Norwegian</a>, 
                                                               <a className="new_network" href="https://sv.quora.com/" data-nid={17}>Swedish</a>, 
                                                               <a className="new_network" href="https://mr.quora.com/" data-nid={18}>Marathi</a>, 
                                                               <a className="new_network" href="https://bn.quora.com/" data-nid={19}>Bengali</a>, and 
                                                               <a className="new_network" href="https://ta.quora.com/" data-nid={20}>Tamil</a>
                                                        </div>
                                                        <div className="FooterNav">
                                                            <ul className="nav_list">
                                                               <li className="about">
                                                                   <a href="https://www.quora.com/about">About</a>
                                                                </li>
                                                                <li className="languages">
                                                                  <a href="https://www.quora.com/about/languages">Languages</a>
                                                                </li>
                                                                <li className="careers">
                                                                    <a href="https://www.quora.com/careers">Careers</a>
                                                                </li>
                                                                <li className="business">
                                                                    <a href="https://www.quora.com/business">Businesses</a>
                                                                </li>
                                                                <li className="privacy">
                                                                    <a href="https://www.quora.com/about/privacy">Privacy</a>
                                                                </li>
                                                                <li className="tos">
                                                                    <a href="https://www.quora.com/about/tos">Terms
                                                                    </a></li><li className="feedback">
                                                                    <a href="https://www.quora.com/contact">Contact</a>
                                                                </li><li className="copyright">© Quora Inc. 2019
                                                                      </li>
                                                                      </ul>
                                                              </div>
                                                              </div>
                                                              </div></div></div>
                                                        <div id="wygV9Lno8" />
                                                            <div className="__live_spinner hidden" id="__w2_wygV9Lno15_loading">
                                                               <div className="__live_spinner_indicator" id="__w2_wygV9Lno15_spinner" />
                                                            </div>
                                                            <div className="PMsgContainer" id="__w2_wygV9Lno16_pmsg_container" />
                                                                <div id="wygV9Lno17" />
                                                                  <div id="wygV9Lno19" />
          </div>


       
        )

    }

}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);