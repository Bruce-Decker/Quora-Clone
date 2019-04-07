import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authActions'
import { Link } from 'react-router-dom';
import './Register.css'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
               
            this.props.history.push('/dashboard')
        }
         if (nextProps.errors) {
             this.setState({errors: nextProps.errors})
         }
     }

     onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        console.log("sdffds")
        e.preventDefault()
        const newUser = {
            name: this.state.first_name + " " + this.state.last_name, 
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(newUser)
   
       this.props.registerUser(newUser, this.props.history)
       this.state.errors = null
       //  axios.post('/createBasicUser', newUser)
       //     .then(result => console.log(result.data))
       //     .catch(err => this.setState({errors: err.response.data}))
     }

     render() {
      const { errors } = this.state;

      const { user } = this.props.auth;
        return (
            <div className = "web_page logged_out lang_en q_ltr logged_out_page_big_signup">
            <div id="__w2_modal_container_">
            <div className="modal_overlay hidden" id="__w2_modal_overlay_">
               <div className="modal_wrapper normal" id="__w2_modal_wrapper_" /></div>
            </div>
            <div className="ContentWrapper">
            <div id="__w2_wTICtECy7_content">
            <div className="bg_container">
            <div className="bg_image" /></div>
            <div className="BaseSignupForm HomePageSignupForm continue_with_text">
            <div className="NetworkLogo"><a className="logo hidden" href="https://www.quora.com/"><span>Quora</span></a></div>
            <h2 className="NetworkLogoTagline tagline">A place to share knowledge and better understand the world</h2>
            <div className="container" id="__w2_wTICtECy8_actionable">
            <div className="content_inner">
            <div className="signup_login">
            <div className="signup">
            <div id="__w2_wTICtECy8_initial_signup_column" className="hidden">
               <div className="connect_buttons_row">
                  <div><span data-clog-trigger="impression" data-clog-metadata="{&quot;action_log_target&quot;: {&quot;type&quot;: 43, &quot;hash&quot;: &quot;googleConnectButton|911sfjyAdgAMUheK3uC2MA==_1554599139682013&quot;}}" data-clog-event-type="ActionLogImpression" id="__w2_wTICtECy14_actionable" data-clog-processed={1}><a className="google_button submit_button" href="https://www.quora.com/#" tabIndex={5} action_mousedown="SignupGoogleClick" action_stop_propagation="True" id="__w2_wTICtECy14_google_connect_button"><span className="google_button_text">Continue with Google</span></a></span></div>
                  <div><span data-clog-trigger="impression" data-clog-metadata="{&quot;action_log_target&quot;: {&quot;type&quot;: 43, &quot;hash&quot;: &quot;facebookConnectButton|911sfjyAdgAMUheK3uC2MA==_1554599139682013&quot;}}" data-clog-event-type="ActionLogImpression" id="__w2_wTICtECy15_actionable" data-clog-processed={1}><a className="facebook_button submit_button" href="https://www.quora.com/#" tabIndex={6} action_mousedown="SignupFacebookClick" action_stop_propagation="True" id="__w2_wTICtECy15_facebook_connect_button"><span className="facebook_button_text">Continue with Facebook</span></a></span></div>
               </div>
               <div id="__w2_wTICtECy8_connect_explanation"><a className="signup_email_link" href="https://www.quora.com/#" tabIndex={8} id="__w2_wTICtECy8_continue_with_email">Continue With Email</a><span className="tos_disclaimer">. <span className="light_gray TosDisclaimer">By signing up you indicate that you have read and agree to Quora's <a className="tos_link" href="https://www.quora.com/about/tos" nav_style="modal_present" target="_blank" rel="noopener">Terms of Service</a> and <a className="tos_link" href="https://www.quora.com/about/privacy" nav_style="modal_present" target="_blank" rel="noopener">Privacy Policy</a>.</span></span></div>
            </div>
            <div className id="__w2_wTICtECy8_toggled_signup_column">
            <h2>Sign Up</h2>
            <form onSubmit = {this.onSubmit} id="__w2_wTICtECy8_home_page_email_signup_form">
               <div className="w2_5">
                  <div className="row">
                     <div className="EmailSignupForm">
                        <div className="stacked_form e_col p1" id="__w2_wTICtECy12_email_signup_form">
                           <div className="first_last_group">
                              <div className="form_row half">
                                 <label>First Name</label>
                                 <div className="input_wrapper">
                                 <input className="text" type="text" name="first_name" autoCapitalize="words" autoCorrect="off"  tabIndex={9} data-group="js-editable" w2cid="wTICtECy12" id="__w2_wTICtECy12_first_name" onChange = {this.onChange}/></div>
                                 <div className = "inputError">
                                            {errors.name }
                                    </div>
                                 <div id="__w2_wTICtECy23_validator">
                                    <div className="hidden invalid input_validation_error_text" id="__w2_wTICtECy23_invalid_message" />
                                       <span className="hidden input_valid valid input_status" /><span className="hidden input_invalid invalid input_status" />
                                       <div className="hidden">Checking...</div>
                                    </div>
                                 </div>
                                 <div className="form_row half last_name">
                                    <label>Last Name</label>
                                    <div className="input_wrapper"><input className="text" type="text" name="last_name" autoCapitalize="words" autoCorrect="off" tabIndex={9} data-group="js-editable" w2cid="wTICtECy12" id="__w2_wTICtECy12_last_name" onChange = {this.onChange}/></div>
                                    <div id="__w2_wTICtECy24_validator">
                                       <div className="hidden invalid input_validation_error_text" id="__w2_wTICtECy24_invalid_message" />
                                          <span className="hidden input_valid valid input_status" /><span className="hidden input_invalid invalid input_status" />
                                          <div className="hidden">Checking...</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="form_row">
                                    <label>Email</label>
                                    <div className="input_wrapper"><input className="text" type="text" name="email" tabIndex={10} data-group="js-editable" w2cid="wTICtECy12" id="__w2_wTICtECy12_email" onChange = {this.onChange}/></div>
                                    <div className = "inputError">
                                            {errors.email }
                                    </div>
                                    <div id="__w2_wTICtECy25_validator">
                                       <div className="hidden invalid input_validation_error_text" id="__w2_wTICtECy25_invalid_message" />
                                          <span className="hidden input_valid valid input_status" /><span className="hidden input_invalid invalid input_status" />
                                          <div className="hidden">Checking...</div>
                                       </div>
                                    </div>
                                    <div className="form_row">
                                       <label>Password</label>
                                       <div className="input_wrapper"><input className="text" type="password" name="password" tabIndex={11} data-group="js-editable" w2cid="wTICtECy12" id="__w2_wTICtECy12_password" onChange = {this.onChange}/></div>
                                       <div className = "inputError">
                                                {errors.password }
                                       </div>   
                                       <div id="__w2_wTICtECy26_validator">
                                          <div className="hidden invalid input_validation_error_text" id="__w2_wTICtECy26_invalid_message" />
                                             <span className="hidden input_valid valid input_status" /><span className="hidden input_invalid invalid input_status" />
                                             <div className="hidden">Checking...</div>
                                          </div>
                                       </div>
                                       <div className="form_row">
                                       <label> Enter Password Again </label>
                                       <div className="input_wrapper"><input className="text" type="password" name="password2" tabIndex={11} data-group="js-editable" w2cid="wTICtECy12" id="__w2_wTICtECy12_password" onChange = {this.onChange}/></div>
                                       <div className = "inputError">
                                                {errors.password2 }
                                       </div> 
                                       <div id="__w2_wTICtECy26_validator">
                                          <div className="hidden invalid input_validation_error_text" id="__w2_wTICtECy26_invalid_message" />
                                             <span className="hidden input_valid valid input_status" /><span className="hidden input_invalid invalid input_status" />
                                             <div className="hidden">Checking...</div>
                                          </div>
                                       </div>
                                       <div className="form_row">
                                          <div className="captcha_container">
                                             <div className="CaptchaInput">
                                                <div className="hidden" id="__w2_wTICtECy28_captcha_loading">
                                                   <div className="LoadingDots regular">
                                                      <div className="dot first" />
                                                         <div className="dot second" />
                                                            <div className="dot third" /></div>
                                                         </div>
                                                         <div id="__w2_wTICtECy28_captcha_area">
                                                            <div id="__w2_wTICtECy28_captcha">
                                                               <div style={{width: '304px', height: '78px'}}>
                                                               <div><iframe src="./Quora - A place to share knowledge and better understand the world_files/anchor.html" width={304} height={78} role="presentation" name="a-5uavf5ndssl0" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" /></div>
                                                               <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}} defaultValue={""} />
                                                            </div>
                                                         </div>
                                                      </div>
                                                      <span id="__w2_wTICtECy28_captcha_validation_text" />
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="row small"><span className="light_gray TosDisclaimer">By clicking "Sign Up" you indicate that you have read and agree to Quora's <a className="tos_link" href="https://www.quora.com/about/tos" nav_style="modal_present" target="_blank" rel="noopener">Terms of Service</a> and <a className="tos_link" href="https://www.quora.com/about/privacy" nav_style="modal_present" target="_blank" rel="noopener">Privacy Policy</a>.</span></div>
                                    </div>
                                 </div>
                                 <div className="hidden input_validation_error_text" id="__w2_wTICtECy8_email_password_leak_error" />
                                    <div className="row">
                                       <div className="form_buttons" id="__w2_wTICtECy8_create_account"><span className="light"><Link to = "/" className="cancel"  id="__w2_wTICtECy8_cancel">Cancel</Link>
                                        
                                        <input className="submit_button ignore_interaction" type="submit" defaultValue="Login" tabIndex={4} data-group="js-editable" w2cid="wTICtECy18" id="__w2_wTICtECy18_submit_button" />
                                        </span></div>
                                    </div>
            </form>
            </div></div><div className="login"><div id="wTICtECy17"><div className="InlineLogin LoggedOutHomeLogin" id="__w2_wTICtECy18_logged_out_header_login"><div className="regular_login"><form className="inline_login_form" id="__w2_wTICtECy18_login_form"><div className="title login_title">Login</div><div className="form_inputs"><div className="form_column"><input className="text header_login_text_box ignore_interaction" type="text" name="email" tabIndex={1} data-group="js-editable" placeholder="Email" w2cid="wTICtECy18" id="__w2_wTICtECy18_email" /></div><div className="form_column"><input className="text header_login_text_box ignore_interaction" type="password" name="password" tabIndex={2} data-group="js-editable" placeholder="Password" w2cid="wTICtECy18" id="__w2_wTICtECy18_password" /></div><div className="form_column"><span className="login_options"><a className="forgot_password" href="https://www.quora.com/#" id="__w2_wTICtECy18_forgot_password_link">Forgot Password?</a></span><input className="submit_button ignore_interaction" type="submit" defaultValue="Login" tabIndex={4} data-group="js-editable" w2cid="wTICtECy18" id="__w2_wTICtECy18_submit_button" /></div><div id="__w2_wTICtECy18_errors"><div className="hidden input_validation_error_text" id="__w2_wTICtECy18_email_not_confirmed_error">Please confirm your email address. <a href="https://www.quora.com/#" id="__w2_wTICtECy18_resend_confirmation">Resend Confirmation Link</a></div><div className="hidden input_validation_error_text" id="__w2_wTICtECy18_email_not_found_error">No account found for this email. Retry, or <a href="https://www.quora.com/" id="__w2_wTICtECy18_email_not_found_signup_link">Sign up for Quora.</a></div><div className="hidden input_validation_error_text" id="__w2_wTICtECy18_incorrect_password_error">Incorrect password. <a href="https://www.quora.com/#" id="__w2_wTICtECy18_reset_password_link">Reset Password</a></div><div className="hidden input_validation_error_text" id="__w2_wTICtECy18_email_password_leak_error" /></div></div></form></div></div></div></div></div></div><div className="HomepageSignupNetworkRedirectLink" id="__w2_wTICtECy20_link">New: <a className="new_network" href="https://nl.quora.com/" data-nid={13}>Dutch</a>, <a className="new_network" href="https://da.quora.com/" data-nid={14}>Danish</a>, <a className="new_network" href="https://fi.quora.com/" data-nid={15}>Finnish</a>, <a className="new_network" href="https://no.quora.com/" data-nid={16}>Norwegian</a>, <a className="new_network" href="https://sv.quora.com/" data-nid={17}>Swedish</a>, <a className="new_network" href="https://mr.quora.com/" data-nid={18}>Marathi</a>, <a className="new_network" href="https://bn.quora.com/" data-nid={19}>Bengali</a>, and <a className="new_network" href="https://ta.quora.com/" data-nid={20}>Tamil</a></div><div className="FooterNav"><ul className="nav_list"><li className="about"><a href="https://www.quora.com/about">About</a></li><li className="languages"><a href="https://www.quora.com/about/languages">Languages</a></li><li className="careers"><a href="https://www.quora.com/careers">Careers</a></li><li className="business"><a href="https://www.quora.com/business">Businesses</a></li><li className="privacy"><a href="https://www.quora.com/about/privacy">Privacy</a></li><li className="tos"><a href="https://www.quora.com/about/tos">Terms</a></li><li className="feedback"><a href="https://www.quora.com/contact">Contact</a></li><li className="copyright">© Quora Inc. 2019</li></ul></div></div></div></div></div>
            <div id="wf4F12ZE7" />
            <div className="__live_spinner hidden" id="__w2_wf4F12ZE14_loading">
            <div className="__live_spinner_indicator" id="__w2_wf4F12ZE14_spinner" /></div>
            <div className="PMsgContainer" id="__w2_wf4F12ZE15_pmsg_container" />
               <div id="wf4F12ZE16" />
                  <div id="wf4F12ZE18" />
                     <div id="fb-root" className=" fb_reset">
                        <div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}>
                        <div />
                           <div><iframe name="fb_xdm_frame_https" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" id="fb_xdm_frame_https" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabIndex={-1} src="./Quora - A place to share knowledge and better understand the world_files/d_vbiawPdxB.html" style={{border: 'none'}} /></div>
                        </div>
                     </div>
                     <iframe id="ssIFrame_google" sandbox="allow-scripts allow-same-origin" aria-hidden="true" frame-border={0} src="./Quora - A place to share knowledge and better understand the world_files/iframe.html" style={{position: 'absolute', width: '1px', height: '1px', left: '-9999px', top: '-9999px', right: '-9999px', bottom: '-9999px', display: 'none'}} /><div style={{backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(204, 204, 204)', boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px', position: 'absolute', transition: 'visibility 0s linear 0.3s, opacity 0.3s linear 0s', opacity: 0, visibility: 'hidden', zIndex: 2000000000, left: '0px', top: '-10000px'}}><div style={{width: '100%', height: '100%', position: 'fixed', top: '0px', left: '0px', zIndex: 2000000000, backgroundColor: 'rgb(255, 255, 255)', opacity: '0.05'}} /><div className="g-recaptcha-bubble-arrow" style={{border: '11px solid transparent', width: '0px', height: '0px', position: 'absolute', pointerEvents: 'none', marginTop: '-11px', zIndex: 2000000000}} /><div className="g-recaptcha-bubble-arrow" style={{border: '10px solid transparent', width: '0px', height: '0px', position: 'absolute', pointerEvents: 'none', marginTop: '-10px', zIndex: 2000000000}} /><div style={{zIndex: 2000000000, position: 'relative'}}><iframe title="recaptcha challenge" src="./Quora - A place to share knowledge and better understand the world_files/bframe.html" name="c-5uavf5ndssl0" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" style={{width: '100%', height: '100%'}} />
                  </div>
               </div>
            </div>
        )


     }

}



const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
    
export default connect(mapStateToProps, { registerUser })(Register); 