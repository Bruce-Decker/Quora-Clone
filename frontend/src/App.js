import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Answer from "./components/Answer/Answer";
import { activeUser } from './actions/authActions'
import jwt_decode from 'jwt-decode'

if (localStorage.token) {
  if (localStorage.getItem('token') == "undefined") {
    localStorage.removeItem('token')
  }
  activeUser(localStorage.token)
  const decoded = jwt_decode(localStorage.token)
  
    decoded.token = localStorage.getItem('token')
    store.dispatch(activeUser(decoded));
  
 
  const time_now = Date.now() / 1000;
  // if (decoded.exp < time_now) {
  //    store.dispatch(resetProfile())
  //    store.dispatch(logout())
     
  //    window.location.href = '/'
  // }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/answer" component={Answer} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
