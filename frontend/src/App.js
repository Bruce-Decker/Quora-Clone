import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Dashboard from './components/Dashboard/Dashboard'



class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/dashboard" component={Dashboard} />
            </div>
           

            </BrowserRouter>
         </Provider>
    );
  }
}

export default App;
